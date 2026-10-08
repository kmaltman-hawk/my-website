"use client";

import HubSpotForm from "@/components/whitepaper/HubSpotForm";

/**
 * HubSpot form styled to match the new-brand "Book a demo" card in Figma:
 * grey pill inputs, Urbanist type, orange pill submit button.
 */
const RESERVATION_FORM_CSS = `
  @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap");
  body { background: transparent !important; margin: 0; padding: 0; font-family: Urbanist, system-ui, sans-serif; color: #070809; }
  fieldset { border: none !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
  .input { margin-right: 0 !important; }
  @media (min-width: 401px) {
    fieldset.form-columns-2 .hs-form-field:first-child .input { margin-right: 12px !important; }
  }
  .hs-form-field { margin-bottom: 20px !important; }
  label {
    display: block !important;
    font-family: Urbanist, system-ui, sans-serif !important;
    color: #19161d !important;
    font-size: 14px !important;
    line-height: 20px !important;
    font-weight: 500 !important;
    margin-bottom: 8px !important;
  }
  .hs-form-required { color: #e8390f !important; }
  .hs-error-msgs { list-style: none !important; padding: 0 !important; margin: 6px 0 0 16px !important; }
  .hs-error-msgs label { color: #e8390f !important; font-size: 13px !important; margin: 0 !important; font-weight: 500 !important; }
  input[type="text"], input[type="email"], input[type="tel"], input[type="number"], select, textarea {
    width: 100% !important;
    height: 56px !important;
    background: #f4f5f5 !important;
    border: 1px solid transparent !important;
    border-radius: 999px !important;
    padding: 16px 20px !important;
    color: #070809 !important;
    font-family: Urbanist, system-ui, sans-serif !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    outline: none !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    appearance: none !important;
    transition: border-color 0.15s ease, background 0.15s ease !important;
  }
  textarea { height: auto !important; min-height: 112px !important; border-radius: 24px !important; }
  input::placeholder, textarea::placeholder { color: rgba(7,8,9,0.6) !important; opacity: 1 !important; }
  input:focus, select:focus, textarea:focus { border-color: #f96d30 !important; background: #ffffff !important; }
  .legal-consent-container, .legal-consent-container p { font-size: 12px !important; line-height: 18px !important; color: #3e4347 !important; }
  .hs_submit { margin-top: 8px !important; }
  .hs-button, input[type="submit"] {
    height: 64px !important;
    border: none !important;
    border-radius: 999px !important;
    background: #f96d30 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000043' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17 17 7M8 7h9v9'/%3E%3C/svg%3E") no-repeat right 24px center !important;
    padding: 0 64px 0 28px !important;
    color: #000043 !important;
    font-family: Urbanist, system-ui, sans-serif !important;
    font-size: 18px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: background-color 0.15s ease !important;
  }
  .hs-button:hover, input[type="submit"]:hover { background-color: #f75318 !important; }
  .submitted-message, .submitted-message * { color: #000043 !important; font-size: 20px !important; font-weight: 600 !important; line-height: 30px !important; text-align: center; padding: 24px 0; }
`;

export default function ReservationForm() {
  return (
    <HubSpotForm
      formId="ca4298e5-a663-49c8-b0e7-c729e4acb1a4"
      sfdcCampaignId="701Nt00000uwC71IAE"
      targetId="st-elmos-reservation-form"
      css={RESERVATION_FORM_CSS}
    />
  );
}
