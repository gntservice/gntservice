import { z } from "zod";
import { services } from "./site";

const slugs = services.map((service) => service.slug) as [string, ...string[]];

export const devisSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom est trop court.")
    .max(80, "Le nom est trop long."),
  phone: z
    .string()
    .trim()
    .min(8, "Le numéro est invalide.")
    .max(20, "Le numéro est invalide.")
    .regex(/^[0-9+\s().-]{8,20}$/, "Le numéro est invalide."),
  email: z.string().trim().email("L’e-mail est invalide.").max(120),
  activity: z.enum(slugs, { message: "Veuillez choisir une activité." }),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(2000, "Le message est trop long."),
  website: z.string().max(0).optional(),
});

export type DevisInput = z.infer<typeof devisSchema>;
