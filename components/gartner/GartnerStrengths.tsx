const strengths = [
  {
    title: "AI-Powered Intelligence",
    description:
      "Our concept search and image search capabilities leverage advanced AI to understand shopper intent, not just keywords — delivering results that convert.",
    icon: "✦",
  },
  {
    title: "Built for Scale",
    description:
      "From mid-market to enterprise, HawkSearch handles catalogs of any size with speed and precision, supporting millions of queries without degradation.",
    icon: "◈",
  },
  {
    title: "No-Code Merchandising",
    description:
      "Marketers and merchandisers can manage search rules, boost products, and personalize results — no developer required, no maintenance overhead.",
    icon: "◉",
  },
  {
    title: "Deep Platform Integrations",
    description:
      "Native connectors for Salesforce, BigCommerce, Optimizely, and more mean faster time-to-value and less custom engineering work.",
    icon: "◎",
  },
];

export default function GartnerStrengths() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#FF6900] uppercase tracking-wide mb-2">
            Why We Were Recognized
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            What Sets HawkSearch Apart
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((s) => (
            <div key={s.title} className="flex flex-col">
              <span className="text-2xl text-[#FF6900] mb-4">{s.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
