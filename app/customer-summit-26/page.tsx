"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Lightbulb, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./summit.css";

const desertHero = "/customer-summit/desert-hero.jpg";
const summitTitle = "/customer-summit/summit-title.png";
const resortImg = "/customer-summit/resort.jpg";
const resortSpa = "/customer-summit/resort-spa.jpg";
const resortSuite = "/customer-summit/resort-suite.jpg";
const resortDining = "/customer-summit/resort-dining.jpg";
const summitEnergy = "/customer-summit/summit-reception.jpg";
const hawksearchLogo = "/customer-summit/hawksearch-logo.png";

const EVENT_DATE = new Date("2026-10-21T09:00:00-07:00");
const WEBINAR_URL = "https://www.hawksearch.com/webinar/what-to-expect-hawksearch-customer-summit-2026";

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
      className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 font-bold text-white shadow-[0_0_40px_-5px_oklch(0.73_0.26_348/0.7)] transition-all hover:scale-[1.03] hover:shadow-[0_0_55px_-5px_oklch(0.73_0.26_348/0.9)] active:scale-[0.98]"
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
    background: linear-gradient(180deg, #f0519e 0%, #f07040 55%, #ffb070 100%) !important;
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

const FEATURED_SPEAKERS = [
  {
    name: "Ian Heller",
    title: "Chief Strategy Officer, Distribution Strategy Group",
    img: "/customer-summit/ian-heller.jpg",
    imgAlt: "Ian Heller, Chief Strategy Officer at Distribution Strategy Group",
    sessionTitle: "Your Website Is Bigger Than You Think: Attribution, Disruption, and the ROI Case Your Leadership Will Actually Believe",
    sessionDesc: "Ian Heller — Chief Strategy Officer of Distribution Strategy Group and a four-time VP of Marketing in distribution — unveils an attribution method that consistently surfaces 4–12x more revenue than the shopping cart alone, why the growth of Home Depot, Amazon, QXO, Sonepar, and Grainger makes closing the capabilities gap urgent, and how to set marketing goals — and earn the investment — that your leadership will actually believe.",
  },
  {
    name: "Jameel Dharsee",
    title: "Sr. Director of eCommerce, MRC Global",
    img: "/customer-summit/speaker-jameel-dharsee.jpg",
    imgAlt: "Jameel Dharsee, Sr. Director of eCommerce at MRC Global",
    sessionTitle: "The Storefront That Knows Everything: HawkSearch as Your ERP Bridge",
    sessionDesc: "MRC Global did a massive ERP overhaul, and the one source of truth across all of them is actually HawkSearch. Now their internal sales team uses the website to find products, they can see inventory & prices status across all branches and now the website is the internal sales tool.",
  },
];

function FeaturedSpeakerCarousel() {
  const [idx, setIdx] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = FEATURED_SPEAKERS.length;
  const PEEK = 160;
  const GAP = 20;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setCardWidth(el.clientWidth - PEEK);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = (i: number) => {
    setIdx(i);
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: i * (cardWidth + GAP), behavior: "smooth" });
  };

  return (
    <div className={`mb-16 transition-opacity duration-300 ${cardWidth ? "opacity-100" : "opacity-0"}`}>
      <div
        ref={trackRef}
        className="carousel-track flex overflow-x-scroll"
        style={{ gap: GAP, scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
      >
        {FEATURED_SPEAKERS.map((s) => (
          <div
            key={s.name}
            style={{ width: cardWidth, minWidth: cardWidth, flexShrink: 0, scrollSnapAlign: "start" }}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-night/60 p-8 sm:p-12"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-sunset opacity-20 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 order-2 lg:order-1">
                <div className="inline-block text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-gradient-sunset text-primary-foreground mb-5 font-semibold">
                  ★ Featured Speaker
                </div>
                <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl mb-3">{s.name}</h3>
                <p className="text-base sm:text-xl text-sand mb-6">{s.title}</p>
                <div className="text-[10px] uppercase tracking-[0.25em] text-sunset mb-2 font-semibold">Session</div>
                <h4 className="font-display text-2xl sm:text-3xl leading-snug mb-4">{s.sessionTitle}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">{s.sessionDesc}</p>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2">
                <div className="aspect-square max-w-[240px] mx-auto lg:ml-auto lg:mr-0 rounded-2xl relative overflow-hidden shadow-glow ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.imgAlt} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-2">
          {FEATURED_SPEAKERS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show speaker ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-sunset" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => goTo(Math.max(0, idx - 1))}
            disabled={idx === 0}
            aria-label="Previous speaker"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-sunset transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={() => goTo(Math.min(count - 1, idx + 1))}
            disabled={idx === count - 1}
            aria-label="Next speaker"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-sunset transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
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
          {/* Pink-tinted gradient overlay to tie into the summit branding */}
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.10_320/0.75)] via-[oklch(0.18_0.06_290/0.45)] to-[oklch(0.14_0.05_285/0.92)]" />

          {/* Webinar promo banner */}
          <a
            href={WEBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-2 bg-night/80 backdrop-blur-md border-b border-white/10 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span className="hidden sm:inline">🎙️ Upcoming webinar — Tue, Aug 11 @ 12PM ET —</span>
            <span className="sm:hidden">🎙️ Upcoming webinar, Aug 11 —</span>
            <span>What to Expect at HawkSearch Customer Summit &apos;26</span>
            <span aria-hidden>→</span>
          </a>

          {/* Sticky Nav */}
          <nav className="fixed top-9 sm:top-10 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-night/40 backdrop-blur-md border-b border-white/10">
            <a href="https://www.hawksearch.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
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

          {/* Hero content — badge left / details right on desktop */}
          <div className="relative z-10 flex-1 flex items-center px-6 lg:px-16 pt-32 sm:pt-36 pb-20 max-w-7xl mx-auto w-full">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Hero title image */}
              <div className="flex justify-center lg:justify-end order-first lg:order-last animate-float">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={summitTitle}
                  alt="HawkSearch Customer Summit '26"
                  width={733}
                  height={300}
                  className="w-72 sm:w-96 lg:w-[480px] xl:w-[560px] drop-shadow-[0_0_60px_rgba(240,80,160,0.4)]"
                />
              </div>

              {/* Text + countdown + CTA */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white mb-6">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sunset animate-pulse" />
                  October 21 – 23 · Scottsdale, AZ
                </div>

                <p className="text-lg sm:text-xl text-white/85 max-w-md mb-8">
                  3 days to transform eCommerce AI search — keynotes, workshops, roadmap reveals, and the desert nights you&apos;ll be talking about all year.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8">
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
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
            {[
              { v: "3", l: "Days of summit" },
              { v: "20+", l: "Speakers & experts" },
              { v: "150+", l: "eCommerce leaders" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`px-6 py-10 text-center ${i > 0 ? "border-t md:border-t-0 md:border-l border-white/10" : ""}`}
              >
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

            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  value: "day-01",
                  day: "Day 01",
                  date: "Wednesday, Oct 21",
                  preview: "Golf (optional) · Welcome Cocktails",
                  sessions: [
                    { time: "12:30 – 4:00 PM", title: "Optional: Golf Outing", tag: "Social" },
                    { time: "4:00 – 6:00 PM", title: "Opening Cocktail Gathering", tag: "Social" },
                  ],
                },
                {
                  value: "day-02",
                  day: "Day 02",
                  date: "Thursday, Oct 22",
                  preview: "Keynotes · Training · Dev Track · Roadmap · Old Town Social Tour",
                  sessions: [
                    { time: "9:00 AM", title: "Networking Breakfast", tag: "Networking" },
                    { time: "9:00 – 9:30 AM", title: "Opening Keynote", tag: "Keynote" },
                    { time: "9:30 – 10:00 AM", title: "Assistants: Live! Customer Case Study", tag: "Case Study" },
                    { time: "10:00 – 10:30 AM", title: "HawkSearch Customer Presentation: MRC Global", tag: "Presentation" },
                    { time: "10:30 – 11:00 AM", title: "Customer Panel Discussion: UPS Store, TBD, TBD", tag: "Panel" },
                    { time: "", title: "", tag: "Track Columns" },
                    { time: "11:00 AM – 12:00 PM", tag: "Concurrent", tracks: { main: [{ title: "Your Website Is Bigger Than You Think: Attribution, Disruption, and the ROI Case Your Leadership Will Actually Believe — Ian Heller, Distribution Strategy Group", tag: "Keynote" }], dev: [{ title: "Agentic Data: Ingesting/Scraping PDF Data", tag: "Dev Track" }] } },
                    { time: "12:00 – 1:00 PM", tag: "Concurrent", tracks: { main: [{ title: "Lunch", tag: "Break" }], dev: [{ title: "Lunch", tag: "Break" }] } },
                    { time: "1:00 – 2:00 PM", tag: "Concurrent", tracks: { main: [{ title: "Luminos Labs Presentation", tag: "Sponsor", time: "1:00 – 1:30 PM" }, { title: "Panel Discussion with Shopware, Pimberly, and NAW", tag: "Panel", time: "1:30 – 2:00 PM" }], dev: [{ title: "Agentic UX: Tooling, Endpoints, Styling, Prompting", tag: "Dev Track" }] } },
                    { time: "2:00 – 2:30 PM", tag: "Concurrent", tracks: { main: [{ title: "HawkSearch Training - Building your Agentic Persona", tag: "Training" }], dev: [{ title: "Core HawkSearch: Mastering Backend API's (Mapping, Hierarchy & More)", tag: "Dev Track" }] } },
                    { time: "2:30 – 3:00 PM", tag: "Concurrent", tracks: { main: [{ title: "HawkSearch Customer Presentation: TBA", tag: "Presentation" }], dev: [{ title: "Core HawkSearch: Forgotten UX (Visual Facets, Instant Engage, Autocomplete)", tag: "Dev Track" }] } },
                    { time: "3:00 – 3:30 PM", title: "Networking Break With Sponsors", tag: "Networking" },
                    { time: "3:30 – 4:15 PM", title: "HawkSearch Roadmap", tag: "Roadmap" },
                    { time: "4:15 – 5:00 PM", title: "Break", tag: "Break" },
                    { time: "5:30 – 7:30 PM", title: "Old Town Social Tour — Dinner", tag: "Social" },
                    { time: "8:00 – 10:00 PM", title: "Old Town Social Tour — Special Event", tag: "Social" },
                  ],
                },
                {
                  value: "day-03",
                  day: "Day 03",
                  date: "Friday, Oct 23",
                  preview: "Training · Case Study · Roundtables",
                  sessions: [
                    { time: "8:00 – 9:00 AM", title: "Networking Breakfast", tag: "Networking" },
                    { time: "9:00 – 9:30 AM", title: "Diving Head-First into a Data Lake", tag: "Training" },
                    { time: "9:30 – 10:30 AM", title: "Maximizing your implementation & service offering", tag: "Presentation" },
                    { time: "10:30 – 11:00 AM", title: "Break (Coffee & Snacks)", tag: "Break" },
                    { time: "11:00 – 11:30 AM", title: "Assistants: Live! Customer Case Study", tag: "Case Study" },
                    { time: "11:30 AM – 12:00 PM", title: "Roundtable Takeaways", tag: "Session" },
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
                        const s = session as any;

                        if (s.tag === "Track Columns") {
                          return (
                            <div key={i} className="grid grid-cols-2 gap-2 px-4 pb-1 pt-4">
                              <div className="flex justify-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-sand font-semibold px-3 py-1 rounded-full bg-white/10 border border-border/60">Main Track</span>
                              </div>
                              <div className="flex justify-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300 font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">Dev Track</span>
                              </div>
                            </div>
                          );
                        }

                        if (s.tag === "Concurrent") {
                          const tagStyle = (tag: string) =>
                            tag === "Keynote" || tag === "Roadmap" ? "bg-gradient-sunset text-primary-foreground" :
                            tag === "Training" ? "bg-saguaro/20 text-saguaro" :
                            tag === "Break" ? "bg-white/10 text-sand opacity-60" :
                            tag === "Dev Track" ? "bg-blue-500/20 text-blue-300" :
                            "bg-white/10 text-sand";
                          return (
                            <div key={i} className="space-y-1">
                              <div className="text-xs text-muted-foreground tabular-nums px-1">{s.time}</div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="rounded-xl px-4 py-3 border border-border/60 bg-white/5 space-y-2">
                                  {s.tracks.main.map((m: any, j: number) => (
                                    <div key={j} className="flex items-start justify-between gap-2">
                                      <div className="flex-1">
                                        {m.time && <div className="text-[10px] text-muted-foreground tabular-nums mb-0.5">{m.time}</div>}
                                        <span className="text-sm font-medium">{m.title}</span>
                                      </div>
                                      <span className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full shrink-0 ${tagStyle(m.tag)}`}>{m.tag}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="rounded-xl px-4 py-3 border border-blue-500/20 bg-blue-500/5 space-y-2">
                                  {s.tracks.dev.map((d: any, j: number) => (
                                    <div key={j} className="flex items-start justify-between gap-2">
                                      <span className="text-sm font-medium flex-1">{d.title}</span>
                                      <span className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full shrink-0 ${tagStyle(d.tag)}`}>{d.tag}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }

                        if (s.tag === "Track Header") {
                          return (
                            <div key={i} className="flex items-center gap-3 pt-3 pb-1">
                              <div className="h-px flex-1 bg-border/60" />
                              <div className="text-[10px] uppercase tracking-[0.2em] text-sand font-semibold px-3">{s.title}</div>
                              <div className="h-px flex-1 bg-border/60" />
                            </div>
                          );
                        }

                        const isBreak = s.tag === "Break";
                        const isSocial = ["Social", "Dining", "Networking"].includes(s.tag);
                        return (
                          <div
                            key={i}
                            className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl px-4 py-3 border transition-colors ${
                              isBreak ? "border-border/40 opacity-50" : "bg-white/5 border-border/60"
                            }`}
                          >
                            <div className="text-xs text-muted-foreground tabular-nums shrink-0 w-44">{s.time}</div>
                            <div className="flex-1 text-sm font-medium">{s.title}</div>
                            <div className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full shrink-0 ${
                              isSocial ? "bg-sunset/20 text-sunset" :
                              s.tag === "Keynote" || s.tag === "Roadmap" ? "bg-gradient-sunset text-primary-foreground" :
                              s.tag === "Training" ? "bg-saguaro/20 text-saguaro" :
                              "bg-white/10 text-sand"
                            }`}>
                              {s.tag}
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
              <a
                href="#register"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all hover:bg-white/15 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Register Now</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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

            <FeaturedSpeakerCarousel />

            {/* Guest speakers */}
            <div className="mb-10">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Guest Speakers</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  // { n: "Robert Connelly", r: "Technology Marketing & Franchisee Communications Manager, The UPS Store", img: "/customer-summit/speaker-robert-connelly.jpg" },
                  { n: "Martin Balaam", r: "CEO & Founder, Pimberly", img: "/customer-summit/speaker-martin-balaam.jpg" },
                  { n: "Radu Munteanu", r: "Founder, Luminos Labs", img: "/customer-summit/speaker-radu-munteanu.png" },
                ].map((s) => (
                  <div key={s.n} className="group">
                    <div className="aspect-square rounded-2xl bg-gradient-sunset relative overflow-hidden flex items-center justify-center font-display text-5xl text-primary-foreground transition-transform group-hover:scale-[1.02]">
                      {s.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.img} alt={s.n} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-night/30 group-hover:bg-night/10 transition-colors" />
                          <span className="relative text-2xl">📷</span>
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

            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">HawkSearch Team</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                { n: "Ari Kahn", r: "President & CEO", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/649407a6c32a3c2b9fcec6ee_Ari%20K.webp" },
                { n: "Megan Winter", r: "Customer Success Director", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/67cab9355c72084908783eb2_4a4cd7f4d84dad117e963d7b9c758961_Megan%20Winter.webp" },
                { n: "Alondra Espinal", r: "Principal Consultant", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6a72295cb8628b2afbf85bf5_T02DCTZ9F-U0ALX8A5U4R-1f62dcea0971-512-1.jpg" },
                { n: "Kyle Mitzner", r: "VP Customer Success", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10ea4f2ad7fc0355f4a30_pic-kyle.webp" },
                { n: "Stephanie Brudvik", r: "Senior Business Analyst", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10f681a0f58008dab6126_Stephanie%20Brudvik.webp" },
                { n: "Lorena Mackey", r: "Customer Success Director", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6a722f4b280e442f0ae19000_655d6483-e948-4e87-8f50-bc143249cdc8.png" },
                { n: "Matt Taglich", r: "Customer Success Director", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/681e037e8ddf308baf2f8a59_Matt%20Taglich.webp" },
                { n: "Jeremy LaDuque", r: "SVP Product Marketing", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6646032435e9e84beebe3691_T02DCTZ9F-U0G9AASQ7-9cc3d5b45a03-512.webp" },
                { n: "Carl Prizzi", r: "EVP of Revenue", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/657849d04d352eccf206edc1_carl-prizzi.webp" },
                { n: "Charles Serrini", r: "VP of Services", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/66a10f7b4cda32634b3067f2_Charles%20Serrini.webp" },
                { n: "Kelly Maltman", r: "VP of Marketing", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6a722c11d78f8da51ca370b7_T02DCTZ9F-U0AN535TXS7-02b66f8dfb74-512.jpg" },
                { n: "Gosia Dixon", r: "Director of Marketing", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/6a7228a90959c45b5dc0820f_Gosia%20Head%20Shot%202.jpg" },
                { n: "John Murcott", r: "EVP Product & Strategy", img: "https://cdn.prod.website-files.com/616ef101d9f2a3350a5daaf5/649407a6f29ef61227e133e3_John%20M.webp" },
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
              <img src={summitEnergy} alt="Attendees networking at HawkSearch Summit '25" loading="eager" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
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
                  { v: "100+", l: "Leaders in attendance" },
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

        {/* ===== TESTIMONIALS ===== */}
        <section className="relative py-12 sm:py-24 px-6 lg:px-12 bg-night/40" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-sunset mb-4">From the community</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl">
                Hear it from <span className="text-gradient-sunset">our customers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              {/* TODO: replace src with real YouTube/Vimeo embed URL */}
              {[
                {
                  company: "First Supply",
                  quote: "HawkSearch completely transformed how our customers find products.",
                  embedUrl: "https://www.youtube.com/embed/f91pf4V7qKI?si=Q-_s6Bx3fNZv49KU",
                },
                {
                  company: "Pacific Plumbing",
                  quote: "The summit gave us strategies we implemented the week we got back.",
                  embedUrl: "https://www.youtube.com/embed/cr3JL_5tNPc?si=GjnGs402yx2wgVQ4",
                },
              ].map((t) => (
                <div
                  key={t.company}
                  className="rounded-3xl border border-border bg-card overflow-hidden shadow-elegant"
                >
                  {/* Video embed */}
                  <div className="relative w-full aspect-video bg-night">
                    <iframe
                      src={t.embedUrl}
                      title={`${t.company} testimonial`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  {/* Caption */}
                  <div className="px-7 py-6">
                    <p className="text-base text-foreground/90 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="text-xs uppercase tracking-[0.25em] text-sunset font-semibold">{t.company}</div>
                  </div>
                </div>
              ))}
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

        {/* ===== SPONSORS ===== */}
        <section className="py-16 px-6 lg:px-12 border-y border-border bg-night/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
              Powered by partners pushing commerce forward
            </div>

            {/* Title sponsor */}
            <div className="mb-10">
              <div className="text-center text-[10px] uppercase tracking-[0.3em] text-sunset mb-6 font-semibold">Title Sponsor</div>
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/customer-summit/sponsor-luminoslabs.png"
                  alt="Luminos Labs"
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-10" />

            {/* Gold sponsors */}
            <div className="mb-10">
              <div className="text-center text-[10px] uppercase tracking-[0.3em] text-sand mb-6 font-semibold">Gold Sponsors</div>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  { src: "/customer-summit/sponsor-shopware.webp", alt: "Shopware" },
                  { src: "/customer-summit/sponsor-pimberly.webp", alt: "Pimberly" },
                ].map((s) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={s.alt}
                    src={s.src}
                    alt={s.alt}
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-10" />

            {/* Silver sponsors */}
            <div>
              <div className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-semibold">Silver Sponsors</div>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[
                  { src: "/customer-summit/sponsor-conexiom.svg", alt: "Conexiom", className: "h-4", invert: true },
                  { src: "/customer-summit/sponsor-naw.png", alt: "NAW", className: "h-8", invert: false },
                ].map((s) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={s.alt}
                    src={s.src}
                    alt={s.alt}
                    className={`${s.className} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity ${s.invert ? "brightness-0 invert" : ""}`}
                  />
                ))}
              </div>
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
                  a: <>Click the <a href="#register" className="text-gradient-sunset hover:opacity-80 transition-opacity">Register Now</a> button to secure your spot. Space is limited so we recommend registering early!</>,
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
            <a href="https://www.hawksearch.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">hawksearch.com</a>
            <div>© 2026 HawkSearch. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
