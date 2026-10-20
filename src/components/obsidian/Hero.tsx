import { motion } from "motion/react";

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { LINKS, SPLINE_SCENE } from "@/lib/site";

const PILLARS = ["Software", "Games", "Student training"];

/** Company-first hero: who we are, with a 3D scene and cursor spotlight. */
export function Hero() {
  return (
    <section className="pt-[68px]">
      <div className="shell pt-6 pb-6 md:pt-10">
        <Card className="invert-surface relative h-auto min-h-[540px] overflow-hidden border-0 bg-black/[0.96] md:h-[600px]">
          <Spotlight size={320} className="top-0 left-0" />
          <div className="flex h-full flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-14"
            >
              <p className="label-mono text-muted-foreground">
                Obsidian Labs · A Continental Obsidian company
              </p>
              <h1 className="display-lg mt-6 max-w-[14ch] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Building software from the ground up.
              </h1>
              <p className="body-lead mt-6 max-w-[40ch] text-neutral-300">
                A South African technology company developing software, digital products and
                games, and training the next generation of developers.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {PILLARS.map((p) => (
                  <li key={p} className="label-mono border border-white/25 px-3 py-2 text-neutral-200">
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#about"
                  className="label-mono bg-white px-7 py-4 text-black transition-opacity hover:opacity-85"
                >
                  About the company
                </a>
                <a href="#products" className="label-mono link-underline hover:link-underline-hover">
                  What we build ↓
                </a>
              </div>
            </motion.div>

            <div className="relative min-h-[320px] flex-1">
              <SplineScene scene={SPLINE_SCENE} className="h-full w-full" />
            </div>
          </div>
        </Card>
      </div>

      {/* Campaign stays visible, but as a banner, not the headline. */}
      <div className="shell pb-10">
        <div className="flex flex-col gap-4 border border-foreground px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            <span className="label-mono mr-3 text-accent">Live campaign</span>
            Our founding round is open on BackaBuddy: R50,000 to fund eight+ months of development.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#campaign" className="label-mono link-underline hover:link-underline-hover">
              How funds are used
            </a>
            <a
              href={LINKS.backabuddy}
              target="_blank"
              rel="noreferrer noopener"
              className="label-mono bg-foreground px-5 py-3 text-background transition-colors hover:bg-ink-soft"
            >
              Support the Build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
