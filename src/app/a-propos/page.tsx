import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Partners } from "@/components/Partners";
import { Photo } from "@/components/Photo";
import { images, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Histoire et organisation de GNT Service : entreprise générale à Casablanca, du projet architectural à la réalisation industrielle.",
  alternates: { canonical: "/a-propos" },
  openGraph: { url: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Notre histoire, <span className="text-accent">notre exigence</span>
          </>
        }
        description={`${site.slogan}. Une organisation pensée pour les projets ambitieux, au Maroc.`}
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-3xl">Notre histoire</h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/65">
              Progressivement, GNT Service s’est dotée d’une organisation efficiente, adaptée aux
              évolutions techniques et aux besoins d’un secteur en forte expansion.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65">
              Aujourd’hui, GNT Service est organisée pour répondre, en gros œuvre ou en entreprise
              générale, à des projets ambitieux : structures en béton armé complexes, et opérations
              urbaines contraignantes en environnement réglementaire dense.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Photo
              src={images.metal}
              alt="Chantier et construction métallique"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f3] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-3xl">
            Construction métallique
          </h2>
          <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-ink/65">
            Nous mettons à votre disposition charpente métallique, chaudronnerie, tuyauterie
            industrielle, maintenance et soudage. Des prestations de qualité, dans tout le Maroc, au
            meilleur rapport qualité-prix : métaux sélectionnés, équipes qualifiées, finitions soignées
            et matériel sécurisé.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Photo
                src={images.architecture}
                alt="Conception architecturale et aménagement"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Conception / projet architectural
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/65">
                <li>— Étude et conception de projet architectural</li>
                <li>— Modélisation 3D pour visualiser les espaces et l’aménagement</li>
                <li>— Conception alliant fonctionnalité, esthétique et confort</li>
              </ul>
              <p className="mt-5 text-sm font-semibold text-ink">{site.name} — {site.slogan}.</p>
            </div>
          </div>
        </div>
      </section>

      <Partners variant="grid" />

      <section className="bg-ink py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs text-white/55 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-4 sm:mt-10 sm:px-6 lg:px-8">
          <ButtonLink href="/contact" className="w-full sm:w-auto">
            Demander un devis
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
