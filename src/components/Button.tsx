import Link from "next/link";

type Variant = "primary" | "outline" | "outlineLight";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-accent-dark focus-visible:outline-accent",
  outline:
    "border border-ink/15 bg-white text-ink hover:border-ink/30 hover:bg-zinc-50 focus-visible:outline-ink",
  outlineLight:
    "border border-white/35 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6";

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
}: Common & { href: string }) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "submit",
  disabled,
}: Common & { type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button type={type} disabled={disabled} className={`${base} ${styles[variant]} disabled:opacity-60 ${className}`}>
      {children}
    </button>
  );
}
