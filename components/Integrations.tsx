const integrations = [
  { name: "Salesforce", color: "text-blue-600", bg: "bg-blue-50" },
  { name: "BigCommerce", color: "text-gray-800", bg: "bg-gray-100" },
  { name: "Progress", color: "text-green-700", bg: "bg-green-50" },
  { name: "Optimizely", color: "text-blue-800", bg: "bg-blue-50" },
  { name: "Custom Platform", color: "text-[#FF6900]", bg: "bg-orange-50" },
];

export default function Integrations() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Making Integration as Easy as Possible
        </h2>
        <p className="text-lg text-gray-500 mb-12">On any platform</p>

        {/* Integration logos grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className={`${integration.bg} rounded-xl px-8 py-5 flex items-center justify-center min-w-[140px] shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
            >
              <span className={`font-bold text-sm ${integration.color}`}>
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500 max-w-xl mx-auto">
          Whether you build on API or need a direct connector, HawkSearch works
          on any platform — from enterprise to headless.
        </p>
      </div>
    </section>
  );
}
