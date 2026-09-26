export const site = {
  name: "GNT Service",
  legalName: "GNT Service",
  tagline: "Construisons ensemble",
  slogan: "Du projet à la réalisation",
  city: "Casablanca",
  country: "Maroc",
  postalCode: "20250",
  street: "Rue C",
  address: "Casablanca, Maroc",
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
  // {
  //   id: "whatsapp",
  //   label: "WhatsApp",
  //   display: "+212 6 61 70 65 01",
  //   href: "https://wa.me/212661706501",
  //   tel: "tel:+212661706501",
  //   primary: true,
  // },
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
    "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395577/photo-1503387762-592deb58ef4e.avif",
  metal:
    "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395580/photo-1504307651254-35680f356dfd.avif",
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
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393872/1.png",
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
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393872/2.png",
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
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393870/3.png",
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
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393873/4.png",
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
    slug: "structure-metallique-industrielle",
    title: "Réalisation d’une structure métallique industrielle",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789925712/2b0dbba2-7744-4686-ae75-ca823abe5f8b.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789925712/2b0dbba2-7744-4686-ae75-ca823abe5f8b.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789925713/718abddd-1708-4e62-bada-8211fa525454.jpg",
    ],
    excerpt:
      "Conception, fabrication et montage d’une structure métallique industrielle, avec suivi complet sur chantier.",
    description:
      "Un nouveau projet réalisé par GNT Service, avec une intervention complète sur site : conception et préparation technique, fabrication des éléments métalliques, montage de la structure sur chantier, coordination et suivi des travaux. Une réalisation pensée pour répondre aux exigences du projet, avec un suivi rigoureux à chaque étape.",
    highlights: [
      "Conception et préparation technique",
      "Fabrication des éléments métalliques",
      "Montage de la structure métallique sur chantier",
      "Coordination et suivi des travaux",
    ],
    closing: "GNT Service — Du projet à la réalisation.",
  },
  {
    slug: "projet-industriel-etude-realisation",
    title: "Projet industriel — De l’étude à la réalisation",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789924333/e265226b-5c14-48cf-811b-f133233d05f6.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789924333/e265226b-5c14-48cf-811b-f133233d05f6.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789924331/5269ad23-a631-4a2a-aea8-e5a33a21ebdf.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789924335/ccce3db4-c949-4756-944d-0d2115105609.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789924343/bb247966-9d23-4741-a149-9207a9a52b22.jpg",
    ],
    excerpt:
      "Intervention complète : étude, dessin technique, montage de la structure métallique, sablage et préparation de surface.",
    description:
      "GNT Service intervient sur l’ensemble du projet : étude et dessin technique, montage de la structure métallique, sablage et préparation de surface. Une intervention complète, de la conception à la réalisation sur site.",
    highlights: [
      "Étude et dessin technique",
      "Montage de la structure métallique",
      "Sablage et préparation de surface",
    ],
    closing: "GNT Service — Du projet à la réalisation.",
  },
  {
    slug: "vue-globale-3d-charpente-metallique",
    title: "Vue globale 3D d’une charpente métallique",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789659271/WhatsApp_Image_2026-09-17_at_12.51.25.jpg",
    excerpt:
      "Présentation 3D de l’ensemble d’une charpente métallique : niveaux, éléments porteurs et préparation technique.",
    description:
      "Une présentation 3D permettant de visualiser l’ensemble de la structure, ses différents niveaux et ses éléments porteurs.",
    highlights: [
      "Modélisation 3D",
      "Charpente métallique",
      "Étages et escalier",
      "Préparation technique",
    ],
    closing: "GNT Service — Du projet à la réalisation.",
  },
  {
    slug: "projet-industriel-structure-metallique",
    title: "Projet industriel — Structure métallique",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789659265/WhatsApp_Image_2026-09-17_at_12.49.29.jpg",
    excerpt:
      "De la conception des plans à la fabrication, au montage, au sablage et à la peinture — un projet industriel mené de bout en bout.",
    description:
      "De la conception et réalisation des plans jusqu’à la fabrication, au montage sur site, au sablage et à la peinture, GNT Service assure l’ensemble des étapes du projet.",
    highlights: [
      "Conception et dessin technique",
      "Fabrication de la structure métallique",
      "Montage sur chantier",
      "Sablage et peinture industrielle",
      "Travaux en hauteur avec nacelle élévatrice",
    ],
    closing: "GNT Service — Du projet à la réalisation.",
  },
  {
    slug: "charpente-metallique-couverture",
    title: "Charpente métallique pour couverture",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789394060/Screenshot_2026-09-14_145356.png",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789394060/Screenshot_2026-09-14_145356.png",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789394062/Screenshot_2026-09-14_145406.png",
    ],
    excerpt:
      "Charpente métallique de grande portée destinée à la couverture d’un bâtiment industriel.",
    description:
      "Réalisation d’une charpente métallique pour couverture : fermes, pannes et ossature de grande portée, montées pour recevoir la toiture. GNT Service a assuré la fabrication, le montage et l’alignement de la structure, afin de garantir une couverture stable et durable.",
    highlights: [
      "Charpente métallique de grande portée",
      "Fermes, pannes et ossature de toiture",
      "Montage et alignement sur chantier",
      "Préparation de la couverture",
    ],
    closing: "Une structure prête à recevoir sa couverture.",
  },
  {
    slug: "structure-multi-etages",
    title: "Structure multi-étages",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393081/980b912f-e7b8-4a10-896e-e64d3fcd413c.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393081/980b912f-e7b8-4a10-896e-e64d3fcd413c.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789393085/66ea647e-afe9-40b0-8d13-9f14c42f9550.jpg",
    ],
    excerpt:
      "Modélisation 3D d’une structure métallique multi-étages : poteaux, planchers, escaliers et passerelles.",
    description:
      "Modélisation 3D d’une structure métallique multi-étages, destinée à la fabrication et au montage. Le modèle intègre poteaux, poutres, planchers, escaliers, garde-corps et passerelles, avec un repérage précis des assemblages pour un dossier de fabrication fiable.",
    highlights: [
      "Structure métallique à plusieurs niveaux",
      "Escaliers, planchers et passerelles",
      "Détails d’assemblage et repérages",
      "Préparation du dossier de fabrication",
    ],
    closing: "De la modélisation 3D à la fabrication et au montage.",
  },
  {
    slug: "structure-metallique-ifrane",
    title: "Structure métallique — Ifrane",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392955/4f61b814-06c9-437a-a74d-7dbc0b78d551.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392955/4f61b814-06c9-437a-a74d-7dbc0b78d551.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392886/83931f4b-63e4-45b6-aaa2-7e13d0ba6942.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392962/a02a6944-ba4f-454c-b759-f03e2974ef07.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392868/f62e0341-e25c-4853-80c3-afbcde87a0ba.jpg",
    ],
    excerpt:
      "Charpente métallique à Ifrane : poteaux, atrium vitré, hall et amphithéâtre, du chantier à la livraison.",
    description:
      "Réalisation d’une structure métallique à Ifrane, de la pose des poteaux jusqu’à l’atrium vitré et les espaces intérieurs. GNT Service a accompagné le montage de l’ossature, les volumes vitrés, l’éclairage architectural et les finitions bois d’un hall et d’un amphithéâtre, dans un climat de montagne exigeant.",
    highlights: [
      "Poteaux et ossature métallique",
      "Atrium vitré de grande hauteur",
      "Hall d’accueil et amphithéâtre",
      "Éclairage architectural et finitions bois",
    ],
    closing: "Un ouvrage contemporain, du gros œuvre aux finitions — Ifrane.",
  },
  {
    slug: "voliere",
    title: "Projet volière",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392840/96571556-b47b-4a37-8abd-7a14a8f311f2.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392840/96571556-b47b-4a37-8abd-7a14a8f311f2.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392831/8ff634d6-cb2d-48a6-a14f-52976cff0fb2.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392822/e4930937-ed05-40a4-99c4-749c3470b7ed.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392821/8847c53a-ac18-4b62-9e9a-898f0786ae3a.jpg",
    ],
    excerpt:
      "Réalisation d’une volière : mâts métalliques, câbles, fondations et intégration dans un espace paysager.",
    description:
      "GNT Service a réalisé la structure d’une volière : implantation des mâts métalliques, fondations en béton, haubanage et réseau de câbles. Le chantier s’inscrit dans un site paysager, avec un soin particulier apporté à la précision du montage et à la stabilité de l’ouvrage.",
    highlights: [
      "Mâts métalliques et têtes circulaires",
      "Fondations béton et ancrages",
      "Câbles et haubanage de la volière",
      "Intégration dans un environnement paysager",
    ],
    closing: "Une structure légère, précise et durable.",
  },
  {
    slug: "dome-metallique",
    title: "Projet dôme métallique",
    category: "Charpente métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392747/754bf8d3-55a7-4681-a358-6eb31fef2e44.jpg",
    excerpt:
      "Montage d’un dôme métallique : arcs de grande portée, levage à la grue et assemblages sur chantier.",
    description:
      "Réalisation d’un dôme métallique sur un ouvrage en béton. GNT Service a assuré la fabrication des arcs, le levage à la grue et le montage de la charpente de grande portée, avec un suivi précis des assemblages et de la sécurité sur chantier.",
    highlights: [
      "Charpente métallique en dôme",
      "Arcs de grande portée",
      "Levage et montage à la grue",
      "Assemblages et suivi sur site",
    ],
    closing: "Une structure élégante, montée avec rigueur.",
  },
  {
    slug: "structure-metallique-containers",
    title: "Structure métallique avec containers",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392737/a5345e17-627b-4dbc-9777-4a6bcf1b4504.jpg",
    excerpt:
      "Réalisation d’une structure métallique associée à des containers : couverture, ossature et aménagement de volumes.",
    description:
      "Réalisation d’une structure métallique avec containers : ossature, couverture bac acier et assemblage des modules pour créer un abri et des locaux. GNT Service a assuré la charpente, le montage sur site et l’intégration des containers dans un volume unique, fonctionnel et durable.",
    highlights: [
      "Ossature métallique et couverture",
      "Intégration de containers superposés",
      "Locaux et espace couvert sous hangar",
      "Montage et assemblages sur chantier",
    ],
    closing: "Une solution modulaire, de la structure à l’aménagement.",
  },
  {
    slug: "sablage-benne-industrielle",
    title: "Sablage d’une benne industrielle",
    category: "Traitement de surface",
    serviceSlug: "sablage-peinture",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392712/6ff83b70-92ac-42f1-ba33-371eeef2d5b7.jpg",
    excerpt:
      "Sablage et préparation de surface d’une benne métallique, avant traitement anticorrosion et peinture.",
    description:
      "Intervention de sablage sur une benne industrielle : décapage et préparation de surface pour garantir l’adhérence du revêtement. Le traitement anticorrosion, la peinture industrielle et le contrôle qualité viennent ensuite, pour une finition durable.",
    highlights: [
      "Sablage et peinture",
      "Sablage et métallisation",
      "Décapage et préparation de surface",
      "Traitement anticorrosion",
      "Peinture industrielle",
      "Finition et contrôle qualité",
    ],
    closing: "Des surfaces préparées, protégées et contrôlées.",
  },
  {
    slug: "charpente-sablage-peinture",
    title: "Charpente métallique — sablage et peinture",
    category: "Traitement de surface",
    serviceSlug: "sablage-peinture",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392673/cccb6244-5543-4d3e-a361-93ae4e11d82d.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392673/cccb6244-5543-4d3e-a361-93ae4e11d82d.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392671/6e12571d-5f94-4629-99f2-796c27840e61.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392669/5fa1adac-3bf5-47a4-b7c5-dd90c69e5b37.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392675/6668170c-c0e8-4932-a9fc-7e962343d159.jpg",
    ],
    excerpt:
      "Sablage, peinture industrielle et montage de charpente métallique, de l’atelier jusqu’au chantier.",
    description:
      "GNT Service assure le sablage, la métallisation et la peinture industrielle des éléments de charpente, puis leur acheminement et leur montage sur site. Le traitement anticorrosion et le contrôle qualité accompagnent chaque pièce, des poutres et fermes jusqu’aux équipements (cuves et structures).",
    highlights: [
      "Sablage et peinture",
      "Sablage et métallisation",
      "Décapage et préparation de surface",
      "Traitement anticorrosion",
      "Peinture industrielle",
      "Finition et contrôle qualité",
    ],
    closing: "Des surfaces préparées, protégées et contrôlées.",
  },
  {
    slug: "sablage-peinture-controle-qualite",
    title: "Sablage & peinture industrielle",
    category: "Traitement de surface",
    serviceSlug: "sablage-peinture",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392612/70545519-c6ca-4fb4-8a9a-e3d7322180ff.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392612/70545519-c6ca-4fb4-8a9a-e3d7322180ff.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392611/ad16b8a6-2433-4795-a4f5-7472eb454ae3.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392617/d549fca1-bf79-42e8-8d74-5c3153340ebf.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392615/8b51b880-86e1-4e49-b710-3337d8f119d2.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789392620/31f7505c-b258-481b-8f2e-c07469145fd9.jpg",
    ],
    excerpt:
      "Sablage, métallisation, anticorrosion et peinture industrielle, jusqu’au contrôle d’épaisseur et à la finition.",
    description:
      "GNT Service prépare et protège les pièces métalliques de bout en bout : sablage, métallisation, décapage, traitement anticorrosion et peinture industrielle. La finition est validée par un contrôle qualité sur site, notamment la mesure d’épaisseur du revêtement, pour des ouvrages durables.",
    highlights: [
      "Sablage et peinture",
      "Sablage et métallisation",
      "Décapage et préparation de surface",
      "Traitement anticorrosion",
      "Peinture industrielle",
      "Finition et contrôle qualité",
    ],
    closing: "Des surfaces préparées, protégées et contrôlées.",
  },
  {
    slug: "structure-metallique-montage-finition",
    title: "Structure métallique — montage et finition",
    category: "Construction métallique",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789319437/a108c466-fc66-4be8-a36b-3fcf40e7343c.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789319437/a108c466-fc66-4be8-a36b-3fcf40e7343c.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789319439/a9ac72ec-f3a4-40f7-83fd-363e00e0be95.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789319440/862e7b18-4962-4ad3-8755-ba7b2daea894.jpg",
    ],
    excerpt:
      "Réalisation et montage d’une structure métallique, avec travaux de finition sur chantier.",
    description:
      "Réalisation et montage d’une structure métallique avec travaux de finition sur chantier. GNT Service a assuré la fabrication de la charpente, l’assemblage des fermes, la peinture industrielle et la mise en œuvre des habillages, jusqu’à la livraison d’un volume prêt à l’usage.",
    highlights: [
      "Fabrication et assemblage de la charpente métallique",
      "Montage des fermes et de l’ossature sur site",
      "Peinture industrielle et finitions sur chantier",
      "Habillage et mise en service de la structure",
    ],
    closing: "De l’atelier au chantier, une structure montée et finie.",
  },
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
    slug: "hall-atrium-amphitheatre",
    title: "Hall d’accueil et amphithéâtre",
    category: "Construction & aménagement",
    serviceSlug: "construction-amenagement",
    image: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789318515/fbadd0f1-e39a-4879-a8c6-a681e5d55c0a.jpg",
    images: [
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789318515/fbadd0f1-e39a-4879-a8c6-a681e5d55c0a.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789318513/47174c1f-cf23-4334-bd4a-ce631e6920e3.jpg",
      "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789318511/46caa245-5406-4813-b094-4613c6358c43.jpg",
    ],
    excerpt:
      "Réalisation d’un hall vitrée et d’un amphithéâtre : structure, menuiseries, finitions bois et éclairage.",
    description:
      "Ce projet tertiaire associe une structure métallique vitrée en atrium, un hall d’accueil et un amphithéâtre aux finitions soignées. GNT Service a accompagné la réalisation : ossature, volumes vitrés, habillage intérieur en bois et mise en lumière, de l’extérieur jusqu’aux espaces de réception.",
    highlights: [
      "Atrium vitré et structure métallique",
      "Hall d’accueil et accès monumentaux",
      "Amphithéâtre et habillage bois",
      "Éclairage architectural et finitions",
    ],
    closing: "Un ouvrage contemporain, du gros œuvre aux finitions.",
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

export const partners = [
  { name: "OCP", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395408/jkldfjajkl.png" },
  { name: "SGTM", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395406/hjkladshkdjf.png" },
  { name: "TGCC", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395415/adhjklshjkdfsahjkadfs.png" },
  { name: "Lafarge", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395395/ashjkadshi.png" },
  { name: "Ciments du Maroc", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395393/adshjkldahjks.png" },
  { name: "Jacobs", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395410/lhjkahld.png" },
  { name: "Atlas Copco", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395397/hjklaadhjk.png" },
  { name: "Managem", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395391/afklhadfhj.png" },
  { name: "Tractafric CAT", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395404/hjkladffhjkd.png" },
  { name: "SOGEA Maroc", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395399/adhjkshkadfsads.png" },
  { name: "OFPPT", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395413/abjkadfsbjkdf.png" },
  {
    name: "Ministère de la Culture",
    logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1789395401/ghyasdghyf.png",
  },
  { name: "JESA", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351601/a915f567-db46-4fb5-b0cd-f3770ebdd549.jpg" },
  { name: "ONCF", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351585/b727e511-6827-4c03-a8a0-65c5389d8918.jpg" },
  { name: "Gofer Afric", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351584/e99dcab5-b912-4c09-952c-22986b71a4ac.jpg" },
  { name: "Hydro Systemes", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351578/ee66eddf-0e42-4fcf-920b-12f82118c2bc.jpg" },
  { name: "Remorques Equipements", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351575/7861fdde-d4fa-4c34-abbf-f1364450d755.jpg" },
  { name: "Elexpert", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351574/7c3eb5d9-f076-4f56-b8ac-fdc7ad59a883.jpg" },
  { name: "Maroc Sealing", logo: "https://res.cloudinary.com/wsqmoe8l/image/upload/v1790351573/7a11b779-b365-43e2-8f2c-031454bcc906.jpg" },
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
