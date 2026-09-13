export const site = {
  name: "GNT Service",
  legalName: "GNT Service",
  tagline: "Construisons ensemble",
  slogan: "Du projet à la réalisation",
  city: "Casablanca",
  country: "Maroc",
  postalCode: "20250",
  street: "Rue C",
  address: "Rue C, 20250 Casablanca, Maroc",
  email: "contact@gntservice.ma",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gntservice.ma",
  linkedin: "",
  maps: {
    apple: "https://maps.apple/p/0PN3E_gV6FYPxM",
    google:
      "https://www.google.com/maps/search/?api=1&query=Rue+C+20250+Casablanca+Morocco",
    embed:
      "https://maps.google.com/maps?q=Rue+C,+20250+Casablanca,+Morocco&z=16&output=embed",
  },
} as const;

export const phones = [
  {
    id: "m1",
    label: "Mobile",
    display: "+212 6 61 83 70 98",
    href: "tel:+212661837098",
  },
  {
    id: "m2",
    label: "Mobile",
    display: "+212 6 61 98 63 75",
    href: "tel:+212661986375",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    display: "+212 6 61 70 65 01",
    href: "https://wa.me/212661706501",
    tel: "tel:+212661706501",
    primary: true,
  },
  {
    id: "fixe",
    label: "Fixe",
    display: "05 22 07 09 40",
    href: "tel:+212522070940",
  },
] as const;

export const primaryPhone = phones.find((p) => "primary" in p && p.primary) ?? phones[2];

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80",
  about:
    "https://images.unsplash.com/photo-1581094794329-cdc91e13ffd3?auto=format&fit=crop&w=2000&q=80",
  cta: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=80",
  architecture:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  metal:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
} as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  image: string;
  prestations: string[];
  sections: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "construction-amenagement",
    title: "Construction & Aménagement",
    shortTitle: "Construction",
    excerpt:
      "Gros œuvre, entreprise générale, construction métallique et conception architecturale — du plan à la livraison.",
    description:
      "GNT Service intervient en gros œuvre et en entreprise générale sur des projets ambitieux : structures en béton armé, opérations urbaines, construction métallique et aménagement sur mesure.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    prestations: [
      "Gros œuvre et entreprise générale",
      "Structures en béton armé complexes",
      "Charpente métallique, hangars et bardage",
      "Chaudronnerie et tuyauterie industrielle",
      "Soudage et maintenance",
      "Étude, conception architecturale et modélisation 3D",
    ],
    sections: [
      {
        title: "Une organisation taillée pour les projets ambitieux",
        body: "Progressivement, GNT Service s’est dotée d’une organisation efficiente, adaptée aux évolutions techniques et aux besoins d’un secteur en forte expansion. Aujourd’hui, nous répondons en gros œuvre ou en entreprise générale à des projets exigeants : structures en béton armé complexes et opérations urbaines contraignantes, en environnement réglementaire dense.",
      },
      {
        title: "Construction métallique",
        body: "La construction métallique est un métier d’exigence, à la croisée du bâtiment, de la mécanique et du génie civil. GNT Service conçoit et réalise des ouvrages en acier — charpentes, hangars, bâtiments industriels, couvertures et bardages — selon les normes et l’implantation du projet, partout au Maroc.",
      },
      {
        title: "Conception architecturale & modélisation 3D",
        body: "Nous accompagnons vos projets dès l’étude : conception architecturale, modélisation 3D pour visualiser les espaces et l’aménagement, et une conception pensée pour allier fonctionnalité, esthétique et confort. GNT Service — du projet à la réalisation.",
      },
    ],
  },
  {
    slug: "gardiennage-nettoyage-jardinage",
    title: "Gardiennage, Nettoyage & Jardinage",
    shortTitle: "Services aux sites",
    excerpt:
      "Sécurité, propreté et espaces verts : un interlocuteur unique pour l’entretien quotidien de vos sites.",
    description:
      "GNT Service assure le gardiennage, le nettoyage et l’entretien paysager de sites industriels, tertiaires et résidentiels. Des équipes encadrées, des plannings clairs, un suivi de qualité.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    prestations: [
      "Gardiennage et surveillance de sites",
      "Nettoyage industriel et tertiaire",
      "Entretien d’espaces verts et jardinage",
      "Prestations ponctuelles ou contrats périodiques",
    ],
    sections: [
      {
        title: "Des sites sûrs, propres et accueillants",
        body: "Nous prenons en charge la sécurité et l’entretien de vos installations : agents de gardiennage, équipes de nettoyage et jardiniers. L’objectif est simple — un site présentable, sécurisé et opérationnel, sans que vous ayez à multiplier les prestataires.",
      },
    ],
  },
  {
    slug: "recrutement-interim-facility",
    title: "Recrutement, Intérim & Facility Management",
    shortTitle: "Facility & RH",
    excerpt:
      "Mise à disposition de personnel, intérim et gestion de vos services généraux pour absorber l’activité.",
    description:
      "GNT Service vous accompagne sur le recrutement, l’intérim et le facility management : les bonnes compétences, au bon moment, avec un pilotage clair de vos services support.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    prestations: [
      "Recrutement de profils qualifiés",
      "Intérim et renfort d’équipes",
      "Facility management et services généraux",
      "Encadrement et suivi des prestations",
    ],
    sections: [
      {
        title: "Le bon personnel, les bons services",
        body: "Pics d’activité, remplacement, lancement de chantier ou gestion quotidienne d’un site : nous mettons à votre disposition des équipes adaptées et un dispositif de facility management pour piloter vos services généraux avec un seul interlocuteur.",
      },
    ],
  },
  {
    slug: "sablage-peinture",
    title: "Sablage & Peinture",
    shortTitle: "Traitement de surface",
    excerpt:
      "Sablage, métallisation, décapage, anticorrosion et peinture industrielle — de la préparation à la finition contrôlée.",
    description:
      "GNT Service prépare et protège vos surfaces métalliques : sablage, métallisation, décapage, traitement anticorrosion et peinture industrielle, avec contrôle qualité en finition.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=80",
    prestations: [
      "Sablage et métallisation",
      "Décapage et préparation de surface",
      "Traitement anticorrosion",
      "Peinture industrielle",
      "Finition et contrôle qualité",
    ],
    sections: [
      {
        title: "Des surfaces préparées pour durer",
        body: "Une peinture ou une métallisation ne tient que si la surface est correctement préparée. Nous enchaînons sablage, décapage, protection anticorrosion et application, jusqu’au contrôle de la finition — pour des ouvrages industriels exposés, au Maroc.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export type Project = {
  slug: string;
  title: string;
  category: string;
  serviceSlug: string;
  image: string;
  images?: string[];
  excerpt: string;
  description: string;
  highlights: string[];
  closing?: string;
};

export const projects: Project[] = [
  {
    slug: "stade-moulay-abdellah-rabat",
    title: "Projet Stade Moulay Abdellah — Rabat",
    category: "Charpente métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789317874/0be70a7d-702f-4029-b587-07a3769649b1.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789317874/0be70a7d-702f-4029-b587-07a3769649b1.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789317890/3c8195df-8eb8-43f0-8b8e-5796f9845da6.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789317866/d7c76240-f6dd-4e80-8ad9-bdea357d5d63.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789317878/c91fb598-1448-431c-b9cc-0d1a7e9fdda0.jpg",
    ],
    excerpt:
      "Intervention sur le chantier du Stade Moulay Abdellah à Rabat : charpente métallique et structure de grande portée.",
    description:
      "GNT Service intervient sur le projet du Stade Moulay Abdellah à Rabat, un ouvrage d’envergure nationale. Le chantier comprend la mise en œuvre d’une charpente métallique de grande portée, le suivi des assemblages et l’accompagnement des équipes sur site, dans un environnement technique exigeant.",
    highlights: [
      "Charpente métallique de grande portée",
      "Structure de toiture et ossature du stade",
      "Suivi du montage et des assemblages sur chantier",
      "Coordination des travaux à Rabat",
    ],
    closing: "GNT Service — Du projet à la réalisation, à l’échelle des grands ouvrages.",
  },
  {
    slug: "ferraillage-coffrage-beton",
    title: "Avancement des travaux",
    category: "Construction & gros œuvre",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789309559/1789038206339.jpg",
    excerpt:
      "Sur chantier, mise en place du ferraillage et du coffrage destinés à recevoir les éléments en béton.",
    description:
      "Sur chantier, les travaux avancent avec la mise en place du ferraillage et du coffrage destinés à recevoir les éléments en béton. Chez GNT Service, nous accordons une attention particulière à la qualité d’exécution, à la précision des travaux et à la sécurité sur site.",
    highlights: [
      "Un ferraillage dense et soigneusement réparti",
      "Mise en place des coffrages",
      "Préparation des éléments structurels en béton",
      "Organisation et suivi des travaux sur site",
    ],
    closing: "Construire avec rigueur, réaliser avec qualité.",
  },
  {
    slug: "charpente-metallique-modelisation-3d",
    title: "Préparation 3D — Charpente métallique",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789310456/1788992567212.jpg",
    excerpt:
      "Modélisation 3D sur Tekla Structures d’une charpente métallique : escaliers, planchers et détails d’assemblage.",
    description:
      "Nous avançons actuellement sur la modélisation 3D sur Tekla Structures d’un nouveau projet de charpente métallique, avec une attention particulière portée aux escaliers, planchers et détails d’assemblage. Cette étape permet d’anticiper chaque détail en 3D pour garantir une fabrication précise et un montage efficace sur chantier. Prochaine étape : le lancement de la fabrication et la concrétisation du projet.",
    highlights: [
      "Dossier de fabrication",
      "Plans de montage",
      "Détails d’assemblage",
      "Plans et repérages nécessaires à la fabrication",
    ],
    closing: "GNT Service — De la modélisation 3D à la fabrication et au montage.",
  },
  {
    slug: "sablage-peinture-controle-qualite",
    title: "Sablage & peinture industrielle",
    category: "Traitement de surface",
    serviceSlug: "sablage-peinture",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789310831/Screenshot_2026-09-13_154426.png",
    excerpt:
      "Sablage, métallisation, anticorrosion et peinture industrielle, jusqu’au contrôle d’épaisseur et à la finition.",
    description:
      "GNT Service prépare et protège les pièces métalliques de bout en bout : sablage, métallisation, décapage, traitement anticorrosion et peinture industrielle. La finition est validée par un contrôle qualité sur site, notamment la mesure d’épaisseur du revêtement, pour des ouvrages durables.",
    highlights: [
      "Sablage et métallisation",
      "Décapage et préparation de surface",
      "Traitement anticorrosion",
      "Peinture industrielle",
      "Finition et contrôle qualité",
    ],
    closing: "Des surfaces préparées, protégées et contrôlées.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const stats = [
  { value: "+50", label: "Projets réalisés" },
  { value: "+30", label: "Clients satisfaits" },
  { value: "100%", label: "Qualité & sécurité" },
  { value: "Maroc", label: "Zone d’intervention" },
] as const;

export const trust = [
  { title: "Qualité garantie", text: "Des prestations contrôlées, de la préparation à la livraison." },
  { title: "Équipements modernes", text: "Des moyens adaptés aux exigences industrielles." },
  { title: "Accompagnement sur mesure", text: "Un interlocuteur unique, du devis à la réception." },
] as const;

export const faqs = [
  {
    q: "Dans quelles villes intervient GNT Service ?",
    a: "Nous sommes basés à Casablanca et intervenons sur tout le Maroc, selon la nature du chantier et le planning convenu.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Remplissez le formulaire de contact en précisant l’activité concernée, ou contactez-nous par téléphone ou WhatsApp. Nous revenons vers vous sous 24 à 48 heures ouvrées.",
  },
  {
    q: "Quels métiers couvrez-vous ?",
    a: "Construction et aménagement, gardiennage, nettoyage et jardinage, recrutement, intérim et facility management, ainsi que le sablage et la peinture industrielle.",
  },
  {
    q: "Intervenez-vous sur des projets industriels et tertiaires ?",
    a: "Oui. Nous accompagnons les entreprises industrielles et les maîtres d’ouvrage du bâtiment, du projet architectural jusqu’à la réalisation et l’entretien des sites.",
  },
] as const;
