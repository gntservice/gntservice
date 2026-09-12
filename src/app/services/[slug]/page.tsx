import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { getService, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | GNT Service`,
      description: service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} slug={service.slug} />
      <section className="relative isolate overflow-hidden bg-ink pt-[calc(var(--header-h)+env(safe-area-inset-top)+2rem)] pb-12 text-white sm:pb-16 md:pb-20">
        <Photo
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Accueil" },
              { href: "/services", label: "Services" },
              { label: service.title },
            ]}
          />
          <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">Nos services</p>
          <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] leading-tight font-semibold tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70">{service.description}</p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-8">
          <div className="space-y-10">
            {service.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{section.body}</p>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-[#f7f6f3] p-5 ring-1 ring-black/5 sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink">Prestations</h2>
            <ul className="mt-4 space-y-3">
              {service.prestations.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-8 w-full">
              Demander un devis
            </ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
