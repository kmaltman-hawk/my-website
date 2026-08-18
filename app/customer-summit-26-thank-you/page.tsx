"use client";

import { useEffect } from "react";
import "../customer-summit-26/summit.css";

const hawksearchLogo = "/customer-summit/hawksearch-logo.png";
const HOTEL_BOOKING_URL = "https://book.passkey.com/event/51253150/owner/13345015/home";

const THANK_YOU_FORM_CSS = `
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

function ThankYouHubSpotForm() {
  useEffect(() => {
    const onFormReady = ($form: any) => {
      const doc: Document = $form[0]?.ownerDocument;
      if (!doc) return;

      const style = doc.createElement("style");
      style.textContent = THANK_YOU_FORM_CSS;
      doc.head.appendChild(style);
    };

    const create = () => {
      (window as any).hbspt?.forms.create({
        portalId: "3495651",
        formId: "3f91e014-736a-442b-a917-39184f2464ee",
        region: "na1",
        sfdcCampaignId: "701Nt00000gVVljIAG",
        target: "#hs-thank-you-form-target",
        redirectUrl: HOTEL_BOOKING_URL,
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

  return <div id="hs-thank-you-form-target" />;
}

export default function ThankYouPage() {
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

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-28 pb-10 sm:pt-32 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-sand mb-6">For our valued customers</div>
              <h1 className="text-4xl sm:text-6xl mb-6">
                Thank you for being such an <span className="text-gradient-sunset">incredible HawkSearch customer.</span>
              </h1>
              <p className="text-xl text-foreground/90 max-w-xl">
                Fill out the form to receive your free ticket to Customer Summit &apos;26. After registering,
                you&apos;ll be brought straight to the hotel booking link — and keep an eye on your inbox for
                event details as we get closer.
              </p>
            </div>
            <div
              className="rounded-3xl p-6 sm:p-10 text-left"
              style={{ background: "oklch(0.14 0.05 285 / 0.75)", backdropFilter: "blur(20px)", border: "1px solid oklch(1 0 0 / 0.12)" }}
            >
              <ThankYouHubSpotForm />
            </div>
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
