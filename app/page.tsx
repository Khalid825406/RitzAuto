"use client";
import Image from "next/image";
import {AnimatePresence, MotionConfig , motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  Phone, Mail, MapPin, Wrench, Truck, ShieldCheck, Car, Settings, Armchair, SprayCan,
  ScanSearch, Award, Gauge, HeartHandshake, CalendarCheck, KeyRound, ClipboardCheck, ThumbsUp,
  BatteryCharging, Zap, CircleDot, Fuel, Star, Check, ArrowRight, MessageCircle,
  ArrowUpRight,
  Sparkles,
  Droplets,
  ChevronLeft, ChevronRight
} from "lucide-react";

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


const heroSlides = [
  {
    image: "/hero-1.jpeg",
    eyebrow: "Premium Automotive Care",
    title: "Premium Car Care.",
    highlight: "Without Compromise.",
    description:
      "Professional automotive solutions for luxury and everyday vehicles. Expert technicians and advanced diagnostics for complete vehicle care.",
    caption: "Care That Goes Beyond the Road.",
  },
  {
    image: "/hero-2.jpeg",
    eyebrow: "Expert Automotive Services",
    title: "Expert Repairs.",
    highlight: "Exceptional Results.",
    description:
      "From minor repairs to major servicing, our experienced technicians focus on quality workmanship and reliable vehicle performance.",
    caption: "Precision in Every Service.",
  },
  {
    image: "/hero-3.jpeg",
    eyebrow: "Advanced Vehicle Diagnostics",
    title: "Smarter Diagnostics.",
    highlight: "Better Performance.",
    description:
      "Modern diagnostic equipment and professional inspection help identify vehicle issues and keep your car running smoothly.",
    caption: "Technology Meets Expertise.",
  },
];

export default function Home() {

 const [activeSlide, setActiveSlide] = useState(0);
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;

  const timer = setInterval(() => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }, 5000);

  return () => clearInterval(timer);
}, [isPaused]);

const nextSlide = () => {
  setActiveSlide((current) => (current + 1) % heroSlides.length);
};

const prevSlide = () => {
  setActiveSlide(
    (current) => (current - 1 + heroSlides.length) % heroSlides.length
  );
};

  return (
    <MotionConfig reducedMotion="user">
      {/* Top bar */}
      <div className="bg-royal text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2 text-sm">
          <span>Free pick-up &amp; drop-off, car wash &amp; 360° inspection</span>
          <a href={WA} className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 font-semibold"><MessageCircle size={14} /> +971 567807979</a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 font-semibold"><Phone size={14} /> Toll-Free: {PHONE}</a>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#"><Image src="/logo.png" alt="Ritz Auto Care LLC" width={170} height={48} priority className="h-11 w-auto" /></a>
          <nav className="hidden gap-7 text-sm font-semibold text-steel lg:flex">
            {["Services", "Roadside", "Brands", "How it works", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="transition hover:text-white">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="rounded-md bg-bright px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-royal/40 transition hover:bg-white hover:text-royal">Get a free quote</a>
        </div>
      </header>

   






{/* COMPACT PREMIUM HERO CAROUSEL */}

<section
  className="relative isolate h-[560px] overflow-hidden bg-[#080B12] text-white sm:h-[600px] lg:h-[min(80vh,620px)]"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* BACKGROUND IMAGE */}

  <AnimatePresence mode="sync">
    <motion.div
      key={activeSlide}
      initial={{ opacity: 0, scale: 1.045 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 5.5, ease: "linear" },
      }}
      className="absolute inset-0"
    >
      <Image
        src={heroSlides[activeSlide].image}
        alt={heroSlides[activeSlide].caption}
        fill
        priority={activeSlide === 0}
        sizes="100vw"
        className="object-cover object-center"
      />
    </motion.div>
  </AnimatePresence>

  {/* IMAGE OVERLAY */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/95 via-[#070B14]/70 to-[#070B14]/20" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/65 via-transparent to-transparent" />

  {/* MAIN CONTENT */}

  <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 pb-12 pt-10 sm:px-8 lg:px-14">

    <div className="w-full max-w-xl">

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          {/* EYEBROW */}

          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/90 sm:text-[10px]">
              {heroSlides[activeSlide].eyebrow}
            </span>
          </div>

          {/* HEADING */}

          <h1 className="max-w-lg text-[32px] font-extrabold leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
            {heroSlides[activeSlide].title}
            <span className="mt-1 block text-blue-400">
              {heroSlides[activeSlide].highlight}
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-4 max-w-md text-[12px] leading-6 text-white/75 sm:text-[13px] sm:leading-7">
            {heroSlides[activeSlide].description}
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
      </AnimatePresence>

    </div>
  </div>

  {/* SLIDER NAVIGATION */}

  <div className="absolute bottom-5 left-5 right-5 z-20 mx-auto flex max-w-[1440px] items-center justify-between sm:left-8 sm:right-8 lg:left-14 lg:right-14">

    {/* INDICATORS */}

    <div className="flex items-center gap-2.5">

      {heroSlides.map((slide, index) => (
        <button
          key={slide.image}
          type="button"
          onClick={() => setActiveSlide(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={activeSlide === index ? "true" : undefined}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            activeSlide === index
              ? "w-9 bg-white"
              : "w-4 bg-white/40 hover:bg-white/80"
          }`}
        />
      ))}

      <span className="ml-2 text-[10px] font-semibold tracking-widest text-white/70">
        0{activeSlide + 1} / 0{heroSlides.length}
      </span>

    </div>

    {/* ARROWS */}

    <div className="flex items-center gap-2">

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        <ChevronLeft size={17} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        <ChevronRight size={17} />
      </button>

    </div>

  </div>

  {/* BRAND CAPTION */}

  <div className="absolute bottom-[75px] right-8 z-10 hidden text-right lg:block">
    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
      Ritz Auto Care LLC
    </p>
    <p className="mt-1 text-xs font-semibold text-white/80">
      {heroSlides[activeSlide].caption}
    </p>
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

  
{/* Premium Services Section */}

<section
  id="services"
  className="relative overflow-hidden bg-[#F4F6FA] py-24"
>
  {/* Background Decoration */}
  <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.5fr]">

      {/* Left Content */}
      <div className="lg:sticky lg:top-32">

        <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-royal shadow-sm">
          <Wrench size={14} />
          Our Services
        </span>

        <h2 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#101828] sm:text-5xl">
          Complete Care.
          <span className="block text-royal">
            Exceptional Performance.
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
          Everything your vehicle needs, all under one roof.
          From routine maintenance to advanced automotive
          repairs, we deliver dealer-standard service with
          professional care.
        </p>

        {/* Highlights */}
        <div className="mt-9 space-y-5">

          {[
            "Certified automotive technicians",
            "Advanced diagnostic equipment",
            "Premium quality parts and workmanship",
          ].map((item, index) => (

            <div key={item} className="flex items-center gap-3">

              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-royal text-white">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm font-semibold text-slate-700">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-lg bg-royal px-7 py-4 font-bold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828]"
          >
            Explore Our Services
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Experience Highlight */}
        <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-8">

          <div className="font-display text-5xl font-black text-royal">
            20+
          </div>

          <div>
            <p className="font-bold text-[#101828]">
              Years of Experience
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Professional automotive care
            </p>
          </div>

        </div>

      </div>

      {/* Right Service Cards */}
      <div>

        <div className="mb-6 flex items-center justify-between">

          <h3 className="text-lg font-extrabold text-[#101828]">
            What We Offer
          </h3>

          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-royal shadow-sm">
            09 Services
          </span>

        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
        >

          {services.map(({ i: Icon, t }, index) => (

            <motion.a
              key={t}
              href="#contact"
              variants={up}
              whileHover={{ y: -7 }}
              className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10 sm:min-h-[205px] sm:p-6"
            >

              {/* Background Hover Effect */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-royal/5 transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-royal/10" />

              {/* Number */}
              <div className="relative flex items-center justify-between">

                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#F0F4FA] text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </span>

                <span className="text-xs font-bold tracking-widest text-slate-300 transition-colors group-hover:text-royal">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

              </div>

              {/* Title */}
              <div className="relative mt-8">

                <h3 className="text-sm font-extrabold leading-snug text-[#101828] transition-colors group-hover:text-royal sm:text-base">
                  {t}
                </h3>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-royal">
                    Explore Service
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-royal"
                  />

                </div>

              </div>

            </motion.a>

          ))}

        </motion.div>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#101828] px-6 py-5 text-white">

          <div>
            <p className="font-bold">
              Need professional car assistance?
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Our team is ready to help you.
            </p>
          </div>

          <a
            href={WA}
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

        </div>

      </div>

    </div>

  </div>
</section>



{/* Premium About + Why Choose Us */}

<section
  id="about"
  className="relative overflow-hidden bg-[#F4F6FA] py-24"
>
  {/* Background Decoration */}
  <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* About Main Content */}
    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left Content */}
      <div>

        <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-royal shadow-sm">
          <ShieldCheck size={15} />
          About Ritz Auto Care
        </span>

        <h2 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#101828] sm:text-5xl">
          More Than Just
          <span className="block text-royal">
            Car Maintenance.
          </span>
          We Care About Your Drive.
        </h2>

        <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
          Ritz Auto Care is committed to delivering professional
          automotive repair and maintenance services in Dubai
          and Abu Dhabi. Our skilled technicians combine
          advanced diagnostic technology, modern equipment
          and quality workmanship to keep your vehicle
          performing at its best.
        </p>

        <p className="mt-4 text-base leading-8 text-slate-600">
          From routine servicing to complex mechanical repairs,
          we focus on reliability, transparency and customer
          satisfaction at every step.
        </p>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {[
            "Professional Technicians",
            "Advanced Diagnostics",
            "Quality Workmanship",
            "Customer-Focused Service",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-royal text-white">
                <Check size={15} strokeWidth={3} />
              </span>

              <span className="text-sm font-bold text-[#101828]">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-lg bg-royal px-7 py-4 font-bold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828]"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-4 font-bold text-[#101828] transition-all hover:border-royal hover:text-royal"
          >
            <Phone size={18} />
            Call Us
          </a>

        </div>

      </div>

      {/* Right Visual Panel */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >

        <div className="relative overflow-hidden rounded-[28px] bg-[#101828] p-6 shadow-2xl shadow-slate-300/50 sm:p-9">

          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-royal/30 blur-[90px]" />

          <div className="relative">

            {/* Top Label */}
            <div className="flex items-center justify-between gap-3">

              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300">
                Ritz Auto Care LLC
              </span>

              <ShieldCheck size={28} className="text-royal" />

            </div>

            {/* Main Visual */}
            <div className="my-12 flex flex-col items-center justify-center text-center">

              <div className="grid h-32 w-32 place-items-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_70px_rgba(43,130,230,0.18)]">

                <Wrench
                  size={65}
                  strokeWidth={1.2}
                  className="text-white"
                />

              </div>

              <h3 className="mt-7 text-3xl font-black text-white sm:text-4xl">
                Driven By
                <span className="block text-royal">
                  Excellence.
                </span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                Professional automotive care backed by
                experience, technology and dedication.
              </p>

            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                <div className="text-3xl font-black text-white">
                  20+
                </div>

                <p className="mt-2 text-xs font-medium text-slate-400">
                  Years of Experience
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                <div className="text-3xl font-black text-white">
                  48K+
                </div>

                <p className="mt-2 text-xs font-medium text-slate-400">
                  Vehicles Repaired
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6">

          <span className="grid h-12 w-12 place-items-center rounded-full bg-royal text-white">
            <Award size={25} />
          </span>

          <div>
            <p className="text-sm font-extrabold text-[#101828]">
              Quality First
            </p>

            <p className="text-xs text-slate-500">
              Every service, every time.
            </p>
          </div>

        </div>

      </motion.div>

    </div>

    {/* Why Choose Us */}
    <div className="mt-32">

      {/* Section Heading */}
      <div className="mx-auto max-w-2xl text-center">

        <span className="inline-block rounded-full border border-royal/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-royal">
          Why Choose Us
        </span>

        <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#101828] sm:text-5xl">
          The Ritz Auto Care
          <span className="block text-royal">
            Difference.
          </span>
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-500">
          Discover the expertise, technology and commitment
          that make your vehicle our priority.
        </p>

      </div>

      {/* Feature Cards */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {why.map(({ i: Icon, t, d }, k) => (

          <motion.div
            key={t}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: k * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10"
          >

            {/* Card Number */}
            <div className="absolute right-6 top-6 text-4xl font-black text-slate-100 transition-colors group-hover:text-royal/10">
              0{k + 1}
            </div>

            {/* Icon */}
            <div className="relative mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-[#EEF3FB] text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white">

              <Icon size={29} strokeWidth={1.7} />

            </div>

            {/* Content */}
            <h3 className="text-xl font-extrabold text-[#101828] transition-colors group-hover:text-royal">
              {t}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {d}
            </p>

            {/* Bottom Accent */}
            <div className="mt-7 h-1 w-10 rounded-full bg-royal transition-all duration-300 group-hover:w-full" />

          </motion.div>

        ))}

      </div>

    </div>

  </div>
</section>


     

{/* Premium Roadside Assistance */}

{/* ROADSIDE ASSISTANCE - PREMIUM LIGHT SECTION */}

<section
  id="roadside"
  className="relative overflow-hidden bg-[#F5F7FA] py-20 text-[#111827] sm:py-24"
>
  {/* BACKGROUND EFFECTS */}

  <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[140px]" />

  <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-200/70 blur-[130px]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* TOP CONTENT */}

    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

      {/* LEFT CONTENT */}

      <motion.div
        variants={up}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* BADGE */}

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-royal sm:text-xs">
          <Truck size={15} />
          Roadside Assistance
        </span>

        {/* HEADING */}

        <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[46px]">
          Help is Closer
          <span className="block text-royal">
            Than You Think.
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          Vehicle trouble shouldn't ruin your journey. From unexpected
          battery failures to flat tyres and fuel emergencies, get
          professional roadside assistance when you need it.
        </p>

        {/* QUICK HIGHLIGHTS */}

        <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">

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
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3"
            >

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-royal shadow-sm">
                <Icon size={19} />
              </div>

              <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                {t}
              </span>

            </motion.div>

          ))}

        </div>

      </motion.div>


      {/* RIGHT ASSISTANCE DASHBOARD */}

      <motion.div
        variants={up}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">

          {/* DASHBOARD HEADER */}

          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Ritz Auto Care
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                Assistance Centre
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Your roadside support partner
              </p>
            </div>

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-royal">
              <ShieldCheck size={25} />
            </div>

          </div>


          {/* MAIN VISUAL */}

          <div className="relative mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F8FC] p-5 sm:p-6">

            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-100/80 blur-3xl" />

            <div className="relative flex items-center justify-between gap-3">

              <div className="min-w-0">

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Assistance Services
                </span>

                <h4 className="mt-5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                  Ready for the
                  <span className="block text-royal">
                    Unexpected.
                  </span>
                </h4>

                <p className="mt-3 max-w-[230px] text-xs leading-6 text-slate-500 sm:text-sm">
                  Professional solutions for common roadside vehicle emergencies.
                </p>

              </div>

              {/* VEHICLE ICON */}

              <div className="hidden h-28 w-28 shrink-0 place-items-center rounded-full border border-blue-100 bg-white shadow-sm sm:grid">

                <div className="grid h-20 w-20 place-items-center rounded-full bg-blue-50 text-royal">
                  <Car size={46} strokeWidth={1.3} />
                </div>

              </div>

            </div>

          </div>


          {/* AVAILABLE ASSISTANCE */}

          <div className="mt-7">

            <div className="mb-4 flex items-center justify-between">

              <h4 className="text-sm font-bold text-slate-900">
                Available Assistance
              </h4>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500">
                04 Services
              </span>

            </div>

            <div className="grid grid-cols-2 gap-3">

              {road.map(({ i: Icon, t }) => (

                <div
                  key={t}
                  className="flex min-h-[85px] items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-4"
                >

                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-royal sm:h-10 sm:w-10">
                    <Icon size={19} />
                  </div>

                  <span className="text-[10px] font-bold leading-5 text-slate-700 sm:text-xs">
                    {t}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* BOTTOM INFORMATION */}

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-royal">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-900 sm:text-sm">
                Serving Dubai & Abu Dhabi
              </p>

              <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                Roadside assistance for your vehicle support needs.
              </p>
            </div>

          </div>

        </div>


        {/* FLOATING BADGE */}

        <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-5">

          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check size={19} />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-900">
              Expert Vehicle Care
            </p>

            <p className="text-[10px] text-slate-500">
              Professional assistance
            </p>
          </div>

        </div>

      </motion.div>

    </div>


    {/* SERVICES SECTION HEADING */}

    <div className="mb-8 mt-24 flex flex-wrap items-end justify-between gap-5">

      <div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-royal sm:text-xs">
          Our Services
        </span>

        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Roadside Solutions
          <span className="block text-royal sm:inline sm:pl-2">
            For Every Situation.
          </span>
        </h3>

        <p className="mt-3 max-w-xl text-xs leading-7 text-slate-500 sm:text-sm">
          Reliable assistance to help you handle unexpected vehicle
          problems and get back on the road.
        </p>

      </div>

      <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-slate-600 shadow-sm sm:text-xs">
        04 Assistance Categories
      </span>

    </div>


    {/* ROAD SERVICE CARDS */}

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.1 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >

      {road.map(({ i: Icon, t, d }, index) => (

        <motion.div
          key={t}
          variants={up}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
        >

          {/* DECORATIVE GLOW */}

          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

          {/* CARD TOP */}

          <div className="relative flex items-center justify-between">

            <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-white">
              <Icon size={24} strokeWidth={1.7} />
            </div>

            <span className="text-3xl font-black text-slate-100">
              0{index + 1}
            </span>

          </div>

          {/* CARD CONTENT */}

          <div className="relative mt-7">

            <h3 className="text-base font-extrabold text-slate-900 sm:text-lg">
              {t}
            </h3>

            <p className="mt-3 min-h-[84px] text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
              {d}
            </p>

            <a
              href={`tel:${PHONE}`}
              className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-royal transition-colors hover:text-slate-900 sm:text-sm"
            >
              Request Assistance
              <ArrowUpRight size={16} />
            </a>

          </div>

        </motion.div>

      ))}

    </motion.div>

  </div>
</section>




   
{/* Premium How It Works Section */}

<section
  id="how-it-works"
  className="relative overflow-hidden bg-[#F4F6FA] py-24"
>
  {/* Background Effects */}
  <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[120px]" />
  <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-royal shadow-sm">
        <CalendarCheck size={15} />
        Simple Service Process
      </span>

      <h2 className="mt-7 text-4xl font-extrabold leading-tight text-[#101828] sm:text-5xl">
        Four Easy Steps to
        <span className="block text-royal">
          a Better Driving Experience.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500">
        Getting your car serviced has never been easier.
        Enjoy a smooth, transparent and hassle-free experience
        from booking to delivery.
      </p>

    </div>

    {/* Steps */}
    <div className="relative mt-16">

      {/* Desktop Connecting Line */}
      <div className="absolute left-[12.5%] right-[12.5%] top-11 hidden border-t-2 border-dashed border-royal/30 lg:block" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.12 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >

        {steps.map(({ i: Icon, t, d }, index) => (

          <motion.div
            key={t}
            variants={up}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10"
          >

            {/* Step Icon */}
            <div className="relative z-10 mx-auto grid h-[88px] w-[88px] place-items-center rounded-full border-[6px] border-[#F4F6FA] bg-royal text-white shadow-lg shadow-royal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#101828]">

              <Icon size={31} strokeWidth={1.7} />

              {/* Step Number */}
              <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full border-[3px] border-white bg-[#101828] text-xs font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>

            {/* Step Content */}
            <div className="mt-7">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-royal">
                Step {index + 1}
              </span>

              <h3 className="mt-3 text-xl font-extrabold text-[#101828] transition-colors group-hover:text-royal">
                {t}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {d}
              </p>

            </div>

            {/* Bottom Accent */}
            <div className="mx-auto mt-7 h-1 w-10 rounded-full bg-royal transition-all duration-300 group-hover:w-full" />

          </motion.div>

        ))}

      </motion.div>

    </div>



  </div>
</section>


  

{/* FREE BENEFITS - PREMIUM LIGHT SECTION */}

<section className="relative overflow-hidden bg-[#F5F7FA] py-20 text-[#111827] sm:py-24">

  {/* BACKGROUND EFFECTS */}

  <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/70 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">

    {/* LEFT CONTENT */}

    <motion.div
      variants={up}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      {/* BADGE */}

      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-royal sm:text-xs">
        <Sparkles size={14} />
        Exclusive Benefits
      </span>

      {/* HEADING */}

      <h2 className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[46px]">
        More care.
        <span className="block text-royal">
          Zero extra cost.
        </span>
      </h2>

      {/* DESCRIPTION */}

      <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
        Every booking comes with extra care and convenience.
        Enjoy complimentary services designed to make your
        car maintenance experience effortless.
      </p>

      {/* BENEFITS LIST */}

      <div className="mt-9 space-y-7">

        {[
          {
            i: Truck,
            t: "Free Pick-up & Drop-off",
            d: "Convenient vehicle collection and delivery from your home or office.",
          },
          {
            i: ShieldCheck,
            t: "Free General Inspection",
            d: "A detailed multi-point check to help identify potential vehicle issues.",
          },
          {
            i: Droplets,
            t: "Free Exterior Car Wash",
            d: "Give your vehicle a fresh, clean finish with every service booking.",
          },
        ].map(({ i: Icon, t, d }, index) => (

          <motion.div
            key={t}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group flex gap-4"
          >

            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-royal shadow-sm transition-all duration-300 group-hover:border-royal group-hover:bg-royal group-hover:text-white sm:h-14 sm:w-14">
              <Icon size={23} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-2.5">

                <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                  {t}
                </h3>

                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                  Complimentary
                </span>

              </div>

              <p className="mt-2 max-w-md text-xs leading-6 text-slate-500 sm:text-sm">
                {d}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* CTA BUTTONS */}

      <div className="mt-9 flex flex-wrap gap-3">

        <a
          href={`tel:${PHONE}`}
          className="group inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#174DAA] sm:text-sm"
        >
          Book Your Service
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:text-royal sm:text-sm"
        >
          Explore Services
          <ArrowUpRight size={15} />
        </a>

      </div>

    </motion.div>


    {/* RIGHT PREMIUM SHOWCASE */}

    <motion.div
      variants={up}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >

      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">

        {/* SHOWCASE HEADER */}

        <div className="flex items-center justify-between gap-4">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Ritz Auto Care
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-slate-900">
              Your Benefits Package
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Added care with your service booking
            </p>

          </div>

          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-royal">
            <Award size={25} />
          </div>

        </div>


        {/* COMPLIMENTARY CARE PACKAGE */}

        <div className="relative mt-7 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F5F8FC] p-6 sm:p-7">

          {/* DECORATIVE EFFECT */}

          <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative">

            <div className="flex items-center justify-between gap-3">

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                <Check size={12} />
                Included Benefits
              </span>

              <Sparkles size={19} className="text-royal" />

            </div>

            <h4 className="mt-5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
              Complimentary
              <span className="block text-royal">
                Care Package.
              </span>
            </h4>

            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
              Enjoy additional convenience and care with your
              vehicle service booking.
            </p>

            {/* BENEFIT TAGS */}

            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "Vehicle Collection",
                "General Inspection",
                "Exterior Wash",
              ].map((item) => (

                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[9px] font-semibold text-slate-600 shadow-sm sm:text-[10px]"
                >
                  <Check size={12} className="text-emerald-600" />
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>


        {/* SERVICE TIMELINE */}

        <div className="mt-8">

          <div className="mb-6 flex items-center justify-between">

            <h4 className="text-sm font-bold text-slate-900">
              How We Care For Your Car
            </h4>

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              04 Steps
            </span>

          </div>

          <div className="space-y-6">

            {[
              {
                i: Truck,
                t: "We collect your car",
                d: "From your home or workplace",
              },
              {
                i: ClipboardCheck,
                t: "We inspect your vehicle",
                d: "General health check included",
              },
              {
                i: Droplets,
                t: "We clean your car",
                d: "Complimentary exterior wash",
              },
              {
                i: Car,
                t: "We deliver it back",
                d: "Convenient vehicle delivery",
              },
            ].map(({ i: Icon, t, d }, index) => (

              <motion.div
                key={t}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-4"
              >

                <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-royal">

                  <Icon size={19} />

                  {index !== 3 && (
                    <span className="absolute -bottom-6 left-1/2 h-4 w-px bg-slate-200" />
                  )}

                </div>

                <div className="min-w-0">

                  <h4 className="text-xs font-bold text-slate-800 sm:text-sm">
                    {t}
                  </h4>

                  <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                    {d}
                  </p>

                </div>

                <div className="ml-auto shrink-0 text-emerald-600">
                  <Check size={17} />
                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* BOTTOM TRUST STRIP */}

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">

          <div>

            <p className="text-xs font-bold text-slate-900 sm:text-sm">
              Premium care, every time.
            </p>

            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
              Your convenience is our priority.
            </p>

          </div>

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-royal">
            <ShieldCheck size={23} />
          </div>

        </div>

      </div>


      {/* FLOATING BADGE */}

      <div className="absolute -bottom-5 -left-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-5 sm:px-5 sm:py-4">

        <div className="flex items-center gap-3">

          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check size={19} />
          </div>

          <div>

            <p className="text-xs font-bold text-slate-900">
              Extra Care Included
            </p>

            <p className="text-[10px] text-slate-500">
              Complimentary benefits
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>




{/* Premium Automotive Brands Showcase */}

<section
  id="brands"
  className="relative overflow-hidden bg-[#F3F5F8] py-24"
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
          key={brand.name}
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
  className="relative overflow-hidden bg-[#F5F7FA] py-20 text-[#111827] sm:py-24"
>
  {/* BACKGROUND EFFECTS */}

  <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-slate-200/60 blur-[120px]" />

  <div className="relative">

    {/* SECTION HEADING */}

    <div className="mx-auto mb-14 max-w-7xl px-5 text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-royal sm:text-xs">
        <Star size={13} fill="currentColor" />
        Customer Testimonials
      </span>

      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Trusted by Drivers.
        <span className="block text-royal">
          Loved by Customers.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-slate-500 sm:text-sm sm:leading-8">
        Don't just take our word for it. Discover what our
        customers say about their experience with Ritz Auto Care.
      </p>

      {/* GOOGLE RATING */}

      <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm sm:px-6">

        <div className="flex gap-1 text-amber-400">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} size={16} fill="currentColor" />
          ))}
        </div>

        <span className="text-sm font-extrabold text-slate-900">
          4.5/5
        </span>

        <span className="h-4 w-px bg-slate-200" />

        <span className="text-xs font-medium text-slate-500 sm:text-sm">
          Based on 121 Google reviews
        </span>

      </div>

    </div>


    {/* FIRST ROW - LEFT TO RIGHT */}

    <div className="review-marquee-wrapper">

      <div className="review-track review-left">

        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-5 pr-5"
          >

            {reviews.map((review) => (

              <article
                key={`${group}-${review.n}`}
                className="group flex w-[290px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 sm:w-[350px] sm:p-6"
              >

                {/* CARD TOP */}

                <div className="flex items-center justify-between">

                  <div className="flex gap-1 text-amber-400">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>

                </div>

                {/* REVIEW TEXT */}

                <blockquote className="mt-5 min-h-[90px] text-xs leading-7 text-slate-600 sm:text-sm">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">

                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-sm font-extrabold text-royal">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">

                    <h3 className="truncate text-sm font-bold text-slate-900">
                      {review.n}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Customer Review
                    </p>

                  </div>

                  <div className="ml-auto text-royal/70">
                    <MessageCircle size={19} />
                  </div>

                </div>

              </article>

            ))}

          </div>
        ))}

      </div>

    </div>


    {/* SECOND ROW - RIGHT TO LEFT */}

    <div className="review-marquee-wrapper mt-5">

      <div className="review-track review-right">

        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-5 pr-5"
          >

            {[...reviews].reverse().map((review) => (

              <article
                key={`${group}-${review.n}`}
                className="group flex w-[290px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 sm:w-[350px] sm:p-6"
              >

                {/* CARD TOP */}

                <div className="flex items-center justify-between">

                  <div className="flex gap-1 text-amber-400">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Google Review
                  </span>

                </div>

                {/* REVIEW TEXT */}

                <blockquote className="mt-5 min-h-[90px] text-xs leading-7 text-slate-600 sm:text-sm">
                  "{review.x}"
                </blockquote>

                {/* CUSTOMER DETAILS */}

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">

                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-sm font-extrabold text-royal">
                    {review.n.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">

                    <h3 className="truncate text-sm font-bold text-slate-900">
                      {review.n}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Customer Review
                    </p>

                  </div>

                  <div className="ml-auto text-royal/70">
                    <MessageCircle size={19} />
                  </div>

                </div>

              </article>

            ))}

          </div>
        ))}

      </div>

    </div>


    {/* BOTTOM CTA */}

    <div className="mt-14 px-5 text-center sm:mt-16">

      <p className="mb-5 text-xs font-medium text-slate-500 sm:text-sm">
        Experience the Ritz Auto Care difference.
      </p>

      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#174DAA] sm:text-sm"
      >
        Book Your Service

        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>

    </div>

  </div>
</section>



      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-royal py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4">
          <h2 className="max-w-xl text-4xl font-extrabold leading-tight">Ready for dealer-level service without the dealer price?</h2>
          <div className="flex flex-wrap gap-4">
            <a href={WA} className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 font-bold text-royal transition hover:bg-ink hover:text-white"><MessageCircle size={18} /> WhatsApp us</a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-7 py-4 font-bold transition hover:bg-white/10"><Phone size={18} /> {PHONE}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-steel">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
          <div><Image src="/logo.png" alt="Ritz Auto Care LLC" width={170} height={48} className="h-11 w-auto" /><p className="mt-4 text-sm">Dealer standard auto service in Dubai &amp; Abu Dhabi.</p></div>
          <div><h3 className="mb-4 font-bold text-white">Services</h3><ul className="space-y-2 text-sm">{["Car Battery Change", "Jump Start", "Flat Tyre Change", "Fuel Delivery", "Car Oil Change", "Car AC Repair"].map((s) => <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>)}</ul></div>
         <div>
  <h3 className="mb-4 font-bold text-white">Brands</h3>

  <ul className="space-y-2 text-sm">
    {brands.slice(0, 6).map((brand) => (
      <li key={brand.name}>
        <a
          href="#brands"
          className="transition-colors hover:text-white"
        >
          {brand.name}
        </a>
      </li>
    ))}
  </ul>
</div>
          <div><h3 className="mb-4 font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-bright" /> +971 567807979</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-bright" /> info@ritzautocare.ae</li>
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-bright" /> DIP 1, Warehouse 35, Street 59, near AIKO Mall, Dubai Investment Park First, Dubai</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 py-5 text-center text-sm">© 2026 Ritz Auto Care LLC. All rights reserved.</p>
      </footer>

      {/* Floating call button */}
      <a href={`tel:${PHONE}`} aria-label="Call advisor" className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg sm:block">Call Advisor</span>
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-xl"><Phone size={24} /></motion.span>
      </a>
    </MotionConfig>
  );
}
