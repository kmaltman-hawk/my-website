export default function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-14 px-4 sm:px-6">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Dashboard header */}
        <div className="px-8 pt-8 pb-6">
          <h2 className="text-2xl font-bold text-gray-950">Good morning, Acme Inc</h2>
          <p className="text-gray-500 mt-1 text-sm">Your daily impact metrics are ready to review.</p>
        </div>

        {/* Metrics row */}
        <div className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: Carbon emissions */}
          <div className="bg-gray-50 rounded-2xl p-5 flex flex-col justify-between min-h-[180px]">
            <div className="flex items-start justify-between">
              <span className="text-xs font-mono text-gray-500">192,000 tCO₂e</span>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <span className="text-4xl font-bold text-gray-950">56</span>
                <span className="text-xl font-bold text-gray-950 align-super text-sm">%</span>
                <p className="text-xs text-gray-500 mt-1">Scope 1 &amp; 2 reduction</p>
              </div>
              {/* Yellow bar chart placeholder */}
              <div className="w-20 h-20 bg-yellow-300 rounded-lg flex-shrink-0" />
            </div>
          </div>

          {/* Card 2: Energy consumption */}
          <div className="bg-gray-50 rounded-2xl p-5 flex flex-col justify-between min-h-[180px]">
            <div className="flex items-start justify-between">
              <span className="text-xs font-mono text-gray-500">Energy consumption</span>
              {/* Asterisk / spark icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-950">583.7</span>
                <span className="text-sm font-mono text-gray-500">MWh</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm font-semibold text-emerald-600">↓12.4%</span>
                <span className="text-xs text-gray-400">vs last period</span>
              </div>
            </div>
          </div>

          {/* Card 3: Forecast */}
          <div className="bg-gray-50 rounded-2xl p-5 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
            {/* Background nature image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600 opacity-20 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between">
                <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-green-700 to-green-500 opacity-80" />
                <span className="bg-yellow-300 text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Forecast
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-950 mt-3 leading-snug">
                You&apos;re 16% off your 2027 emissions goal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
