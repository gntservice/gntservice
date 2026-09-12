import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { FaqJsonLd } from "@/components/JsonLd";
import { IconArrow, IconGear, IconShield, IconUsers } from "@/components/icons";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { faqs, images, primaryPhone, projects, services, site, stats, trust } from "@/lib/site";

const trustIcons = [IconShield, IconGear, IconUsers];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={[...faqs]} />
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <Photo
          src={images.hero}
          alt="Ouvrier industriel au travail — GNT Service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/80 via-ink/75 to-ink/90 sm:bg-linear-to-r sm:from-ink sm:via-ink/80 sm:to-ink/25" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pt-[calc(var(--header-h)+env(safe-area-inset-top)+1.5rem)] pb-10 sm:justify-center sm:px-6 sm:pb-16 lg:px-8">
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-[0.7rem] sm:tracking-[0.3em]">
            Entreprise générale — Casablanca
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[2rem] leading-[1.1] font-semibold tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Des solutions durables pour vos{" "}
            <span className="text-accent">projets industriels</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base lg:text-lg">
            {site.name} vous accompagne de la conception à la réalisation : construction,
            aménagement, services aux sites, recrutement et traitement de surface.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              Demander un devis
            </ButtonLink>
            <ButtonLink href="/services" variant="outlineLight" className="w-full sm:w-auto">
              Découvrir nos services
              <IconArrow />
            </ButtonLink>
          </div>
          <ul className="mt-10 grid max-w-3xl gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {trust.map((item, index) => {
              const Icon = trustIcons[index] ?? IconShield;
              return (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos services"
            title="Une expertise complète pour vos projets"
            description="Quatre pôles d’activité, un seul interlocuteur — adaptés aux exigences industrielles et tertiaires."
          />
          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,180,0,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
              À propos de GNT Service
            </p>
            <h2 className="mt-3 font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Un partenaire fiable pour vos projets
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">
              Progressivement, GNT Service s’est dotée d’une organisation efficiente, adaptée aux
              évolutions techniques. Aujourd’hui, nous intervenons en gros œuvre, en entreprise
              générale et sur les métiers de surface — à Casablanca et dans tout le Maroc.
            </p>
            <ButtonLink href="/a-propos" className="mt-7 w-full sm:mt-8 sm:w-auto">
              En savoir plus
              <IconArrow />
            </ButtonLink>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.7rem] tracking-wide text-white/45 uppercase sm:text-xs">{stat.label}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-accent sm:text-3xl md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#f7f6f3] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Nos réalisations"
              title="Des projets concrets, des résultats durables"
            />
            <Link
              href="/realisations"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink"
            >
              Voir tous les projets
              <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
          <div className="mt-8 divide-y divide-ink/10 sm:mt-10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-4 sm:py-5">
                <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:content-none sm:text-lg">
                  <span className="flex items-start justify-between gap-4">
                    <span className="min-w-0">{item.q}</span>
                    <span className="shrink-0 text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,180,0,0.14),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
            Un projet ?
          </p>
          <h2 className="mt-3 font-display text-[1.65rem] font-semibold sm:text-3xl md:text-4xl">
            Parlons-en dès maintenant
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
            Notre équipe est à l’écoute pour étudier vos besoins et proposer la solution la plus adaptée.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              Demander un devis
            </ButtonLink>
            <ButtonLink href={primaryPhone.href} variant="outlineLight" className="w-full sm:w-auto">
              Nous contacter
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
