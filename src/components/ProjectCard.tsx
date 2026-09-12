import type { Project } from "@/lib/site";
import { Photo } from "./Photo";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Photo
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-1 text-sm text-ink/50">{project.category}</p>
      </div>
    </article>
  );
}
