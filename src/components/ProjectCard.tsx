import Link from "next/link";
import type { Project } from "@/lib/site";
import { Photo } from "./Photo";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <Link href={`/realisations/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-xs tracking-wide text-ink/40 uppercase">{project.category}</p>
          <h3 className="mt-1 font-display text-base font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/55">{project.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
