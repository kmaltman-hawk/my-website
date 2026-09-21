"use client";

import { useEffect } from "react";
import { Clock, MapPin, Flag } from "lucide-react";
import "../customer-summit-26/summit.css";

const hawksearchLogo = "/customer-summit/hawksearch-logo.png";

const GOLF_FORM_CSS = `
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

function GolfHubSpotForm() {
  useEffect(() => {
    const onFormReady = ($form: any) => {
      const doc: Document = $form[0]?.ownerDocument;
      if (!doc) return;

      const style = doc.createElement("style");
      style.textContent = GOLF_FORM_CSS;
      doc.head.appendChild(style);
    };

    const create = () => {
      (window as any).hbspt?.forms.create({
        portalId: "3495651",
        formId: "19d31528-0e9e-47be-b834-c130f1a3f4f2",
        region: "na1",
        sfdcCampaignId: "701Nt00000gVVljIAG",
        target: "#hs-golf-form-target",
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

  return <div id="hs-golf-form-target" />;
}

const QUICK_FACTS = [
  { Icon: Clock, label: "Date & Time", value: "Wed, Oct 21", sub: "1:00 PM" },
  { Icon: MapPin, label: "Location", value: "McCormick Ranch Golf Club", sub: "Scottsdale, AZ" },
  { Icon: Flag, label: "Round", value: "9 Holes", sub: "" },
];

export default function GolfPage() {
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
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Agenda", href: "/customer-summit-26#agenda" },
              { label: "Speakers", href: "/customer-summit-26#speakers" },
              { label: "Hotel", href: "/customer-summit-26#hotel" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 pt-28 pb-16 sm:pt-32 sm:pb-20 text-center">
          <a
            href="/customer-summit-26"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors mb-6"
          >
            ← Back to Customer Summit
          </a>
          <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">Optional Activity · Customer Summit &apos;26</div>
          <h1 className="text-4xl sm:text-6xl mb-6">
            Join us for <span className="text-gradient-sunset">9 holes.</span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto mb-10">
            Kick off the Summit early with a relaxed round on Wednesday, October 21 at 1:00 PM
            at McCormick Ranch Golf Club.
          </p>
          <a
            href="#signup"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 font-bold text-white shadow-[0_0_40px_-5px_oklch(0.73_0.26_348/0.7)] transition-all hover:scale-[1.03] hover:shadow-[0_0_55px_-5px_oklch(0.73_0.26_348/0.9)] active:scale-[0.98]"
          >
            <span>Count Me In</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 pb-16 sm:pb-20">
          <div className="grid sm:grid-cols-3 gap-4">
            {QUICK_FACTS.map(({ Icon, label, value, sub }) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center"
                style={{ background: "oklch(0.14 0.05 285 / 0.6)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
              >
                <Icon className="w-5 h-5 text-sunset mx-auto mb-3" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">{label}</div>
                <div className="text-lg font-semibold text-foreground">{value}</div>
                {sub && <div className="text-sm text-white/60 mt-0.5">{sub}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 pb-20 sm:pb-28">
          <div
            className="rounded-3xl p-8 sm:p-12"
            style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
          >
            <h2 className="text-2xl sm:text-3xl mb-4">About the Course</h2>
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
              Located adjacent to The Scottsdale Resort &amp; Spa, McCormick Ranch Golf Club offers
              a traditional Scottsdale golf experience framed by mature landscaping, water features,
              and views toward the surrounding mountains.
            </p>
          </div>
        </div>

        <div id="signup" className="relative max-w-3xl mx-auto px-6 lg:px-12 pb-24 sm:pb-32 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl mb-3">Count Me In</h2>
            <p className="text-base text-foreground/80">Reserve your spot for the Summit&apos;s optional golf outing.</p>
          </div>
          <div
            className="rounded-3xl p-6 sm:p-10"
            style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
          >
            <GolfHubSpotForm />
          </div>
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
