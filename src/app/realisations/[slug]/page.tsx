import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { getProject, getService, projects, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: {
      title: `${project.title} | GNT Service`,
      description: project.description,
      url: `/realisations/${project.slug}`,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const service = getService(project.serviceSlug);
  const gallery = project.images?.length ? project.images : [project.image];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: gallery,
    url: `${site.url}/realisations/${project.slug}`,
    creator: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-ink pt-[calc(var(--header-h)+env(safe-area-inset-top)+2rem)] pb-12 text-white sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Accueil" },
              { href: "/realisations", label: "Réalisations" },
              { label: project.title },
            ]}
          />
          <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
          <div className="space-y-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#f7f6f3] sm:aspect-[16/8]">
              <Photo
                src={gallery[0]}
                alt={`${project.title} — GNT Service`}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            {gallery.length > 1 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.slice(1).map((src, index) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#f7f6f3]">
                    <Photo
                      src={src}
                      alt={`${project.title} — vue ${index + 2}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">{project.title}</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65">{project.description}</p>
            <ul className="mt-6 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            {project.closing ? (
              <p className="mt-6 font-display text-lg font-semibold text-ink">{project.closing}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Demander un devis
              </ButtonLink>
              {service ? (
                <ButtonLink href={`/services/${service.slug}`} variant="outline" className="w-full sm:w-auto">
                  {service.shortTitle}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
