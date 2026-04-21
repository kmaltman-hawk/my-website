import InsightNavbar from "@/components/insight/InsightNavbar";
import InsightHero from "@/components/insight/InsightHero";

export const metadata = {
  title: "Aetherfield — Sustainability insights, built for business",
  description:
    "Track impact, reduce emissions, and accelerate progress—with clarity and confidence.",
};

export default function InsightPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #bcd9f0 0%, #d6e9f5 25%, #e8f2f8 50%, #ede8dc 100%)",
      }}
    >
      <InsightNavbar />
      <main className="flex-1">
        <InsightHero />
      </main>
    </div>
  );
}
