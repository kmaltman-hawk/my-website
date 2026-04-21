import Link from "next/link";

export default function NewsBanner() {
  return (
    <section className="bg-orange-50 border-y border-orange-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Avatar pair */}
            <div className="flex -space-x-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-white overflow-hidden flex items-center justify-center text-white font-bold text-sm">
                Z
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white overflow-hidden flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
            </div>
            <div>
              <span className="inline-block bg-[#FF6900] text-white text-xs font-bold px-2 py-0.5 rounded mb-1">
                NEW
              </span>
              <p className="text-sm font-semibold text-gray-900">
                Smart Search is Here! Meet Zeus, HawkSearch&apos;s Newest Release.
              </p>
            </div>
          </div>
          <Link
            href="#"
            className="bg-[#FF6900] hover:bg-[#e05e00] text-white text-sm font-semibold px-4 py-2 rounded transition-colors flex-shrink-0"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
