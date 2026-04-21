import Link from "next/link";

const logos = [
  { name: "KineyRisk", abbr: "KR" },
  { name: "AMA", abbr: "AMA" },
  { name: "Lern", abbr: "lrn" },
  { name: "Allocate", abbr: "ALC" },
  { name: "Mazda", abbr: "MZD" },
  { name: "Pumice", abbr: "PMC" },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Read our Case Studies</h2>
          <Link href="#" className="text-sm font-medium text-[#FF6900] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-14 grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center w-full h-full">
                <span className="text-lg font-bold text-gray-400 tracking-wide">
                  {logo.abbr}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
