import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Dinner at St. Elmo Steak House — HawkSearch at B2B eCommerce World Americas";
const description =
  "Join HawkSearch for an evening of incredible food, great drinks, and conversation with fellow B2B eCommerce leaders at St. Elmo Steak House, Indianapolis — Monday, November 2, 7:30–10:30 PM.";

export const metadata: Metadata = {
  metadataBase: new URL("https://events.hawksearch.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/st-elmos/og-st-elmo-v2.jpg",
        width: 1200,
        height: 630,
        alt: "HawkSearch Dinner at St. Elmo Steak House — B2B eCommerce World Americas, Indianapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/st-elmos/og-st-elmo-v2.jpg"],
  },
};

export default function StElmosLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${urbanist.variable} contents`}>{children}</div>;
}
