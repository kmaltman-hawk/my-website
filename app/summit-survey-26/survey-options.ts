// Shared by the survey page and the /api/summit-survey route so the
// answer choices and server-side validation never drift apart.

export const CONTENT_RATINGS = [
  { key: "keynotes", label: "Keynotes" },
  { key: "roadmap", label: "Product roadmap" },
  { key: "customer_stories", label: "Customer stories" },
  { key: "workshops", label: "Workshops & breakouts" },
  { key: "networking", label: "Networking" },
] as const;

export const LOGISTICS_RATINGS = [
  { key: "venue", label: "Hotel & venue" },
  { key: "food", label: "Food & drinks" },
  { key: "pacing", label: "Schedule pacing" },
  { key: "communications", label: "Pre-event communications" },
] as const;

export const EXPECTATIONS = ["Fell short", "Met", "Exceeded"] as const;
export const EVENT_LENGTHS = ["Too short", "Just right", "Too long"] as const;

export const MONTHS = ["September", "October", "November"] as const;
export const ATTEND_NEXT = ["Definitely", "Probably", "Not sure", "Unlikely"] as const;
