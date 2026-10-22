import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Feedback — HawkSearch Customer Summit 2026",
  description:
    "Thanks for joining us in Scottsdale! Tell us how Customer Summit '26 went and where we should head next.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Share Your Feedback — HawkSearch Customer Summit 2026",
    description:
      "Thanks for joining us in Scottsdale! Tell us how Customer Summit '26 went and where we should head next.",
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
    title: "Share Your Feedback — HawkSearch Customer Summit 2026",
    description:
      "Thanks for joining us in Scottsdale! Tell us how Customer Summit '26 went and where we should head next.",
    images: ["/customer-summit/og-summit.png"],
  },
};

export default function SummitSurveyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
