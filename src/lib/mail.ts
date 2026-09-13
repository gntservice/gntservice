import { lookup } from "node:dns/promises";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { site } from "./site";

const SMTP_USER = process.env.SMTP_USER ?? site.email;
const MAIL_TO = process.env.MAIL_TO ?? site.email;
const MAIL_FROM = process.env.MAIL_FROM ?? `"GNT Service" <${SMTP_USER}>`;

function allowInsecureTls() {
  return process.env.SMTP_TLS_INSECURE === "true" || process.env.NODE_ENV !== "production";
}

async function resolveIPv4(host: string) {
  const { address } = await lookup(host, { family: 4 });
  return address;
}

function smtpTargets() {
  const preferredHost = process.env.SMTP_HOST ?? "smtp.zoho.com";
  const preferredPort = Number(process.env.SMTP_PORT ?? 465);
  const hosts = [preferredHost, "smtp.zoho.com", "smtppro.zoho.com"];
  const ports = [preferredPort, 465, 587];
  const seen = new Set<string>();
  const targets: { host: string; port: number }[] = [];

  for (const host of hosts) {
    for (const port of ports) {
      const key = `${host}:${port}`;
      if (seen.has(key)) continue;
      seen.add(key);
      targets.push({ host, port });
    }
  }

  return targets;
}

async function createTransport(host: string, port: number, pass: string) {
  const address = await resolveIPv4(host);
  const options: SMTPTransport.Options = {
    host: address,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    connectionTimeout: 12_000,
    greetingTimeout: 12_000,
    socketTimeout: 20_000,
    auth: {
      user: SMTP_USER,
      pass: pass.replaceAll(" ", ""),
    },
    tls: {
      servername: host,
      minVersion: "TLSv1.2",
      rejectUnauthorized: !allowInsecureTls(),
    },
  };

  return nodemailer.createTransport(options);
}

export async function sendDevisMail(mail: Mail.Options) {
  const pass = process.env.SMTP_PASS;
  if (!pass) {
    throw new Error("SMTP_PASS manquant");
  }

  const payload: Mail.Options = {
    ...mail,
    from: MAIL_FROM,
    to: MAIL_TO,
  };

  let lastError: unknown;
  for (const target of smtpTargets()) {
    try {
      const transporter = await createTransport(target.host, target.port, pass);
      await transporter.sendMail(payload);
      return;
    } catch (error) {
      lastError = error;
      console.error(`[devis] Zoho SMTP failed ${target.host}:${target.port}`, error);
    }
  }

  throw lastError instanceof Error ? lastError : new Error("SMTP failed");
}
