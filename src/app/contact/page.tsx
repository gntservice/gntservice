import type { Metadata } from "next";
import { DevisForm } from "@/components/DevisForm";
import { IconMail, IconPhone, IconPin } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { phones, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & devis",
  description:
    "Demandez un devis GNT Service à Casablanca : construction, sablage, peinture, gardiennage et facility management.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez votre besoin. Nous revenons vers vous avec une proposition adaptée."
      />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <aside className="order-2 space-y-8 lg:order-1">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Coordonnées</h2>
              <p className="mt-3 text-sm text-ink/55">
                {site.city}, {site.country}. Réponse sous 24 à 48 heures ouvrées.
              </p>
            </div>
            <ul className="space-y-4">
              {phones.map((phone) => (
                <li key={phone.id}>
                  <a href={phone.href} className="flex min-h-11 items-start gap-3 text-sm text-ink hover:text-ink/70">
                    <span className="mt-0.5 text-accent">
                      <IconPhone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-wide text-ink/40 uppercase">{phone.label}</span>
                      {phone.display}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-sm text-ink hover:text-ink/70">
                  <span className="mt-0.5 text-accent">
                    <IconMail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-ink/40 uppercase">E-mail</span>
                    {site.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 text-accent">
                  <IconPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-ink/40 uppercase">Zone</span>
                  {site.city} et tout le Maroc
                </span>
              </li>
            </ul>
          </aside>

          <div className="order-1 rounded-2xl bg-[#f7f6f3] p-5 ring-1 ring-black/5 sm:p-8 lg:order-2">
            <h2 className="font-display text-xl font-semibold text-ink">Demander un devis</h2>
            <p className="mt-2 mb-8 text-sm text-ink/55">
              Les champs sont contrôlés côté serveur. Vos données ne sont utilisées que pour vous
              recontacter.
            </p>
            <DevisForm />
          </div>
        </div>
      </section>
    </>
  );
}
