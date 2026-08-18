import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Invited — HawkSearch Customer Summit 2026",
  description:
    "A special thank you to our HawkSearch customers — register for your free ticket to Customer Summit '26 in Scottsdale, AZ. October 21–23, 2026.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "You're Invited — HawkSearch Customer Summit 2026",
    description:
      "A special thank you to our HawkSearch customers — register for your free ticket to Customer Summit '26 in Scottsdale, AZ. October 21–23, 2026.",
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
    title: "You're Invited — HawkSearch Customer Summit 2026",
    description:
      "A special thank you to our HawkSearch customers — register for your free ticket to Customer Summit '26 in Scottsdale, AZ. October 21–23, 2026.",
    images: ["/customer-summit/og-summit.png"],
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
