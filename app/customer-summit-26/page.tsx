"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Lightbulb, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./summit.css";

const desertHero = "/customer-summit/desert-hero.jpg";
const resortImg = "/customer-summit/resort.jpg";
const resortSpa = "/customer-summit/resort-spa.jpg";
const resortSuite = "/customer-summit/resort-suite.jpg";
const resortDining = "/customer-summit/resort-dining.jpg";
const summitEnergy = "/customer-summit/summit-energy.jpg";
const hawksearchLogo = "/customer-summit/hawksearch-logo.png";
const ianHeller = "/customer-summit/ian-heller.jpg";

const EVENT_DATE = new Date("2026-10-21T09:00:00-07:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-3 py-2 sm:px-4 sm:py-3 text-center min-w-[64px] sm:min-w-[80px]">
      <div className="font-display text-2xl sm:text-4xl text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1.5">
        {label}
      </div>
    </div>
  );
}

function PrimaryCTA({ children, href = "#register" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 font-semibold text-primary-foreground shadow-glow animate-pulse-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
    >
      <span>{children}</span>
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

const SUMMIT_FORM_CSS = `
  body { background: transparent !important; margin: 0; padding: 0; font-family: Inter, system-ui, sans-serif; }
  fieldset { border: none !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
  .hs-form-field { margin-bottom: 12px !important; }
  label {
    display: block !important;
    color: rgba(255,255,255,0.55) !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    margin-bottom: 6px !important;
  }
  .hs-form-required { color: rgba(255,255,255,0.3) !important; }
  .hs-error-msgs label { color: #e05a3a !important; font-size: 12px !important; text-transform: none !important; letter-spacing: 0 !important; margin-top: 4px !important; margin-bottom: 0 !important; }
  input[type="text"], input[type="email"], input[type="tel"], select, textarea {
    width: 100% !important;
    background: rgba(255,255,255,0.1) !important;
    border: 1px solid rgba(255,255,255,0.25) !important;
    border-radius: 9999px !important;
    padding: 12px 20px !important;
    color: #ffffff !important;
    font-size: 15px !important;
    outline: none !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    appearance: none !important;
  }
  input[type="text"]::-webkit-input-placeholder { color: rgba(255,255,255,0.55) !important; }
  input[type="email"]::-webkit-input-placeholder { color: rgba(255,255,255,0.55) !important; }
  input[type="tel"]::-webkit-input-placeholder  { color: rgba(255,255,255,0.55) !important; }
  input[type="text"]::-moz-placeholder  { color: rgba(255,255,255,0.55) !important; opacity: 1 !important; }
  input[type="email"]::-moz-placeholder { color: rgba(255,255,255,0.55) !important; opacity: 1 !important; }
  input[type="tel"]::-moz-placeholder   { color: rgba(255,255,255,0.55) !important; opacity: 1 !important; }
  input[type="text"]::placeholder, input[type="email"]::placeholder, input[type="tel"]::placeholder {
    color: rgba(255,255,255,0.55) !important; opacity: 1 !important;
  }
  input:focus, select:focus, textarea:focus {
    border-color: rgba(220,120,40,0.8) !important; box-shadow: none !important; outline: none !important;
  }
  .hs-button, input[type="submit"] {
    width: 100% !important; border: none !important; border-radius: 9999px !important;
    background: linear-gradient(135deg, #c0392b 0%, #e07020 50%, #e8a030 100%) !important;
    padding: 16px !important; font-size: 16px !important; font-weight: 700 !important;
    color: #1a0a28 !important; cursor: pointer !important; margin-top: 8px !important; display: block !important;
  }
  .hs-button:hover, input[type="submit"]:hover { opacity: 0.9 !important; }
  .submitted-message { color: #ffffff; text-align: center; padding: 32px 0; font-size: 18px; }
`;

function HubSpotForm() {
  useEffect(() => {
    const onFormReady = ($form: any) => {
      const doc: Document = $form[0]?.ownerDocument;
      if (!doc) return;

      const style = doc.createElement("style");
      style.textContent = SUMMIT_FORM_CSS;
      doc.head.appendChild(style);
    };

    const create = () => {
      (window as any).hbspt?.forms.create({
        portalId: "3495651",
        formId: "3f91e014-736a-442b-a917-39184f2464ee",
        region: "na1",
        sfdcCampaignId: "701Nt00000gVVljIAG",
        target: "#hs-form-target",
        onFormReady,
      });
    };

    const existing = document.getElementById("hs-form-script");
    if (existing) {
      create();
      return;
    }
    const script = document.createElement("script");
    script.id = "hs-form-script";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.onload = create;
    document.head.appendChild(script);
  }, []);

  return <div id="hs-form-target" />;
}

function GhostCTA({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-8 py-4 font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function HotelSlideshow({ slides }: { slides: { src: string; alt: string }[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] bg-card">
      {slides.map((s, i) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading="lazy"
          width={1280}
          height={896}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-night/80 to-transparent flex items-center justify-between">
        <div className="text-white/90 text-sm font-medium drop-shadow">{slides[idx].alt}</div>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SummitPage() {
  const countdown = useCountdown(EVENT_DATE);

  return (
    <div className="summit-wrapper">
      <main className="relative overflow-hidden">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={desertHero}
            alt="Saguaro cacti silhouetted against a vibrant Scottsdale desert sunset"
            width={1920}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/20 to-night/80" />

          {/* Sticky Nav */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-night/40 backdrop-blur-md border-b border-white/10">
            <a href="#top" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hawksearchLogo} alt="HawkSearch" className="h-8 w-auto drop-shadow" />
            </a>
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: "Agenda", href: "#agenda" },
                { label: "Speakers", href: "#speakers" },
                { label: "Hotel", href: "#hotel" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#register"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-5 py-2.5 text-sm font-semibold text-white border border-white/30 hover:bg-white/25 transition"
              >
                Register
              </a>
            </div>
          </nav>

          {/* Centered hero content */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 max-w-5xl mx-auto w-full pb-20 text-center">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white mb-8">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sunset animate-pulse" />
                October 21 – 23 · Scottsdale, AZ
              </div>
              <h1 className="font-display text-white text-4xl sm:text-6xl lg:text-8xl leading-[0.95] mb-6 drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
                HawkSearch<br />Customer Summit <span className="text-gradient-sunset">&apos;26</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                3 days to transform eCommerce AI search — keynotes, workshops, roadmap reveals, and the desert nights you&apos;ll be talking about all year.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                {countdown ? (
                  <>
                    <CountdownCell value={countdown.days} label="Days" />
                    <CountdownCell value={countdown.hours} label="Hours" />
                    <CountdownCell value={countdown.minutes} label="Min" />
                    <CountdownCell value={countdown.seconds} label="Sec" />
                  </>
                ) : (
                  <>
                    <CountdownCell value={0} label="Days" />
                    <CountdownCell value={0} label="Hours" />
                    <CountdownCell value={0} label="Min" />
                    <CountdownCell value={0} label="Sec" />
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryCTA href="#register">Register Now</PrimaryCTA>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs uppercase tracking-[0.3em] animate-bounce">
            ↓ Scroll
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="relative bg-night/60" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {[
              { v: "3", l: "Days of summit" },
              { v: "20+", l: "Speakers & experts" },
              { v: "150+", l: "eCommerce leaders" },
            ].map((s, i) => (
              <div key={s.l} className="px-6 py-10 text-center" style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.1)" : undefined, ...(i > 0 ? { ["@media (min-width: 768px)" as any]: { borderTop: "none", borderLeft: "1px solid rgba(255,255,255,0.1)" } } : {}) }}>
                <div className="font-display text-5xl text-gradient-sunset">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CUSTOMER LOGO MARQUEE ===== */}
        {/* Hidden until all logos are ready */}
        <section className="hidden py-12 overflow-hidden bg-night/40" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Last year&apos;s attendees
          </div>
          <div className="relative flex overflow-hidden">
            <div className="flex shrink-0 marquee items-center gap-16 pr-16">
              {[
                { src: "/customer-summit/CED-Logo.png", alt: "CED" },
                { src: "/customer-summit/DIB_Retail_Logo.png", alt: "Do it Best" },
                { src: "/customer-summit/HP-Logo.png", alt: "HP" },
                { src: "/customer-summit/True_Value_logo.svg.png", alt: "True Value" },
                { src: "/customer-summit/otc-1-logo-png-transparent.png", alt: "OTC" },
                { src: "/customer-summit/CED-Logo.png", alt: "CED" },
                { src: "/customer-summit/DIB_Retail_Logo.png", alt: "Do it Best" },
                { src: "/customer-summit/HP-Logo.png", alt: "HP" },
                { src: "/customer-summit/True_Value_logo.svg.png", alt: "True Value" },
                { src: "/customer-summit/otc-1-logo-png-transparent.png", alt: "OTC" },
              ].map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-90 hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY ATTEND ===== */}
        <section className="relative py-12 sm:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-8 sm:mb-16">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">Why you&apos;ll be there</div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl">
                  Four reasons.<br />
                  <span className="text-gradient-sunset">Zero excuses.</span>
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground text-lg">
                Built for HawkSearch customers ready to push their search, merchandising, and AI
                strategies further than ever.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { t: "Grow", d: "Master HawkSearch end-to-end and the latest AI advancements driving conversion.", Icon: TrendingUp },
                { t: "Connect", d: "Trade notes with the sharpest minds in eCommerce search, in person.", Icon: Users },
                { t: "Learn", d: "Insider sessions on what's next — straight from product, strategy and R&D.", Icon: Lightbulb },
                { t: "Enjoy", d: "Championship golf, full-service spa, sunset receptions, and Old Town Scottsdale nights.", Icon: Sparkles },
              ].map((c) => (
                <div
                  key={c.t}
                  className="group relative rounded-3xl bg-card p-8 border border-border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-sunset opacity-0 group-hover:opacity-30 blur-3xl transition-opacity" />
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-sunset/10 border border-sunset/20 text-sunset">
                    <c.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-3">{c.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AGENDA ===== */}
        <section id="agenda" className="relative py-12 sm:py-24 px-6 lg:px-12 bg-night/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">Three days, no filler</div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-16">The <span className="text-gradient-sunset">agenda</span></h2>

            <Accordion type="single" collapsible defaultValue="day-02" className="space-y-3">
              {[
                {
                  value: "day-01",
                  day: "Day 01",
                  date: "Wednesday, Oct 21",
                  preview: "Opening Cocktail Gathering · Dinner",
                  sessions: [
                    { time: "3:00 – 5:00 PM", title: "Opening Cocktail Gathering", tag: "Social" },
                    { time: "5:00 – 7:00 PM", title: "Dinner", tag: "Dining" },
                  ],
                },
                {
                  value: "day-02",
                  day: "Day 02",
                  date: "Thursday, Oct 22",
                  preview: "Keynote · Training · Roadmap · Bar Crawl",
                  sessions: [
                    { time: "9:00 AM", title: "Networking Breakfast", tag: "Networking" },
                    { time: "9:00 – 9:30 AM", title: "Opening Keynote", tag: "Keynote" },
                    { time: "9:30 – 10:00 AM", title: "Customer Case Study", tag: "Case Study" },
                    { time: "10:00 – 10:30 AM", title: "HawkSearch Customer Presentation: MRC Global", tag: "Presentation" },
                    { time: "10:30 – 11:00 AM", title: "Customer Panel Discussion: UPS Store & More", tag: "Panel" },
                    { time: "11:00 AM – 12:00 PM", title: "Ian Heller — Distribution Strategy Group", tag: "Keynote" },
                    { time: "12:00 – 1:00 PM", title: "Lunch", tag: "Break" },
                    { time: "1:00 – 1:30 PM", title: "Title Sponsor Presentation", tag: "Sponsor" },
                    { time: "1:30 – 2:00 PM", title: "Partner Panel Discussion", tag: "Panel" },
                    { time: "2:00 – 2:30 PM", title: "HawkSearch Training: Agentic Prompt Engineering", tag: "Training" },
                    { time: "2:30 – 3:00 PM", title: "HawkSearch Customer Presentation: Caterpillar / Perkins Engines", tag: "Presentation" },
                    { time: "3:00 – 3:30 PM", title: "Networking Break With Sponsors", tag: "Networking" },
                    { time: "3:30 – 4:00 PM", title: "HawkSearch Roadmap", tag: "Roadmap" },
                    { time: "4:00 – 5:00 PM", title: "Break", tag: "Break" },
                    { time: "5:30 – 7:30 PM", title: "Dinner & Drinks", tag: "Social" },
                    { time: "8:00 – 10:00 PM", title: "Bar Crawl", tag: "Social" },
                  ],
                },
                {
                  value: "day-03",
                  day: "Day 03",
                  date: "Friday, Oct 23",
                  preview: "Training · Roundtable · Golf Outing",
                  sessions: [
                    { time: "8:00 – 9:00 AM", title: "Networking Breakfast", tag: "Networking" },
                    { time: "9:00 – 9:30 AM", title: "HawkSearch Trivia", tag: "Social" },
                    { time: "9:30 – 10:30 AM", title: "Hands-On Training Session 1 — Topic TBA", tag: "Training" },
                    { time: "9:30 – 10:30 AM", title: "Hands-On Training Session 2 — Topic TBA", tag: "Training" },
                    { time: "10:30 – 11:00 AM", title: "HawkSearch Customer Presentation: TBA", tag: "Presentation" },
                    { time: "11:00 – 11:30 AM", title: "Break (Coffee & Snacks)", tag: "Break" },
                    { time: "11:30 AM – 12:00 PM", title: "Customer Case Study", tag: "Case Study" },
                    { time: "12:00 – 1:00 PM", title: "Roundtable Takeaways", tag: "Session" },
                    { time: "1:00 – 2:00 PM", title: "Poolside Closing Party & Lunch", tag: "Social" },
                    { time: "2:00 – 5:00 PM", title: "Golf Outing", tag: "Social" },
                  ],
                },
              ].map((dayBlock) => (
                <AccordionItem
                  key={dayBlock.value}
                  value={dayBlock.value}
                  className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-5 text-left">
                      <div className="font-display text-3xl text-gradient-sunset shrink-0">{dayBlock.day}</div>
                      <div>
                        <div className="font-semibold text-base">{dayBlock.date}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{dayBlock.preview}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="space-y-2 pt-2">
                      {dayBlock.sessions.map((session, i) => {
                        const isBreak = session.tag === "Break";
                        const isSocial = ["Social", "Dining", "Networking"].includes(session.tag);
                        return (
                          <div
                            key={i}
                            className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl px-4 py-3 border transition-colors ${
                              isBreak ? "border-border/40 opacity-50" : "bg-white/5 border-border/60"
                            }`}
                          >
                            <div className="text-xs text-muted-foreground tabular-nums shrink-0 w-44">{session.time}</div>
                            <div className="flex-1 text-sm font-medium">{session.title}</div>
                            <div className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full shrink-0 ${
                              isSocial ? "bg-sunset/20 text-sunset" :
                              session.tag === "Keynote" || session.tag === "Roadmap" ? "bg-gradient-sunset text-primary-foreground" :
                              session.tag === "Training" ? "bg-saguaro/20 text-saguaro" :
                              "bg-white/10 text-sand"
                            }`}>
                              {session.tag}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== MID-PAGE CTA ===== */}
        <section className="relative px-6 lg:px-12 py-8 sm:py-16">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-sunset p-7 sm:p-14 text-center relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-night/10" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">Seats are limited</div>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">Ready to join us in Scottsdale?</h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Lock in your spot for three days of keynotes, training, and desert nights you won&apos;t forget.
              </p>
              <PrimaryCTA href="#register">Register Now</PrimaryCTA>
            </div>
          </div>
        </section>

        {/* ===== SPEAKERS ===== */}
        <section id="speakers" className="relative py-12 sm:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8 sm:mb-16">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">On stage</div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl">Featured <span className="text-gradient-sunset">speakers</span></h2>
              </div>
            </div>

            {/* Featured speaker — Ian Heller */}
            <div className="mb-16 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-night/60 p-8 sm:p-12">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-sunset opacity-20 blur-3xl" />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div className="inline-block text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-gradient-sunset text-primary-foreground mb-5 font-semibold">
                    ★ Featured Speaker
                  </div>
                  <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl mb-3">Ian Heller</h3>
                  <p className="text-base sm:text-xl text-sand mb-6">Chief Strategy Officer, Distribution Strategy Group</p>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-sunset mb-2 font-semibold">Session</div>
                  <h4 className="font-display text-2xl sm:text-3xl leading-snug mb-4">
                    Your Website Is Bigger Than You Think: Attribution, Disruption, and the ROI Case Your Leadership Will Actually Believe
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Ian Heller — Chief Strategy Officer of Distribution Strategy Group and a four-time VP of
                    Marketing in distribution — unveils an attribution method that consistently surfaces 4–12x
                    more revenue than the shopping cart alone, why the growth of Home Depot, Amazon, QXO,
                    Sonepar, and Grainger makes closing the capabilities gap urgent, and how to set marketing
                    goals — and earn the investment — that your leadership will actually believe.
                  </p>
                </div>
                <div className="lg:col-span-4 order-1 lg:order-2">
                  <div className="aspect-square max-w-[240px] mx-auto lg:ml-auto lg:mr-0 rounded-2xl relative overflow-hidden shadow-glow ring-1 ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ianHeller} alt="Ian Heller, Chief Strategy Officer at Distribution Strategy Group" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                { n: "Ari Kahn", r: "President & CEO", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/649407a6c32a3c2b9fcec6ee_Ari%20K.webp" },
                { n: "John Murcott", r: "EVP Product & Strategy", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/649407a6f29ef61227e133e3_John%20M.webp" },
                { n: "Charles Serrini", r: "VP of Services", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10f7b4cda32634b3067f2_Charles%20Serrini.webp" },
                { n: "Stephanie Brudvik", r: "Senior Business Analyst", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10f681a0f58008dab6126_Stephanie%20Brudvik.webp" },
                { n: "Jeremy LaDuque", r: "SVP Product Marketing", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6646032435e9e84beebe3691_T02DCTZ9F-U0G9AASQ7-9cc3d5b45a03-512.webp" },
                { n: "Kyle Mitzner", r: "VP Customer Success", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10ea4f2ad7fc0355f4a30_pic-kyle.webp" },
                { n: "Matt Taglich", r: "Customer Success Director", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/681e037e8ddf308baf2f8a59_Matt%20Taglich.webp" },
                { n: "Megan Winter", r: "Customer Success Director", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/67cab9355c72084908783eb2_4a4cd7f4d84dad117e963d7b9c758961_Megan%20Winter.webp" },
                { n: "Carl Prizzi", r: "EVP of Revenue", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/657849d04d352eccf206edc1_carl-prizzi.webp" },
                { n: "+ More", r: "Announced soon", img: "" },
              ].map((s) => (
                <div key={s.n} className="group">
                  <div className="aspect-square rounded-2xl bg-gradient-sunset relative overflow-hidden flex items-center justify-center font-display text-5xl text-primary-foreground transition-transform group-hover:scale-[1.02]">
                    {s.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.img} alt={s.n} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-night/30 group-hover:bg-night/10 transition-colors" />
                        <span className="relative">★</span>
                      </>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold">{s.n}</div>
                    <div className="text-sm text-muted-foreground">{s.r}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXPERIENCE STRIP ===== */}
        <section className="relative">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={summitEnergy} alt="Energetic crowd at HawkSearch summit" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
            </div>
            <div className="relative bg-card p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">Last year, in the room</div>
              <h2 className="text-3xl sm:text-5xl mb-6">Summit &apos;25 <span className="text-gradient-sunset">was unforgettable.</span></h2>
              <p className="text-muted-foreground text-lg mb-8">
                150+ leaders. Standing-room sessions. Roadmap reveals that changed roadmaps.
                A rooftop reception that stretched until midnight. We&apos;re turning it up for &apos;26.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { v: "98%", l: "Would attend again" },
                  { v: "4.9★", l: "Avg session rating" },
                  { v: "60+", l: "Brands represented" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl text-gradient-sunset">{s.v}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOTEL ===== */}
        <section id="hotel" className="relative py-12 sm:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <HotelSlideshow
              slides={[
                { src: resortImg, alt: "Pool deck at sunset" },
                { src: resortSpa, alt: "Spa courtyard with palms" },
                { src: resortSuite, alt: "Suite with mountain view" },
                { src: resortDining, alt: "Outdoor dining patio at dusk" },
              ]}
            />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">Where you&apos;ll stay</div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-6">Scottsdale Resort & Spa</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Curio Collection by Hilton — a refined desert escape blending Southwest soul with modern luxury.
                Spacious meeting venues, full-service spa, championship golf, and Old Town minutes away.
              </p>
              <p className="text-muted-foreground mb-8">
                Already registered? Check your inbox — your confirmation includes the discounted group rate.
              </p>
              <GhostCTA href="#register">Reserve my room block</GhostCTA>
            </div>
          </div>
        </section>

        {/* ===== SPONSORS MARQUEE ===== */}
        {/* Hidden until partner logos are ready */}
        <section className="hidden py-16 border-y border-border bg-night/40 overflow-hidden">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Powered by partners pushing commerce forward
          </div>
          <div className="relative flex overflow-hidden">
            <div className="flex shrink-0 marquee gap-16 pr-16">
              {["XNGAGE", "Shopware", "Groove Commerce", "Pimberly", "Znode", "oBundle", "Luminos Labs", "RDA Digital", "Commerce.com", "Cronix", "Americaneagle.com",
                "XNGAGE", "Shopware", "Groove Commerce", "Pimberly", "Znode", "oBundle", "Luminos Labs", "RDA Digital", "Commerce.com", "Cronix", "Americaneagle.com"].map((p, i) => (
                <span key={i} className="font-display text-2xl text-muted-foreground/70 whitespace-nowrap">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONVINCE YOUR BOSS ===== */}
        <section className="relative px-6 lg:px-12 py-10 sm:py-20">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-14 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-sunset opacity-10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">For your manager</div>
                <h2 className="font-display text-3xl sm:text-5xl mb-4">Need a little help convincing your boss?</h2>
                <p className="text-muted-foreground text-lg">
                  Download a letter to help you show how beneficial it is for you to attend.
                </p>
              </div>
              <a
                href="https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/696f86d8ed1ad6d6ea776fe8_HawkSearch%20Convince%20Your%20Boss%20Letter%202026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition whitespace-nowrap"
              >
                Download letter →
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="relative py-12 sm:py-24 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4 text-center">Got questions?</div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-8 sm:mb-16 text-center">Frequently <span className="text-gradient-sunset">Asked</span></h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What's the cost to attend?",
                  a: "Tickets are $200 per person. Hotel rooms at the Scottsdale Resort & Spa are available at $279 per night plus taxes and fees.",
                },
                {
                  q: "Will there be time for fun?",
                  a: "Absolutely! We have exciting activities planned including golf, poolside happy hours, and an Old Town Scottsdale crawl.",
                },
                {
                  q: "Will I receive product training?",
                  a: "Yes! The summit includes hands-on HawkSearch training sessions designed to help you get more out of the platform and stay ahead of what's coming next.",
                },
                {
                  q: "Will I get to meet other HawkSearch customers?",
                  a: "That's one of the best parts — connect with peers, share strategies, and build relationships with eCommerce leaders from across the industry.",
                },
                {
                  q: "Who should attend?",
                  a: "The summit is designed for HawkSearch customers including marketers, merchandisers, developers, and eCommerce leaders who want to learn, connect, and influence the product roadmap.",
                },
                {
                  q: "How do I register?",
                  a: "Click the Register Now button to secure your spot. Space is limited so we recommend registering early!",
                },
                {
                  q: "Want to start planning your trip?",
                  a: (
                    <>
                      Visit Scottsdale&apos;s{" "}
                      <a
                        href="https://www.experiencescottsdale.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sunset underline underline-offset-4 hover:text-sunset/80 transition"
                      >
                        official travel site
                      </a>{" "}
                      to discover the best of the area.
                    </>
                  ),
                },
              ].map((item) => (
                <AccordionItem
                  key={item.q}
                  value={item.q}
                  className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== REGISTER ===== */}
        <section id="register" className="relative py-16 sm:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dusk opacity-90" />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial-glow)" }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">Limited seats · group hotel rate ends soon</div>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl mb-8">
              See you in the<br />
              <span className="text-gradient-sunset">desert.</span>
            </h2>
            <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Lock in your spot for HawkSearch Customer Summit &apos;26.
              October 21–23 · Scottsdale, Arizona.
            </p>
            <div className="rounded-3xl p-6 sm:p-10 text-left max-w-2xl mx-auto" style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <HubSpotForm />
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-border py-10 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="font-display text-foreground">hawksearch · summit &apos;26</div>
            <div>© 2026 HawkSearch. Scottsdale, AZ — Oct 21–23.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
