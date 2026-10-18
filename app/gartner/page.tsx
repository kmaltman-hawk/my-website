import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GartnerHero from "@/components/gartner/GartnerHero";
import GartnerStrengths from "@/components/gartner/GartnerStrengths";
import GartnerStats from "@/components/gartner/GartnerStats";
import GartnerDownload from "@/components/gartner/GartnerDownload";
import GartnerCTA from "@/components/gartner/GartnerCTA";

export const metadata = {
  title: "HawkSearch Named a Gartner Magic Quadrant Challenger",
  description:
    "Download the complimentary Gartner Magic Quadrant for Search and Product Discovery report and see why HawkSearch was named a Challenger.",
};

export default function GartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <GartnerHero />
        <GartnerStrengths />
        <GartnerStats />
        <GartnerDownload />
        <GartnerCTA />
      </main>
      <Footer />
    </div>
  );
}
