"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Logo size="header" className="min-w-0 shrink" />

        <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Navigation principale">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.8rem] font-medium tracking-wide whitespace-nowrap transition-colors ${
                  active ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ButtonLink href="/contact" className="hidden !px-5 !py-2.5 text-[0.8rem] xl:inline-flex">
            Demander un devis
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-black/8 bg-white px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] xl:hidden"
          style={{ top: "calc(var(--header-h) + env(safe-area-inset-top))" }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Navigation mobile">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3.5 text-base ${active ? "bg-zinc-100 font-semibold text-ink" : "text-ink/75"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/contact" className="mt-4 w-full">
              Demander un devis
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
