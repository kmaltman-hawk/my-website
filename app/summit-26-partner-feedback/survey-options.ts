// Shared by the partner feedback page and the /api/summit-partner-feedback route
// so the answer choices and server-side validation never drift apart.

export const SPONSORSHIP_RATINGS = [
  { key: "audience_fit", label: "Attendee fit for your business" },
  { key: "conversation_quality", label: "Quality of conversations" },
  { key: "brand_visibility", label: "Brand visibility" },
  { key: "speaking", label: "Speaking or panel opportunities" },
  { key: "coordination", label: "Coordination with the HawkSearch team" },
  { key: "venue", label: "Venue & setup" },
] as const;

export const CONVERSATION_COUNTS = ["0–5", "6–10", "11–20", "20+"] as const;
