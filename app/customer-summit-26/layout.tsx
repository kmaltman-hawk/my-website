import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HawkSearch Customer Summit 2026",
  description:
    "HawkSearch Customer Summit '26 brings together eCommerce search leaders for three days of hands-on training, roadmap sessions, and peer networking in Scottsdale, AZ. October 21–23, 2026.",
  openGraph: {
    title: "HawkSearch Customer Summit 2026",
    description:
      "HawkSearch Customer Summit '26 brings together eCommerce search leaders for three days of hands-on training, roadmap sessions, and peer networking in Scottsdale, AZ. October 21–23, 2026.",
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
    title: "HawkSearch Customer Summit 2026",
    description:
      "HawkSearch Customer Summit '26 brings together eCommerce search leaders for three days of hands-on training, roadmap sessions, and peer networking in Scottsdale, AZ. October 21–23, 2026.",
    images: ["/customer-summit/og-summit.png"],
  },
};

export default function SummitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
