"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import "../customer-summit-26/summit.css";
import {
  ATTEND_NEXT,
  CONTENT_RATINGS,
  EVENT_LENGTHS,
  EXPECTATIONS,
  LOGISTICS_RATINGS,
  MONTHS,
} from "./survey-options";

const hawksearchLogo = "/customer-summit/hawksearch-logo.png";

type Answers = {
  overall_rating: number | null;
  nps: number | null;
  expectations: string;
  content_ratings: Record<string, number>;
  topics_next_year: string;
  logistics_ratings: Record<string, number>;
  event_length: string;
  location: string;
  preferred_month: string;
  month_other: string;
  attend_next: string;
  highlight: string;
  improvement: string;
  name: string;
  company: string;
  email: string;
  website: string; // honeypot — hidden from people, bots tend to fill it
};

const EMPTY_ANSWERS: Answers = {
  overall_rating: null,
  nps: null,
  expectations: "",
  content_ratings: {},
  topics_next_year: "",
  logistics_ratings: {},
  event_length: "",
  location: "",
  preferred_month: "",
  month_other: "",
  attend_next: "",
  highlight: "",
  improvement: "",
  name: "",
  company: "",
  email: "",
  website: "",
};

const pillBase =
  "rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sand)]";
const pillOff = "border-white/20 bg-white/5 text-white/85 hover:border-white/40 hover:bg-white/10";
const pillOn = "border-transparent bg-gradient-sunset text-[#1a0a28] shadow-glow";
const fieldClass =
  "w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-[15px] text-white placeholder:text-white/50 outline-none focus:border-[var(--sand)]";

function Pill({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className={`${pillBase} ${selected ? pillOn : pillOff}`}>
      {children}
    </button>
  );
}

function Question({ number, label, hint, children }: { number: number; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-4 text-lg font-semibold text-white">
        <span className="mr-2 text-sand">{number}.</span>
        {label}
      </legend>
      {hint && <p className="-mt-2 mb-4 text-sm text-white/60">{hint}</p>}
      {children}
    </fieldset>
  );
}

function SingleChoice({ options, value, onChange }: { options: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Pill key={option} selected={value === option} onClick={() => onChange(value === option ? "" : option)}>
          {option}
        </Pill>
      ))}
    </div>
  );
}

function RatingGrid({
  rows,
  values,
  onChange,
}: {
  rows: readonly { key: string; label: string }[];
  values: Record<string, number>;
  onChange: (key: string, v: number) => void;
}) {
  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.key} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white/85">{row.label}</span>
          <div className="flex gap-2" role="radiogroup" aria-label={row.label}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={values[row.key] === n}
                onClick={() => onChange(row.key, n)}
                className={`h-10 w-10 rounded-full border text-sm font-semibold transition ${values[row.key] === n ? pillOn : pillOff}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SummitSurveyPage() {
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((a) => ({ ...a, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answers.overall_rating === null) {
      setError("Please give the summit an overall rating (question 1).");
      document.getElementById("q-overall")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/summit-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "Something went wrong.");
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="summit-wrapper">
      <main className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dusk opacity-90" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial-glow)" }} />

        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-night/40 backdrop-blur-md border-b border-white/10">
          <a href="https://www.hawksearch.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hawksearchLogo} alt="HawkSearch" className="h-8 w-auto drop-shadow" />
          </a>
        </nav>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32">
          {status === "done" ? (
            <div className="glass rounded-3xl p-8 sm:p-12 text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">Feedback received</div>
              <h1 className="text-4xl sm:text-5xl mb-6">
                Thank you! <span className="text-gradient-sunset">See you at the next summit.</span>
              </h1>
              <p className="text-lg text-foreground/90">
                Your answers help us make next year&apos;s Customer Summit even better.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">Customer Summit &apos;26 · Scottsdale</div>
                <h1 className="text-4xl sm:text-6xl mb-6">
                  How did we do? <span className="text-gradient-sunset">Tell us everything.</span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto">
                  Thanks for joining us! We hope you had a great time in Scottsdale. We&apos;d love to hear how we did, and
                  how we can make future events even better.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl p-6 sm:p-10 space-y-8"
                style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <h2 className="text-2xl text-sand">The summit overall</h2>

                <div id="q-overall">
                  <Question number={1} label="Overall, how would you rate Summit '26?">
                    <div className="flex gap-1" role="radiogroup" aria-label="Overall rating">
                      {[1, 2, 3, 4, 5].map((n) => {
                        const filled = (answers.overall_rating ?? 0) >= n;
                        return (
                          <button
                            key={n}
                            type="button"
                            role="radio"
                            aria-checked={answers.overall_rating === n}
                            aria-label={`${n} star${n > 1 ? "s" : ""}`}
                            onClick={() => set("overall_rating", n)}
                            className="p-1 transition hover:scale-110"
                          >
                            <Star
                              className="h-9 w-9"
                              strokeWidth={1.5}
                              style={{ color: "var(--sand)", fill: filled ? "var(--sand)" : "transparent" }}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </Question>
                </div>

                <Question number={2} label="How likely are you to recommend the HawkSearch Summit to a colleague?">
                  <div className="grid grid-cols-6 sm:grid-cols-11 gap-2" role="radiogroup" aria-label="Likelihood to recommend">
                    {Array.from({ length: 11 }, (_, n) => (
                      <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={answers.nps === n}
                        onClick={() => set("nps", n)}
                        className={`h-10 rounded-full border text-sm font-semibold transition ${answers.nps === n ? pillOn : pillOff}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs uppercase tracking-wider text-white/50">
                    <span>Not likely</span>
                    <span>Extremely likely</span>
                  </div>
                </Question>

                <Question number={3} label="Did the summit meet your expectations?">
                  <SingleChoice options={EXPECTATIONS} value={answers.expectations} onChange={(v) => set("expectations", v)} />
                </Question>

                <h2 className="text-2xl text-sand border-t border-white/10 pt-8">Content</h2>

                <Question number={4} label="How would you rate each of these?" hint="1 = poor, 5 = excellent.">
                  <RatingGrid
                    rows={CONTENT_RATINGS}
                    values={answers.content_ratings}
                    onChange={(k, v) => set("content_ratings", { ...answers.content_ratings, [k]: v })}
                  />
                </Question>

                <Question number={5} label="What topics would you like covered at the next summit?">
                  <textarea
                    rows={3}
                    maxLength={2000}
                    value={answers.topics_next_year}
                    onChange={(e) => set("topics_next_year", e.target.value)}
                    className={fieldClass}
                    placeholder="e.g. agentic commerce, merchandising, analytics…"
                  />
                </Question>

                <h2 className="text-2xl text-sand border-t border-white/10 pt-8">Logistics</h2>

                <Question number={6} label="How would you rate each of these?" hint="1 = poor, 5 = excellent.">
                  <RatingGrid
                    rows={LOGISTICS_RATINGS}
                    values={answers.logistics_ratings}
                    onChange={(k, v) => set("logistics_ratings", { ...answers.logistics_ratings, [k]: v })}
                  />
                </Question>

                <Question number={7} label="Was the event length right?">
                  <SingleChoice options={EVENT_LENGTHS} value={answers.event_length} onChange={(v) => set("event_length", v)} />
                </Question>

                <h2 className="text-2xl text-sand border-t border-white/10 pt-8">The next summit</h2>

                <Question number={8} label="Where should we host the next summit?">
                  <input
                    type="text"
                    maxLength={200}
                    value={answers.location}
                    onChange={(e) => set("location", e.target.value)}
                    className={`${fieldClass} rounded-full`}
                    placeholder="City, region or venue"
                  />
                </Question>

                <Question number={9} label="What month would you prefer?">
                  <SingleChoice
                    options={MONTHS}
                    value={answers.preferred_month}
                    onChange={(v) => setAnswers((a) => ({ ...a, preferred_month: v, month_other: "" }))}
                  />
                  <input
                    type="text"
                    maxLength={200}
                    value={answers.month_other}
                    onChange={(e) => setAnswers((a) => ({ ...a, month_other: e.target.value, preferred_month: "" }))}
                    className={`${fieldClass} mt-3 rounded-full`}
                    placeholder="Something else"
                  />
                </Question>

                <Question number={10} label="How likely are you to attend next year?">
                  <SingleChoice options={ATTEND_NEXT} value={answers.attend_next} onChange={(v) => set("attend_next", v)} />
                </Question>

                <h2 className="text-2xl text-sand border-t border-white/10 pt-8">Final thoughts</h2>

                <Question number={11} label="What was the highlight, and what's one thing we should improve?">
                  <div className="space-y-3">
                    <textarea
                      rows={3}
                      maxLength={2000}
                      value={answers.highlight}
                      onChange={(e) => set("highlight", e.target.value)}
                      className={fieldClass}
                      placeholder="The highlight for me was…"
                    />
                    <textarea
                      rows={3}
                      maxLength={2000}
                      value={answers.improvement}
                      onChange={(e) => set("improvement", e.target.value)}
                      className={fieldClass}
                      placeholder="Next time, you could improve…"
                    />
                  </div>
                </Question>

                <Question
                  number={12}
                  label="Your details (optional)"
                  hint="Leave blank to stay anonymous."
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      autoComplete="name"
                      maxLength={200}
                      value={answers.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={`${fieldClass} rounded-full`}
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      autoComplete="organization"
                      maxLength={200}
                      value={answers.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={`${fieldClass} rounded-full`}
                      placeholder="Company"
                    />
                    <input
                      type="email"
                      autoComplete="email"
                      maxLength={320}
                      value={answers.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={`${fieldClass} rounded-full sm:col-span-2`}
                      placeholder="Email"
                    />
                  </div>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={answers.website}
                    onChange={(e) => set("website", e.target.value)}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                </Question>

                {error && (
                  <p role="alert" className="rounded-2xl border border-[#e05a3a]/40 bg-[#e05a3a]/10 px-5 py-3 text-sm text-[#ffb3a1]">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-gradient-sunset py-4 text-base font-bold text-[#1a0a28] shadow-glow transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Submit feedback"}
                </button>
              </form>
            </>
          )}
        </div>

        <footer className="relative border-t border-border py-10 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <a href="https://www.hawksearch.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">hawksearch.com</a>
            <div>© 2026 HawkSearch. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
