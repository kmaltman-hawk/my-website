import Link from "next/link";

export default function GartnerCTA() {
  return (
    <section className="bg-[#0F0F1E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to See HawkSearch in Action?
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          Join hundreds of brands already using HawkSearch to drive revenue,
          reduce bounce rates, and deliver exceptional search experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#"
            className="bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Get a Demo
          </Link>
          <Link
            href="#download"
            className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Download the Report
          </Link>
        </div>
      </div>
    </section>
  );
}
