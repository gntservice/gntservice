import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { devisSchema } from "@/lib/validations";
import { getService, site } from "@/lib/site";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const limited = rateLimit(clientIp(request));
  if (!limited.ok) {
    return NextResponse.json(
      { message: "Trop de demandes. Réessayez dans quelques minutes." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter ?? 60) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  const parsed = devisSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Veuillez vérifier le formulaire.";
    return NextResponse.json({ message: first }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO ?? site.email;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { message: "L’envoi d’e-mail n’est pas encore configuré. Contactez-nous par téléphone." },
      { status: 503 },
    );
  }

  const activity = getService(parsed.data.activity);
  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: { user, pass },
  });

  const safe = {
    name: escapeHtml(parsed.data.name),
    phone: escapeHtml(parsed.data.phone),
    email: escapeHtml(parsed.data.email),
    activity: escapeHtml(activity?.title ?? parsed.data.activity),
    message: escapeHtml(parsed.data.message).replaceAll("\n", "<br />"),
  };

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM ?? `"Site ${site.name}" <${user}>`,
      to,
      replyTo: parsed.data.email,
      subject: `Demande de devis — ${activity?.title ?? "GNT Service"}`,
      text: [
        `Nom : ${parsed.data.name}`,
        `Téléphone : ${parsed.data.phone}`,
        `E-mail : ${parsed.data.email}`,
        `Activité : ${activity?.title ?? parsed.data.activity}`,
        "",
        parsed.data.message,
      ].join("\n"),
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${safe.name}</p>
        <p><strong>Téléphone :</strong> ${safe.phone}</p>
        <p><strong>E-mail :</strong> ${safe.email}</p>
        <p><strong>Activité :</strong> ${safe.activity}</p>
        <p><strong>Message :</strong><br />${safe.message}</p>
      `,
    });
  } catch {
    return NextResponse.json(
      { message: "L’e-mail n’a pas pu être envoyé. Appelez-nous directement." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
