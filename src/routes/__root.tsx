import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { LogoMark } from "../components/site/Logo";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { absoluteUrl, SITE } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="surface-dark flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <LogoMark className="mx-auto h-12 w-12 text-[#c9ab77]" />
        <p className="label-mono mt-8 text-[#c9ab77]">Error 404</p>
        <h1 className="display-md mt-4 text-[#f6f2e9]">This page has moved on.</h1>
        <p className="mt-4 text-sm leading-relaxed text-[#f6f2e9]/60">
          The page you are looking for does not exist. The exhibition and the services pages are the
          best place to start again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="lux-btn">
            Return home
          </Link>
          <Link to="/exhibition" className="lux-btn-ghost">
            Exhibition
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <LogoMark className="mx-auto h-10 w-10 text-[#b89355]" />
        <h1 className="mt-7 font-serif text-2xl">This page didn't load</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Something went wrong on our end. Try again, or contact the studio if it keeps happening.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="lux-btn"
          >
            Try again
          </button>
          <a href="/" className="lux-btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} Software | Software Development in ${SITE.city}` },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.legalName },
      { name: "application-name", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#0b0b0c" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl("/images/og.jpg") },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Obsidian Labs Software — software studio in Bloemfontein",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/images/og.jpg") },
      {
        name: "twitter:image:alt",
        content: "Obsidian Labs Software — software studio in Bloemfontein",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Black&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=DM+Serif+Display:ital@0;1&family=Fraunces:opsz,wght@9..144,400;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Jost:wght@300;400;500&family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@300..700&family=Syne:wght@600;700;800&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
