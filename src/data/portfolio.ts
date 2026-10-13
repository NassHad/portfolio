// Données fictives : à remplacer par les vraies informations.

export type Link = {
    label: string
    href: string
}

export type Profile = {
    firstName: string
    lastName: string
    role: string
    location: string
    tagline: string
    bio: string[]
    email: string
    links: Link[]
    stats: { value: string; label: string }[]
}

export type Project = {
    title: string
    year: string
    description: string
    tags: string[]
    color: string
    link: string
    image: string
    role: string
    details: string[]
}

export type Skill = {
    name: string
    icon?: string
}

export type SkillGroup = {
    category: string
    items: Skill[]
}

export type Experience = {
    period: string
    role: string
    company: string
    location: string
    description: string
    stack: string[]
}

export const profile: Profile = {
    firstName: 'Nassim',
    lastName: 'Haddad',
    role: 'Creative Developer',
    location: 'Lille, France',
    tagline: 'Interfaces web expressives, rapides et accessibles.',
    bio: [
        'Développeur front-end orienté design, je conçois des expériences web où la typographie, le mouvement et la performance travaillent ensemble.',
        "J'aime le moment où une maquette devient une interface vivante : transitions justes, interactions lisibles, et un code qui reste simple à faire évoluer.",
    ],
    email: 'hello@nassim-haddad.dev',
    links: [
        { label: 'GitHub', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Dribbble', href: '#' },
    ],
    stats: [
        { value: '10+', label: "années d'expérience" },
        { value: '30+', label: 'projets livrés' },
        { value: '12', label: 'clients accompagnés' },
    ],
}

export const projects: Project[] = [
    {
        title: 'Application Compatibilité Pièces Auto',
        year: '2026',
        description:
            "Site vitrine d'un studio photo : galerie plein écran, transitions de page et chargement progressif des images.",
        tags: ['React', 'GSAP', 'Vite'],
        color: '#efefef',
        link: '#',
        image: '/img/projects/lumen-studio.svg',
        role: 'Design et développement front-end',
        details: [
            'GTI Sodifac voulait que ses clients trouvent seuls, en rayon, la pièce compatible avec leur véhicule : batterie, ampoules, essuie-glaces, filtres et huiles. J’ai conçu une application pour tablettes en libre-service où le client choisit sa voiture ou sa moto (marque, modèle, date de mise en circulation), puis répond à quelques questions avant d’obtenir les produits compatibles. Elle couvre près de 12 000 modèles et fonctionne en offline.',
            'L’application, développée en React et TypeScript puis empaquetée pour Android avec Capacitor, embarque tout son catalogue dans une base SQLite construite à partir des guides fournisseurs. Le déploiement passe par Scalefusion, avec un plugin Android natif qui permet d’adapter catégories et marques à chaque magasin, et un formulaire web permet au client de mettre à jour ses données et de générer lui-même une nouvelle version signée.',
        ],
    },
    {
        title: 'Orbit Dashboard',
        year: '2025',
        description:
            'Tableau de bord temps réel pour une start-up IoT, avec graphiques animés et thème sombre.',
        tags: ['TypeScript', 'D3', 'WebSocket'],
        color: '#fb6c6c',
        link: '#',
        image: '/img/projects/orbit-dashboard.svg',
        role: 'Développement front-end',
        details: [
            "Orbit équipe des entrepôts de capteurs de température et d'humidité. Leurs équipes avaient besoin de suivre des centaines d'appareils en temps réel et de repérer immédiatement une anomalie.",
            "J'ai développé le tableau de bord en TypeScript, avec des graphiques D3 mis à jour via WebSocket sans recharger la page. Un système d'alertes regroupe les incidents par zone pour éviter la surcharge d'informations.",
            'Le thème sombre a été pensé pour un affichage permanent sur grands écrans dans les salles de supervision.',
        ],
    },
    {
        title: 'Verdure',
        year: '2025',
        description:
            "Boutique en ligne d'une marque de plantes : parcours d'achat simplifié et fiches produit éditoriales.",
        tags: ['Next.js', 'Stripe', 'CSS'],
        color: '#4fe191',
        link: '#',
        image: '/img/projects/verdure.svg',
        role: 'Développement e-commerce',
        details: [
            "Verdure vend des plantes d'intérieur et souhaitait une boutique au ton éditorial, proche d'un magazine, plutôt qu'un catalogue classique.",
            "Les fiches produit mêlent conseils d'entretien, photos d'ambiance et informations pratiques. Le tunnel d'achat a été réduit à trois étapes, avec paiement Stripe et calcul des frais de livraison en direct.",
            'Le site est généré en grande partie de manière statique avec Next.js, ce qui garantit des pages rapides et un bon référencement.',
        ],
    },
    {
        title: 'Sonar Festival',
        year: '2024',
        description:
            'Site événementiel pour un festival de musique électronique : programmation, billetterie et visuels génératifs.',
        tags: ['Canvas', 'GSAP', 'Astro'],
        color: '#aca3ff',
        link: '#',
        image: '/img/projects/sonar-festival.svg',
        role: 'Développement créatif',
        details: [
            'Pour sa dixième édition, Sonar Festival voulait une identité en ligne aussi vivante que sa programmation électronique.',
            "J'ai créé des visuels génératifs en Canvas qui réagissent au mouvement de la souris et changent de palette selon la scène consultée. Le site, construit avec Astro, reste léger malgré ces effets : les animations ne se chargent que lorsqu'elles sont visibles.",
            'La programmation, filtrable par jour et par scène, et la billetterie intégrée ont accompagné plus de 25 000 visiteurs sur la période de vente.',
        ],
    },
]

export const skills: SkillGroup[] = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: '/img/skills/react.png' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Next.js' },
        ],
    },
    {
        category: 'Créatif / Motion',
        items: [
            { name: 'GSAP' },
            { name: 'Three.js' },
            { name: 'Canvas' },
            { name: 'SVG' },
        ],
    },
    {
        category: 'Outils',
        items: [
            { name: 'Figma' },
            { name: 'Git' },
            { name: 'Vite' },
            { name: 'Node.js' },
        ],
    },
]

export const experiences: Experience[] = [
    {
        period: '2025 — Aujourd’hui',
        role: 'Développeur Web Fullstack',
        company: 'HDN Interactive',
        location: 'Lille',
        description:
            'Développeur web en freelance Client GTI Sodifac : Création d’une application android (pour tablette en magasin) de choix de pièces auto adaptées au véhicule de l’utilisateur. Stack technique :  React 19 + TypeScript 5.8, bundlé avec Vite 7, Capacitor 7,  Tailwind CSS 4, SQLite embarquée dans l’APK Outil IA : Claude Code via l’IDE Cursor',
        stack: [
            'React',
            'NextJS',
            'TypeScript',
            'HTML',
            'CSS',
            'ThreeJS',
            'GSAP',
        ],
    },
    {
        period: '2021 — 2025',
        role: 'Développeur Web Fullstack',
        company: 'GTI Sodifac',
        location: 'Roncq',
        description:
            "Développeur fullstack en solo, responsable du site internet et de la gestion du serveur (Prestashop, NextJS) Création d'un intranet avec NextJS Amélioration et maintenance du site ecommerce principal Création d’un sélecteur de tapis personnalisable pour Norauto Création d’un site ecommerce pour les clients pro et la force de vente",
        stack: ['React', 'Javascript', 'Prestashop', 'SQL', 'HTML', 'CSS'],
    },
    {
        period: '2014 — 2020',
        role: 'Développeur Web Fullstack',
        company: 'INFITEX',
        location: 'Lille',
        description:
            "Développeur fullstack PHP, Symfony 3/4 Conception et réalisation de solutions eCommerce Interface utilisateur pour force commerciale avec Symfony3/4 et connexion à l'ERP IBMi Site eCommerce en php sans framework, HTML/CSS et JS en front",
        stack: ['PHP', 'Symfony', 'Javascript', 'HTML', 'CSS'],
    },
    {
        period: '2012 — 2014',
        role: 'Licence et 1ère année de Master',
        company: '3DDUO & Oeil Pour Oeil',
        location: 'Lille',
        description:
            "2 années d’alternance (License et 1ère année de Master)en tant que développeur front Création de blog et de site catalogue Développement d'un site one page avec parallax Création de blog sur les jeux vidéos from scratch Maintenance d'un site sur Joomla",
        stack: ['PHP', 'SQL', 'Javascript', 'HTML', 'CSS'],
    },
]
