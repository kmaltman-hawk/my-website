"use client";

import { useEffect } from "react";

const FORM_CSS = `
  body { background: transparent !important; margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; }
  fieldset { border: none !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
  .hs-form-field { margin-bottom: 14px !important; }
  label {
    display: block !important;
    color: #374151 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.06em !important;
    margin-bottom: 6px !important;
  }
  .hs-form-required { color: #FF6900 !important; }
  .hs-error-msgs label { color: #dc2626 !important; font-size: 12px !important; text-transform: none !important; letter-spacing: 0 !important; margin-top: 4px !important; margin-bottom: 0 !important; font-weight: 400 !important; }
  input[type="text"], input[type="email"], input[type="tel"], select, textarea {
    width: 100% !important;
    background: #ffffff !important;
    border: 1px solid #d1d5db !important;
    border-radius: 8px !important;
    padding: 11px 14px !important;
    color: #111827 !important;
    font-size: 15px !important;
    outline: none !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    appearance: none !important;
  }
  input:focus, select:focus, textarea:focus {
    border-color: #FF6900 !important;
  }
  .hs-button, input[type="submit"] {
    width: 100% !important;
    background: #FF6900 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    font-size: 15px !important;
    border: none !important;
    border-radius: 8px !important;
    padding: 13px 20px !important;
    margin-top: 6px !important;
    cursor: pointer !important;
    transition: opacity 0.15s ease !important;
  }
  .hs-button:hover, input[type="submit"]:hover { opacity: 0.9 !important; }
  .submitted-message { color: #111827; text-align: center; padding: 24px 0; font-size: 16px; }
  ::-webkit-input-placeholder { color: #9ca3af !important; }
`;

type HubSpotFormProps = {
  formId: string;
  sfdcCampaignId: string;
  targetId: string;
  portalId?: string;
  region?: string;
};

export default function HubSpotForm({
  formId,
  sfdcCampaignId,
  targetId,
  portalId = "3495651",
  region = "na1",
}: HubSpotFormProps) {
  useEffect(() => {
    const onFormReady = ($form: unknown) => {
      const doc: Document | undefined = (
        $form as { [index: number]: HTMLElement }
      )?.[0]?.ownerDocument;
      if (!doc) return;
      const style = doc.createElement("style");
      style.textContent = FORM_CSS;
      doc.head.appendChild(style);
    };

    const create = () => {
      const hbspt = (window as unknown as { hbspt?: { forms: { create: (opts: Record<string, unknown>) => void } } }).hbspt;
      hbspt?.forms.create({
        portalId,
        formId,
        region,
        sfdcCampaignId,
        target: `#${targetId}`,
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
  }, [formId, sfdcCampaignId, portalId, region, targetId]);

  return <div id={targetId} />;
}
