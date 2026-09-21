import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Outing — HawkSearch Customer Summit 2026",
  description:
    "Join us for 9 holes at McCormick Ranch Golf Club, Wednesday, October 21 at 1:00 PM — an optional activity at HawkSearch Customer Summit '26 in Scottsdale, AZ.",
  openGraph: {
    title: "Golf Outing — HawkSearch Customer Summit 2026",
    description:
      "Join us for 9 holes at McCormick Ranch Golf Club, Wednesday, October 21 at 1:00 PM — an optional activity at HawkSearch Customer Summit '26 in Scottsdale, AZ.",
    images: [
      {
        url: "/customer-summit/og-summit.png",
        width: 1200,
        height: 630,
        alt: "HawkSearch Customer Summit 2026 — Scottsdale, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf Outing — HawkSearch Customer Summit 2026",
    description:
      "Join us for 9 holes at McCormick Ranch Golf Club, Wednesday, October 21 at 1:00 PM — an optional activity at HawkSearch Customer Summit '26 in Scottsdale, AZ.",
    images: ["/customer-summit/og-summit.png"],
  },
};

export default function GolfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
