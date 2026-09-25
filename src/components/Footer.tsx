import Link from "next/link";
import { Logo } from "./Logo";
import { nav, phones, services, site } from "@/lib/site";
import { IconMail, IconPhone, IconPin } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-4 lg:px-8">
        <div className="max-w-xs">
          <div className="inline-flex max-w-full rounded-2xl bg-white px-3 py-2.5 sm:px-4 sm:py-3">
            <Logo size="footer" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/55 sm:mt-6">
            {site.slogan}. Construction, facility management et traitement de
            surface à {site.city} et dans tout le {site.country}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Activités</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex min-h-10 items-center text-sm text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {phones.map((phone) => (
              <li key={phone.id}>
                <a href={phone.href} className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                  <IconPhone className="h-4 w-4 shrink-0 text-accent" />
                  <span className="break-all">
                    {phone.display}
                    {"primary" in phone && phone.primary ? (
                      <span className="ml-2 text-[0.7rem] tracking-wide text-accent uppercase">WhatsApp</span>
                    ) : null}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                <IconMail className="h-4 w-4 shrink-0 text-accent" />
                <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li>
              <a
                href={site.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-start gap-2 hover:text-white"
              >
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{site.address}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 pb-[max(5rem,env(safe-area-inset-bottom))] text-xs text-white/40 sm:flex-row sm:items-center sm:px-6 sm:pb-5 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>
            Site réalisé par{" "}
            <a
              href="https://mehdicodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              Mehdi Codes
            </a>
          </p>
          <p>Casablanca — Maroc</p>
        </div>
      </div>
    </footer>
  );
}
