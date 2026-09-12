import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center bg-ink px-4 pt-[calc(var(--header-h)+1rem)] pb-16 text-center text-white sm:px-5">
      <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">Erreur 404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Page introuvable</h1>
      <p className="mt-3 max-w-md text-sm text-white/55">
        Cette page n’existe pas ou a été déplacée. Revenez à l’accueil ou consultez nos services.
      </p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <ButtonLink href="/" className="w-full sm:w-auto">
          Accueil
        </ButtonLink>
        <ButtonLink href="/services" variant="outlineLight" className="w-full sm:w-auto">
          Nos services
        </ButtonLink>
      </div>
    </section>
  );
}
