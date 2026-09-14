type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-ink pt-[calc(var(--header-h)+env(safe-area-inset-top)+2rem)] pb-12 text-white sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-[1.5rem] leading-[1.15] font-semibold tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
