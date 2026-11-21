import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { LogoMark } from "@/components/site/Logo";
import { Parallax } from "@/components/site/primitives";
import { MAILTO, SITE } from "@/lib/site";

const CREDENTIALS = [
  { label: "Studio", value: "Bloemfontein, ZA" },
  { label: "Disciplines", value: "Web · Apps · Systems" },
  { label: "Focus", value: "Owner-led business" },
  { label: "Engagement", value: "Fixed scope" },
];

export function Hero() {
  return (
    <section className="surface-dark grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-20">
      <Parallax strength={46} className="absolute inset-0 -z-0">
        <img
          src="/images/hero.jpg"
          alt="Obsidian stone and champagne light — the Obsidian Labs studio aesthetic"
          className="h-[112%] w-full object-cover opacity-70"
          loading="eager"
          fetchPriority="high"
        />
      </Parallax>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0b0b0c]/85 via-[#0b0b0c]/55 to-[#0b0b0c]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(201,171,119,0.22),transparent_60%)]"
      />

      <div className="shell relative z-10 grid flex-1 items-end pt-24 pb-12 md:grid-cols-12">
        <div className="md:col-span-9 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="label-mono flex flex-wrap items-center gap-x-3 gap-y-2 text-[#f6f2e9]/70"
          >
            <span className="text-[#c9ab77]">Obsidian Labs Software</span>
            <span aria-hidden className="h-px w-6 bg-[#c9ab77]/60" />
            <span>Bloemfontein · South Africa</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
            className="display-xl mt-7 max-w-[16ch] text-[#f6f2e9]"
          >
            Software, engineered with intent.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
            className="body-lead mt-8 max-w-[52ch] text-[#f6f2e9]/75"
          >
            We design and build websites, applications and business systems for companies that care
            how they are represented. Every interface is drawn for one industry, one audience and
            one commercial purpose — then built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a href={MAILTO} className="lux-btn">
              Start a project
            </a>
            <Link
              to="/exhibition"
              className="label-mono link-underline hover:link-underline-hover text-[#f6f2e9]/80 hover:text-[#f6f2e9]"
            >
              View the exhibition →
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 hidden justify-self-end md:col-span-3 md:block lg:col-span-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex justify-end"
          >
            <LogoMark className="h-24 w-24 text-[#c9ab77]/70 lg:h-32 lg:w-32" />
          </motion.div>
        </div>
      </div>

      <div className="shell relative z-10 pb-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 md:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <div key={item.label}>
              <dt className="label-mono text-[#f6f2e9]/45">{item.label}</dt>
              <dd className="mt-2 text-sm text-[#f6f2e9]/90">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="label-mono mt-8 flex items-center gap-3 text-[#f6f2e9]/40">
          <span aria-hidden className="inline-block h-8 w-px bg-[#c9ab77]/50" />
          Scroll to explore
        </p>
      </div>

      <a
        href="#studio"
        aria-label={`Scroll to ${SITE.name} studio introduction`}
        className="sr-only"
      >
        Skip hero
      </a>
    </section>
  );
}
