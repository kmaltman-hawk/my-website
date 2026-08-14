"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HubSpotForm from "@/components/whitepaper/HubSpotForm";
import DemoModal from "@/components/whitepaper/DemoModal";

const logos = [
  { name: "AMA", src: "/logo/customers/ama.png", width: 300, height: 126 },
  { name: "MISUMI USA", src: "/logo/customers/misumi.webp", width: 300, height: 126 },
  { name: "Kirby Risk", src: "/logo/customers/kirby-risk.png", width: 300, height: 126 },
  { name: "Borsheims", src: "/logo/customers/borsheims.webp", width: 300, height: 126 },
  { name: "Rural King", src: "/logo/customers/rural-king.png", width: 300, height: 126 },
  { name: "Sweetwater", src: "/logo/customers/sweetwater.png", width: 300, height: 126 },
  { name: "BlackHawk Industrial", src: "/logo/customers/blackhawk.png", width: 600, height: 252 },
  { name: "Gerrie Electric", src: "/logo/customers/gerrie-electric.png", width: 600, height: 252 },
];

const insideTopics = [
  {
    title: "The Shift from Keywords to Intent-Based Search",
    body: "Why natural language search is now table stakes, and what buyers expect from it.",
  },
  {
    title: "The 5-Step Agentic Commerce Roadmap",
    body: "A practical roadmap from catalog data quality to a full conversational experience.",
  },
  {
    title: "What Makes an Agent Different from a Chatbot",
    body: "The traits that separate a real commerce agent from a scripted chatbot.",
  },
  {
    title: "The Entitlement Problem No Generic AI Can Solve",
    body: "Why pricing, access, and inventory rules break most off-the-shelf AI.",
  },
  {
    title: "A2A Protocols and the Coming Infrastructure Shift",
    body: "How agent-to-agent commerce will change what your catalog needs to do.",
  },
  {
    title: "A 4-Step Checklist to Get There",
    body: "The concrete steps to turn conversational search into agentic commerce.",
  },
];

const frameworkSteps = [
  {
    step: "01",
    title: "Keyword Search",
    body: "The buyer does all the work of translating intent into machine-readable fragments.",
  },
  {
    step: "02",
    title: "Intent-Based Search",
    body: "The system understands natural language and returns relevant, ranked results.",
  },
  {
    step: "03",
    title: "Conversational Commerce",
    body: "The system engages in a dialogue, refines results, and answers follow-up questions.",
  },
  {
    step: "04",
    title: "Agentic Commerce",
    body: "The system acts: adds to cart, applies entitlements, or executes a transaction on behalf of the buyer.",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6900]/20 flex items-center justify-center">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="3">
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm sm:text-base text-gray-200">{children}</span>
    </li>
  );
}

export default function ConversationalShoppingGuidePage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="w-full border-b border-white/10 bg-[#0F0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="https://www.hawksearch.com" className="flex items-center">
            <Image
              src="/logo/hawksearch-logo.svg"
              alt="HawkSearch"
              width={172}
              height={31}
              className="h-6 w-auto"
              priority
            />
          </Link>
          <button
            onClick={() => setDemoOpen(true)}
            className="bg-[#FF6900] hover:bg-[#e05e00] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0F0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#FF6900] bg-[#FF6900]/10 rounded-full px-3 py-1.5 mb-6">
              Free Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Your Guide to Conversational Shopping Assistants
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-[#FF6900] font-medium">
              In the new era of agentic commerce
            </p>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              The way buyers find, evaluate, and buy products is undergoing its
              biggest shift since eCommerce began. Get the playbook for moving
              from keyword search to conversational AI — and what it takes to
              build the infrastructure that powers agent-to-agent commerce.
            </p>

            <ul className="mt-8 flex flex-col gap-3 max-w-md">
              <CheckItem>The shift from keyword to intent-based search</CheckItem>
              <CheckItem>A 5-step roadmap to agentic commerce</CheckItem>
              <CheckItem>What actually separates an agent from a chatbot</CheckItem>
              <CheckItem>Why A2A protocols will reshape eCommerce infrastructure</CheckItem>
            </ul>
          </div>

          {/* Download form card */}
          <div id="download" className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-900">Download your free copy</h2>
            <p className="mt-1.5 text-sm text-gray-500">
              Get instant access to the full guide.
            </p>
            <div className="mt-6">
              <HubSpotForm
                formId="a2162998-79b0-40df-bd68-f78a8387004b"
                sfdcCampaignId="701Nt00000k0uUWIAY"
                targetId="hs-download-form-target"
              />
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Logo bar */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Powering search for leading B2B and eCommerce brands
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 items-center">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="text-5xl font-bold text-[#FF6900]">72%</div>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              of enterprise procurement professionals now prefer to describe
              requirements in natural language and expect precise results
              without keyword refinement.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-gray-400 font-medium">
              2024 survey of enterprise procurement professionals
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="text-5xl font-bold text-[#FF6900]">$1T</div>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              AI agents could generate as much as $1 trillion in orchestrated
              U.S. revenue by 2030.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-gray-400 font-medium">
              McKinsey
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What&rsquo;s Inside</h2>
            <p className="mt-3 text-gray-600">
              Ten sections covering the full path from keyword search to
              conversational, agent-driven commerce.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insideTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-xl border border-gray-100 p-6 hover:border-[#FF6900]/30 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 leading-snug">{topic.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{topic.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="bg-[#0F0F1E] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#FF6900] mb-3">
              Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Evolution of Digital Commerce
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkSteps.map((s) => (
              <div key={s.step} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-3xl font-bold text-[#FF6900]">{s.step}</div>
                <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-10">
            Each step builds on the last — you cannot skip to Step 4.
          </p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
            &ldquo;A conversational interface informs. An agent has agency
            &mdash; and can act.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Your Guide to Conversational Shopping Assistants
          </p>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="bg-gray-50 py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            See what agentic commerce looks like on your catalog
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Talk to our team about building conversational search and
            agent-ready infrastructure on top of the data you already have.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setDemoOpen(true)}
              className="bg-[#FF6900] hover:bg-[#e05e00] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Book a Demo
            </button>
            <a
              href="#download"
              className="text-sm font-medium text-gray-700 hover:text-[#FF6900] transition-colors"
            >
              Or download the guide ↑
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F1E] py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="https://www.hawksearch.com" className="flex items-center">
            <Image
              src="/logo/hawksearch-logo.svg"
              alt="HawkSearch"
              width={172}
              height={31}
              className="h-6 w-auto"
            />
          </Link>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} HawkSearch. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="https://www.hawksearch.com" className="hover:text-white transition-colors">
              Visit hawksearch.com
            </Link>
          </div>
        </div>
      </footer>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
