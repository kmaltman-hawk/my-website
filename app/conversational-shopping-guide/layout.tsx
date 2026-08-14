import type { Metadata } from "next";

const title = "Your Guide to Conversational Shopping Assistants | HawkSearch";
const description =
  "Download HawkSearch's free guide to conversational AI search and agentic commerce — the roadmap from keyword search to shopping assistants that act.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
