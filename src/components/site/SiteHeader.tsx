import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { MAILTO, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Main-site header. `overlay` starts transparent over a dark hero and
 * condenses to an ivory rail once the page is scrolled.
 */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = overlay && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        light
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-[color:var(--rule)] bg-[#f6f2e9]/95 backdrop-blur-md",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#0b0b0c] focus:px-4 focus:py-3 focus:text-[0.6875rem] focus:tracking-[0.2em] focus:text-[#f6f2e9] focus:uppercase"
      >
        Skip to content
      </a>

      <div className="shell flex h-20 items-center justify-between gap-8">
        <Link
          to="/"
          aria-label="Obsidian Labs — home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo tone={light ? "light" : "dark"} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "label-mono link-underline hover:link-underline-hover transition-colors",
                light
                  ? "text-[#f6f2e9]/75 hover:text-[#f6f2e9]"
                  : "text-[#0b0b0c]/65 hover:text-[#0b0b0c]",
              )}
              activeProps={{ className: light ? "text-[#f6f2e9]" : "text-[#0b0b0c]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={MAILTO}
            className={cn(
              "label-mono hidden px-6 py-3.5 transition-colors sm:inline-flex",
              light
                ? "border border-[#c9ab77] bg-[#c9ab77] text-[#0b0b0c] hover:bg-transparent hover:text-[#f6f2e9]"
                : "border border-[#0b0b0c] bg-[#0b0b0c] text-[#f6f2e9] hover:bg-transparent hover:text-[#0b0b0c]",
            )}
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className={cn(
              "label-mono border px-4 py-3.5 transition-colors lg:hidden",
              light ? "border-white/35 text-[#f6f2e9]" : "border-[#0b0b0c]/30 text-[#0b0b0c]",
            )}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="surface-dark fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto lg:hidden"
        >
          <nav aria-label="Primary mobile" className="shell py-6">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.href} className={i === 0 ? "" : "rule-top"}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-6"
                  >
                    <span className="font-serif text-3xl">{item.label}</span>
                    <span className="label-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a href={MAILTO} onClick={() => setOpen(false)} className="lux-btn mt-8 w-full">
              Start a project
            </a>
            <p className="label-mono mt-8 text-muted-foreground">Bloemfontein · Free State · ZA</p>
          </nav>
        </div>
      )}
    </header>
  );
}
