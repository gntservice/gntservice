import Link from "next/link";
import type { Service } from "@/lib/site";
import { IconArrow } from "./icons";
import { Photo } from "./Photo";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(11,13,16,0.06)] ring-1 ring-black/5 transition-transform duration-300 motion-safe:md:hover:-translate-y-1">
      <Link href={`/services/${service.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-accent">
            <span className="text-sm font-semibold">+</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/55">{service.excerpt}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            En savoir plus
            <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </p>
        </div>
      </Link>
    </article>
  );
}
