"use client";

import { useEffect } from "react";
import HubSpotForm from "./HubSpotForm";

export default function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a demo"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-gray-900 pr-8">Book a Demo</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          See HawkSearch&rsquo;s conversational AI search and agentic commerce
          platform in action on your own catalog.
        </p>

        <div className="mt-6">
          <HubSpotForm
            formId="56575c79-09f6-4047-bb59-c72a9b2c0f72"
            sfdcCampaignId="701Nt00000IiWcvIAF"
            targetId="hs-demo-form-target"
          />
        </div>
      </div>
    </div>
  );
}
