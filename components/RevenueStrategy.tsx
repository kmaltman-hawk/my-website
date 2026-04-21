const pillars = [
  {
    title: "Drive Traffic",
    description:
      "Drive high-quality traffic with auto-returned web pages powered by HawkSearch's Traffic Studio. Stay focused on your brand's message.",
    color: "text-[#FF6900]",
  },
  {
    title: "Boost Conversions",
    description:
      "Increase conversions with AI-powered recommendations and personalization that guides customers through the purchase funnel.",
    color: "text-blue-600",
  },
  {
    title: "Raise Average Order Value",
    description:
      "Maximize revenue per transaction with intelligent upsell and cross-sell recommendations that customers actually want.",
    color: "text-purple-600",
  },
];

export default function RevenueStrategy() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-14">
          Round Out Your Revenue Strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div
                  className={`w-1.5 rounded-full flex-shrink-0 ${pillar.color.replace("text-", "bg-")}`}
                  style={{ minHeight: "60px" }}
                />
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${pillar.color}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: circular diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {/* Traffic arc */}
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="#FF6900"
                  strokeWidth="28"
                  strokeDasharray="100 402"
                  strokeDashoffset="0"
                  opacity="0.9"
                />
                {/* Conversion arc */}
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="28"
                  strokeDasharray="100 402"
                  strokeDashoffset="-105"
                  opacity="0.9"
                />
                {/* AOV arc */}
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="28"
                  strokeDasharray="100 402"
                  strokeDashoffset="-210"
                  opacity="0.9"
                />
                {/* Revenue arc */}
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="28"
                  strokeDasharray="100 402"
                  strokeDashoffset="-315"
                  opacity="0.9"
                />
              </svg>
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-gray-900">REVENUE</span>
              </div>
              {/* Labels */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-[#FF6900]">TRAFFIC</span>
              <span className="absolute top-1/2 right-0 translate-x-1 -translate-y-1/2 text-xs font-bold text-blue-600">CONV.</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600">AOV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
