import Link from "next/link";

const tiers = [
  {
    title: "Business-to-Business",
    description:
      "The only search solution built for the high-volume, complexity, and demands of B2B operations. Power procurement portals and complex catalogs with ease.",
    stats: [
      { label: "SKU Capacity", value: "10M+" },
      { label: "Avg. Session Time", value: "+34%" },
      { label: "Search Accuracy", value: "98.2%" },
    ],
    accent: "border-[#FF6900]",
    badgeColor: "bg-[#FF6900] text-white",
    side: "left",
  },
  {
    title: "Business-to-Consumer",
    description:
      "Stay on top of the latest trends and give shoppers the experience they expect. AI-powered search that converts browsers into buyers with every query.",
    stats: [
      { label: "Conversion Lift", value: "+52%" },
      { label: "Revenue per Visit", value: "+28%" },
      { label: "Bounce Rate", value: "-18%" },
    ],
    accent: "border-blue-500",
    badgeColor: "bg-blue-500 text-white",
    side: "right",
  },
  {
    title: "Content Industry",
    description:
      "Expose and surface the right content to the right audience. Boost engagement and time-on-site for media, publishing, and education platforms.",
    stats: [
      { label: "Content Discovery", value: "+66%" },
      { label: "Pages per Session", value: "+23%" },
      { label: "Return Visitors", value: "+41%" },
    ],
    accent: "border-purple-500",
    badgeColor: "bg-purple-500 text-white",
    side: "left",
  },
];

export default function ContentCommerce() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Content or Commerce at Any Level
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            We&apos;ve got the answer you&apos;ve been looking for
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                tier.side === "right" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tier.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <Link href="#" className="text-sm font-semibold text-[#FF6900] hover:underline">
                  Learn more →
                </Link>
              </div>

              {/* Stats card */}
              <div className={`bg-gray-50 rounded-xl p-6 border-l-4 ${tier.accent}`}>
                <div className="grid grid-cols-3 gap-4">
                  {tier.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {/* Mini search UI mockup */}
                <div className="mt-5 bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search...</span>
                    <span className={`ml-auto text-xs font-bold px-1.5 py-0.5 rounded ${tier.badgeColor}`}>
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
