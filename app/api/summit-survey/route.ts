import { NextRequest, NextResponse } from "next/server";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import {
  ATTEND_NEXT,
  CONTENT_RATINGS,
  EVENT_LENGTHS,
  EXPECTATIONS,
  LOGISTICS_RATINGS,
  MONTHS,
} from "@/app/summit-survey-26/survey-options";

// Responses land in the Neon Postgres database connected through the Vercel
// Marketplace integration, which sets DATABASE_URL automatically.
// View them in the Neon console's SQL editor: SELECT * FROM summit_survey_26;

let tableReady: Promise<unknown> | null = null;

function ensureTable(sql: NeonQueryFunction<false, false>) {
  tableReady ??= sql`
    CREATE TABLE IF NOT EXISTS summit_survey_26 (
      id                 SERIAL PRIMARY KEY,
      submitted_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
      overall_rating     SMALLINT NOT NULL,
      nps                SMALLINT,
      expectations       TEXT,
      content_ratings    JSONB NOT NULL DEFAULT '{}',
      topics_next_year   TEXT,
      logistics_ratings  JSONB NOT NULL DEFAULT '{}',
      event_length       TEXT,
      location           TEXT,
      preferred_month    TEXT,
      month_other        TEXT,
      attend_next        TEXT,
      highlight          TEXT,
      improvement        TEXT,
      name               TEXT,
      company            TEXT,
      email              TEXT
    )
  `.catch((err) => {
    tableReady = null;
    throw err;
  });
  return tableReady;
}

const text = (v: unknown, max: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

const oneOf = (v: unknown, allowed: readonly string[]) => (typeof v === "string" && allowed.includes(v) ? v : null);

const intInRange = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isInteger(v) && v >= min && v <= max ? v : null;

function ratings(v: unknown, rows: readonly { key: string }[]) {
  const out: Record<string, number> = {};
  if (v && typeof v === "object") {
    for (const { key } of rows) {
      const n = intInRange((v as Record<string, unknown>)[key], 1, 5);
      if (n !== null) out[key] = n;
    }
  }
  return out;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. Pretend success so bots move on.
  if (text(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const overallRating = intInRange(body.overall_rating, 1, 5);
  if (overallRating === null) {
    return NextResponse.json({ error: "Please give the summit an overall rating." }, { status: 400 });
  }

  const email = text(body.email, 320);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please check your email address." }, { status: 400 });
  }

  const preferredMonth = oneOf(body.preferred_month, MONTHS);

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json({ error: "Server is missing DATABASE_URL" }, { status: 500 });
  }

  try {
    const sql = neon(databaseUrl);
    await ensureTable(sql);
    await sql`
      INSERT INTO summit_survey_26 (
        overall_rating, nps, expectations, content_ratings, topics_next_year, logistics_ratings,
        event_length, location, preferred_month, month_other, attend_next, highlight, improvement,
        name, company, email
      ) VALUES (
        ${overallRating},
        ${intInRange(body.nps, 0, 10)},
        ${oneOf(body.expectations, EXPECTATIONS)},
        ${JSON.stringify(ratings(body.content_ratings, CONTENT_RATINGS))},
        ${text(body.topics_next_year, 2000)},
        ${JSON.stringify(ratings(body.logistics_ratings, LOGISTICS_RATINGS))},
        ${oneOf(body.event_length, EVENT_LENGTHS)},
        ${text(body.location, 200)},
        ${preferredMonth},
        ${preferredMonth ? null : text(body.month_other, 200)},
        ${oneOf(body.attend_next, ATTEND_NEXT)},
        ${text(body.highlight, 2000)},
        ${text(body.improvement, 2000)},
        ${text(body.name, 200)},
        ${text(body.company, 200)},
        ${email}
      )
    `;
  } catch (err) {
    console.error("summit-survey insert failed", err);
    return NextResponse.json({ error: "We couldn't save your feedback. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
