const personas = [
  {
    title: "Marketers",
    description:
      "Drive high-quality traffic with auto-returned web pages powered by HawkSearch's Traffic Studio. Stay focused on your brand's message while search works behind the scenes.",
    gradient: "from-orange-50 to-orange-100",
    icon: "📈",
  },
  {
    title: "Merchandisers",
    description:
      "Boost your online sales with intelligent merchandising tools that surface the right products at the right time, and customer engagement commets that keep shoppers coming back.",
    gradient: "from-blue-50 to-blue-100",
    icon: "🛍️",
  },
  {
    title: "Developers",
    description:
      "Integrate once and let HawkSearch handle the rest. Our clean APIs and comprehensive documentation make it easy to embed powerful search without endless maintenance.",
    gradient: "from-purple-50 to-purple-100",
    icon: "⚙️",
  },
];

export default function NoMaintenanceCode() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            No More High-Maintenance Code
          </h2>
          <p className="mt-3 text-lg text-gray-500">Simply built for business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div key={persona.title} className="flex flex-col">
              {/* Image placeholder */}
              <div
                className={`bg-gradient-to-br ${persona.gradient} rounded-xl h-48 flex items-center justify-center mb-5 text-5xl`}
              >
                {persona.icon}
              </div>
              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {persona.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
