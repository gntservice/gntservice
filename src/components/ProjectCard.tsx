import Link from "next/link";
import type { Project } from "@/lib/site";
import { Photo } from "./Photo";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full overflow-hidden rounded-xl bg-white ring-1 ring-black/5 sm:rounded-2xl">
      <Link href={`/realisations/${project.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-2.5 sm:p-5">
          <p className="text-[0.6rem] tracking-wide text-ink/40 uppercase sm:text-xs">{project.category}</p>
          <h3 className="mt-1 font-display text-[0.8rem] leading-snug font-semibold text-ink sm:text-base">
            {project.title}
          </h3>
          <p className="mt-1.5 hidden text-sm leading-relaxed text-ink/55 sm:mt-2 sm:line-clamp-2 sm:block">
            {project.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
