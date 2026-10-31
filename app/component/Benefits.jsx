import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  Droplets,
  ClipboardCheck,
  Car,
  Check,
  ArrowRight,
  ArrowUpRight,
  Award,
  Phone,
} from "lucide-react";

/*
  Logo palette (hex only, no Tailwind config needed):
  #111820 logo navy | #145B8B deep | #176DA5 brand | #2694D2 gear blue
  #45B5F0 bright    | #65B9EC pale | #C5CDD5 silver | #F5F7FA page bg
*/


const BENEFITS = [
  {
    icon: Truck,
    title: "Free Pick-up & Drop-off",
    desc: "Convenient vehicle collection and delivery from your home or office.",
  },
  {
    icon: ShieldCheck,
    title: "Free General Inspection",
    desc: "A detailed multi-point check to help identify potential vehicle issues.",
  },
  {
    icon: Droplets,
    title: "Free Exterior Car Wash",
    desc: "A fresh, clean finish with every service booking.",
  },
];

const STEPS = [
  { icon: Truck, title: "We collect your car", desc: "From your home or workplace" },
  { icon: ClipboardCheck, title: "We inspect your vehicle", desc: "General health check included" },
  { icon: Droplets, title: "We clean your car", desc: "Complimentary exterior wash" },
  { icon: Car, title: "We deliver it back", desc: "Right to your doorstep" },
];

export default function BenefitsSection({ PHONE }) {
  const reduce = useReducedMotion();

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.55, delay, ease: "easeOut" },
        };

  return (
    <section
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-16 text-[#111827] sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#2694D2]/15 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADING ================= */}
        <motion.div {...rise()} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#176DA5] shadow-sm">
            <Sparkles size={14} aria-hidden />
            Exclusive Benefits
          </span>

          <h2
            id="benefits-heading"
            className="mt-5 text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px] lg:text-[34px]"
          >
            More care.
            <span className="block text-[#176DA5]">Zero extra cost.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-[15px]">
            Every booking comes with complimentary services designed to make
            your car maintenance effortless.
          </p>
        </motion.div>

        {/* ================= BENEFIT CARDS ================= */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              {...rise(i * 0.1)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2694D2]/50 hover:shadow-xl hover:shadow-[#176DA5]/15 sm:p-7"
            >
              <span
                aria-hidden
                className="absolute right-5 top-4 text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-[#2694D2]/20"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#145B8B] to-[#2694D2] text-white shadow-lg shadow-[#176DA5]/25 transition-transform duration-300 group-hover:scale-105">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#2694D2]/25 bg-[#176DA5]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#176DA5]">
                <Check size={11} strokeWidth={3} aria-hidden />
                Complimentary
              </span>

              <h3 className="mt-3 text-lg font-extrabold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>

              <div className="mt-5 h-[3px] w-9 rounded-full bg-gradient-to-r from-[#2694D2] to-[#65B9EC] transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* ================= DARK PROCESS PANEL ================= */}
        <motion.div
          {...rise(0.1)}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#111820] p-6 text-white shadow-2xl shadow-[#111820]/25 sm:p-10 lg:p-12"
        >
          {/* glows + accent line */}
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#176DA5]/35 blur-[100px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#2694D2]/15 blur-[100px]" />
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2694D2]/70 to-transparent" />

          <div className="relative">
            {/* top row */}
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#2694D2]/30 bg-[#176DA5]/25 text-[#65B9EC]">
                    <Award size={22} aria-hidden />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65B9EC]">
                    Ritz Auto Care &middot; Your Benefits Package
                  </p>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-[28px]">
                  How We Care
                  <span className="bg-gradient-to-r from-[#2694D2] to-[#65B9EC] bg-clip-text text-transparent">
                    {" "}For Your Car
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#C5CDD5]">
                  Added care with your service booking. Premium care, every
                  time. Your convenience is our priority.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#45B5F0]/25 bg-gradient-to-r from-[#145B8B] via-[#176DA5] to-[#2694D2] px-6 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#176DA5]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#2694D2]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
                >
                  <Phone size={15} aria-hidden />
                  Book Your Service
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#C5CDD5]/25 bg-white/[0.05] px-6 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2694D2] hover:bg-[#176DA5]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45B5F0]"
                >
                  Explore Services
                  <ArrowUpRight size={15} aria-hidden />
                </a>
              </div>
            </div>

            {/* steps */}
            <div className="relative mt-10">
              <div
                aria-hidden
                className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-[#2694D2]/40 lg:block"
              />

              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.li
                    key={title}
                    {...rise(i * 0.08)}
                    className="group relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center"
                  >
                    <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#145B8B] to-[#2694D2] text-white shadow-lg shadow-[#176DA5]/40 ring-4 ring-[#111820] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} strokeWidth={1.8} aria-hidden />
                      <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full border-2 border-[#111820] bg-white text-[10px] font-black text-[#111820]">
                        {i + 1}
                      </span>
                    </div>

                    <div className="min-w-0 lg:mt-4">
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-[#C5CDD5]">{desc}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#65B9EC]">
                        <Check size={12} strokeWidth={3} aria-hidden />
                        Included
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}