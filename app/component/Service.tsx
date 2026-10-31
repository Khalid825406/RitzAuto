import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Search,
  X,
  ArrowRight,
  Phone,
  ChevronDown,
  Clock,
  ShieldCheck,
} from "lucide-react";

const AREAS: string[] = [
  "Al Barari", "Al Barsha", "Al Barsha 1", "Al Barsha 2", "Al Barsha 3", "Al Barsha South",
  "Barsha Heights", "Al Quoz", "Al Quoz 1", "Al Quoz 2", "Al Quoz 3", "Al Safa", "Al Manara",
  "Al Furjan", "Al Hamriya", "Al Jaddaf", "Al Nahda", "Al Mamzar", "Al Mankhool", "Al Satwa",
  "Al Qusais", "Al Rashidiya", "Al Sufouh", "Al Twar", "Al Wasl", "Al Warqa", "Arabian Ranches",
  "Arjan", "Bluewaters Island", "Bur Dubai", "Business Bay", "City Walk", "Damac Hills",
  "Damac Hills 2", "Damac Lagoons", "Deira", "DIFC", "Discovery Gardens", "Downtown Dubai",
  "Dubai Creek Harbour", "Dubai Design District", "Dubai Festival City", "Dubai Healthcare City",
  "Dubai Hills", "Dubai Production City", "Dubai Silicon Oasis", "Dubai South",
  "Dubai Sports City", "Dubai Studio City", "Emirates Hills", "Green Community Village",
  "International City", "Jumeirah", "Jumeirah Golf Estates", "Jumeirah Lakes Towers",
  "Jumeirah Village Circle", "Jumeirah Village Triangle", "Karama", "La Mer", "Liwan",
  "Mirdif", "Muhaisnah", "Nad Al Hamar", "Nad Al Sheba", "Oud Metha", "Palm Jumeirah",
  "Pearl Jumeirah", "Ras Al Khor", "Sobha Hartland", "The Gardens", "The Greens", "The Lakes",
  "The Springs", "Tilal Al Ghaf", "Town Square", "Umm Suqeim", "Wadi Al Safa", "Warsan",
  "West Bank", "Zabeel",
];

const POPULAR_TOP: string[] = [
  "Downtown Dubai", "Business Bay", "Dubai Marina", "Palm Jumeirah",
  "JLT", "Dubai Hills", "Jumeirah", "Al Barsha",
];
const POPULAR_BOTTOM: string[] = [
  "Arabian Ranches", "Mirdif", "Deira", "Bur Dubai",
  "Al Quoz", "Dubai Silicon Oasis", "Jumeirah Village Circle", "DIFC",
];

const INITIAL_COUNT = 24;

/* Marquee keyframes live here, so no tailwind.config changes are needed */
const MARQUEE_CSS = `
@keyframes areas-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes areas-marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.areas-marquee { animation: areas-marquee 30s linear infinite; }
.areas-marquee-rev { animation: areas-marquee-rev 30s linear infinite; }
.areas-marquee-wrap:hover .areas-marquee,
.areas-marquee-wrap:hover .areas-marquee-rev { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .areas-marquee, .areas-marquee-rev { animation: none; }
}
`;

/* ---------- Marquee ---------- */

type MarqueeRowProps = {
  items: string[];
  reverse?: boolean;
};

function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  const loop = [...items, ...items];

  return (
    <div className="areas-marquee-wrap relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex w-max ${reverse ? "areas-marquee-rev" : "areas-marquee"}`}>
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mr-3 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
          >
            <MapPin size={14} className="text-[#176DA5]" aria-hidden />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

type ServiceAreasProps = {
  PHONE: string;
};

export default function ServiceAreas({ PHONE }: ServiceAreasProps) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? AREAS.filter((a) => a.toLowerCase().includes(q)) : AREAS;
  }, [query]);

  const searching = query.trim().length > 0;
  const visible = searching || expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  const stats = [
    { v: `${AREAS.length}+`, l: "Areas covered", Icon: MapPin },
    { v: "Free", l: "Pick-up & drop-off", Icon: ShieldCheck },
    { v: "7 Days", l: "Open every week", Icon: Clock },
  ];

  return (
    <section
      id="service-areas"
      aria-labelledby="areas-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20"
    >
      <style>{MARQUEE_CSS}</style>

      {/* Background effects (same as other sections) */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#2694D2]/15 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2694D2]/25 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#176DA5] shadow-sm">
            <MapPin size={14} aria-hidden />
            Service Areas
          </span>

          <h2
            id="areas-heading"
            className="mt-5 text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]"
          >
            Wherever You Are in Dubai.
            <span className="block text-[#176DA5]">We Come to You.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
            Professional car repair, maintenance and roadside assistance across
            Dubai. Find your area below.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white py-5 shadow-sm">
          {stats.map(({ v, l, Icon }) => (
            <div key={l} className="flex flex-col items-center px-2 text-center">
              <Icon size={18} className="mb-1.5 text-[#176DA5]" aria-hidden />
              <p className="text-lg font-extrabold text-slate-900 sm:text-xl">{v}</p>
              <p className="text-[11px] text-slate-500 sm:text-xs">{l}</p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-12 space-y-3" aria-hidden>
          <MarqueeRow items={POPULAR_TOP} />
          <MarqueeRow items={POPULAR_BOTTOM} reverse />
        </div>

        {/* Search */}
        <div className="mx-auto mt-14 max-w-xl">
          <label htmlFor="area-search" className="sr-only">
            Search your area
          </label>
          <div className="relative">
            <Search
              size={18}
              aria-hidden
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              id="area-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your area, e.g. Business Bay"
              className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-800 shadow-lg shadow-slate-200/60 outline-none transition placeholder:text-slate-400 focus:border-[#176DA5] focus:ring-4 focus:ring-[#2694D2]/20"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500" aria-live="polite">
            {searching
              ? `${filtered.length} area${filtered.length === 1 ? "" : "s"} found`
              : `Showing ${visible.length} of ${AREAS.length} areas`}
          </p>
        </div>

        {/* Grid */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {visible.map((area, i) => (
              <motion.li
                key={area}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, delay: Math.min(i, 12) * 0.02 }}
              >
                <a
                  href="#contact"
                  className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#176DA5] hover:shadow-lg hover:shadow-[#176DA5]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#2694D2]/25 bg-[#176DA5]/10 text-[#176DA5] transition-colors group-hover:border-[#176DA5] group-hover:bg-[#176DA5] group-hover:text-white">
                    <MapPin size={15} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{area}</span>
                  <ArrowRight
                    size={14}
                    aria-hidden
                    className="shrink-0 -translate-x-1 text-[#176DA5] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-base font-bold text-slate-900">We couldn&apos;t find that area</p>
            <p className="mt-2 text-sm text-slate-500">
              We may still be able to reach you. Call us and we&apos;ll confirm availability.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#176DA5]/25 transition hover:-translate-y-0.5"
            >
              <Phone size={15} aria-hidden /> Call to confirm
            </a>
          </div>
        )}

        {/* Show more / less */}
        {!searching && filtered.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#176DA5] hover:text-[#176DA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
            >
              {expanded ? "Show fewer areas" : `View all ${AREAS.length} areas`}
              <ChevronDown
                size={16}
                aria-hidden
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}