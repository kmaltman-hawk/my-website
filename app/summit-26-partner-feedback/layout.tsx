import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Feedback — HawkSearch Customer Summit 2026",
  description:
    "Thank you for sponsoring Customer Summit '26! Tell us how it went for you and how we can make future partnerships even more valuable.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Partner Feedback — HawkSearch Customer Summit 2026",
    description:
      "Thank you for sponsoring Customer Summit '26! Tell us how it went for you and how we can make future partnerships even more valuable.",
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
    title: "Partner Feedback — HawkSearch Customer Summit 2026",
    description:
      "Thank you for sponsoring Customer Summit '26! Tell us how it went for you and how we can make future partnerships even more valuable.",
    images: ["/customer-summit/og-summit.png"],
  },
};

export default function PartnerFeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
