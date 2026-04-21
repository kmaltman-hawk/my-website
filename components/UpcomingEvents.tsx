import Link from "next/link";

const events = [
  {
    date: "November 14, 2025",
    title: "Accelerate your Optimizely On-Site Search",
    description:
      "Join us for a live webinar on how to supercharge your Optimizely site's search experience with HawkSearch's AI-powered capabilities.",
    type: "Webinar",
    typeColor: "bg-blue-100 text-blue-700",
    imgBg: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    date: "November 18–19, 2025",
    title: "B2B Online Europe",
    description:
      "Meet the HawkSearch team at B2B Online Europe and discover how we're helping leading manufacturers and distributors deliver exceptional search experiences.",
    type: "Conference",
    typeColor: "bg-orange-100 text-[#FF6900]",
    imgBg: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Upcoming Events
        </h2>

        <div className="flex flex-col gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image / color block */}
              <div
                className={`${event.imgBg} flex-shrink-0 w-full sm:w-40 h-32 sm:h-auto flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg opacity-60 text-center px-4">
                  {event.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${event.typeColor}`}>
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link href="#" className="text-sm font-semibold text-[#FF6900] hover:underline">
                    Learn More →
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-semibold bg-[#FF6900] hover:bg-[#e05e00] text-white px-3 py-1 rounded transition-colors"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
