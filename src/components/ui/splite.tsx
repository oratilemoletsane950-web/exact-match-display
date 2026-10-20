"use client";

import { Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/** Client-only: Spline needs the browser, so we wait for mount (SSR-safe). */
export function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const spinner = (
    <div className="flex h-full w-full items-center justify-center">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-500 border-t-transparent" />
    </div>
  );

  if (!mounted) return spinner;
  return (
    <Suspense fallback={spinner}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
