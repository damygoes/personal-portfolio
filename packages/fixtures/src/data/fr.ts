import type { LocaleContent } from "@portfolio/content-core";
import { posts } from "./posts";

/**
 * French content — DRAFT. Site and about copy is Damilola's (authored in the
 * Studio); the rest is machine-translated and needs review before it ships.
 * Seeded into the development dataset only (`--with-translations`).
 *
 * Mirrors how Sanity stores translations: field-level overlays (only the
 * translatable text; anything missing falls back to EN) and whole documents
 * for about, case studies and posts. Placeholders stay null, as in EN.
 * Product, tier and tech names, code, URLs and slugs are not translated.
 * Experience companies/locations are plain (untranslated) fields in the schema.
 */

const codeReview = posts.find((p) => p.slug === "code-review-team-of-three");
const codeBlock = codeReview?.body?.find((b) => b._type === "code");

export const fr: LocaleContent = {
  site: {
    tagline:
      "Je crée des applications Web et mobiles qui fonctionnent simplement — propres, rapides et faciles à utiliser.",
    location: "Allemagne",
    yearsExperienceLabel: "Plus de 3 ans d’expérience",
    heroMeta: [
      "Basé en Allemagne",
      "Développeur logiciel",
      "Plus de 3 ans d’expérience",
    ],
    authorBio:
      "Développeur logiciel chez adesso SE. Je développe des applications web et mobiles, et j'écris sur le code, le cyclisme et la photographie.",
    currentRoleTitle: "Développeur logiciel",
  },

  projects: {
    passe: {
      kind: "Application iOS",
      teaser: "un journal de voyage",
      coverTag: "Nouveau · iOS & web",
      statusLabel: "Disponible sur l’App Store",
      summary:
        "Un journal de voyage privé par défaut, pour celles et ceux qui partent vraiment. Épinglez photos et notes aux lieux où tout s’est passé, regardez votre carte se remplir au fil des années, et partagez un voyage uniquement avec les personnes de votre choix.",
    },
    elliesnote: {
      kind: "Application iOS",
      coverTag: "Application iOS",
      statusLabel: "Disponible sur l’App Store",
      summary:
        "Un compagnon santé respectueux de la vie privée pour les personnes atteintes de maladies chroniques qui limitent l’énergie, comme l’EM/SFC et la fibromyalgie. De courts bilans quotidiens de 30 secondes, un suivi des jours de crash, la synchronisation avec Apple Health et des analyses basées sur l’IA qui révèlent les schémas derrière les bons et les mauvais jours.",
    },
    "url-analyzer": {
      kind: "Application web",
      summary:
        "Une application web qui récupère et affiche les métadonnées de n’importe quelle URL : titre, intertitres, liens cassés, et plus encore. Construite avec React et Go.",
    },
    "kpi-bot": {
      kind: "Tableau de bord SaaS",
      summary:
        "Un tableau de bord SaaS qui se connecte aux comptes Stripe pour visualiser en temps réel les indicateurs d’abonnement comme le MRR, l’ARR, le taux de churn, et plus encore.",
    },
    archetype: {
      kind: "Backend",
      summary:
        "Une architecture de microservices Node.js évolutive, avec des modèles TypeORM partagés, un monorepo modulaire et un déploiement indépendant des services. Construite avec Docker, Express et Lerna.",
    },
  },

  experience: {
    "adesso SE|2025-11": {
      role: "Développeur logiciel",
      summary:
        "Je développe des solutions logicielles sur mesure chez l’un des principaux prestataires de services informatiques en Europe — pour aider les entreprises et les organisations publiques à renforcer leurs processus métier essentiels et à atteindre l’excellence numérique.",
      projects: [
        {
          title:
            "Projet client : site web de logistique et de gestion d’entrepôt",
          stack:
            "Magnolia CMS · Next.js · React · équipe d’environ 20 personnes",
          bullets: [
            "Je développe des light modules Magnolia avec les composants d’interface React correspondants et maintiens la bibliothèque de composants partagée.",
            "Je suis responsable du suivi des performances et de l’accessibilité du site ; je rédige les tickets Jira et organise le tableau de l’équipe.",
          ],
        },
        {
          title:
            "Produit interne : outil de gestion de projet assisté par l’IA",
          stack:
            "Next.js · React · TypeScript · TailwindCSS · PostgreSQL · LLM",
          bullets: [
            "Conception et développement de l’outil de bout en bout (interface, architecture, intégration des LLM) pour les scrum masters, chefs de projet et product owners.",
            "Génère des tickets Jira détaillés (bugs, fonctionnalités, stories, epics) à partir d’un seul prompt, optimisés pour une exécution par des humains ou des agents IA, et découpe les spécifications de projet importées en epics, sprints et tickets.",
            "Couche LLM multi-fournisseurs (OpenAI, Anthropic, modèles internes) avec consommation de tokens et coût par workflow dans la devise de l’utilisateur ; tableau de bord analytique de l’état des tickets et contrôle d’accès basé sur les rôles.",
          ],
        },
      ],
    },
    "apomap GmbH|2025-01": {
      role: "Chef d’équipe",
      bullets: [
        "Mentorat et revues de code pour une équipe de 3 développeurs",
        "Gestion des plannings de projet et garantie de livrables de qualité",
        "Mise en place et maintenance de pipelines CI/CD pour simplifier les déploiements",
        "Entretiens d’embauche et onboarding des nouveaux développeurs",
        "Définition des besoins des projets en collaboration avec les product managers",
      ],
    },
    "apomap GmbH|2022-11": {
      role: "Développeur Fullstack",
      bullets: [
        "Conception d’API GraphQL pour une récupération efficace des données",
        "Développement d’interfaces responsives avec React et Tailwind CSS",
        "Optimisation des performances d’une application web basée sur React",
        "Intégration d’API tierces de logistique et de caisse pour améliorer le fonctionnement des pharmacies",
      ],
    },
    "MyCodeCareer|2022-09": {
      role: "Développeur Frontend",
      bullets: [
        "Collaboration avec des designers UX pour améliorer les parcours d’interface",
        "Refonte du site de l’entreprise selon les bonnes pratiques modernes de React",
      ],
    },
    "Brainnest GmbH|2022-06": {
      role: "Développeur Frontend (stagiaire)",
      bullets: [
        "Développement de composants d’interface en équipe",
        "Revue de code et retours sur l’implémentation frontend",
        "Application des bonnes pratiques du développement web",
      ],
    },
    "Freelance & personal projects|2020-06": {
      role: "Développeur Fullstack autodidacte",
      bullets: [
        "Création et gestion de sites web avec WordPress, Elementor, React et Node.js",
        "Accompagnement de petites entreprises pour améliorer leur présence en ligne",
        "Mise en pratique de concepts fullstack comme l’authentification, les API et le déploiement",
        "Apprentissage en autodidacte en parallèle d’un emploi à temps partiel dans la logistique et la livraison",
      ],
    },
    "Personal|2020-01": {
      role: "Reconversion professionnelle",
      bullets: [
        "Recherches sur le secteur de la tech et les possibilités d’apprentissage en autodidacte",
        "Définition d’un objectif à long terme pour me reconvertir dans le développement logiciel",
      ],
    },
  },

  skillGroups: {
    1: { title: "Frontend" },
    2: { title: "Backend" },
    3: { title: "Bases de données" },
    4: { title: "DevOps et outils" },
  },

  categories: {
    tech: { title: "Tech" },
    programming: { title: "Programmation" },
    cycling: { title: "Cyclisme" },
    photography: { title: "Photographie" },
  },

  about: {
    statement: [
      {
        text: "Je me suis lancé dans le développement de logiciels parce que je voulais créer des choses qui ",
      },
      { text: "aident réellement les gens", highlight: true },
    ],
    lede: "Développeur logiciel basé en Allemagne. Je crée des applications web et mobiles qui fonctionnent simplement — propres, rapides et faciles à utiliser.",
    bio: [
      [
        {
          text: "Ce qui a commencé par la curiosité est maintenant ma profession — développer des applications web et mobiles qui accomplissent simplement leur tâche, sans compliquer les choses.",
        },
      ],
      [
        {
          text: "Aujourd'hui, je travaille comme développeur logiciel chez adesso, sur le site web d'un client du secteur logistique avec Magnolia et Next.js, ainsi que sur un outil interne de gestion de projet assisté par l'IA. Avant cela, j'ai dirigé une petite équipe d'ingénierie chez apomap — où j'ai appris que le code clair et la communication claire sont également importants.",
        },
      ],
      [
        {
          text: "Je crois que la technologie devrait résoudre les problèmes réels de manière simple et fiable. Cette conviction se reflète également dans mes propres produits — comme ",
        },
        { text: "Passe.", strong: true },
        {
          text: ", un journal de voyage privé par défaut pour les voyages qui valent la peine d'être mémorisés, et ",
        },
        { text: "ElliesNote", strong: true },
        {
          text: ", un compagnon santé pour les personnes vivant avec des conditions chroniques limitant l'énergie.",
        },
      ],
      [
        {
          text: "Chaque projet est une nouvelle occasion d'apprendre et de faire une différence, et je suis enthousiasmé à l'idée de continuer à croître — en tant qu'ingénieur, coéquipier et bâtisseur.",
        },
      ],
    ],
    teaserParagraphs: [
      [
        {
          text: "Aujourd’hui, je travaille comme développeur logiciel chez adesso, sur le site web d’un client du secteur logistique avec Magnolia et Next.js, ainsi que sur un outil interne de gestion de projet assisté par l’IA. Avant cela, j’ai dirigé une petite équipe d’ingénierie chez apomap — où j’ai appris que le code clair et la communication claire sont tout aussi importants.",
        },
      ],
      [
        {
          text: "Cette conviction de résoudre de vrais problèmes de manière simple se reflète également dans mes propres produits — comme ",
        },
        { text: "Passe.", strong: true },
        { text: ", un journal de voyage privé par défaut, et " },
        { text: "ElliesNote", strong: true },
        {
          text: ", un compagnon de santé pour les personnes vivant avec des affections chroniques limitant l’énergie.",
        },
      ],
    ],
    facts: [
      { label: "Maintenant", value: "Développeur logiciel, adesso SE" },
      {
        label: "Construction",
        value: "Passe. & ElliesNote",
        links: ["passe", "elliesnote"],
      },
      { label: "Avant", value: "Chef d'équipe, apomap GmbH" },
      { label: "Basé en", value: "Allemagne", aboutPageOnly: true },
    ],
    skillsIntro:
      "La pile technologique que j’utilise pour transformer une idée d’un schéma à la production.",
  },

  caseStudies: {
    passe: {
      lede: "Un journal de voyage privé par défaut, pour celles et ceux qui partent vraiment.",
      meta: [
        { label: "Rôle", value: null },
        {
          label: "Plateformes",
          value: "iOS · Web · Android bientôt disponible",
        },
        { label: "Calendrier", value: null },
        {
          label: "Stack",
          value:
            "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL)",
        },
      ],
      sections: [
        {
          type: "textBlock",
          label: "Aperçu",
          heading: "Un lieu pour les souvenirs qui comptent.",
          body: [
            "Passe. est un journal de voyage pour celles et ceux qui partent vraiment. Chaque voyage commence en privé. Vous le documentez avec des photos épinglées aux lieux où elles ont été prises et des notes aussi courtes ou longues que vous le souhaitez, puis vous partagez une sélection choisie avec les personnes de votre choix — un voyage entier, ou même un seul souvenir.",
            null,
          ],
        },
        {
          type: "textBlock",
          label: "Défi",
          heading: "Une pellicule n’est pas un souvenir.",
          body: [
            "Douze mille photos, et aucune idée de quel matin était lequel.",
            null,
          ],
        },
        {
          type: "stepsGrid",
          label: "Comment ça marche",
          heading: "Trois minutes par voyage.",
          steps: [
            { title: "Créer un voyage", text: "Nom, pays et dates." },
            {
              title: "Ajouter un souvenir",
              text: "Joignez des photos et épinglez-les à un lieu.",
            },
            {
              title: "Écrivez autant que vous voulez",
              text: "D’une simple ligne à l’histoire complète.",
            },
          ],
        },
        {
          type: "featureGrid",
          label: "Fonctionnalités clés",
          heading: "Privé d’abord, partageable selon vos conditions.",
          features: [
            {
              title: "Privé par défaut",
              text: "Chaque voyage commence fermé. Rien n’est public, rien n’est suggéré à des inconnus.",
            },
            {
              title: "Une carte qui grandit",
              text: "Villes, pays et itinéraires s’additionnent pour former votre propre carte de vie.",
            },
            {
              title: "Souvenirs à garder",
              text: "Exportez vos voyages en livres souvenirs PDF, en zines et en séries de cartes postales.",
            },
            {
              title: "Partage sélectif",
              text: "Partagez un voyage — ou un seul souvenir — via des liens que vous contrôlez.",
            },
          ],
        },
        {
          type: "plans",
          label: "Modèle économique",
          heading: "Gratuit pour commencer, payant pour conserver.",
          plans: [
            {
              name: "Free",
              price: "€0",
              period: "/ mois",
              features: [
                "3 voyages",
                "10 souvenirs par voyage",
                "Journal privé",
              ],
            },
            {
              name: "Explorer",
              price: "€4",
              period: "/ mois",
              features: [
                "20 voyages",
                "50 souvenirs par voyage",
                "Portfolio public",
              ],
            },
            {
              name: "Collector",
              price: "€9",
              period: "/ mois",
              features: [
                "Voyages et souvenirs illimités",
                "Exports PDF, zine et carte postale",
              ],
            },
          ],
          note: "Résiliable à tout moment — si un abonnement expire, vos journaux restent dans l’offre gratuite.",
        },
        {
          type: "architecture",
          label: "Comment c’est construit",
          heading:
            "Une seule base de code TypeScript, du téléphone à la base de données.",
          core: [
            {
              eyebrow: "Application mobile",
              title: "React Native · Expo",
              sub: "iOS · Android bientôt disponible",
            },
            {
              eyebrow: "API",
              title: "Next.js",
              sub: "TypeScript",
              isCore: true,
            },
            { eyebrow: "Base de données", title: "NeonDB", sub: "PostgreSQL" },
          ],
          sub: [
            { eyebrow: "Web", title: "passe.cc", sub: null },
            { eyebrow: "Médias", title: "Photos et lieux", sub: null },
            { eyebrow: "Exports", title: "Livres et zines", sub: null },
          ],
          notes: [null],
        },
        { type: "quote", label: "Résultat", text: null, attribution: null },
      ],
    },
    elliesnote: {
      lede: "Un compagnon santé respectueux de la vie privée pour les personnes atteintes de maladies chroniques qui limitent l’énergie, comme l’EM/SFC et la fibromyalgie.",
      meta: [
        { label: "Rôle", value: null },
        { label: "Type", value: "Application iOS · Produit personnel" },
        { label: "Calendrier", value: null },
        {
          label: "Stack",
          value:
            "React Native, Expo, TypeScript, Next.js (API), NeonDB (PostgreSQL), QStash",
        },
      ],
      sections: [
        {
          type: "textBlock",
          label: "Aperçu",
          heading:
            "Un compagnon santé qui ne demande que trente secondes par jour.",
          body: [
            "ElliesNote est conçu pour les personnes atteintes de maladies chroniques qui limitent l’énergie, comme l’EM/SFC et la fibromyalgie. De courts bilans quotidiens de 30 secondes, un suivi des jours de crash, la synchronisation avec Apple Health et des analyses basées sur l’IA qui révèlent les schémas derrière les bons et les mauvais jours. Disponible sur l’App Store.",
            null,
          ],
        },
        {
          type: "textBlock",
          label: "Défi",
          heading: null,
          body: [null],
        },
        {
          type: "featureGrid",
          label: "Fonctionnalités clés",
          heading: "Quatre choses, faites en douceur.",
          features: [
            { title: "Bilans quotidiens de 30 secondes" },
            { title: "Suivi des jours de crash" },
            { title: "Synchronisation avec Apple Health" },
            { title: "Analyses basées sur l’IA" },
          ],
        },
        {
          type: "architecture",
          label: "Comment c’est construit",
          heading:
            "Une seule base de code TypeScript, du téléphone à la base de données.",
          core: [
            {
              eyebrow: "Application mobile",
              title: "React Native · Expo",
              sub: "TypeScript",
            },
            {
              eyebrow: "API",
              title: "Next.js",
              sub: "TypeScript",
              isCore: true,
            },
            { eyebrow: "Base de données", title: "NeonDB", sub: "PostgreSQL" },
          ],
          sub: [
            {
              eyebrow: "Sur l’appareil",
              title: "Apple Health",
              sub: "Synchronisé dans l’application",
            },
            { eyebrow: "Messagerie", title: "QStash", sub: null },
            {
              eyebrow: "Confidentialité",
              title: "Confidentialité d’abord",
              sub: null,
            },
          ],
          notes: [null],
        },
        { type: "quote", label: "Résultat", text: null, attribution: null },
      ],
    },
  },

  posts: {
    "shipping-a-react-native-app-solo": {
      title:
        "Publier une application React Native sur l’App Store en tant que développeur solo",
      excerpt:
        "Tout ce que j’aurais aimé savoir avant de soumettre ma première application — des builds Expo jusqu’à l’App Review.",
    },
    "code-review-team-of-three": {
      title:
        "Ce que diriger une équipe de trois m’a appris sur la revue de code",
      excerpt:
        "Les revues ont cessé d’être une chasse aux bugs pour devenir un partage de contexte. Voici la checklist à laquelle nous sommes arrivés.",
      body: [
        {
          _type: "paragraph",
          _key: "p1",
          children: [
            {
              text: "Quand je suis devenu chef d’équipe chez apomap, j’ai hérité d’un processus de revue qui fonctionnait plutôt bien. Les pull requests étaient approuvées, les bugs étaient repérés, et personne ne se plaignait. Mais les revues ressemblaient à un contrôle, pas à une conversation — et avec trois développeurs responsables chacun d’une partie différente du produit, cet écart comptait.",
            },
          ],
        },
        {
          _type: "heading",
          _key: "h1",
          id: "s1",
          text: "Les revues sont des conversations",
        },
        {
          _type: "paragraph",
          _key: "p2",
          children: [
            {
              text: "La première chose que nous avons changée, c’est la question que se pose la personne qui relit. Au lieu de ",
            },
            { text: "« est-ce que c’est correct ? »", strong: true },
            { text: ", nous avons commencé par " },
            {
              text: "« est-ce que je comprends pourquoi ceci existe ? »",
              strong: true,
            },
            {
              text: " Si la réponse était non, c’était la description de la pull request qu’il fallait retravailler avant le code.",
            },
          ],
        },
        {
          _type: "pullQuote",
          _key: "q1",
          text: "Une bonne revue laisse les deux personnes en savoir plus qu’avant.",
        },
        { _type: "heading", _key: "h2", id: "s2", text: "Rester petit" },
        {
          _type: "paragraph",
          _key: "p3",
          children: [
            {
              text: "Les grosses pull requests sont survolées. Nous nous sommes mis d’accord sur une limite souple de lignes modifiées, et tout ce qui la dépassait était découpé ou présenté lors d’un court appel. Des changements plus petits voulaient aussi dire des retours plus rapides, ce qui rendait chacun plus enclin à ouvrir un brouillon tôt.",
            },
          ],
        },
        { _type: "heading", _key: "h3", id: "s3", text: "La checklist" },
        {
          _type: "paragraph",
          _key: "p4",
          children: [
            {
              text: "Nous gardions une courte checklist dans le modèle de pull request. Elle tenait sur un seul écran, donc les gens la lisaient vraiment :",
            },
          ],
        },
        // The template is code: it stays as written.
        ...(codeBlock ? [codeBlock] : []),
        {
          _type: "heading",
          _key: "h4",
          id: "s4",
          text: "Ce qui a changé",
        },
        {
          _type: "list",
          _key: "l1",
          ordered: true,
          items: [
            [
              {
                text: "Les revues sont devenues plus rapides, parce que le contexte était déjà écrit.",
              },
            ],
            [
              {
                text: "Les développeurs plus récents posaient davantage de questions — ouvertement, là où tout le monde apprenait.",
              },
            ],
            [
              {
                text: "Un « LGTM » sans commentaire est devenu l’exception plutôt que la règle.",
              },
            ],
          ],
        },
        {
          _type: "paragraph",
          _key: "p5",
          children: [
            {
              text: "La checklist n’a jamais vraiment été le sujet. Elle nous donnait simplement un point de départ commun pour la conversation.",
            },
          ],
        },
      ],
    },
    "black-forest-before-work": {
      title: "Traverser la Forêt-Noire avant le travail",
      excerpt:
        "Des montées à l’aube, des routes vides — et pourquoi le meilleur débogage se fait quelque part autour du quarantième kilomètre.",
    },
    "one-lens-for-a-month": {
      title: "Un seul objectif pendant un mois",
      excerpt:
        "Les contraintes donnent de meilleures applications. Il s’avère qu’elles donnent aussi de meilleures photos.",
    },
    "go-for-typescript-developers": {
      title: "Go pour les développeurs TypeScript : premières impressions",
      excerpt:
        "Ce qui m’a surpris en passant de Node à Go pendant le développement d’un petit analyseur d’URL.",
    },
    "first-200km-ride": {
      title:
        "Ma première sortie de 200 km, et ce qu’elle m’a appris sur la gestion de l’effort",
      excerpt:
        "Partir plus lentement que ce qui semble juste. Manger avant d’avoir faim. Un bon conseil pour les longs projets, aussi.",
    },
    "light-lines-vosges": {
      title: "Lumière, lignes et longues montées dans les Vosges",
      excerpt:
        "Un week-end de lacets et d’heure dorée, juste de l’autre côté de la frontière.",
    },
  },
};
