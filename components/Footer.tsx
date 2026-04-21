import Link from "next/link";

const footerColumns = [
  {
    heading: "Solutions",
    links: ["E-Commerce", "B2B", "Content", "Enterprise", "Marketplace"],
  },
  {
    heading: "Platform",
    links: ["Search", "Recommendations", "Merchandising", "Analytics", "AI Features"],
  },
  {
    heading: "Integrations",
    links: ["Salesforce", "BigCommerce", "Optimizely", "Progress", "Custom API"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "News", "Partners", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Case Studies", "Docs", "Webinars", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo col */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <span className="text-xl font-bold text-white">
              hawk<span className="text-[#FF6900]">search</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              AI-powered search and discovery for e-commerce, B2B, and content
              platforms.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {["in", "tw", "fb", "yt"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#FF6900] flex items-center justify-center text-xs font-bold text-white transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} HawkSearch. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
