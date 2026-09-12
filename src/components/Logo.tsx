import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function Logo({ className = "", size = "header" }: LogoProps) {
  const compact = size === "header";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="GNT Service — accueil">
      <Image
        src="/logo.png"
        alt="GNT Service — Construisons ensemble"
        width={compact ? 200 : 240}
        height={compact ? 105 : 126}
        className={compact ? "h-11 w-auto max-w-[148px] sm:h-14 sm:max-w-[180px]" : "h-14 w-auto max-w-[200px] sm:h-16"}
        priority={compact}
      />
    </Link>
  );
}
