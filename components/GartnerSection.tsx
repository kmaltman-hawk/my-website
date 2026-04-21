import Link from "next/link";

export default function GartnerSection() {
  return (
    <section className="bg-gray-50 py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#FF6900] uppercase tracking-wide mb-2">
              Industry Recognition
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gartner names HawkSearch a Challenger
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg">
              HawkSearch has been recognized in the Gartner Magic Quadrant,
              highlighting our ability to execute and completeness of vision in
              enterprise search solutions.
            </p>
            <Link
              href="#"
              className="inline-block bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
            >
              Read the Report
            </Link>
          </div>

          {/* Magic Quadrant graphic placeholder */}
          <div className="flex-shrink-0 w-64 h-64 bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-center">
            <div className="w-48 h-48 relative">
              {/* Quadrant grid */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border border-gray-300">
                <div className="border-r border-b border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Challengers</span>
                </div>
                <div className="border-b border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Leaders</span>
                </div>
                <div className="border-r border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Niche</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xs text-gray-400">Visionaries</span>
                </div>
              </div>
              {/* HawkSearch dot in Challengers quadrant */}
              <div className="absolute top-[45%] left-[25%] w-4 h-4 bg-[#FF6900] rounded-full border-2 border-white shadow-md -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
