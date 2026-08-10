const stats = [
  { value: "+23%", label: "Increase in Revenue" },
  { value: "+52%", label: "Boost in Conversions" },
  { value: "+20%", label: "Rise in AOV" },
  { value: "+66%", label: "Growth in Traffic" },
];

export default function GartnerStats() {
  return (
    <section className="bg-[#FF6900] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white font-bold text-lg mb-10 opacity-90">
          Results our customers see with HawkSearch
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold">{stat.value}</p>
              <p className="text-sm mt-1 text-orange-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
