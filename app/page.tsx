"use client";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Wrench, Truck, ShieldCheck, Car, Settings, Armchair, SprayCan,
  ScanSearch, Award, Gauge as GaugeIcon, HeartHandshake, CalendarCheck, KeyRound, ClipboardCheck, ThumbsUp,
  BatteryCharging, Zap, CircleDot, Fuel, Star, Check, ArrowRight, MessageCircle,
  ArrowUpRight,
  Sparkles,
  Droplets,
  Menu, X

} from "lucide-react";
import BenefitsSection from "../app/component/Benefits"
import ServiceAreas from "../app/component/Service";

const PHONE = "80079772";
const WA = "https://wa.me/971567807979";

const services = [
  { i: Wrench, t: "Car Repair" }, { i: Truck, t: "Roadside Assistance" }, { i: ShieldCheck, t: "Service Contract" },
  { i: Car, t: "Auto Body Shop" }, { i: Settings, t: "Minor / Major Service" }, { i: Armchair, t: "Car Upholstery" },
  { i: Gauge, t: "Car Modification" }, { i: ClipboardCheck, t: "Car Inspection" }, { i: SprayCan, t: "Auto Spa" },
];
const why = [
  { i: ScanSearch, t: "Engine Diagnostics", d: "Advanced diagnostic tools to accurately identify and resolve performance issues." },
  { i: Award, t: "Certified Technicians", d: "Highly trained technicians delivering reliable repairs for all vehicle types." },
  { i: Settings, t: "Modern Equipment", d: "State-of-the-art equipment for reliable and efficient repairs." },
  { i: HeartHandshake, t: "Vehicle Care", d: "Comprehensive repair and maintenance to keep your vehicle operating safely." },
];
const road = [
  { i: BatteryCharging, t: "Car Battery Change", d: "Fast replacement with testing and professional installation." },
  { i: Zap, t: "Jump Start", d: "Emergency jump-start assistance to get you moving quickly." },
  { i: CircleDot, t: "Flat Tyre Change", d: "Quick tyre replacement and roadside puncture assistance." },
  { i: Fuel, t: "Fuel Delivery", d: "On-demand fuel delivery whenever you're stranded." },
];
const steps = [
  { i: CalendarCheck, t: "Book a service", d: "Call us for booking and free inspection." },
  { i: KeyRound, t: "Free pick-up", d: "We collect your car from home, office or mall." },
  { i: ClipboardCheck, t: "Free inspection", d: "We check your concerns plus a general health check." },
  { i: ThumbsUp, t: "Job approval", d: "You get a fair estimate and approve the work." },
];
type Brand = {
  name: string;
  logo: string;
};


const SERVICE_IMAGES: string[] = [
  "/services/engine.jpeg",
  "/services/car-repair.jpeg",
  "/services/oil-change.jpeg",
  "/services/ac-service.jpeg",
  "/services/car-detailing.jpeg",
  "/services/car-upholstery.png",
  "/services/Modification.png",
  "/services/car-inspection.png",
  "/services/auto-spa.png",
];

const ROADSIDE_IMAGES: string[] = [
  "/battery-jumpstart.jpeg",
  "/jump-start.jpeg",
  "/flat-tyre.jpeg",
  "/fuel-delivery.jpeg",
];

const brands: Brand[] = [
  { name: "Mercedes-Benz", logo: "/brand-1.webp" },
  { name: "BMW", logo: "/brand-2.webp" },
  { name: "Audi", logo: "/brand-3.webp" },
  { name: "Porsche", logo: "/brand-5.webp" },
  { name: "Toyota", logo: "/brand-6.webp" },
  { name: "Honda", logo: "/brand-7.webp" },
  { name: "Lexus", logo: "/brand-8.webp" },
  { name: "Ford", logo: "/brand-9.webp" },
  { name: "Land Rover", logo: "/brand-10.webp" },
  { name: "Land Rover", logo: "/brand-11.webp" },
  { name: "Land Rover", logo: "/brand-12.webp" },
  { name: "Land Rover", logo: "/brand-13.webp" },
  { name: "Land Rover", logo: "/brand-14.webp" },
  { name: "Land Rover", logo: "/brand-15.webp" },
  { name: "Land Rover", logo: "/brand-16.webp" },
  { name: "Land Rover", logo: "/brand-17.webp" },
  { name: "Land Rover", logo: "/brand-18.webp" },
  { name: "Land Rover", logo: "/brand-19.webp" },
  { name: "Land Rover", logo: "/brand-20.png" },
  { name: "Land Rover", logo: "/brand-21.webp" },
  { name: "Land Rover", logo: "/brand-22.webp" },
  { name: "Land Rover", logo: "/brand-23.webp" },
  { name: "Land Rover", logo: "/brand-24.webp" },
  { name: "Land Rover", logo: "/brand-25.webp" },
  { name: "Land Rover", logo: "/brand-26.webp" },
  { name: "Land Rover", logo: "/brand-27.webp" },
  { name: "Land Rover", logo: "/brand-28.webp" },
  { name: "Land Rover", logo: "/brand-29.webp" },
  { name: "Land Rover", logo: "/brand-30.webp" },
  { name: "Land Rover", logo: "/brand-31.webp" },
  { name: "Land Rover", logo: "/brand-32.webp" },
  { name: "Land Rover", logo: "/brand-33.webp" },
  { name: "Land Rover", logo: "/brand-34.webp" },
  { name: "Land Rover", logo: "/brand-35.webp" },
  { name: "Land Rover", logo: "/brand-36.webp" },
  { name: "Land Rover", logo: "/brand-37.webp" },
  { name: "Land Rover", logo: "/brand-38.webp" },
  { name: "Land Rover", logo: "/brand-39.webp" },
  { name: "Land Rover", logo: "/brand-40.webp" },
  { name: "Land Rover", logo: "/brand-41.webp" },
  { name: "Land Rover", logo: "/brand-42.webp" },
  { name: "Land Rover", logo: "/brand-43.webp" },
  { name: "Land Rover", logo: "/brand-45.webp" },
  { name: "Land Rover", logo: "/brand-46.webp" },
];
const reviews = [
  { n: "Nebu George", x: "The service there was pretty good and satisfactory!!" },
  { n: "Max Sales2024", x: "Extremely satisfied with the overall service experience. The staff was professional, friendly and gave on-time service. My car feels like new." },
  { n: "Abu Aboud", x: "Excellent handling, and the technicians work cleanly and professionally." },
];

const up = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };

function Gauge() {
  const ticks = Array.from({ length: 41 }, (_, k) => k);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-0 rounded-full bg-royal/30 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Speedometer showing 20 plus years of experience">
        <defs>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" /><stop offset=".5" stopColor="#8d99ab" /><stop offset="1" stopColor="#e6ebf2" /></linearGradient>
          <radialGradient id="face" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#13213b" /><stop offset="1" stopColor="#060b16" /></radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="url(#rim)" />
        <circle cx="200" cy="200" r="176" fill="url(#face)" />
        <motion.circle cx="200" cy="200" r="158" fill="none" stroke="#2b82e6" strokeWidth="6" strokeLinecap="round"
          strokeDasharray="745" initial={{ strokeDashoffset: 745 }} animate={{ strokeDashoffset: 190 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} transform="rotate(135 200 200)" />
        {ticks.map((k) => {
          const a = ((135 + k * 6.75) * Math.PI) / 180;
          const big = k % 5 === 0;
          const r1 = big ? 128 : 136;

          const x1 = Number((200 + r1 * Math.cos(a)).toFixed(4));
          const y1 = Number((200 + r1 * Math.sin(a)).toFixed(4));
          const x2 = Number((200 + 146 * Math.cos(a)).toFixed(4));
          const y2 = Number((200 + 146 * Math.sin(a)).toFixed(4));

          return (
            <line
              key={k}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={big ? "#fff" : "#5a6a85"}
              strokeWidth={big ? 3 : 1.5}
            />
          );
        })}
        <motion.g style={{ originX: "200px", originY: "200px" }} initial={{ rotate: -135 }} animate={{ rotate: 90 }} transition={{ duration: 2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}>
          <polygon points="200,200 192,196 196,70 204,70 208,196" fill="#e63946" transform="rotate(0 200 200)" />
        </motion.g>
        <circle cx="200" cy="200" r="16" fill="url(#rim)" />
        <text x="200" y="262" textAnchor="middle" fill="#fff" fontSize="64" fontWeight="900" fontFamily="var(--font-archivo)">20+</text>
        <text x="200" y="290" textAnchor="middle" fill="#c8d0dc" fontSize="15" fontWeight="600">YEARS ON THE ROAD</text>
      </svg>
    </div>
  );
}






const transformations = [
  {
    title: "Paint Correction",
    description: "Scratches removed and gloss restored.",
    before: "/paint-before.png",
    after: "/paint-after.png",
  },
  {
    title: "Headlight Restoration",
    description: "Oxidation removed for clearer headlights.",
    before: "/headlight-before.png",
    after: "/headlight-after.png",
  },
];

function BeforeAfterCard({
  item,
}: {
  item: (typeof transformations)[number];
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image Comparison */}
      <div className="relative h-[230px] overflow-hidden sm:h-[280px]">

        {/* Before Image */}
        <Image
          src={item.before}
          alt={`${item.title} before`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        {/* After Image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <Image
            src={item.after}
            alt={`${item.title} after`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 z-10 rounded-md bg-white px-3 py-1.5 text-[11px] font-bold text-slate-900 shadow">
          Before
        </span>

        <span className="absolute right-3 top-3 z-10 rounded-md bg-white px-3 py-1.5 text-[11px] font-bold text-slate-900 shadow">
          After
        </span>

        {/* Slider Line */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] bg-white shadow"
          style={{ left: `${position}%` }}
        />

        {/* Slider Handle */}
        <div
          className="pointer-events-none absolute top-1/2 z-30 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white text-slate-900 shadow-lg"
          style={{ left: `${position}%` }}
        >
          <ArrowRight size={16} />
        </div>

        {/* Interactive Range */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Compare before and after ${item.title}`}
          className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      {/* Card Details */}
      <div className="px-5 py-4">
        <h3 className="text-sm font-bold text-[#101828]">
          {item.title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  return (


<section
  id="our-work"
  aria-labelledby="work-heading"
  className="relative overflow-hidden bg-white py-16 sm:py-20"
>
  {/* Background decoration */}
  <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#2694D2]/15 blur-[120px]" />
  <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-xl text-center"
    >
      <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#176DA5] shadow-sm">
        Our Work
      </span>

      <h2
        id="work-heading"
        className="mt-5 text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]"
      >
        Visible Results.
        <span className="block text-[#176DA5]">Real Transformations.</span>
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600">
        Real before-and-after results from diagnostics, detailing, and
        performance upgrades. Experience the difference professional care
        makes.
      </p>
    </motion.div>

    {/* Comparison cards */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6"
    >
      {transformations.map((item) => (
        <motion.div
          key={item.title}
          variants={{
            hidden: { opacity: 0, y: 35, scale: 0.97 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          whileHover={{ y: -5 }}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#2694D2]/50 hover:shadow-xl hover:shadow-[#176DA5]/15"
        >
          {/* thin brand accent on top of every card */}
          <div
            aria-hidden
            className="h-[3px] w-full bg-gradient-to-r from-[#145B8B] via-[#2694D2] to-[#65B9EC] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
          <BeforeAfterCard item={item} />
        </motion.div>
      ))}
    </motion.div>

    {/* Gallery button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10 text-center"
    >
      <Link
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-7 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#176DA5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
      >
        View Full Gallery
        <ArrowRight
          size={15}
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  </div>
</section>
  );
}



export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">


      {/* TOP BAR */}
      <div className="border-b border-white/[0.06] bg-[#0B1118] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2.5 text-xs sm:text-sm">
          <span className="flex items-center gap-2 text-[#C5CDD5]">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-[#2694D2] shadow-[0_0_10px_#2694D2]"
            />
            Free Pick-up &amp; Drop-off, Car Wash &amp; 360° Inspection
          </span>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#2694D2]/30 bg-[#176DA5]/15 px-3 py-1.5 font-semibold text-[#65B9EC] transition duration-300 hover:border-[#2694D2] hover:bg-[#176DA5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
          >
            <MessageCircle size={14} aria-hidden />
            +971 567807979
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#C5CDD5]/20 bg-white/[0.04] px-3 py-1.5 font-semibold text-[#C5CDD5] transition duration-300 hover:border-[#2694D2] hover:bg-[#176DA5] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
          >
            <Phone size={14} aria-hidden />
            Toll-Free: {PHONE}
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#111820]/95 shadow-xl shadow-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* LOGO */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Ritz Auto Care LLC, home"
            className="flex shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45B5F0]"
          >
            <Image
              src="/logo.png"
              alt="Ritz Auto Care LLC"
              width={176}
              height={56}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {["Services", "Roadside", "Brands", "How it works", "Reviews", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="group relative py-3 text-sm font-semibold text-[#C5CDD5] transition duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {item}
                  <span
                    aria-hidden
                    className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                  />
                </a>
              )
            )}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#176DA5]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0] lg:inline-flex"
          >
            Get a Free Quote
            <ArrowUpRight size={17} aria-hidden />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C5CDD5]/20 bg-white/[0.04] text-[#C5CDD5] transition duration-300 hover:border-[#2694D2] hover:bg-[#176DA5]/15 hover:text-[#45B5F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0] lg:hidden"
          >
            {mobileMenuOpen ? <X size={23} aria-hidden /> : <Menu size={23} aria-hidden />}
          </button>
        </div>

        {/* Gradient accent line under the navbar (replaces the flat border) */}
        <div
          aria-hidden
          className="h-px w-full bg-gradient-to-r from-transparent via-[#2694D2]/60 to-transparent"
        />

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/[0.06] bg-[#111820] lg:hidden"
            >
              <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                {["Services", "Roadside", "Brands", "How it works", "Reviews", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="border-b border-white/[0.06] py-3 text-sm font-semibold text-[#C5CDD5] transition duration-300 hover:pl-2 hover:text-[#45B5F0]"
                    >
                      {item}
                    </a>
                  )
                )}

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#145B8B] to-[#2694D2] px-5 py-3 font-bold text-white shadow-lg shadow-[#176DA5]/25 transition duration-300 hover:shadow-[#2694D2]/40"
                >
                  Get a Free Quote
                  <ArrowUpRight size={17} aria-hidden />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>












      <section className="relative isolate h-[560px] overflow-hidden bg-[#0B1118] text-white sm:h-[600px] lg:h-[min(80vh,620px)]">
        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.png"
          aria-label="Ritz Auto Care professional automotive workshop"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        {/* OVERLAYS (logo navy instead of generic black-blue) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111820]/95 via-[#111820]/70 to-[#111820]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/80 via-transparent to-[#111820]/10" />
        {/* soft brand glow behind the text */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#176DA5]/25 blur-[130px]"
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 pb-8 pt-10 sm:px-8 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {/* EYEBROW */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#2694D2]/30 bg-[#176DA5]/15 px-3.5 py-2 backdrop-blur-md">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-[#45B5F0] shadow-[0_0_8px_#2694D2]"
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#65B9EC] sm:text-[10px]">
                Premium Automotive Care
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-lg text-[32px] font-extrabold leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
              Premium Car Care.
              <span className="mt-1 block bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
                Without Compromise.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-md text-[12px] leading-6 text-[#C5CDD5] sm:text-[13px] sm:leading-7">
              Professional automotive solutions for luxury and everyday vehicles.
              Expert technicians and advanced diagnostics for complete vehicle care.
            </p>

            {/* LOCATION */}
            <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#C5CDD5]">
              <MapPin size={14} className="text-[#45B5F0]" aria-hidden />
              Dubai &amp; Abu Dhabi, UAE
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-5 py-3 text-[11px] font-bold text-white shadow-lg shadow-[#176DA5]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0] sm:text-xs"
              >
                Book Your Service
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#C5CDD5]/30 bg-white/[0.06] px-5 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#2694D2] hover:bg-[#176DA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0] sm:text-xs"
              >
                <Phone size={14} aria-hidden />
                {PHONE}
              </a>
            </div>

            {/* FREE BENEFITS */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5">
              {["Free Pick-up & Drop-off", "Free Inspection", "Complimentary Wash"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Check size={13} aria-hidden className="shrink-0 text-[#45B5F0]" />
                    <span className="text-[10px] font-medium text-[#C5CDD5] sm:text-[11px]">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* BRAND CAPTION */}
        <div className="absolute bottom-7 right-8 z-10 hidden text-right lg:block">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#65B9EC]/70">
            Ritz Auto Care LLC
          </p>
          <p className="mt-1 text-xs font-semibold text-[#C5CDD5]">
            Care That Goes Beyond the Road.
          </p>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
          <div className="h-full w-1/3 bg-gradient-to-r from-[#145B8B] via-[#2694D2] to-[#65B9EC]" />
        </div>
      </section>





      {/* Stats strip, logo palette: #111820 bg | #2694D2 gear blue | #65B9EC pale | #C5CDD5 silver */}

      <section
        aria-label="Ritz Auto Care in numbers"
        className="relative overflow-hidden bg-[#111820] text-white"
      >
        {/* top and bottom accent lines */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/60 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/30 to-transparent"
        />
        {/* soft glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#176DA5]/20 blur-[100px]"
        />

        <dl className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            ["20+", "Years of experience"],
            ["48K", "Vehicles repaired"],
            ["32K", "Happy clients"],
            ["12", "Awards & certifications"],
          ].map(([n, l], k) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.08 }}
              className="border-l-2 border-[#2694D2] pl-4"
            >
              <dd className="font-display text-4xl font-black text-white">
                <span className="bg-gradient-to-b from-white to-[#65B9EC] bg-clip-text text-transparent">
                  {n}
                </span>
              </dd>
              <dt className="mt-1 text-sm text-[#C5CDD5]">{l}</dt>
            </motion.div>
          ))}
        </dl>
      </section>



      {/* PREMIUM SERVICES SECTION */}



      <section
        id="services"
        aria-labelledby="services-heading"
        className="relative overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20"
      >
        {/* Background effects (same as the other light sections) */}
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/70 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-slate-200/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADING */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#176DA5] shadow-sm">
              <Wrench size={13} aria-hidden />
              Our Services
            </span>

            <h2
              id="services-heading"
              className="mt-5 text-[26px] font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[32px] lg:text-[36px]"
            >
              Complete Automotive Care.
              <span className="block text-[#176DA5]">Excellence in Every Detail.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
              From advanced diagnostics to premium vehicle maintenance, experience
              professional automotive care designed to keep your vehicle performing at
              its best.
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.7fr]">
            {/* LEFT: WHY CHOOSE RITZ */}
            <aside className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111820] p-6 text-white shadow-xl shadow-[#111820]/20 sm:p-7">
                {/* glows */}
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#176DA5]/35 blur-[80px]" />
                <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#2694D2]/15 blur-[80px]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/70 to-transparent" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#2694D2]/30 bg-[#176DA5]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#65B9EC]">
                    Why Choose Ritz
                  </span>

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight sm:text-[28px]">
                    Your Car Deserves
                    <span className="block bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
                      Expert Care.
                    </span>
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#C5CDD5]">
                    We combine professional expertise, modern diagnostic technology
                    and quality workmanship to deliver reliable automotive solutions.
                  </p>

                  {/* HIGHLIGHTS */}
                  <ul className="mt-7 space-y-3.5">
                    {[
                      "Professional automotive technicians",
                      "Advanced diagnostic equipment",
                      "Quality parts and workmanship",
                      "Convenient customer service",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#2694D2]/30 bg-[#176DA5]/20 text-[#65B9EC]">
                          <Check size={13} strokeWidth={3} aria-hidden />
                        </span>
                        <span className="text-[13px] font-medium text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* EXPERIENCE */}
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="bg-gradient-to-b from-white to-[#65B9EC] bg-clip-text text-5xl font-black text-transparent">
                      20+
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Years of Experience</p>
                      <p className="mt-1 text-[11px] text-[#C5CDD5]/80">
                        Professional automotive care
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <a
                    href="#contact"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-5 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#176DA5]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
                  >
                    Book Your Service
                    <ArrowUpRight size={16} aria-hidden />
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#C5CDD5]/20 bg-white/[0.04] px-5 py-3 text-[13px] font-semibold text-[#C5CDD5] transition-all duration-300 hover:border-[#2694D2] hover:bg-[#176DA5]/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
                  >
                    <Phone size={14} aria-hidden />
                    {PHONE}
                  </a>
                </div>
              </div>
            </aside>

            {/* RIGHT: SERVICE CARDS */}
            <div>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Explore Our Services</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Professional solutions for every vehicle.
                  </p>
                </div>

                <span className="rounded-full border border-blue-100 bg-white px-3.5 py-2 text-[11px] font-bold text-[#176DA5] shadow-sm">
                  {String(services.length).padStart(2, "0")} Services
                </span>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {services.map(({ i: Icon, t }, index) => (
                  <motion.a
                    key={t}
                    href="#contact"
                    aria-label={`${t}, book this service`}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative isolate block aspect-[4/3.4] overflow-hidden rounded-2xl border border-slate-200 bg-[#111820] shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-[#176DA5]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
                  >
                    {/* IMAGE */}
                    <Image
                      src={SERVICE_IMAGES[index] ?? "/services/engine.jpeg"}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* OVERLAYS: logo navy + blue tint on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/45 to-[#111820]/5 transition-colors duration-500 group-hover:via-[#111820]/65" />
                    <div className="absolute inset-0 bg-[#176DA5]/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-[#176DA5]/25" />

                    {/* TOP */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-[#2694D2] group-hover:bg-[#176DA5]">
                        <Icon size={20} strokeWidth={1.8} aria-hidden />
                      </span>

                      <span className="rounded-full border border-white/20 bg-[#111820]/40 px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#C5CDD5] backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* BOTTOM */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <div className="mb-2.5 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-500 group-hover:w-16" />

                      <h3 className="text-[15px] font-bold leading-snug text-white sm:text-base">{t}</h3>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#65B9EC]">
                          Explore Service
                        </span>

                        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#2694D2] group-hover:bg-[#176DA5]">
                          <ArrowUpRight size={15} aria-hidden />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* BOTTOM STRIP */}
              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
                <div>
                  <p className="text-base font-extrabold text-slate-900">
                    Not sure what your car needs?
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Get a free 360° inspection with free pick-up &amp; drop-off.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#145B8B] to-[#2694D2] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#176DA5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
                >
                  Get a Free Quote
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ServiceAreas PHONE={PHONE} />

      {/* Premium About + Why Choose Us */}


    

<section
        id="about"
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20 lg:py-24"
      >
        {/* Background decoration */}
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#2694D2]/15 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-slate-200/70 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ================= INTRO ================= */}
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* IMAGE (left on desktop, below text on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative order-2 pb-8 lg:order-1"
            >
              {/* offset frame */}
              <div
                aria-hidden
                className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#2694D2]/30 sm:block"
              />

              {/* main image */}
              <div className="group relative h-[340px] overflow-hidden rounded-3xl bg-[#111820] shadow-2xl shadow-[#111820]/20 sm:h-[460px] lg:h-[540px]">
                <Image
                  src="/about.jpeg"
                  alt="Ritz Auto Care professional automotive workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/90 via-[#111820]/10 to-[#111820]/20" />
                <div className="absolute inset-0 bg-[#176DA5]/10 mix-blend-multiply" />

                {/* top label */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#111820]/50 px-3.5 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                  <ShieldCheck size={14} className="text-[#45B5F0]" aria-hidden />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Ritz Auto Care LLC
                  </span>
                </div>

                {/* bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <span className="inline-flex rounded-full border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] to-[#2694D2] px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
                    Premium Automotive Care
                  </span>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                    Driven By
                    <span className="block bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
                      Excellence.
                    </span>
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-[#C5CDD5]">
                    Professional automotive care backed by experience, advanced
                    technology and dedicated technicians.
                  </p>
                </div>
              </div>

              {/* experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-0 right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-[#111820]/10 sm:right-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#145B8B] to-[#2694D2] text-white">
                  <Award size={22} aria-hidden />
                </div>
                <div>
                  <p className="text-2xl font-black leading-none text-slate-900">20+</p>
                  <p className="mt-1 text-[10px] font-semibold text-slate-500">Years of Experience</p>
                </div>
              </motion.div>

              {/* quality badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -left-2 top-24 hidden items-center gap-2.5 rounded-xl border border-white/60 bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:flex lg:-left-5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#176DA5]/10 text-[#176DA5]">
                  <Check size={16} strokeWidth={3} aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold text-slate-900">Quality First</p>
                  <p className="text-[10px] text-slate-500">Every service, every time.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CONTENT (right on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#176DA5] shadow-sm">
                <ShieldCheck size={14} aria-hidden />
                About Ritz Auto Care
              </span>

              <h2
                id="about-heading"
                className="mt-5 max-w-xl text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[34px]"
              >
                More Than Just Car Maintenance.
                <span className="block text-[#176DA5]">We Care About Your Drive.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                Ritz Auto Care delivers professional automotive repair and
                maintenance services across Dubai and Abu Dhabi. Our skilled
                technicians combine advanced diagnostics, modern equipment and
                quality workmanship to keep your vehicle performing at its best.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                From routine servicing to complex mechanical repairs, we focus on
                reliability, transparency and customer satisfaction at every step.
              </p>

              {/* Highlights: 2x2 cards */}
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional Technicians",
                  "Advanced Diagnostics",
                  "Quality Workmanship",
                  "Customer-Focused Service",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2694D2]/50 hover:shadow-md hover:shadow-[#176DA5]/10"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#145B8B] to-[#2694D2] text-white">
                      <Check size={15} strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-[13px] font-bold text-slate-900">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-6 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#176DA5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
                >
                  Get in Touch
                  <ArrowUpRight size={16} aria-hidden />
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-[13px] font-bold text-slate-900 transition-all duration-300 hover:border-[#176DA5] hover:text-[#176DA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
                >
                  <Phone size={15} aria-hidden />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* ================= WHY CHOOSE US ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative mt-20 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111820] p-6 text-white shadow-2xl shadow-[#111820]/25 sm:p-10 lg:mt-24 lg:p-12"
          >
            {/* glows + accent line */}
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#176DA5]/35 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#2694D2]/15 blur-[100px]" />
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/70 to-transparent" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
              {/* heading column */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="inline-flex rounded-full border border-[#2694D2]/30 bg-[#176DA5]/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#65B9EC]">
                  Why Choose Us
                </span>

                <h2 className="mt-5 text-2xl font-extrabold leading-tight sm:text-[28px] lg:text-[32px]">
                  The Ritz Auto Care
                  <span className="block bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
                    Difference.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#C5CDD5]">
                  Discover the expertise, technology and commitment that make your
                  vehicle our priority.
                </p>

                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-lg border border-[#C5CDD5]/20 bg-white/[0.04] px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:border-[#2694D2] hover:bg-[#176DA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
                >
                  Book a Service
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              {/* cards column */}
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {why.map(({ i: Icon, t, d }, k) => (
                  <motion.li
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 28 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[#2694D2]/60 hover:bg-white/[0.07]"
                  >
                    <span
                      aria-hidden
                      className="absolute right-5 top-4 text-3xl font-black text-white/[0.06] transition-colors group-hover:text-[#2694D2]/25"
                    >
                      {String(k + 1).padStart(2, "0")}
                    </span>

                    <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl border border-[#2694D2]/25 bg-[#176DA5]/20 text-[#65B9EC] transition-all duration-300 group-hover:border-[#2694D2] group-hover:bg-[#176DA5] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} aria-hidden />
                    </div>

                    <h3 className="text-[15px] font-extrabold text-white">{t}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#C5CDD5]">{d}</p>

                    <div className="mt-5 h-[3px] w-9 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-300 group-hover:w-full" />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
</section>


      <BeforeAfterSection />


      {/* Premium Roadside Assistance */}

      {/* ROADSIDE ASSISTANCE - PREMIUM LIGHT SECTION */}

     
<section
  id="roadside"
  aria-labelledby="roadside-heading"
  className="relative isolate overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20 lg:py-24"
>
  {/* Background effects */}
  <div aria-hidden className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#2694D2]/15 blur-[130px]" />
  <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-slate-200/70 blur-[120px]" />
 
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* ================= BANNER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111820] shadow-2xl shadow-[#111820]/25"
    >
      {/* background photo + overlays */}
      <Image
        src="/roadside-main.jpeg"
        alt=""
        fill
        priority={false}
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111820] via-[#111820]/90 to-[#111820]/55" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111820]/80 via-transparent to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#176DA5]/35 blur-[100px]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/70 to-transparent" />
 
      <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-14 lg:p-14">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2694D2]/30 bg-[#176DA5]/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#65B9EC] backdrop-blur-md">
            <Truck size={15} aria-hidden />
            Roadside Assistance
          </span>
 
          <h2
            id="roadside-heading"
            className="mt-5 max-w-xl text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[40px]"
          >
            Reliable Help,
            <span className="block bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
              Wherever You Are.
            </span>
          </h2>
 
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#C5CDD5]">
            Unexpected vehicle trouble can happen anytime. Get professional
            roadside assistance for battery failures, flat tyres, fuel
            emergencies and more, so you can get back on the road with
            confidence.
          </p>
 
          {/* highlights */}
          <ul className="mt-7 grid max-w-lg grid-cols-2 gap-3">
            {[
              { i: ShieldCheck, t: "Professional Support" },
              { i: Wrench, t: "Expert Assistance" },
              { i: Gauge, t: "Reliable Solutions" },
              { i: MapPin, t: "Dubai & Abu Dhabi" },
            ].map(({ i: Icon, t }, index) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-3 backdrop-blur-md"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#2694D2]/25 bg-[#176DA5]/25 text-[#65B9EC]">
                  <Icon size={17} aria-hidden />
                </span>
                <span className="text-xs font-bold leading-5 text-white">{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
 
        {/* RIGHT: help card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur-xl sm:p-7"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65B9EC]">
            Always Ready To Assist
          </p>
 
          <h3 className="mt-3 text-2xl font-black leading-tight text-white">
            Need help
            <span className="block text-[#65B9EC]">right now?</span>
          </h3>
 
          <p className="mt-3 text-[13px] leading-6 text-[#C5CDD5]">
            Your journey matters to us. Reach our team directly and get roadside
            support when unexpected situations arise.
          </p>
 
          <div className="mt-6 space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-5 py-3.5 text-[13px] font-extrabold text-white shadow-lg shadow-[#176DA5]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
            >
              <Phone size={16} aria-hidden />
              Get Roadside Help
              <ArrowUpRight size={16} aria-hidden />
            </a>
 
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-[#C5CDD5]/25 bg-white/[0.05] px-5 py-3.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2694D2] hover:bg-[#176DA5]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp Us
            </a>
          </div>
 
          <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] font-semibold text-[#C5CDD5]/80">
            <ShieldCheck size={14} className="text-[#45B5F0]" aria-hidden />
            Dedicated support for your roadside needs
          </div>
        </motion.div>
      </div>
    </motion.div>
 
    {/* ================= SERVICES HEADING ================= */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="mb-9 mt-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mt-20"
    >
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#176DA5]">
          What We Offer
        </span>
 
        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[28px] lg:text-[32px]">
          Roadside Assistance
          <span className="block text-[#176DA5]">For Every Situation.</span>
        </h3>
 
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
          From minor roadside issues to unexpected emergencies, our assistance
          services help you move forward with confidence.
        </p>
      </div>
 
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2.5 text-[10px] font-extrabold text-[#176DA5] shadow-sm">
        <span aria-hidden className="h-2 w-2 rounded-full bg-[#2694D2] shadow-[0_0_8px_#2694D2]" />
        {String(road.length).padStart(2, "0")} Assistance Categories
      </span>
    </motion.div>
 
    {/* ================= SERVICE CARDS (horizontal) ================= */}
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "-40px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      className="grid gap-5 lg:grid-cols-2"
    >
      {road.map(({ i: Icon, t, d }, index) => (
        <motion.li
          key={t}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
          }}
          whileHover={{ y: -5 }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#2694D2]/50 hover:shadow-xl hover:shadow-[#176DA5]/15 sm:flex-row"
        >
          {/* image */}
          <div className="relative h-48 shrink-0 overflow-hidden bg-[#111820] sm:h-auto sm:w-[40%]">
            <Image
              src={ROADSIDE_IMAGES[index] ?? "/roadside-main.jpeg"}
              alt={`${t} roadside assistance`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#111820]/25" />
            <div className="absolute inset-0 bg-[#176DA5]/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-[#176DA5]/20" />
 
            <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-[#111820]/50 text-[10px] font-black text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
 
          {/* body */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#2694D2]/25 bg-[#176DA5]/10 text-[#176DA5] transition-all duration-300 group-hover:border-[#176DA5] group-hover:bg-[#176DA5] group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} aria-hidden />
              </span>
              <h4 className="text-base font-extrabold leading-snug text-slate-900">{t}</h4>
            </div>
 
            <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-600">{d}</p>
 
            <div className="mt-5 h-[3px] w-9 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-300 group-hover:w-full" />
 
            <a
              href={`tel:${PHONE}`}
              className="mt-4 inline-flex items-center justify-between text-xs font-extrabold text-[#176DA5] transition-colors duration-300 hover:text-[#145B8B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176DA5]"
            >
              Request Assistance
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#176DA5]/10 transition-all duration-300 group-hover:bg-[#176DA5] group-hover:text-white">
                <ArrowUpRight size={15} aria-hidden />
              </span>
            </a>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </div>
</section>

      {/* Premium How It Works Section */}


    {/*
  How It Works section, logo palette + new layout.
  #111820 logo navy | #145B8B deep | #176DA5 brand | #2694D2 gear blue
  #45B5F0 bright    | #65B9EC pale | #C5CDD5 silver | #F5F7FA page bg

  LAYOUT CHANGE
  - Old: 4 centered cards in a row with a dashed line.
  - New: sticky heading + CTA on the left, vertical timeline of steps on the right,
    plus a dark "peace of mind" card under the heading.

  Uses your existing: motion, steps = [{ i, t, d }], PHONE
  and icons: CalendarCheck, ShieldCheck, ArrowUpRight, Phone
*/}

<section
  id="how-it-works"
  aria-labelledby="how-heading"
  className="relative isolate overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20 lg:py-24"
>
  {/* Background effects */}
  <div aria-hidden className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#2694D2]/15 blur-[120px]" />
  <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:gap-16">
      {/* ================= LEFT: HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:sticky lg:top-28"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#176DA5] shadow-sm">
          <CalendarCheck size={14} aria-hidden />
          Simple Service Process
        </span>

        <h2
          id="how-heading"
          className="mt-5 text-2xl font-black leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[34px]"
        >
          Four Easy Steps to
          <span className="block text-[#176DA5]">Better Car Care.</span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Enjoy a simple and hassle-free car servicing experience. From booking
          to delivery, we make every step smooth, transparent and convenient.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-6 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#176DA5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
          >
            Book Your Service
            <ArrowUpRight size={16} aria-hidden />
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-[13px] font-bold text-slate-900 transition-all duration-300 hover:border-[#176DA5] hover:text-[#176DA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
          >
            <Phone size={15} aria-hidden />
            Call Us
          </a>
        </div>

        {/* Trust card */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111820] p-5 text-white shadow-xl shadow-[#111820]/15">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#176DA5]/40 blur-[60px]" />
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/70 to-transparent" />

          <div className="relative flex items-center gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#2694D2]/30 bg-[#176DA5]/25 text-[#65B9EC]">
              <ShieldCheck size={21} aria-hidden />
            </span>
            <p className="text-[13px] font-semibold leading-6 text-[#C5CDD5]">
              Simple booking. Professional service.{" "}
              <span className="text-white">Complete peace of mind.</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT: TIMELINE ================= */}
      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute bottom-10 left-[27px] top-10 w-0.5 bg-gradient-to-b from-[#2694D2] via-[#2694D2]/40 to-[#2694D2]/5"
        />

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1, margin: "-40px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          className="space-y-5"
        >
          {steps.map(({ i: Icon, t, d }, index) => (
            <motion.li
              key={t}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
              }}
              className="group relative flex items-start gap-4 sm:gap-5"
            >
              {/* node */}
              <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#145B8B] to-[#2694D2] text-white shadow-lg shadow-[#176DA5]/30 ring-4 ring-[#F5F7FA] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#2694D2]/50">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </div>

              {/* card */}
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2694D2]/50 group-hover:shadow-xl group-hover:shadow-[#176DA5]/15 sm:p-6">
                <span
                  aria-hidden
                  className="absolute right-5 top-3 text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#2694D2]/20"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#176DA5]">
                  Step {index + 1}
                </span>

                <h3 className="mt-2 text-base font-extrabold leading-6 text-slate-900 sm:text-[17px]">
                  {t}
                </h3>

                <p className="mt-2 max-w-xl text-[13px] leading-6 text-slate-600">{d}</p>

                <div className="mt-4 h-[3px] w-9 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-300 group-hover:w-20" />
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  </div>
</section>





      {/* FREE BENEFITS - PREMIUM LIGHT SECTION */}

      <BenefitsSection PHONE={undefined}  />




      {/* Premium Automotive Brands Showcase */}

  

<section
  id="brands"
  aria-labelledby="brands-heading"
  className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20"
>
  {/* Background decoration */}
  <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#2694D2]/15 blur-[120px]" />
  <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
    {/* Heading */}
    <div className="mb-12 text-center">
      <span className="inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#176DA5] shadow-sm sm:text-xs">
        Our Automotive Brands
      </span>

      <h2
        id="brands-heading"
        className="mt-5 text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[34px]"
      >
        Experts in Every
        <span className="block text-[#176DA5]">Automotive Brand.</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
        From luxury European vehicles to Japanese and American automobiles,
        our experts deliver professional care for all leading automotive
        brands.
      </p>

      <div
        aria-hidden
        className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#145B8B] via-[#2694D2] to-[#65B9EC]"
      />
    </div>

    {/* Brand logo grid */}
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4 lg:grid-cols-8 xl:grid-cols-10">
      {brands.slice(0, 50).map((brand, index) => (
        <motion.li
          key={`${brand.name}-${index}`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (index % 10) * 0.035 }}
          whileHover={{ y: -5, scale: 1.035 }}
          title={brand.name}
          className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#2694D2]/60 hover:shadow-xl hover:shadow-[#176DA5]/15 sm:p-5 lg:p-6"
        >
          {/* Hover background: soft brand tint */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-white to-[#176DA5]/[0.07] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Top accent line on hover */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2694D2] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Logo */}
          <div className="relative z-10 h-full w-full">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 10vw"
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Bottom hover accent */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#145B8B] to-[#2694D2] transition-all duration-300 group-hover:w-1/2"
          />
        </motion.li>
      ))}
    </ul>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <p className="mb-5 text-sm text-slate-600">
        Your vehicle deserves professional attention.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#176DA5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176DA5]"
      >
        Book Your Service
        <ArrowUpRight size={18} aria-hidden />
      </a>
    </div>
  </div>
</section>




      {/* PREMIUM CUSTOMER REVIEWS MARQUEE */}




<section
  id="reviews"
  className="relative isolate overflow-hidden bg-[#F5F7FA] py-14 text-[#0B111C] sm:py-16 lg:py-20"
>
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-slate-200/60 blur-[120px]" />

  <div className="relative">

    {/* SECTION HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-12 sm:px-5"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#20639c] shadow-sm sm:text-[10px]">
        <Star size={13} fill="currentColor" />
        Customer Testimonials
      </span>

      <h2 className="mt-5 text-[27px] font-black leading-[1.2] tracking-tight text-[#0B111C] sm:text-3xl lg:text-[36px]">
        Trusted by Car Owners
        <span className="block text-[#20639c] sm:inline sm:pl-2">
          Loved by Customers.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-[#4A5568] sm:text-sm sm:leading-7">
        Discover what our customers say about their experience
        with Ritz Auto Care and our automotive services.
      </p>

      {/* GOOGLE RATING */}
      <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm sm:gap-3 sm:px-5">
        <div className="flex gap-0.5 text-amber-400">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} size={14} fill="currentColor" />
          ))}
        </div>

        <span className="text-xs font-extrabold text-[#0B111C]">4.5/5</span>

        <span className="h-4 w-px bg-slate-200" />

        <span className="text-[10px] font-medium text-[#5B6678] sm:text-xs">
          Based on 121 Google reviews
        </span>
      </div>
    </motion.div>

    {/* FIRST ROW - LEFT TO RIGHT */}
    <div className="review-marquee-wrapper">
      <div className="review-track review-left">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-4 pr-4">
            {reviews.map((review) => (
              <article
                key={`${group}-${review.n}`}
                className="group flex w-[270px] shrink-0 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:w-[320px] sm:p-5"
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#6B7789]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>
                </div>

                {/* REVIEW TEXT */}
                <blockquote className="mt-4 min-h-[78px] text-[11px] leading-6 text-[#3A4658] sm:text-xs">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}
                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-xs font-extrabold text-[#2A7DE1]">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-extrabold text-[#0B111C]">
                      {review.n}
                    </h3>
                    <p className="mt-1 text-[9px] text-[#6B7789]">
                      Customer Review
                    </p>
                  </div>

                  <div className="ml-auto text-[#2A7DE1]/80">
                    <MessageCircle size={17} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* SECOND ROW - RIGHT TO LEFT */}
    <div className="review-marquee-wrapper mt-4">
      <div className="review-track review-right">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-4 pr-4">
            {[...reviews].reverse().map((review) => (
              <article
                key={`${group}-${review.n}`}
                className="group flex w-[270px] shrink-0 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:w-[320px] sm:p-5"
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#6B7789]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>
                </div>

                {/* REVIEW TEXT */}
                <blockquote className="mt-4 min-h-[78px] text-[11px] leading-6 text-[#3A4658] sm:text-xs">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}
                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-xs font-extrabold text-[#2A7DE1]">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-extrabold text-[#0B111C]">
                      {review.n}
                    </h3>
                    <p className="mt-1 text-[9px] text-[#6B7789]">
                      Customer Review
                    </p>
                  </div>

                  <div className="ml-auto text-[#2A7DE1]/80">
                    <MessageCircle size={17} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 px-4 text-center sm:mt-12"
    >
      <p className="mb-4 text-[11px] font-medium text-[#4A5568] sm:text-xs">
        Experience the Ritz Auto Care difference.
      </p>

      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-lg bg-[#20639c] px-6 py-3 text-[11px] font-extrabold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#174DAA] sm:text-xs"
      >
        Book Your Service
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </a>
    </motion.div>

  </div>
</section>


      {/* PREMIUM CONTACT CTA */}


 
<section
  id="contact"
  className="relative isolate overflow-hidden bg-gradient-to-br from-[#1F63D8] via-[#143B8F] to-[#0A1220] py-14 text-white sm:py-16 lg:py-20"
>
  {/* BACKGROUND DECORATIONS */}
  <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full border border-[#5B9BFF]/25" />
  <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-[320px] w-[320px] rounded-full border border-[#5B9BFF]/20" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#2F7BFF]/30 blur-[100px]" />
  <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#9AA7B8]/10 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid items-center gap-10 lg:grid-cols-[1fr_350px] lg:gap-16"
    >

      {/* LEFT CONTENT */}
      <div className="max-w-2xl">

        {/* BADGE */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#5B9BFF]/40 bg-[#0A1220]/40 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#7DB4FF] backdrop-blur-md sm:text-[10px]">
          <Sparkles size={14} />
          Your Car Deserves The Best
        </span>

        {/* HEADING */}
        <h2 className="mt-5 text-[27px] font-black leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[36px]">
          Ready for Professional
          <span className="block text-[#7DB4FF]">
            Automotive Care?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-xl text-[12px] leading-6 text-[#C5CEDB] sm:text-sm sm:leading-7">
          Experience expert technicians, quality workmanship and
          dependable automotive services. Contact Ritz Auto Care
          LLC today and let us take care of your vehicle.
        </p>

        {/* LOCATION & TRUST DETAILS */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold text-[#E4E9F0] sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="shrink-0 text-[#7DB4FF]" />
            Dubai &amp; Abu Dhabi
          </span>

          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={15} className="shrink-0 text-[#7DB4FF]" />
            Professional Vehicle Care
          </span>
        </div>

        {/* BOTTOM TRUST POINTS */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Expert Technicians",
            "Quality Workmanship",
            "Reliable Support",
          ].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0A1220]/40 px-3 py-2 text-[9px] font-bold text-[#E4E9F0] backdrop-blur-sm sm:text-[10px]"
            >
              <Check size={12} className="text-[#7DB4FF]" />
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* RIGHT BOOKING CARD */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative w-full overflow-hidden rounded-2xl border border-[#5B9BFF]/30 bg-[#0A1220]/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6"
      >

        {/* CARD DECORATION */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#5B9BFF]/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F7BFF] to-transparent" />

        <div className="relative">

          {/* CARD LABEL */}
          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#7DB4FF] sm:text-[10px]">
            Let's Get Started
          </span>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            Book Your Service
          </h3>

          <p className="mt-2 text-[11px] leading-6 text-[#C5CEDB] sm:text-xs">
            Speak with our team and get professional assistance
            for your vehicle.
          </p>

          {/* WHATSAPP CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#20639c] px-5 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-[#2F7BFF]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0A1220]"
          >
            <MessageCircle size={17} />
            WhatsApp Us
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* CALL CTA */}
          <a
            href={`tel:${PHONE}`}
            className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2F7BFF] hover:bg-[#2F7BFF]/15"
          >
            <Phone size={16} />
            Call {PHONE}
          </a>

          {/* CARD FOOTNOTE */}
          <div className="mt-5 flex items-start justify-center gap-2 border-t border-white/10 pt-4 text-center text-[9px] leading-5 text-[#C5CEDB] sm:text-[10px]">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-[#7DB4FF]" />
            Professional support for all your vehicle care needs.
          </div>

        </div>
      </motion.div>

    </motion.div>
  </div>
</section>




      {/* Footer */}


      <footer className="relative overflow-hidden bg-ink text-steel">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-royal/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-bright/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-8">

            {/* BRAND SECTION */}
            <div className="col-span-2 lg:col-span-4">
              <a
                href="#home"
                aria-label="Ritz Auto Care homepage"
                className="inline-flex"
              >
                <Image
                  src="/logo.png"
                  alt="Ritz Auto Care LLC"
                  width={190}
                  height={55}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </a>

              <p className="mt-4 max-w-sm text-xs leading-6 text-steel/80 sm:mt-5 sm:text-sm sm:leading-7">
                Experience dealer-standard automotive care with professional
                service, reliable solutions and quality workmanship in Dubai
                and Abu Dhabi.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ritz Auto Care on WhatsApp"
                  className="inline-flex items-center gap-2 rounded-full bg-[#20639c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-bright hover:text-ink sm:px-5 sm:py-3 sm:text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-bright hover:text-bright sm:px-5 sm:py-3 sm:text-sm"
                >
                  <Phone size={15} />
                  Call Now
                </a>
              </div>
            </div>

            {/* SERVICES */}
            <div className="col-span-1 min-w-0 lg:col-span-2">
              <h3 className="mb-4 text-sm font-bold text-white sm:mb-6 sm:text-base">
                Our Services
                <span className="mt-2 block h-0.5 w-8 rounded-full bg-bright" />
              </h3>

              <ul className="space-y-3 text-[11px] sm:space-y-3.5 sm:text-sm">
                {[
                  "Car Battery Change",
                  "Jump Start",
                  "Flat Tyre Change",
                  "Fuel Delivery",
                  "Car Oil Change",
                  "Car AC Repair",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="group inline-flex items-start gap-1.5 transition-colors hover:text-white sm:gap-2"
                    >
                      <ArrowRight
                        size={12}
                        className="mt-0.5 shrink-0 text-bright transition-transform group-hover:translate-x-1 sm:h-[13px] sm:w-[13px]"
                      />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* BRANDS */}
            <div className="col-span-1 min-w-0 lg:col-span-2">
              <h3 className="mb-4 text-sm font-bold text-white sm:mb-6 sm:text-base">
                Brands We Serve
                <span className="mt-2 block h-0.5 w-8 rounded-full bg-bright" />
              </h3>

              <ul className="space-y-3 text-[11px] sm:space-y-3.5 sm:text-sm">
                {brands.slice(0, 6).map((brand) => (
                  <li key={brand.logo}>
                    <a
                      href="#brands"
                      className="group inline-flex items-start gap-1.5 transition-colors hover:text-white sm:gap-2"
                    >
                      <ArrowRight
                        size={12}
                        className="mt-0.5 shrink-0 text-bright transition-transform group-hover:translate-x-1 sm:h-[13px] sm:w-[13px]"
                      />
                      <span>{brand.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#brands"
                className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold text-bright transition hover:text-white sm:mt-5 sm:gap-2 sm:text-xs"
              >
                Explore all brands
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 lg:col-span-4">
              <h3 className="mb-5 text-sm font-bold text-white sm:mb-6 sm:text-base">
                Get In Touch
                <span className="mt-2 block h-0.5 w-8 rounded-full bg-bright" />
              </h3>

              <ul className="space-y-4 text-xs sm:space-y-5 sm:text-sm">

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-bright sm:h-10 sm:w-10">
                    <Phone size={16} />
                  </span>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] text-steel/60 sm:text-xs">
                      Phone / WhatsApp
                    </p>

                    <a
                      href={`tel:${PHONE}`}
                      className="font-semibold text-white transition hover:text-bright"
                    >
                      +971 56 780 7979
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-bright sm:h-10 sm:w-10">
                    <Mail size={16} />
                  </span>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] text-steel/60 sm:text-xs">
                      Email Address
                    </p>

                    <a
                      href="mailto:info@ritzautocare.ae"
                      className="break-all font-semibold text-white transition hover:text-bright"
                    >
                      info@ritzautocare.ae
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-bright sm:h-10 sm:w-10">
                    <MapPin size={16} />
                  </span>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] text-steel/60 sm:text-xs">
                      Our Location
                    </p>

                    <p className="leading-6 text-steel/90">
                      DIP 1, Warehouse 35, Street 59, near AIKO Mall,
                      Dubai Investment Park First, Dubai.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* BOTTOM FOOTER */}
          <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">
            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">

              <p className="text-[10px] leading-5 text-steel/60 sm:text-xs">
                © {new Date().getFullYear()} Ritz Auto Care LLC. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-steel/60 sm:gap-x-6 sm:text-xs">
                <a
                  href="/privacy-policy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms-and-conditions"
                  className="transition hover:text-white"
                >
                  Terms &amp; Conditions
                </a>

                <a
                  href="#home"
                  className="inline-flex items-center gap-1 font-semibold text-bright transition hover:text-white"
                >
                  Back to Top
                  <ArrowUpRight size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </footer>


      {/* Floating call button */}
      <a href={`tel:${PHONE}`} aria-label="Call advisor" className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg sm:block">Call Advisor</span>
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-xl"><Phone size={24} /></motion.span>
      </a>
    </MotionConfig>
  );
}
