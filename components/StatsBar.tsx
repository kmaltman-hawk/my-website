const stats = [
  { value: "+23%", label: "Increase in Revenue" },
  { value: "+52%", label: "Boost in Conversions" },
  { value: "+20%", label: "Rise in AOV" },
  { value: "+28%", label: "More Page Views" },
  { value: "+66%", label: "Growth in Traffic" },
  { value: "3x", label: "Faster Results" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#FF6900] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-sm mt-1 text-orange-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
