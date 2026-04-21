import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#0F0F1E] overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-900/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#FF6900]/20 rounded-full blur-3xl" />
        {/* Wave lines */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 C360 0 720 200 1080 100 C1260 50 1380 130 1440 100 L1440 200 L0 200 Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#FF6900" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AI-Powered{" "}
              <span className="text-[#FF6900]">Concept Search</span> and{" "}
              <span className="text-[#FF6900]">Image Search</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              Let Smart Search help Your Customers Discover the Right Results
              Every Time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold px-6 py-3 rounded text-center transition-colors"
              >
                Get a Demo
              </Link>
              <Link
                href="#"
                className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded text-center transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: product UI mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main search UI card */}
              <div className="bg-white rounded-xl shadow-2xl p-4">
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 mb-4">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-400 text-sm">Search products, concepts, images...</span>
                  <span className="ml-auto bg-[#FF6900] text-white text-xs px-2 py-0.5 rounded">AI</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-300 rounded" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#FF6900] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                + Image Search
              </div>
              {/* Small floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Concept Search</p>
                  <p className="text-xs text-gray-500">Understanding intent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
