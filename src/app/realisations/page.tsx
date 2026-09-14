import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Chantiers GNT Service : ferraillage, coffrage, béton et réalisations de construction au Maroc.",
  alternates: { canonical: "/realisations" },
  openGraph: { url: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets concrets, des résultats durables"
        description="Une sélection de missions en construction, traitement de surface et conception architecturale."
      />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-6 sm:px-6 lg:grid-cols-3 lg:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
