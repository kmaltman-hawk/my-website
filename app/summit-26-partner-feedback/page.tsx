"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import "../customer-summit-26/summit.css";
import { CONVERSATION_COUNTS, SPONSORSHIP_RATINGS } from "./survey-options";

const hawksearchLogo = "/customer-summit/hawksearch-logo.png";

type Answers = {
  overall_rating: number | null;
  sponsorship_ratings: Record<string, number>;
  conversation_count: string;
  most_valuable: string;
  next_year_value: string;
  improvement: string;
  name: string;
  company: string;
  email: string;
  website: string; // honeypot — hidden from people, bots tend to fill it
};

const EMPTY_ANSWERS: Answers = {
  overall_rating: null,
  sponsorship_ratings: {},
  conversation_count: "",
  most_valuable: "",
  next_year_value: "",
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

export default function PartnerFeedbackPage() {
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((a) => ({ ...a, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (answers.overall_rating === null) {
      setError("Please rate your overall sponsorship experience (question 1).");
      document.getElementById("q-overall")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!answers.company.trim()) {
      setError("Please tell us your company name (question 7).");
      document.getElementById("q-company")?.focus();
      return;
    }
    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/summit-partner-feedback", {
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
                Thank you! <span className="text-gradient-sunset">We appreciate your partnership.</span>
              </h1>
              <p className="text-lg text-foreground/90">
                Your feedback helps us make sponsoring the Customer Summit even more valuable.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">Customer Summit &apos;26 · Partner Feedback</div>
                <h1 className="text-4xl sm:text-6xl mb-6">
                  Thank you for <span className="text-gradient-sunset">sponsoring.</span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto">
                  We couldn&apos;t have done Customer Summit &apos;26 without you. We&apos;d love to hear how it went for
                  you, and how we can make future partnerships even more valuable.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl p-6 sm:p-10 space-y-8"
                style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <h2 className="text-2xl text-sand">Your sponsorship</h2>

                <div id="q-overall">
                  <Question number={1} label="Overall, how satisfied were you with sponsoring Summit '26?">
                    <div className="flex gap-1" role="radiogroup" aria-label="Overall satisfaction">
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

                <Question number={2} label="How would you rate each of these?" hint="1 = poor, 5 = excellent.">
                  <RatingGrid
                    rows={SPONSORSHIP_RATINGS}
                    values={answers.sponsorship_ratings}
                    onChange={(k, v) => set("sponsorship_ratings", { ...answers.sponsorship_ratings, [k]: v })}
                  />
                </Question>

                <Question number={3} label="About how many meaningful conversations did you have?">
                  <div className="flex flex-wrap gap-2">
                    {CONVERSATION_COUNTS.map((option) => (
                      <Pill
                        key={option}
                        selected={answers.conversation_count === option}
                        onClick={() => set("conversation_count", answers.conversation_count === option ? "" : option)}
                      >
                        {option}
                      </Pill>
                    ))}
                  </div>
                </Question>

                <Question number={4} label="What was most valuable about your sponsorship?">
                  <textarea
                    rows={3}
                    maxLength={2000}
                    value={answers.most_valuable}
                    onChange={(e) => set("most_valuable", e.target.value)}
                    className={fieldClass}
                    placeholder="The most valuable part for us was…"
                  />
                </Question>

                <Question number={5} label="What would make sponsoring next year more valuable?">
                  <textarea
                    rows={3}
                    maxLength={2000}
                    value={answers.next_year_value}
                    onChange={(e) => set("next_year_value", e.target.value)}
                    className={fieldClass}
                    placeholder="Next year, it would help if…"
                  />
                </Question>

                <h2 className="text-2xl text-sand border-t border-white/10 pt-8">Final thoughts</h2>

                <Question number={6} label="What's one thing we should improve?">
                  <textarea
                    rows={3}
                    maxLength={2000}
                    value={answers.improvement}
                    onChange={(e) => set("improvement", e.target.value)}
                    className={fieldClass}
                    placeholder="Next time, you could improve…"
                  />
                </Question>

                <Question number={7} label="Your details" hint="Company is required; name and email are optional.">
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
                      id="q-company"
                      type="text"
                      autoComplete="organization"
                      maxLength={200}
                      required
                      value={answers.company}
                      onChange={(e) => set("company", e.target.value)}
                      className={`${fieldClass} rounded-full`}
                      placeholder="Company *"
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
