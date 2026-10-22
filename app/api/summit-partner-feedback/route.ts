import { NextRequest, NextResponse } from "next/server";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { CONVERSATION_COUNTS, SPONSORSHIP_RATINGS } from "@/app/summit-26-partner-feedback/survey-options";

// Responses land in the same Neon database as the attendee survey (DATABASE_URL,
// set by the Vercel Marketplace integration), in their own table.
// View them in the Neon console's SQL editor: SELECT * FROM summit_26_partner_feedback;

let tableReady: Promise<unknown> | null = null;

function ensureTable(sql: NeonQueryFunction<false, false>) {
  tableReady ??= sql`
    CREATE TABLE IF NOT EXISTS summit_26_partner_feedback (
      id                   SERIAL PRIMARY KEY,
      submitted_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
      overall_rating       SMALLINT NOT NULL,
      sponsorship_ratings  JSONB NOT NULL DEFAULT '{}',
      conversation_count   TEXT,
      most_valuable        TEXT,
      next_year_value      TEXT,
      improvement          TEXT,
      name                 TEXT,
      company              TEXT NOT NULL,
      email                TEXT
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
    return NextResponse.json({ error: "Please rate your overall sponsorship experience." }, { status: 400 });
  }

  const company = text(body.company, 200);
  if (!company) {
    return NextResponse.json({ error: "Please tell us your company name." }, { status: 400 });
  }

  const email = text(body.email, 320);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please check your email address." }, { status: 400 });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json({ error: "Server is missing DATABASE_URL" }, { status: 500 });
  }

  try {
    const sql = neon(databaseUrl);
    await ensureTable(sql);
    await sql`
      INSERT INTO summit_26_partner_feedback (
        overall_rating, sponsorship_ratings, conversation_count, most_valuable,
        next_year_value, improvement, name, company, email
      ) VALUES (
        ${overallRating},
        ${JSON.stringify(ratings(body.sponsorship_ratings, SPONSORSHIP_RATINGS))},
        ${oneOf(body.conversation_count, CONVERSATION_COUNTS)},
        ${text(body.most_valuable, 2000)},
        ${text(body.next_year_value, 2000)},
        ${text(body.improvement, 2000)},
        ${text(body.name, 200)},
        ${company},
        ${email}
      )
    `;
  } catch (err) {
    console.error("summit-partner-feedback insert failed", err);
    return NextResponse.json({ error: "We couldn't save your feedback. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
