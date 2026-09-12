"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import { Button } from "./Button";

type Status = "idle" | "loading" | "success" | "error";

export function DevisForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setError(payload.message ?? "L’envoi a échoué. Réessayez ou appelez-nous.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Impossible de contacter le serveur. Vérifiez votre connexion.");
    }
  }

  const field =
    "mt-2 w-full min-h-12 rounded-xl border border-ink/10 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Nom complet
          <input className={field} name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Téléphone
          <input className={field} name="phone" type="tel" autoComplete="tel" required placeholder="+212 6 ..." />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        E-mail
        <input className={field} name="email" type="email" autoComplete="email" required />
      </label>

      <label className="block text-sm font-medium text-ink">
        Activité
        <select className={field} name="activity" required defaultValue="">
          <option value="" disabled>
            Choisir une activité
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-ink">
        Votre projet
        <textarea className={`${field} min-h-32 resize-y`} name="message" required minLength={10} maxLength={2000} />
      </label>

      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Site web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "success" ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
          Merci. Votre demande a bien été envoyée. Nous vous recontactons rapidement.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <Button className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours…" : "Envoyer la demande"}
      </Button>
    </form>
  );
}
