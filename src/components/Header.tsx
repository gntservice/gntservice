"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { nav, primaryPhone } from "@/lib/site";

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
    <>
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
      </header>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal={open}
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[45] flex flex-col bg-white xl:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className="relative flex min-h-0 flex-1 flex-col"
          style={{ paddingTop: "calc(var(--header-h) + env(safe-area-inset-top))" }}
        >
          <nav
            className={`mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-y-auto overscroll-contain px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-all duration-300 ease-out sm:px-6 sm:pt-6 lg:px-8 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col gap-1">
              {nav.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-4 text-lg font-medium transition-colors sm:px-5 sm:py-5 sm:text-xl ${
                      active ? "bg-zinc-100 font-semibold text-ink" : "text-ink/70 hover:bg-zinc-50 hover:text-ink"
                    }`}
                    style={{ transitionDelay: open ? `${80 + index * 40}ms` : "0ms" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-auto border-t border-ink/8 pt-5">
              <ButtonLink href="/contact" className="w-full">
                Demander un devis
              </ButtonLink>
              <a
                href={primaryPhone.href}
                className="mt-3 flex min-h-12 items-center justify-center text-sm font-medium text-ink/55"
              >
                WhatsApp {primaryPhone.display}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
