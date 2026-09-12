import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Construction, aménagement, gardiennage, recrutement, facility management, sablage et peinture industrielle à Casablanca.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Quatre pôles, une même exigence"
        description="GNT Service rassemble construction, services aux sites, ressources humaines et traitement de surface — pour un suivi unique de vos projets."
      />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:px-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
