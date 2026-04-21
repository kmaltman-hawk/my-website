import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

export default function InsightHero() {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-12 pb-0">
      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-950 leading-[1.1] max-w-4xl">
        Sustainability insights,{" "}
        <span className="italic">built for business</span>
      </h1>

      {/* Subheading */}
      <p className="mt-7 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
        Track impact, reduce emissions, and accelerate progress—with clarity and
        confidence.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="#"
          className="bg-gray-950 hover:bg-gray-800 text-white font-mono text-sm px-6 py-3.5 rounded flex items-center gap-2 transition-colors"
        >
          <span className="text-gray-400">▪</span> Request a demo
        </Link>
        <Link
          href="#"
          className="bg-gray-950 hover:bg-gray-800 text-white font-mono text-sm px-6 py-3.5 rounded flex items-center gap-2 transition-colors"
        >
          <span className="text-gray-400">▪</span> Explore the platform
        </Link>
      </div>

      {/* Dashboard mockup — bleeds off bottom */}
      <DashboardMockup />
    </section>
  );
}
