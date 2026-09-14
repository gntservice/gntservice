import Link from "next/link";
import type { Service } from "@/lib/site";
import { IconArrow } from "./icons";
import { Photo } from "./Photo";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group h-full overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(11,13,16,0.05)] ring-1 ring-black/5 sm:rounded-2xl">
      <Link href={`/services/${service.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-2.5 sm:p-5">
          <div className="mb-3 hidden h-10 w-10 items-center justify-center rounded-xl bg-ink text-accent sm:flex">
            <span className="text-sm font-semibold">+</span>
          </div>
          <h3 className="font-display text-[0.8rem] leading-snug font-semibold text-ink sm:text-lg">
            <span className="sm:hidden">{service.shortTitle}</span>
            <span className="hidden sm:inline">{service.title}</span>
          </h3>
          <p className="mt-1.5 hidden text-sm leading-relaxed text-ink/55 sm:mt-2 sm:line-clamp-3 sm:block">
            {service.excerpt}
          </p>
          <p className="mt-auto hidden items-center gap-2 pt-5 text-sm font-semibold text-ink sm:inline-flex">
            En savoir plus
            <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </p>
        </div>
      </Link>
    </article>
  );
}
