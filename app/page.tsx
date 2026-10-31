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
    
<section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

  {/* Background Decoration */}
  <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-[120px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-xl text-center"
    >
      <span className="inline-flex items-center rounded-full border border-royal/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-royal shadow-sm">
        Our Work
      </span>

      <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#101828] sm:text-3xl lg:text-[36px]">
        Visible Results.
        <span className="block text-royal">
          Real Transformations.
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-[12px] leading-6 text-slate-500 sm:text-sm">
        Real before-and-after results from diagnostics,
        detailing, and performance upgrades. Experience
        the difference professional care makes.
      </p>
    </motion.div>

    {/* Comparison Cards */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="mt-9 grid gap-5 md:grid-cols-2 lg:gap-6"
    >
      {transformations.map((item) => (
        <motion.div
          key={item.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
              scale: 0.97,
            },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
          whileHover={{ y: -5 }}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
        >
          <BeforeAfterCard item={item} />
        </motion.div>
      ))}
    </motion.div>

    {/* Gallery Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-9 text-center"
    >
      <Link
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-lg bg-royal px-6 py-3 text-xs font-bold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828]"
      >
        View Full Gallery
        <ArrowRight
          size={15}
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
      <div className="border-b border-white/10 bg-[#071525] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2.5 text-xs sm:text-sm">

          <span className="flex items-center gap-2 text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#2196F3] shadow-[0_0_10px_#2196F3]" />
            Free Pick-up & Drop-off, Car Wash & 360° Inspection
          </span>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1.5 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={14} />
            +971 567807979
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 font-semibold text-blue-300 transition hover:bg-blue-600 hover:text-white"
          >
            <Phone size={14} />
            Toll-Free: {PHONE}
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D14]/95 shadow-xl shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* LOGO */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex shrink-0 items-center"
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
          <nav className="hidden items-center gap-6 lg:flex">
            {[
              "Services",
              "Roadside",
              "Brands",
              "How it works",
              "Reviews",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="group relative py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:text-white"
              >
                {item}

                <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#2196F3] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-[#1677D2] to-[#2196F3] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40 lg:inline-flex"
          >
            Get a Free Quote
            <ArrowUpRight size={17} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:border-blue-400 hover:text-blue-400 lg:hidden"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-[#080D14] lg:hidden"
            >
              <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">

                {[
                  "Services",
                  "Roadside",
                  "Brands",
                  "How it works",
                  "Reviews",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-white/5 py-3 text-sm font-semibold text-slate-300 transition hover:pl-2 hover:text-[#2196F3]"
                  >
                    {item}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#1677D2] px-5 py-3 font-bold text-white transition hover:bg-[#2196F3]"
                >
                  Get a Free Quote
                  <ArrowUpRight size={17} />
                </a>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>









      {/* COMPACT PREMIUM HERO CAROUSEL */}


      <section className="relative isolate h-[560px] overflow-hidden bg-[#080B12] text-white sm:h-[600px] lg:h-[min(80vh,620px)]">

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

        {/* DARK VIDEO OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/70 to-[#070B14]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/75 via-transparent to-[#070B14]/10" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 pb-8 pt-10 sm:px-8 lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-xl"
          >

            {/* EYEBROW */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/90 sm:text-[10px]">
                Premium Automotive Care
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-lg text-[32px] font-extrabold leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
              Premium Car Care.
              <span className="mt-1 block text-blue-400">
                Without Compromise.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-md text-[12px] leading-6 text-white/75 sm:text-[13px] sm:leading-7">
              Professional automotive solutions for luxury and everyday
              vehicles. Expert technicians and advanced diagnostics for
              complete vehicle care.
            </p>

            {/* LOCATION */}
            <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-white/75">
              <MapPin size={14} className="text-blue-400" />
              Dubai & Abu Dhabi, UAE
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 text-[11px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174DAA] sm:text-xs"
              >
                Book Your Service
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900 sm:text-xs"
              >
                <Phone size={14} />
                {PHONE}
              </a>

            </div>

            {/* FREE BENEFITS */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-5">

              {[
                "Free Pick-up & Drop-off",
                "Free Inspection",
                "Complimentary Wash",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Check size={13} className="shrink-0 text-emerald-400" />
                  <span className="text-[10px] font-medium text-white/80 sm:text-[11px]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>
        </div>

        {/* BRAND CAPTION */}
        <div className="absolute bottom-7 right-8 z-10 hidden text-right lg:block">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
            Ritz Auto Care LLC
          </p>
          <p className="mt-1 text-xs font-semibold text-white/80">
            Care That Goes Beyond the Road.
          </p>
        </div>

        {/* BOTTOM VIDEO ACCENT */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
          <div className="h-full w-1/3 bg-royal" />
        </div>

      </section>





      {/* Stats */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[["20+", "Years of experience"], ["48K", "Vehicles repaired"], ["32K", "Happy clients"], ["12", "Awards & certifications"]].map(([n, l], k) => (
            <motion.div key={l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.08 }} className="border-l-2 border-bright pl-4">
              <div className="font-display text-4xl font-black">{n}</div>
              <div className="text-sm text-steel">{l}</div>
            </motion.div>
          ))}
        </div>
      </section>




      {/* PREMIUM SERVICES SECTION */}

      <section
        id="services"
        className="relative overflow-hidden bg-[#F4F7FB] py-16 sm:py-20"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-slate-300/40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <div className="mb-11 text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1677D2] shadow-sm">
              <Wrench size={13} />
              Our Services
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-[25px] font-extrabold leading-[1.25] tracking-tight text-[#101828] sm:text-[28px] lg:text-[30px]">
              Complete Automotive Care.
              <span className="block text-[#1677D2]">
                Excellence in Every Detail.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-sm">
              From advanced diagnostics to premium vehicle maintenance,
              experience professional automotive care designed to keep
              your vehicle performing at its best.
            </p>

          </div>

          {/* MAIN LAYOUT */}
          <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.65fr]">

            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28">

              <div className="overflow-hidden rounded-2xl bg-[#081525] p-6 text-white shadow-xl shadow-blue-950/15 sm:p-7">

                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">

                  Why Choose Ritz
                </span>

                <h3 className="mt-5 text-[23px] font-extrabold leading-tight sm:text-[26px]">
                  Your Car Deserves
                  <span className="block text-[#48A5F5]">
                    Expert Care.
                  </span>
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-slate-300">
                  We combine professional expertise, modern diagnostic
                  technology and quality workmanship to deliver reliable
                  automotive solutions.
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-7 space-y-4">

                  {[
                    "Professional automotive technicians",
                    "Advanced diagnostic equipment",
                    "Quality parts and workmanship",
                    "Convenient customer service",
                  ].map((item) => (

                    <div key={item} className="flex items-center gap-3">

                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-300">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span className="text-[12px] font-medium text-slate-200 sm:text-[13px]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                {/* EXPERIENCE */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">

                  <div className="text-4xl font-black text-[#48A5F5]">
                    20+
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Years of Experience
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Professional automotive care
                    </p>
                  </div>

                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1677D2] px-5 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2196F3]"
                >
                  Book Your Service
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </div>

            {/* RIGHT SERVICE CARDS */}
            <div>

              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                <div>
                  <h3 className="text-lg font-extrabold text-[#101828]">
                    Explore Our Services
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Professional solutions for every vehicle.
                  </p>
                </div>

                <span className="rounded-full border border-blue-100 bg-white px-3.5 py-2 text-[11px] font-bold text-[#1677D2] shadow-sm">
                  {String(services.length).padStart(2, "0")} Services
                </span>

              </div>

              {/* SERVICE IMAGES */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >

                {services.map(({ i: Icon, t }, index) => {

                  const serviceImages = [
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

                  return (

                    <motion.a
                      key={t}
                      href="#contact"
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.45 },
                        },
                      }}
                      whileHover={{
                        y: -6,
                        rotateX: 2,
                        rotateY: -2,
                        scale: 1.01,
                      }}
                      style={{ transformPerspective: 1000 }}
                      className="group relative isolate min-h-[250px] overflow-hidden rounded-xl border border-slate-200 bg-[#101828] shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-blue-900/20 sm:min-h-[265px]"
                    >

                      {/* SERVICE IMAGE */}
                      <Image
                        src={serviceImages[index] || "/images/services/engine.jpg"}
                        alt={t}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-[#06101E]/40 to-black/5 transition-colors duration-500 group-hover:from-[#06101E] group-hover:via-[#06101E]/60" />

                      {/* TOP CONTENT */}
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">

                        <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-[#1677D2] group-hover:bg-[#1677D2]">
                          <Icon size={20} strokeWidth={1.8} />
                        </span>

                        <span className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* BOTTOM CONTENT */}
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">

                        <div className="mb-2.5 h-[2px] w-8 rounded-full bg-[#48A5F5] transition-all duration-500 group-hover:w-16" />

                        <h3 className="text-[15px] font-bold leading-snug text-white sm:text-base">
                          {t}
                        </h3>

                        <div className="mt-3 flex items-center justify-between">

                          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200">
                            Explore Service
                          </span>

                          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#1677D2] group-hover:bg-[#1677D2]">
                            <ArrowUpRight size={15} />
                          </span>

                        </div>

                      </div>

                    </motion.a>

                  );
                })}

              </motion.div>



            </div>

          </div>
        </div>
      </section>





      {/* Premium About + Why Choose Us */}

     
<section
  id="about"
  className="relative overflow-hidden bg-[#F4F6FA] py-14 sm:py-16 lg:py-20"
>
  {/* Background Decoration */}
  <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-slate-200/50 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ABOUT MAIN CONTENT */}
    <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-royal shadow-sm">
          <ShieldCheck size={14} />
          About Ritz Auto Care
        </span>

        {/* Heading */}
        <h2 className="mt-5 max-w-xl text-[27px] font-extrabold leading-[1.2] tracking-tight text-[#101828] sm:text-3xl lg:text-[36px]">
          More Than Just Car Maintenance.
          <span className="block text-royal">
            We Care About Your Drive.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[13px] leading-7 text-slate-600 sm:text-sm">
          Ritz Auto Care delivers professional automotive repair
          and maintenance services across Dubai and Abu Dhabi.
          Our skilled technicians combine advanced diagnostics,
          modern equipment and quality workmanship to keep
          your vehicle performing at its best.
        </p>

        <p className="mt-3 max-w-xl text-[13px] leading-7 text-slate-600 sm:text-sm">
          From routine servicing to complex mechanical repairs,
          we focus on reliability, transparency and customer
          satisfaction at every step.
        </p>

        {/* Highlights */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4">
          {[
            "Professional Technicians",
            "Advanced Diagnostics",
            "Quality Workmanship",
            "Customer-Focused Service",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex items-center gap-2.5"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-royal text-white">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-[11px] font-bold leading-5 text-[#101828] sm:text-xs">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-royal px-5 py-3 text-xs font-bold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828]"
          >
            Get in Touch
            <ArrowUpRight size={15} />
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-[#101828] transition-all hover:border-royal hover:text-royal"
          >
            <Phone size={15} />
            Call Us
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE SHOWCASE */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative pb-7 sm:pb-9"
      >
        {/* Main Image */}
        <div className="group relative h-[320px] overflow-hidden rounded-2xl bg-[#101828] shadow-xl shadow-slate-300/50 sm:h-[420px] lg:h-[460px]">
          <Image
            src="/about.jpeg"
            alt="Ritz Auto Care professional automotive workshop"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/85 via-transparent to-[#080B12]/10" />

          {/* Top Label */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-white sm:text-[10px]">
              Ritz Auto Care LLC
            </span>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <span className="inline-flex rounded-full bg-royal px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
              Premium Automotive Care
            </span>

            <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              Driven By
              <span className="block text-blue-400">
                Excellence.
              </span>
            </h3>

            <p className="mt-2 max-w-sm text-[11px] leading-6 text-white/75 sm:text-xs">
              Professional automotive care backed by experience,
              advanced technology and dedicated technicians.
            </p>
          </div>
        </div>

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -bottom-1 -left-2 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-royal text-white">
            <Award size={21} />
          </div>

          <div>
            <p className="text-xl font-black text-[#101828]">
              20+
            </p>
            <p className="text-[10px] font-semibold text-slate-500">
              Years of Experience
            </p>
          </div>
        </motion.div>

        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-2 top-20 flex items-center gap-2 rounded-lg border border-white/50 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:right-4"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check size={17} strokeWidth={3} />
          </span>

          <div>
            <p className="text-[11px] font-extrabold text-[#101828]">
              Quality First
            </p>
            <p className="text-[9px] text-slate-500">
              Every service, every time.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* WHY CHOOSE US */}
    <div className="mt-20 lg:mt-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-xl text-center"
      >
        <span className="inline-flex rounded-full border border-royal/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
          Why Choose Us
        </span>

        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#101828] sm:text-3xl">
          The Ritz Auto Care
          <span className="block text-royal">
            Difference.
          </span>
        </h2>

        <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
          Discover the expertise, technology and commitment
          that make your vehicle our priority.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {why.map(({ i: Icon, t, d }, k) => (
          <motion.div
            key={t}
            variants={{
              hidden: {
                opacity: 0,
                y: 35,
                scale: 0.96,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.55,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10"
          >
            {/* Card Number */}
            <div className="absolute right-5 top-4 text-3xl font-black text-slate-100 transition-colors group-hover:text-royal/10">
              0{k + 1}
            </div>

            {/* Icon */}
            <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#EEF3FB] text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white">
              <Icon size={23} strokeWidth={1.7} />
            </div>

            {/* Content */}
            <h3 className="text-[14px] font-extrabold text-[#101828] transition-colors group-hover:text-royal">
              {t}
            </h3>

            <p className="mt-2 text-[11px] leading-6 text-slate-500 sm:text-xs">
              {d}
            </p>

            {/* Bottom Accent */}
            <div className="mt-5 h-1 w-9 rounded-full bg-royal transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>

  </div>
</section>


      <BeforeAfterSection />


      {/* Premium Roadside Assistance */}

      {/* ROADSIDE ASSISTANCE - PREMIUM LIGHT SECTION */}


     

<section
  id="roadside"
  className="relative isolate overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20 lg:py-24"
>
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[130px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= TOP HERO ================= */}
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {/* SECTION BADGE */}
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-royal shadow-sm">
          <Truck size={15} />
          Roadside Assistance
        </span>

        {/* HEADING */}
        <h2 className="mt-6 max-w-xl text-[30px] font-black leading-[1.15] tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
          Reliable Help,
          <span className="block text-royal">
            Wherever You Are.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-lg text-[13px] leading-7 text-slate-500 sm:text-sm">
          Unexpected vehicle trouble can happen anytime. Get professional
          roadside assistance for battery failures, flat tyres, fuel
          emergencies and more — so you can get back on the road with
          confidence.
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-7 grid max-w-lg grid-cols-2 gap-x-5 gap-y-5">
          {[
            { i: ShieldCheck, t: "Professional Support" },
            { i: Wrench, t: "Expert Assistance" },
            { i: Gauge, t: "Reliable Solutions" },
            { i: MapPin, t: "Dubai & Abu Dhabi" },
          ].map(({ i: Icon, t }, index) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-royal shadow-sm">
                <Icon size={18} />
              </div>
              <span className="text-[11px] font-bold leading-5 text-slate-700 sm:text-xs">
                {t}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-royal px-5 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828]"
          >
            <Phone size={15} />
            Get Roadside Help
            <ArrowUpRight size={15} />
          </a>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-xs font-extrabold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:text-royal"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        {/* SMALL TRUST TEXT */}
        <div className="mt-7 flex items-center gap-2 text-[10px] font-semibold text-slate-400">
          <ShieldCheck size={14} className="text-emerald-600" />
          Dedicated support for your roadside needs
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative pb-8 sm:pb-10"
      >
        {/* MAIN IMAGE */}
        <div className="group relative h-[330px] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-300/60 sm:h-[430px] lg:h-[490px]">
          <Image
            src="/roadside-main.jpeg"
            alt="Professional roadside vehicle assistance"
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/90 via-[#080B14]/15 to-transparent" />

          {/* TOP LABEL */}
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-2 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-lg">
              <ShieldCheck size={14} />
              Ritz Auto Care LLC
            </span>
          </div>

          {/* IMAGE CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <span className="inline-flex rounded-md bg-royal px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-white">
              Always Ready To Assist
            </span>

            <h3 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              Your Journey
              <span className="block text-blue-400">
                Matters To Us.
              </span>
            </h3>

            <p className="mt-3 max-w-sm text-[11px] leading-6 text-white/75 sm:text-xs">
              Professional roadside solutions designed to keep you moving
              when unexpected situations arise.
            </p>
          </div>
        </div>

        {/* FLOATING TRUST CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -bottom-1 left-3 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xl sm:-left-5 sm:p-4"
        >
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-royal text-white">
            <Check size={21} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-xs font-extrabold text-slate-900">
              Expert Vehicle Care
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Professional assistance
            </p>
          </div>
        </motion.div>

        {/* QUALITY BADGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute right-3 top-16 flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-xl backdrop-blur-md sm:right-5 sm:top-20"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <ShieldCheck size={18} />
          </span>

          <div>
            <p className="text-[11px] font-extrabold text-slate-900">
              Quality Support
            </p>
            <p className="mt-1 text-[9px] text-slate-500">
              Customer focused
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* ================= SERVICES HEADING ================= */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="mb-9 mt-20 flex flex-col justify-between gap-5 border-t border-slate-200 pt-12 sm:mt-24 sm:flex-row sm:items-end lg:mt-28"
    >
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-royal">
          What We Offer
        </span>

        <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-[36px]">
          Roadside Assistance
          <span className="block text-royal sm:inline sm:pl-2">
            For Every Situation.
          </span>
        </h3>

        <p className="mt-3 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-sm">
          From minor roadside issues to unexpected emergencies, our
          assistance services help you move forward with confidence.
        </p>
      </div>

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-extrabold text-slate-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        04 Assistance Categories
      </span>
    </motion.div>

    {/* ================= SERVICE CARDS ================= */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {road.map(({ i: Icon, t, d }, index) => {
        const roadsideImages = [
          "/battery-jumpstart.jpeg",
          "/jump-start.jpeg",
          "/flat-tyre.jpeg",
          "/fuel-delivery.jpeg",
        ];

        return (
          <motion.div
            key={t}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{ y: -7 }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-300/40"
          >
            {/* CARD IMAGE */}
            <div className="relative h-40 overflow-hidden bg-slate-100 sm:h-44">
              <Image
                src={roadsideImages[index]}
                alt={`${t} roadside assistance`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-md border border-white/20 bg-white/95 px-3 py-1.5 text-[9px] font-extrabold text-slate-800 shadow-sm">
                {t}
              </span>

              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-black/30 text-[10px] font-black text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* CARD BODY */}
            <div className="flex flex-1 flex-col p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-royal transition-all duration-300 group-hover:border-royal group-hover:bg-royal group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <h4 className="mt-4 text-[14px] font-extrabold leading-6 text-slate-900">
                {t}
              </h4>

              <p className="mt-2 flex-1 text-[11px] leading-6 text-slate-500 sm:text-xs">
                {d}
              </p>

              <a
                href={`tel:${PHONE}`}
                className="mt-5 inline-flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] font-extrabold text-royal transition-colors duration-300 hover:text-slate-900"
              >
                Request Assistance
                <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-royal group-hover:text-white">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

 

  </div>
</section>








      {/* Premium How It Works Section */}

      
<section
  id="how-it-works"
  className="relative isolate overflow-hidden bg-[#F4F6FA] py-14 text-[#101828] sm:py-16 lg:py-8"
>
  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
  <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* SECTION HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-royal shadow-sm">
        <CalendarCheck size={14} />
        Simple Service Process
      </span>

      <h2 className="mt-5 text-[27px] font-black leading-[1.2] tracking-tight text-[#101828] sm:text-3xl lg:text-[36px]">
        Four Easy Steps to
        <span className="block text-royal sm:inline sm:pl-2">
          Better Car Care.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
        Enjoy a simple and hassle-free car servicing experience.
        From booking to delivery, we make every step smooth,
        transparent and convenient.
      </p>
    </motion.div>

    {/* PROCESS STEPS */}
    <div className="relative mt-12 sm:mt-14">

      {/* DESKTOP CONNECTING LINE */}
      <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t-2 border-dashed border-royal/25 lg:block" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "-40px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.13,
            },
          },
        }}
        className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map(({ i: Icon, t, d }, index) => (
          <motion.div
            key={t}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{ y: -7 }}
            className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10 sm:p-6"
          >

            {/* STEP ICON */}
            <div className="relative z-10 mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-[5px] border-[#F4F6FA] bg-royal text-white shadow-lg shadow-royal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#101828]">
              <Icon size={26} strokeWidth={1.8} />

              {/* STEP NUMBER */}
              <span className="absolute -right-2 -top-1.5 grid h-7 w-7 place-items-center rounded-full border-[3px] border-white bg-[#101828] text-[10px] font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* STEP CONTENT */}
            <div className="mt-5 flex flex-1 flex-col">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-royal">
                Step {index + 1}
              </span>

              <h3 className="mt-2.5 text-[15px] font-extrabold leading-6 text-[#101828] transition-colors duration-300 group-hover:text-royal">
                {t}
              </h3>

              <p className="mt-2.5 flex-1 text-[11px] leading-6 text-slate-500 sm:text-xs">
                {d}
              </p>
            </div>

            {/* BOTTOM ACCENT */}
            <div className="mx-auto mt-5 h-1 w-9 rounded-full bg-royal transition-all duration-300 group-hover:w-16" />

          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* BOTTOM TRUST MESSAGE */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-9 flex flex-wrap items-center justify-center gap-2 text-center"
    >
      <ShieldCheck size={15} className="text-emerald-600" />
      <p className="text-[10px] font-semibold text-slate-500 sm:text-xs">
        Simple booking. Professional service. Complete peace of mind.
      </p>
    </motion.div>

  </div>
</section>





      {/* FREE BENEFITS - PREMIUM LIGHT SECTION */}

    <BenefitsSection PHONE={undefined} up={undefined}/>




      {/* Premium Automotive Brands Showcase */}

      <section
        id="brands"
        className="relative overflow-hidden bg-[#F3F5F8] py-8"
      >
        {/* Background decoration */}
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <div className="mb-14 text-center">

            <span className="inline-flex rounded-full border border-royal/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-royal shadow-sm">
              Our Automotive Brands
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#101828] sm:text-5xl">
              Experts in Every
              <span className="block text-royal">
                Automotive Brand.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              From luxury European vehicles to Japanese and American
              automobiles, our experts deliver professional care
              for all leading automotive brands.
            </p>

            <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-royal" />

          </div>

          {/* Brand Logo Grid */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4 lg:grid-cols-8 xl:grid-cols-10">

            {brands.slice(0, 50).map((brand, index) => (

              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % 10) * 0.035,
                }}
                whileHover={{ y: -5, scale: 1.035 }}
                title={brand.name}
                className="
            group relative flex aspect-square
            items-center justify-center
            overflow-hidden rounded-2xl
            border border-slate-200
            bg-white p-4
            shadow-sm
            transition-all duration-300
            hover:border-royal/40
            hover:shadow-xl hover:shadow-slate-300/50
            sm:p-5 lg:p-6
          "
              >

                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Logo */}
                <div className="relative z-10 h-full w-full">

                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 10vw"
                    className="
                object-contain
                opacity-100
                transition-transform duration-500
                group-hover:scale-110
              "
                  />

                </div>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-royal transition-all duration-300 group-hover:w-1/2" />

              </motion.div>

            ))}

          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">

            <p className="mb-5 text-sm text-slate-500">
              Your vehicle deserves professional attention.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-royal px-8 py-4 text-sm font-bold text-white shadow-lg shadow-royal/20 transition-all hover:-translate-y-1 hover:bg-[#101828]"
            >
              Book Your Service
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>
      </section>




      {/* PREMIUM CUSTOMER REVIEWS MARQUEE */}

     
<section
  id="reviews"
  className="relative isolate overflow-hidden bg-[#F5F7FA] py-14 text-[#111827] sm:py-16 lg:py-20"
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
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-royal shadow-sm sm:text-[10px]">
        <Star size={13} fill="currentColor" />
        Customer Testimonials
      </span>

      <h2 className="mt-5 text-[27px] font-black leading-[1.2] tracking-tight text-slate-900 sm:text-3xl lg:text-[36px]">
        Trusted by Car Owners
        <span className="block text-royal sm:inline sm:pl-2">
          Loved by Customers.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
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

        <span className="text-xs font-extrabold text-slate-900">
          4.5/5
        </span>

        <span className="h-4 w-px bg-slate-200" />

        <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
          Based on 121 Google reviews
        </span>
      </div>
    </motion.div>

    {/* FIRST ROW - LEFT TO RIGHT */}
    <div className="review-marquee-wrapper">
      <div className="review-track review-left">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-4 pr-4"
          >
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

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>
                </div>

                {/* REVIEW TEXT */}
                <blockquote className="mt-4 min-h-[78px] text-[11px] leading-6 text-slate-600 sm:text-xs">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}
                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-xs font-extrabold text-royal">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-extrabold text-slate-900">
                      {review.n}
                    </h3>
                    <p className="mt-1 text-[9px] text-slate-400">
                      Customer Review
                    </p>
                  </div>

                  <div className="ml-auto text-royal/70">
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
          <div
            key={group}
            className="flex shrink-0 gap-4 pr-4"
          >
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

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>
                </div>

                {/* REVIEW TEXT */}
                <blockquote className="mt-4 min-h-[78px] text-[11px] leading-6 text-slate-600 sm:text-xs">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}
                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-xs font-extrabold text-royal">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-extrabold text-slate-900">
                      {review.n}
                    </h3>
                    <p className="mt-1 text-[9px] text-slate-400">
                      Customer Review
                    </p>
                  </div>

                  <div className="ml-auto text-royal/70">
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
      <p className="mb-4 text-[11px] font-medium text-slate-500 sm:text-xs">
        Experience the Ritz Auto Care difference.
      </p>

      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-lg bg-royal px-6 py-3 text-[11px] font-extrabold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#174DAA] sm:text-xs"
      >
        Book Your Service
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </motion.div>

  </div>
</section>





      {/* PREMIUM CONTACT CTA */}

   
<section
  id="contact"
  className="relative isolate overflow-hidden bg-royal py-14 text-white sm:py-16 lg:py-20"
>
  {/* BACKGROUND DECORATIONS */}
  <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-[320px] w-[320px] rounded-full border border-white/10" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]" />
  <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />

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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white/90 backdrop-blur-md sm:text-[10px]">
          <Sparkles size={14} />
          Your Car Deserves The Best
        </span>

        {/* HEADING */}
        <h2 className="mt-5 text-[27px] font-black leading-[1.2] tracking-tight sm:text-3xl lg:text-[36px]">
          Ready for Professional
          <span className="block text-white/75">
            Automotive Care?
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-xl text-[12px] leading-6 text-white/75 sm:text-sm sm:leading-7">
          Experience expert technicians, quality workmanship and
          dependable automotive services. Contact Ritz Auto Care
          LLC today and let us take care of your vehicle.
        </p>

        {/* LOCATION & TRUST DETAILS */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold text-white/80 sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="shrink-0 text-white" />
            Dubai &amp; Abu Dhabi
          </span>

          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={15} className="shrink-0 text-white" />
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[9px] font-bold text-white/85 backdrop-blur-sm sm:text-[10px]"
            >
              <Check size={12} />
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
        className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
      >

        {/* CARD DECORATION */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />

        <div className="relative">

          {/* CARD LABEL */}
          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
            Let's Get Started
          </span>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            Book Your Service
          </h3>

          <p className="mt-2 text-[11px] leading-6 text-white/70 sm:text-xs">
            Speak with our team and get professional assistance
            for your vehicle.
          </p>

          {/* WHATSAPP CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3.5 text-xs font-extrabold text-royal shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828] hover:text-white"
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
            className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/5 px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            <Phone size={16} />
            Call {PHONE}
          </a>

          {/* CARD FOOTNOTE */}
          <div className="mt-5 flex items-start justify-center gap-2 border-t border-white/15 pt-4 text-center text-[9px] leading-5 text-white/65 sm:text-[10px]">
            <ShieldCheck size={14} className="mt-0.5 shrink-0" />
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
                  className="inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-bright hover:text-ink sm:px-5 sm:py-3 sm:text-sm"
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
