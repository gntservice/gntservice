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
        className={compact ? "h-9 w-auto max-w-[128px] sm:h-14 sm:max-w-[180px]" : "h-12 w-auto max-w-[180px] sm:h-16"}
        priority={compact}
      />
    </Link>
  );
}
