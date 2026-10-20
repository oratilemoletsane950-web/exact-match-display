import { useEffect, useState } from "react";

const NAV = [
  { label: "Company", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Training", href: "#training" },
  { label: "Team", href: "#people" },
  { label: "Campaign", href: "#campaign" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-[6px]"
          : "border-b border-transparent bg-background/45"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="group block leading-none" aria-label="Obsidian Labs, home">
          <span className="block text-[0.95rem] font-medium tracking-[0.14em] uppercase">
            Obsidian Labs
          </span>
          <span className="label-mono mt-1 block text-muted-foreground">
            A Continental Obsidian Company
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono link-underline hover:link-underline-hover text-foreground/75 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#campaign"
            className="label-mono border border-foreground px-4 py-2.5 transition-colors hover:bg-foreground hover:text-background"
          >
            Support the Build
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label-mono border border-foreground px-3 py-2 lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="shell py-2">
            {NAV.map((item, i) => (
              <li key={item.href} className={i === 0 ? "" : "rule-top"}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label-mono flex items-center justify-between py-4"
                >
                  {item.label}
                  <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
            <li className="rule-top py-4">
              <a
                href="#campaign"
                onClick={() => setOpen(false)}
                className="label-mono block border border-foreground px-4 py-3 text-center"
              >
                Support the Build
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
