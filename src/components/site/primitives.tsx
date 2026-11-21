import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export { Reveal } from "@/components/obsidian/Reveal";

/** Section wrapper with an editorial index + label rail. */
export function Section({
  id,
  index,
  label,
  children,
  className,
  containerClassName,
  tone = "light",
}: {
  id?: string;
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "dark" | "stone";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        tone === "dark" && "surface-dark",
        tone === "stone" && "surface-stone",
        className,
      )}
    >
      <div
        className={cn(
          "shell grid gap-10 py-20 md:grid-cols-12 md:gap-10 md:py-28 lg:py-36",
          containerClassName,
        )}
      >
        {label && (
          <div className="md:col-span-3 lg:col-span-2">
            <div className="md:sticky md:top-28">
              <Eyebrow index={index}>{label}</Eyebrow>
            </div>
          </div>
        )}
        <div className={label ? "md:col-span-9 lg:col-span-10" : "md:col-span-12"}>{children}</div>
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={cn("flex items-baseline gap-3", className)}>
      {index && <span className="eyebrow">{index}</span>}
      <span aria-hidden className="h-px w-7 self-center bg-[color:var(--gold)] opacity-60" />
      <span className="label-mono text-muted-foreground">{children}</span>
    </p>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("hairline-gold w-full", className)} />;
}

/** Small number + caption used in stat strips. */
export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-[color:var(--rule)] pt-5", className)}>
      <p className="font-serif text-3xl leading-none md:text-4xl">{value}</p>
      <p className="label-mono mt-3 text-muted-foreground">{label}</p>
    </div>
  );
}

/**
 * Subtle scroll parallax. Moves its child by `strength` pixels across the
 * viewport pass. Disabled entirely for prefers-reduced-motion.
 */
export function Parallax({
  children,
  strength = 40,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.IntersectionObserver === "undefined") return;

    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const offset = Math.max(-1, Math.min(1, progress)) * strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        onScroll();
      },
      { rootMargin: "120px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

/** Gold reading-progress line pinned to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent">
      <div
        className="h-px origin-left bg-[color:var(--gold)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

/** Looping caption strip; pauses on hover and is inert under reduced motion. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="label-mono flex items-center text-muted-foreground">
          <span className="px-8">{item}</span>
          <span aria-hidden className="text-[color:var(--gold)]">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn("marquee overflow-hidden border-y border-[color:var(--rule)] py-4", className)}
    >
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
