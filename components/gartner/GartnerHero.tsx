import Link from "next/link";

export default function GartnerHero() {
  return (
    <section className="relative bg-[#0F0F1E] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-900/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#FF6900]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block bg-[#FF6900] text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              Gartner Magic Quadrant
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              HawkSearch Named a{" "}
              <span className="text-[#FF6900]">Challenger</span> in the Gartner
              Magic Quadrant
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              We believe this recognition reflects our commitment to delivering
              AI-powered search and discovery that drives real business results
              for our customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#download"
                className="bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold px-6 py-3 rounded text-center transition-colors"
              >
                Download the Report
              </Link>
              <Link
                href="#"
                className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded text-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Magic Quadrant graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-72">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
                Magic Quadrant
              </p>
              <div className="relative w-full aspect-square border border-gray-200">
                {/* Quadrant lines */}
                <div className="absolute top-0 left-1/2 w-px h-full bg-gray-200" />
                <div className="absolute left-0 top-1/2 w-full h-px bg-gray-200" />
                {/* Quadrant labels */}
                <span className="absolute top-2 left-2 text-[10px] text-gray-400 font-semibold">Challengers</span>
                <span className="absolute top-2 right-2 text-[10px] text-gray-400 font-semibold">Leaders</span>
                <span className="absolute bottom-2 left-2 text-[10px] text-gray-400 font-semibold">Niche Players</span>
                <span className="absolute bottom-2 right-2 text-[10px] text-gray-400 font-semibold">Visionaries</span>
                {/* HawkSearch dot */}
                <div className="absolute top-[38%] left-[30%] -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 bg-[#FF6900] rounded-full border-2 border-white shadow-lg" />
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#FF6900] whitespace-nowrap">
                    HawkSearch
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-3">
                Source: Gartner Magic Quadrant for Search and Product Discovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
