import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/lib/site";

type Props = {
  variant?: "marquee" | "grid";
};

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-xl border border-ink/8 bg-white px-3 py-3 shadow-[0_1px_0_rgba(11,13,16,0.03)] transition duration-300 hover:border-accent/35 hover:shadow-md sm:h-28 sm:rounded-2xl sm:px-6 sm:py-4">
      <Photo
        src={logo}
        alt={name}
        width={220}
        height={110}
        sizes="(min-width: 1280px) 180px, (min-width: 640px) 22vw, 42vw"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function LogoGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
      {partners.map((partner) => (
        <li key={partner.name}>
          <LogoCard name={partner.name} logo={partner.logo} />
        </li>
      ))}
    </ul>
  );
}

export function Partners({ variant = "grid" }: Props) {
  const heading = (
    <SectionHeading
      eyebrow="Ils nous font confiance"
      title="Nos partenaires"
      description="Grands groupes, institutionnels et industriels nous accompagnent sur des projets d’envergure au Maroc."
    />
  );

  if (variant === "marquee") {
    return (
      <section className="overflow-hidden bg-[#f7f6f3] py-14 sm:py-20 lg:py-24" aria-label="Nos partenaires">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{heading}</div>

        <div className="mt-8 hidden px-4 motion-reduce:block sm:mt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <LogoGrid />
          </div>
        </div>

        <div className="relative mt-8 motion-reduce:hidden sm:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#f7f6f3] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#f7f6f3] to-transparent sm:w-24" />
          <div className="partners-marquee">
            <div className="partners-track flex w-max gap-3 pr-3 sm:gap-4 sm:pr-4">
              <ul className="flex gap-3 sm:gap-4">
                {partners.map((partner) => (
                  <li key={partner.name} className="w-[11.5rem] shrink-0 sm:w-[14rem]">
                    <LogoCard name={partner.name} logo={partner.logo} />
                  </li>
                ))}
              </ul>
              <ul className="flex gap-3 sm:gap-4" aria-hidden>
                {partners.map((partner) => (
                  <li key={`${partner.name}-dup`} className="w-[11.5rem] shrink-0 sm:w-[14rem]">
                    <LogoCard name="" logo={partner.logo} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f6f3] py-12 sm:py-16 lg:py-20" aria-label="Nos partenaires">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading}
        <div className="mt-8 sm:mt-12">
          <LogoGrid />
        </div>
      </div>
    </section>
  );
}
