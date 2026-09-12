type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light }: Props) {
  return (
    <div className="flex w-full flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p
          className={`text-[0.65rem] font-semibold tracking-[0.22em] uppercase sm:text-[0.7rem] sm:tracking-[0.28em] ${
            light ? "text-accent" : "text-accent-dark"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-2 font-display text-[1.65rem] leading-tight font-semibold tracking-tight sm:mt-3 sm:text-3xl md:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`max-w-md text-sm leading-relaxed lg:text-right ${light ? "text-white/65" : "text-ink/55"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
