"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { services } from "@/lib/site";
import { Photo } from "./Photo";

const INTERVAL = 5500;

type Props = {
  children: React.ReactNode;
};

export function HeroSlider({ children }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();
  const current = services[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    function onVisibility() {
      setPaused(document.hidden);
    }

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return undefined;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % services.length);
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p id={labelId} className="sr-only">
        Nos services
      </p>
      {services.map((service, slideIndex) => {
        const active = slideIndex === index;
        return (
          <div
            key={service.slug}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!active}
          >
            <Photo
              src={service.image}
              alt={service.title}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className={`object-cover object-center ${active ? "hero-slide-zoom" : ""}`}
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-linear-to-b from-ink/80 via-ink/75 to-ink/90 sm:bg-linear-to-r sm:from-ink sm:via-ink/80 sm:to-ink/25" />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pt-[calc(var(--header-h)+env(safe-area-inset-top)+1.5rem)] pb-4 sm:justify-center sm:px-6 sm:pb-8 lg:px-8">
          {children}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <Link
              href={`/services/${current.slug}`}
              className="min-w-0 text-sm font-semibold text-white sm:text-base"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase">
                Service
              </span>
              <span className="mt-1 block truncate">{current.title}</span>
            </Link>
            <div className="flex items-center gap-2" role="tablist" aria-label="Choisir un service">
              {services.map((service, slideIndex) => {
                const active = slideIndex === index;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={service.title}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      active ? "w-8 bg-accent" : "w-2.5 bg-white/35 hover:bg-white/60"
                    }`}
                    onClick={() => setIndex(slideIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
