"use client";
import { useState } from "react";

export default function GartnerDownload() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="download" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold text-[#FF6900] uppercase tracking-wide mb-3">
              Free Report
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Download the Gartner Magic Quadrant Report
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Get your complimentary copy of the Gartner Magic Quadrant for
              Search and Product Discovery and see how HawkSearch stacks up
              against the competition. Understand the criteria Gartner uses to
              evaluate vendors and why we were named a Challenger.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              {[
                "Full analyst report — no paywalls",
                "Evaluation criteria breakdown",
                "Vendor comparison insights",
                "Delivered instantly to your inbox",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#FF6900] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
                <p className="text-gray-500 text-sm">Check your inbox — the report is on its way.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get the Report</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FF6900] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FF6900] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FF6900] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Company</label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Inc."
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FF6900] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Job Title</label>
                    <input
                      type="text"
                      required
                      placeholder="VP of E-Commerce"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FF6900] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold py-3 rounded-lg transition-colors mt-2"
                  >
                    Download Free Report →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
