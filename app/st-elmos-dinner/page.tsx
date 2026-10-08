import Image from "next/image";
import { CalendarDays, Clock, UtensilsCrossed, MapPin } from "lucide-react";
import ReservationForm from "@/components/st-elmos/ReservationForm";

/*
 * Styled after the new-brand website in Figma ("Book a demo" frame + Branding page):
 * navy #000043 → #29296b gradient with dot-grid ellipse, white pill navbar,
 * Urbanist type, orange #F96D30 pill CTAs with arrow chip, lavender pill accents,
 * cream #F6F5F2 footer with oversized wordmark.
 */

const ASSETS = "/st-elmos";
const LOGO = `${ASSETS}/footer-logo.svg`;

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=St.+Elmo+Steak+House+127+S+Illinois+St+Indianapolis+IN+46225";


const DETAILS = [
  { icon: CalendarDays, label: "Date", value: "Monday, November 2" },
  { icon: Clock, label: "Time", value: "7:30 PM – 10:30 PM" },
  { icon: UtensilsCrossed, label: "Venue", value: "St. Elmo Steak House" },
  {
    icon: MapPin,
    label: "Address",
    value: "127 S Illinois St, Indianapolis, IN 46225",
    href: MAPS_URL,
  },
];

const HOSTS = [
  { name: "Gavin Kearns", photo: `${ASSETS}/host-gavin-kearns.png`, accent: "bg-[#f96d30]" },
  { name: "Stephen Leonard", photo: `${ASSETS}/host-stephen-leonard.png`, accent: "bg-[#7d7ee8]" },
];

/** Dot-grid texture fading out inside an ellipse — CSS stand-in for the Figma mask group. */
function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute opacity-40 ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.2px, transparent 1.2px)",
        backgroundSize: "22px 22px",
        maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
      }}
    />
  );
}

function ArrowChip({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full">
      <Image
        src={`${ASSETS}/arrow-up-right-${dark ? "dark" : "light"}.svg`}
        alt=""
        width={24}
        height={24}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </span>
  );
}

function PillButton({
  href,
  children,
  variant = "orange",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "orange" | "navy";
  external?: boolean;
}) {
  const styles = {
    orange: "bg-[#f96d30] text-[#000043] hover:bg-[#f75318]",
    navy: "bg-[#000043] text-[#fafafa] hover:bg-[#29296b]",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex h-14 items-center gap-1 rounded-full py-1 pl-6 pr-1 text-base font-medium transition-colors sm:h-16 sm:text-lg ${styles}`}
    >
      {children}
      <ArrowChip dark={variant === "orange"} />
    </a>
  );
}

export default function StElmosDinnerPage() {
  return (
    <main className="flex flex-col bg-white font-[family-name:var(--font-urbanist)] text-[#070809]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-l from-[#29296b] to-[#000043] px-4 pb-28 pt-6 text-white sm:px-8 lg:pb-36 xl:px-[132px]">
        <DotGrid className="-top-24 right-[-10%] h-[1108px] w-[1142px] max-w-none" />

        {/* Navbar */}
        <nav className="relative z-10 mx-auto flex max-w-[1656px] items-center justify-between rounded-full bg-white py-3 pl-6 pr-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] sm:py-[15px] sm:pl-12 sm:pr-5">
          <a href="https://www.hawksearch.com" aria-label="HawkSearch home">
            <Image src={LOGO} alt="HawkSearch" width={243} height={42} priority className="h-7 w-auto sm:h-9" />
          </a>
          <a
            href="#reserve"
            className="group inline-flex h-12 items-center gap-1 rounded-full bg-[#000043] py-1 pl-5 pr-1 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[#29296b] sm:h-14 sm:pl-6 sm:text-base"
          >
            <span className="sm:hidden">Reserve</span>
            <span className="hidden sm:inline">Reserve your seat</span>
            <ArrowChip />
          </a>
        </nav>

        <div className="relative z-10 mx-auto mt-16 grid max-w-[1656px] items-center gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-[#d5d7d9] backdrop-blur sm:px-4 sm:text-sm">
              B2B eCommerce World Americas
              <span className="size-1.5 rounded-full bg-[#f96d30]" />
              Indianapolis
            </span>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.01em] sm:text-6xl xl:text-[72px] xl:leading-[86px]">
              Dinner at St.&nbsp;Elmo
              <br className="hidden sm:block" /> Steak House
            </h1>
            <p className="max-w-[720px] text-lg font-medium leading-relaxed text-white/90 sm:text-2xl sm:leading-9">
              Join HawkSearch for an unforgettable evening at one of Indianapolis&rsquo; most iconic
              dining destinations.
            </p>
            <div className="flex flex-wrap gap-3">
              <PillButton href="#reserve">Reserve your seat</PillButton>
            </div>
          </div>

          {/* Event banner shown whole at its native 2:1 ratio (cropping it upscaled the source and blurred it) */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-72 rounded-full bg-[#e6d4ff] lg:block" aria-hidden />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-80 rounded-full bg-[#7d7ee8] lg:block" aria-hidden />
            <div className="relative overflow-hidden rounded-[20px] border-4 border-white/20 shadow-[0_24px_60px_rgba(0,0,30,0.45)] sm:rounded-[32px]">
              <Image
                src={`${ASSETS}/hero-banner-v2.webp`}
                alt="HawkSearch — Dinner at St. Elmo Steak House, B2B eCommerce World Americas, Indianapolis"
                width={1774}
                height={887}
                priority
                quality={95}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Event details ───────────────────────────────── */}
      <section className="relative z-10 -mt-16 px-4 lg:-mt-20 sm:px-8 xl:px-[132px]">
        <ul className="mx-auto grid max-w-[1656px] gap-4 rounded-[32px] border border-[#d5d7d9]/60 bg-white p-4 shadow-[0_12px_40px_rgba(0,0,67,0.08)] sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          {DETAILS.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4 rounded-3xl bg-[#f4f5f5] p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#000043] text-[#f96d30]">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#3e4347]">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold leading-6 text-[#000043] underline decoration-[#f96d30] decoration-2 underline-offset-4 hover:text-[#f75318]"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold leading-6 text-[#000043]">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── The evening ─────────────────────────────────── */}
      <section className="px-4 py-20 sm:px-8 lg:py-28 xl:px-[132px]">
        <div className="mx-auto grid max-w-[1656px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-[#ffefd6] px-4 py-1.5 text-sm font-semibold text-[#f75318]">
              The evening
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] text-[#000043] sm:text-5xl sm:leading-[60px]">
              Step away from the conference floor
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg font-medium leading-8 text-[#3e4347] sm:text-xl">
            <p>
              After a full day at B2B eCommerce World Americas, join us for an evening of incredible
              food, great drinks, and even better conversation with fellow B2B eCommerce leaders.
            </p>
            <p>
              Space is limited, so{" "}
              <a href="#reserve" className="font-semibold text-[#000043] underline decoration-[#f96d30] decoration-2 underline-offset-4">
                save your seat at the table
              </a>
              .
            </p>
          </div>
        </div>

        {/* Tagline card — mirrors the testimonial card's lavender pill accents */}
        <div className="relative mx-auto mt-16 max-w-[1656px] overflow-hidden rounded-[32px] bg-[#000043] px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-24 -top-10 h-[122px] w-[520px] rounded-full bg-[#e6d4ff] sm:right-[-4%]" aria-hidden />
          <div className="absolute -bottom-10 -right-10 h-[122px] w-[520px] rounded-full bg-[#7d7ee8] sm:right-[-12%]" aria-hidden />
          <div className="relative max-w-[760px]">
            <p className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-[60px]">
              Come hungry. <span className="text-[#f96d30]">Leave connected.</span>
            </p>
            <p className="mt-4 text-lg font-medium text-[#d5d7d9] sm:text-2xl">
              Good food. Great company. One legendary Indianapolis steakhouse.
            </p>
          </div>
        </div>
      </section>

      {/* ── Hosts ───────────────────────────────────────── */}
      <section className="bg-[#f6f5f2] px-4 py-20 sm:px-8 lg:py-28 xl:px-[132px]">
        <div className="mx-auto max-w-[1656px]">
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full bg-[#e6d4ff] px-4 py-1.5 text-sm font-semibold text-[#000043]">
              Your hosts
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] text-[#000043] sm:text-5xl">
              Meet the HawkSearch team
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-[1100px]">
            {HOSTS.map((host) => (
              <li key={host.name} className="flex items-center gap-6 rounded-[32px] bg-white p-4 pr-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                {/* Pill-masked photo with brand-colour backing pill */}
                <div className="relative h-40 w-28 shrink-0 sm:h-48 sm:w-32">
                  <div className={`absolute inset-0 translate-x-2 translate-y-2 rounded-full ${host.accent}`} aria-hidden />
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image src={host.photo} alt={host.name} fill sizes="128px" className="object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3e4347]">Host</p>
                  <p className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#000043]">{host.name}</p>
                  <p className="mt-1 text-base font-medium text-[#3e4347]">HawkSearch</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reserve ─────────────────────────────────────── */}
      <section
        id="reserve"
        className="relative scroll-mt-6 overflow-hidden bg-gradient-to-l from-[#29296b] to-[#000043] px-4 py-20 text-white sm:px-8 lg:py-28 xl:px-[132px]"
      >
        <DotGrid className="-left-40 top-0 h-[900px] w-[1000px] max-w-none" />
        <div className="relative mx-auto grid max-w-[1656px] items-start gap-12 lg:grid-cols-[1fr_535px] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-12">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-6xl sm:leading-[72px]">
              Save your seat
              <br /> at the table
            </h2>
            <p className="max-w-[560px] text-lg font-medium leading-8 text-white/90 sm:text-2xl sm:leading-9">
              Seating is limited. Reserve your spot and we&rsquo;ll follow up with confirmation
              details before the event.
            </p>
            <ul className="mt-2 flex flex-col gap-3 text-base font-medium text-[#d5d7d9] sm:text-lg">
              <li className="flex items-center gap-3">
                <CalendarDays className="size-5 text-[#f96d30]" aria-hidden /> Monday, November 2 · 7:30–10:30 PM
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-[#f96d30]" aria-hidden /> St. Elmo Steak House, Indianapolis
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] border-4 border-white/20 bg-white px-6 pb-6 pt-8 text-[#070809] bg-clip-padding">
            <h3 className="mb-8 text-[28px] font-semibold leading-9 tracking-[-0.01em] text-[#000043]">
              Reserve your seat
            </h3>
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="relative overflow-hidden bg-[#f6f5f2] px-4 pt-16 sm:px-8 xl:px-[132px]">
        <div className="mx-auto flex max-w-[1656px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <a href="https://www.hawksearch.com" aria-label="HawkSearch home">
            <Image src={LOGO} alt="HawkSearch" width={243} height={42} />
          </a>
          <PillButton href="https://www.hawksearch.com/book-a-demo" variant="navy" external>
            Book a demo
          </PillButton>
        </div>
        <p
          aria-hidden
          className="pointer-events-none mt-10 select-none whitespace-nowrap text-center text-[min(15.5vw,290px)] font-semibold lowercase leading-[0.8] tracking-[-0.05em] text-[#010132] opacity-[0.06]"
        >
          hawksearch
        </p>
        <div className="relative mx-auto flex max-w-[1656px] flex-wrap gap-x-12 gap-y-3 border-t border-[#070809]/10 py-10 text-base text-[#070809]/70">
          <span>© 2026 HawkSearch</span>
          <a href="https://www.hawksearch.com/terms-of-use" className="hover:text-[#070809]">Terms of Use</a>
          <a href="https://www.iubenda.com/privacy-policy/63903694" className="hover:text-[#070809]">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}
