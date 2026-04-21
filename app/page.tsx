import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsBanner from "@/components/NewsBanner";
import CaseStudies from "@/components/CaseStudies";
import GartnerSection from "@/components/GartnerSection";
import NoMaintenanceCode from "@/components/NoMaintenanceCode";
import StatsBar from "@/components/StatsBar";
import RevenueStrategy from "@/components/RevenueStrategy";
import UpcomingEvents from "@/components/UpcomingEvents";
import ContentCommerce from "@/components/ContentCommerce";
import Integrations from "@/components/Integrations";
import ToolsInAction from "@/components/ToolsInAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <NewsBanner />
        <CaseStudies />
        <GartnerSection />
        <NoMaintenanceCode />
        <StatsBar />
        <RevenueStrategy />
        <UpcomingEvents />
        <ContentCommerce />
        <Integrations />
        <ToolsInAction />
      </main>
      <Footer />
    </div>
  );
}
