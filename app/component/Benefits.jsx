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
} from "lucide-react";

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

export default function BenefitsSection({ PHONE, up }) {
  const reduce = useReducedMotion();

  const fade = (x, delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, x },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.45, delay },
        };

  return (
    <section
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-20 text-[#111827] sm:py-24"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/70 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-200/70 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* LEFT */}
        <motion.div variants={up} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-royal">
            <Sparkles size={14} aria-hidden />
            Exclusive Benefits
          </span>

          <h2
            id="benefits-heading"
            className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[46px]"
          >
            More care.
            <span className="block text-royal">Zero extra cost.</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            Every booking comes with complimentary services designed to make
            your car maintenance effortless.
          </p>

          <ul className="mt-10 space-y-6">
            {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
              <motion.li key={title} {...fade(-18, i * 0.1)} className="group flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-royal shadow-sm transition-colors duration-300 group-hover:border-royal group-hover:bg-royal group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={22} strokeWidth={1.8} aria-hidden />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Complimentary
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174DAA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
            >
              Book Your Service
              <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal hover:text-royal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
            >
              Explore Services
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={up}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-6 sm:p-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Ritz Auto Care
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                  Your Benefits Package
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Added care with your service booking
                </p>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-royal">
                <Award size={24} aria-hidden />
              </div>
            </div>

            {/* Highlight */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#F5F8FC] px-6 py-6 sm:px-8">
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    <Check size={12} aria-hidden />
                    Included with every booking
                  </span>
                  <p className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
                    Complimentary <span className="text-royal">Care Package</span>
                  </p>
                </div>
                <Sparkles size={22} aria-hidden className="hidden shrink-0 text-royal sm:block" />
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">How We Care For Your Car</h4>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  4 Steps
                </span>
              </div>

              <ol>
                {STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <motion.li key={title} {...fade(12, i * 0.08)} className="relative flex items-center gap-4 pb-6 last:pb-0">
                    {i !== STEPS.length - 1 && (
                      <span aria-hidden className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-slate-200" />
                    )}

                    <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-royal">
                      <Icon size={18} aria-hidden />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-800">{title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
                    </div>

                    <Check size={17} aria-hidden className="ml-auto shrink-0 text-emerald-600" />
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/60 px-6 py-5 sm:px-8">
              <div>
                <p className="text-sm font-bold text-slate-900">Premium care, every time.</p>
                <p className="mt-0.5 text-xs text-slate-500">Your convenience is our priority.</p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-royal">
                <ShieldCheck size={22} aria-hidden />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}