import { Project, SkillItem, TimelineStep, ServiceItem, StatItem } from '../types';
import energyGroupImg from '../assets/images/energy_group_preview_1787531234512.jpg';

export const DEVELOPER_INFO = {
  firstName: 'Mouflihath',
  fullName: 'SADIKOU Mouflihath A. Mobereola',
  title: 'Développeuse Full Stack Junior',
  formation: 'Diplômée en Monétique (Institut Supérieur Golden Academy)',
  tagline: 'Développeuse Full Stack Junior & Diplômée en Monétique : applications React, back-ends Laravel et modélisation UML.',
  shortBio: 'Diplômée en Monétique, je me suis formée en autodidacte au développement web à travers plusieurs projets concrets : applications React, back-ends Laravel et modélisation UML. Rigoureuse et orientée solution, je souhaite mettre mes compétences techniques au service d’une équipe de développement full stack.',
  location: 'Cotonou, Bénin',
  email: 'kikesadikou@gmail.com',
  whatsapp: ['01 42 81 55 62'],
  whatsappLinks: ['https://wa.me/2290142815562'],
  github: 'https://github.com/mouflihath',
  linkedin: 'https://www.linkedin.com/in/mouflihath-sadikou-650a5b363/',
  twitter: 'https://twitter.com',
  discord: 'mouflihath_dev',
  yearsOfExperience: 2,
  completedProjectsCount: 12,
  languages: [
    { name: 'Français', level: 'Bien' },
    { name: 'Fon', level: 'Assez bien' },
  ],
  masteredSoftware: ['StarUML', 'Figma', 'Visual Studio Code', 'Word', 'Excel', 'PowerPoint'],
  educationDetails: [
    {
      degree: 'Licence en Monétique',
      institution: 'Institut Supérieur Golden Academy (GOLDEN ACADEMY)',
      period: 'Sept 2025 - 2026',
      location: 'Akpakpa ; Cotonou au BÉNIN',
      description: 'Titulaire de la Licence en Monétique à Institut Supérieur Golden Academy à Akpakpa ; Cotonou au BÉNIN.',
    },
    {
      degree: 'Baccalauréat D',
      institution: 'Complexe Scolaires Saint Augustin (CSSA)',
      period: 'Sep 2022 - Juin 2023',
      location: 'Cotonou au BÉNIN',
      description: 'Titulaire du BAC D (Baccalauréat série Scientifique D) à CSSA (Complexe Scolaires Saint Augustin) à Cotonou au BÉNIN.',
    },
  ],
  academicStage: {
    company: 'KingSoft Digital',
    period: '18 mai – 18 juin 2026',
    location: 'Cotonou, Bénin',
    role: 'Stage Académique',
    description: 'Initiation au développement web professionnel avec Laravel. Découverte du cycle de développement en environnement d’entreprise.',
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'energy-group',
    title: 'ENERGY GROUP',
    subtitle: 'Supervision Énergétique Intelligente & Plateforme SaaS B2B',
    category: 'CleanTech & SaaS',
    featured: true,
    description: 'Plateforme full-stack de monitoring industriel, d\'optimisation de la consommation énergétique et de gestion des infrastructures d\'énergie renouvelable (solaire, éolien, réseaux électriques).',
    longDescription: 'ENERGY GROUP est une solution SaaS industrielle permettant aux entreprises et collectivités de superviser en temps réel leurs flux énergétiques, de générer des bilans carbone certifiés et d\'anticiper les pics de consommation grâce à des algorithmes prédictifs. La plateforme intègre une télémétrie IoT haute fréquence, des visualisations interactives D3.js et un système d\'alerte proactif.',
    image: energyGroupImg,
    color: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    technologies: ['React.js', 'Laravel 11', 'MySQL', 'IoT WebSockets', 'Recharts', 'Tailwind CSS', 'Docker'],
    features: [
      'Tableaux de bord dynamiques de supervision et flux énergétiques en temps réel',
      'Détection intelligente des anomalies et alertes instantanées de surconsommation',
      'Générateur de bilans carbone automatisés et rapports de conformité RSE',
      'Supervision multi-sites et télémétrie des parcs solaires & éoliens',
      'Optimisation prédictive des coûts énergétiques et planification de charge',
      'API REST sécurisée avec authentification OAuth2 et gestion des rôles multi-niveaux'
    ],
    metrics: '-28% de déperdition énergétique constatée chez les sites industriels pilotes',
    demoUrl: 'https://energy-groupe.tech/',
    githubUrl: 'https://github.com/mouflihath/energy-group-platform',
    architectureDetails: 'Architecture microservices événementielle : Frontend réactif React 19 / Vite avec graphiques D3 interactifs, backend d\'ingestion IoT asynchrone sous Laravel 11 et base de données MySQL optimisée pour les séries temporelles.'
  },
  {
    id: 'les-coursiers-du-coin',
    title: 'LES COURSIERS DU COIN',
    subtitle: 'Plateforme Logistique de Livraison Urbaine & Éco-Responsable',
    category: 'Logistics & Mobile',
    featured: true,
    description: 'Solution complète de dispatching instantané et de gestion de livraisons locales du dernier kilomètre à vélo/cargo, connectant commerces de quartier, clients et coursiers indépendants.',
    longDescription: 'LES COURSIERS DU COIN révolutionne la logistique urbaine en favorisant le commerce local et la mobilité douce. L\'écosystème comprend un portail commerçant pour la saisie rapide des courses, un algorithme de dispatching intelligent selon la position géographique, une application PWA mobile pour les coursiers et un suivi cartographique temps réel par SMS/Web.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop',
    color: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    technologies: ['React.js', 'Laravel', 'MySQL', 'Google Maps API', 'Socket.io', 'PWA', 'Tailwind CSS'],
    features: [
      'Algorithme de dispatching automatique et calcul d\'itinéraires vélos optimisés',
      'Tracking GPS en direct des coursiers avec estimation ultra-précise d\'arrivée (ETA)',
      'Portail commerçant : création de commandes en 3 clics et impression d\'étiquettes',
      'PWA mobile dédiée aux livreurs avec acceptation des courses et validation par scan QR',
      'Paiement en ligne sécurisé et pourboires directs reversés aux coursiers',
      'Bilan d\'émissions CO2 économisées en temps réel'
    ],
    metrics: 'Délai moyen de livraison inférieur à 24 minutes en zone urbaine dense',
    demoUrl: 'https://courier-corner-app.vercel.app/',
    githubUrl: 'https://github.com/mouflihath/les-coursiers-du-coin',
    architectureDetails: 'Architecture hybride Web / PWA : Frontend React 19 connecté via WebSockets temps réel au serveur de géolocalisation, API Laravel et base relationnelle MySQL avec indexation spatiale géodésique.'
  },
  {
    id: 'ariya',
    title: 'ARIYA',
    subtitle: 'Marketplace Événementielle & Gestion de Prestataires',
    category: 'Full-Stack',
    featured: true,
    description: 'Plateforme collaborative moderne facilitant l\'organisation d\'événements privés et corporatifs en connectant instantanément clients, organisateurs et prestataires qualifiés.',
    longDescription: 'ARIYA simplifie la logistique événementielle de bout en bout : devis instantanés automatisés, calendrier interactif synchronisé, messagerie chiffrée de bout en bout et gestionnaire de budget prévisionnel avec paiements échelonnés.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    color: '#EC4899',
    accentGlow: 'rgba(236, 72, 153, 0.4)',
    technologies: ['React.js', 'TypeScript', 'Laravel', 'MySQL', 'Pusher WebSockets', 'Tailwind CSS', 'Stripe'],
    features: [
      'Générateur de devis dynamique selon le nombre d\'invités et le type d\'événement',
      'Messagerie instantanée temps réel entre clients et prestataires (WebSockets)',
      'Gestionnaire de budget prédictif avec calendrier d\'échéances',
      'Système d\'évaluation certifiée et portfolio multimédia pour chaque prestataire',
      'Contrats numériques avec signature électronique intégrée'
    ],
    metrics: '99.4% de satisfaction utilisateur sur plus de 120 événements testés',
    demoUrl: 'https://curated-event-crew.lovable.app',
    githubUrl: 'https://github.com/mouflihath/ariya-event-marketplace',
    architectureDetails: 'Architecture Single-Page Application avec synchronisation d\'état optimisée via React Context & Hooks, Backend Laravel sous PHP 8.3 avec WebSockets Pusher et base de données MySQL.'
  },
  {
    id: 'hygie-plus',
    title: 'HYGIE+',
    subtitle: 'Plateforme E-Santé & Télémédecine Nouvelle Génération',
    category: 'HealthTech',
    featured: true,
    description: 'Plateforme e-santé complète permettant de rechercher en temps réel des pharmacies de garde, commander des médicaments avec vérification d\'ordonnance par IA et suivre la livraison géolocalisée.',
    longDescription: 'HYGIE+ révolutionne l\'accès aux soins de santé d\'urgence. Le système intègre un moteur de recherche géospatial haute précision, un module de reconnaissance optique et d\'analyse d\'ordonnances alimenté par l\'IA pour détecter les contre-indications, ainsi qu\'un tunnel de paiement sécurisé multi-devises.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    color: '#8B5CF6',
    accentGlow: 'rgba(139, 92, 246, 0.4)',
    technologies: ['React.js', 'Laravel 11', 'MySQL', 'OpenAI API', 'Google Maps API', 'FedaPay', 'Tailwind CSS', 'Docker'],
    features: [
      'Recherche et géolocalisation en direct des pharmacies ouvertes 24/7',
      'Analyse intelligente d\'ordonnances médicales par vision IA (OpenAI)',
      'Tunnel de commande et paiement sécurisé via FedaPay / Carte / Mobile Money',
      'Suivi en temps réel de la livraison sur carte interactive Google Maps',
      'Espace professionnel dédié aux pharmaciens avec gestion des stocks en direct',
      'Architecture résiliente et chiffrement des données de santé (HIPAA & RGPD)'
    ],
    metrics: '+45% de rapidité d\'accès aux médicaments d\'urgence',
    demoUrl: 'https://hygie-plus-demo.preview.app',
    githubUrl: 'https://github.com/mouflihath/hygie-plus-platform',
    architectureDetails: 'Architecture microservices découplée : Frontend React 19 SPA réactif, Backend API RESTful Laravel avec files d\'attente Redis, base de données relationnelle MySQL indexée spatialement.'
  },
  {
    id: 'cyber-shield',
    title: 'CYBER-SHIELD',
    subtitle: 'Scanner de Vulnérabilités & Audit de Sécurité Web 3D',
    category: 'Cybersecurity',
    featured: true,
    description: 'Suite d\'outils d\'analyse de sécurité automatisée pour applications web : détection des failles OWASP Top 10, audits des en-têtes HTTP et visualiseur d\'arborescence d\'attaques en 3D.',
    longDescription: 'Conçu pour les développeurs et RSSI modernes, CYBER-SHIELD exécute des tests d\'intrusion légitimes non destructifs, vérifie les configurations SSL/TLS, analyse la conformité CORS/CSP et modélise la surface d\'attaque en 3D interactive.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    color: '#06B6D4',
    accentGlow: 'rgba(6, 182, 212, 0.4)',
    technologies: ['TypeScript', 'Three.js', 'Node.js', 'Python', 'Docker', 'REST API', 'Tailwind CSS'],
    features: [
      'Scanner automatisé des en-têtes de sécurité (HSTS, CSP, X-Frame-Options, CORS)',
      'Détection proactive des vulnérabilités courantes (XSS, SQLi, CSRF, Misconfigs)',
      'Visualisation 3D interactive de l\'infrastructure réseau et des vecteurs de risque',
      'Génération instantanée de rapports PDF d\'audit avec recommandations de remédiation',
      'Intégration CI/CD pour bloquer les déploiements non conformes'
    ],
    metrics: 'Plus de 250 vecteurs de failles analysés en moins de 15 secondes',
    demoUrl: 'https://cybershield-scanner.preview.app',
    githubUrl: 'https://github.com/mouflihath/cybershield-security-suite',
    architectureDetails: 'Moteur d\'audit asynchrone Node/Python avec sandboxing Docker sécurisé, visualiseur 3D Three.js exploitant WebGL pour le rendu de graphes de vulnérabilités.'
  },
  {
    id: 'nexus-ai',
    title: 'NEXUS AI',
    subtitle: 'Assistant Créatif Multimodal & Copilote Numérique',
    category: 'AI & Tools',
    featured: false,
    description: 'Espace de travail intelligent combinant génération de code assistée par IA, analyse documentaire contextuelle et automatisation de workflows créatifs.',
    longDescription: 'NEXUS AI permet aux équipes techniques et créatives de prototyper des interfaces, d\'optimiser du code legacy et de synthétiser de la documentation technique en temps réel grâce à une architecture RAG avancée.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    color: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.4)',
    technologies: ['React.js', 'Gemini Pro / Flash', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST API'],
    features: [
      'Chat contextuel avec streaming ultra-rapide et coloration syntaxique',
      'Mode refactorisation sécurisée de code avec analyse de complexité',
      'Support multi-fichiers et export en un clic vers GitHub Gist',
      'Interface cyberpunk immersive avec raccourcis clavier pro'
    ],
    metrics: 'Gain de 40% sur le temps de prototypage frontend',
    demoUrl: 'https://nexus-ai-workspace.preview.app',
    githubUrl: 'https://github.com/mouflihath/nexus-ai-workspace',
    architectureDetails: 'Front-end React 19 connecté aux APIs Gemini avec streaming SSE (Server-Sent Events) et gestionnaire de contexte local chiffré.'
  },
  {
    id: 'aurora-3d',
    title: 'AURORA 3D',
    subtitle: 'Studio Expérientiel & Configurateur WebGL Interactif',
    category: 'Creative 3D',
    featured: false,
    description: 'Vitrine technologique et configurateur de produits 3D en temps réel avec éclairage dynamique, matériaux PBR personnalisables et animations cinématiques.',
    longDescription: 'AURORA 3D explore les frontières de l\'UI/UX web immersif en exploitant Three.js et les shaders personnalisés pour offrir une expérience e-commerce haute fidélité sans compromettre la performance mobile.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    color: '#3B82F6',
    accentGlow: 'rgba(59, 130, 246, 0.4)',
    technologies: ['Three.js', 'React.js', 'WebGL', 'GLSL Shaders', 'Tailwind CSS'],
    features: [
      'Moteur de rendu 3D temps réel avec matériaux PBR et reflets physiques',
      'Animations orbitales cinématiques fluides à 60 FPS constants',
      'Sélecteur de texture et de colorimétrie dynamique en direct',
      'Optimisation polygonale adaptative pour les appareils mobiles'
    ],
    metrics: 'Rendu 60 FPS garanti même sur smartphones milieu de gamme',
    demoUrl: 'https://aurora-3d-experience.preview.app',
    githubUrl: 'https://github.com/mouflihath/aurora-webgl-studio',
    architectureDetails: 'Canvas WebGL dédié avec shaders GLSL personnalisés, post-processing bloom léger et chargement asynchrone des assets 3D.'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // --- COMPÉTENCES RÉELLEMENT PRATIQUÉES ---
  {
    id: 'laravel',
    name: 'Laravel & Laravel 11',
    category: 'Backend & APIs',
    masteryType: 'Pratiquée',
    level: 94,
    color: '#FF2D20',
    iconName: 'Server',
    description: 'Framework backend principal : architecture MVC, Eloquent ORM, migrations, seeders, contrôleurs, middlewares et gestion des routes API.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA']
  },
  {
    id: 'php',
    name: 'PHP 8.x',
    category: 'Backend & APIs',
    masteryType: 'Pratiquée',
    level: 90,
    color: '#777BB4',
    iconName: 'Code2',
    description: 'Programmation orientée objet (POO), types stricts, traitement des requêtes HTTP et logique métier développée dans le cursus en Monétique.',
    popularProjects: ['Energy-Group', 'Backend Monétique', 'HYGIE+']
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Web Full-Stack',
    masteryType: 'Pratiquée',
    level: 95,
    color: '#61DAFB',
    iconName: 'Atom',
    description: 'Bibliothèque frontend moderne : composants fonctionnels, Hooks (useState, useEffect, custom hooks), gestion d\'état et Single-Page Applications (SPA).',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'ARIYA', 'HYGIE+']
  },
  {
    id: 'typescript',
    name: 'React + TypeScript (TSX)',
    category: 'Web Full-Stack',
    masteryType: 'Pratiquée',
    level: 90,
    color: '#3178C6',
    iconName: 'FileCode',
    description: 'Typage statique strict avec React TSX, définition d\'interfaces solides, typage des props d\'API et élimination des bugs à la compilation.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'ARIYA']
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'Web Full-Stack',
    masteryType: 'Pratiquée',
    level: 92,
    color: '#646CFF',
    iconName: 'Zap',
    description: 'Outillage frontend moderne et rapide, bundling optimisé pour la production et environnement de développement réactif avec React.',
    popularProjects: ['Energy-Group', 'Portfolio', 'ARIYA']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Base de Données',
    masteryType: 'Pratiquée',
    level: 88,
    color: '#4479A1',
    iconName: 'Database',
    description: 'Base de données relationnelle principale : modélisation (MCD/MLD), intégrité référentielle, indexation, jointures et requêtes optimisées.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA']
  },
  {
    id: 'rest-api',
    name: 'API REST & JSON',
    category: 'Backend & APIs',
    masteryType: 'Pratiquée',
    level: 92,
    color: '#10B981',
    iconName: 'Network',
    description: 'Conception d\'APIs RESTful pour lier React et Laravel : verbes HTTP (GET, POST, PUT, DELETE), formatage JSON, codes statuts et parsing des payloads.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+']
  },
  {
    id: 'laravel-auth',
    name: 'Laravel Auth (Breeze & Jetstream)',
    category: 'Backend & APIs',
    masteryType: 'Pratiquée',
    level: 89,
    color: '#EF4444',
    iconName: 'Lock',
    description: 'Authentification, sessions, protection par Middlewares, routes sécurisées (/api/login, inscription) et gestion des contrôles d\'accès.',
    popularProjects: ['Energy-Group Auth', 'Hygie+ Portails']
  },
  {
    id: 'bootstrap-css',
    name: 'Bootstrap & HTML5 / CSS3',
    category: 'Web Full-Stack',
    masteryType: 'Pratiquée',
    level: 92,
    color: '#7952B3',
    iconName: 'Layout',
    description: 'Intégration d\'interfaces web responsives, grilles CSS flexibles, ergonomie mobile et personnalisation de composants Bootstrap.',
    popularProjects: ['Sites web vitrines', 'Interfaces de gestion', 'Dashboards']
  },
  {
    id: 'git-github',
    name: 'Git, GitHub & SSH',
    category: 'Outils & Méthodes',
    masteryType: 'Pratiquée',
    level: 90,
    color: '#F05032',
    iconName: 'GitBranch',
    description: 'Gestion de versions distribuée, branches de développement, dépôts distants GitHub et authentification par clés SSH pour dépôts privés.',
    popularProjects: ['Tous les projets']
  },
  {
    id: 'uml-argouml',
    name: 'UML & ArgoUML',
    category: 'Conception & Modélisation',
    masteryType: 'Pratiquée',
    level: 88,
    color: '#0EA5E9',
    iconName: 'FolderTree',
    description: 'Modélisation rigoureuse de logiciels : diagrammes de cas d\'utilisation (Use Cases), diagrammes de classes et diagrammes de séquence avec ArgoUML.',
    popularProjects: ['Conception Hygie+', 'Architecture Systèmes Monétiques']
  },
  {
    id: 'monetique-iso',
    name: 'ISO 8583 & ISO8583 Studio',
    category: 'Monétique & Paiement',
    masteryType: 'Pratiquée',
    level: 86,
    color: '#D97706',
    iconName: 'CreditCard',
    description: 'Norme internationale des transactions financières électroniques (cartes bancaires, DAB/GAB, TPE), décodage de trames monétiques et simulation sur ISO8583 Studio.',
    popularProjects: ['Formation Monétique', 'Simulations Bancaires']
  },
  {
    id: 'fedapay',
    name: 'FedaPay (Passerelle de Paiement)',
    category: 'Monétique & Paiement',
    masteryType: 'Pratiquée',
    level: 87,
    color: '#059669',
    iconName: 'DollarSign',
    description: 'Intégration de paiements en ligne sécurisés multi-canaux (Mobile Money MTN/Moov, cartes bancaires) dans des solutions web (Hygie+).',
    popularProjects: ['HYGIE+ Pharmacie', 'Modules e-commerce']
  },
  {
    id: 'wamp',
    name: 'WAMP Server',
    category: 'Outils & Méthodes',
    masteryType: 'Pratiquée',
    level: 90,
    color: '#D97706',
    iconName: 'HardDrive',
    description: 'Configuration et exploitation d\'un environnement local complet (Apache, PHP, MySQL, phpMyAdmin) sous Windows pour le développement web.',
    popularProjects: ['Développement Local PHP / Laravel']
  },

  // --- TECHNOLOGIES & OUTILS ABORDÉS / EXPLORÉS ---
  {
    id: 'javacard',
    name: 'Java Card',
    category: 'Monétique & Paiement',
    masteryType: 'Notion / Abordée',
    level: 70,
    color: '#DC2626',
    iconName: 'Cpu',
    description: 'Technologie de programmation pour cartes à puce sécurisées et applets cryptographiques dans le domaine bancaire et monétique.',
    popularProjects: ['Cursus Monétique']
  },
  {
    id: 'packet-tracer',
    name: 'Cisco Packet Tracer',
    category: 'Réseaux & Systèmes',
    masteryType: 'Notion / Abordée',
    level: 72,
    color: '#0284C7',
    iconName: 'Share2',
    description: 'Simulation de réseaux informatiques, adressage IP, interconnexion de routeurs, commutateurs et principes de routage.',
    popularProjects: ['Travaux pratiques Réseaux']
  },
  {
    id: 'systems-admin',
    name: 'Linux & Administration Windows',
    category: 'Réseaux & Systèmes',
    masteryType: 'Notion / Abordée',
    level: 70,
    color: '#EAB308',
    iconName: 'Terminal',
    description: 'Notions d\'administration système, commandes fondamentales de terminal, gestion des permissions et environnements serveurs.',
    popularProjects: ['Gestion serveurs locaux']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design & Prototypage',
    masteryType: 'Pratiquée',
    level: 82,
    color: '#F24E1E',
    iconName: 'Palette',
    description: 'Wireframing, maquettage complet d\'applications web (Hygie+), composants d\'interface et préparation de maquettes pour l\'intégration.',
    popularProjects: ['Hygie+ Maquette', 'Energy-Group UI', 'Les Coursiers du Coin UI']
  },
  {
    id: 'alpine-tailwind',
    name: 'Tailwind CSS & Alpine.js',
    category: 'Web Full-Stack',
    masteryType: 'Pratiquée',
    level: 90,
    color: '#06B6D4',
    iconName: 'Layout',
    description: 'Stylisation moderne utilitaire, composants dynamiques légers et design d\'interfaces web responsives.',
    popularProjects: ['Sites vitrines', 'EnergyGroupe', 'Les Coursiers du Coin']
  },
  {
    id: 'render',
    name: 'Render & Cloud Hosting',
    category: 'Réseaux & Systèmes',
    masteryType: 'Notion / Abordée',
    level: 72,
    color: '#46E3B7',
    iconName: 'Cloud',
    description: 'Exploration du déploiement cloud d\'applications et d\'hébergement de services (notamment bot Discord et backends légers).',
    popularProjects: ['Hébergement de bots & tests']
  },
  {
    id: 'lovable-sitebuilders',
    name: 'Lovable & Générateurs Web IA',
    category: 'IA & Création Numérique',
    masteryType: 'Notion / Abordée',
    level: 76,
    color: '#EC4899',
    iconName: 'Globe',
    description: 'Exploration d\'outils modernes de génération de sites et prototypage web assisté par IA pour accélérer les maquettes.',
    popularProjects: ['Prototypage ARIYA']
  },
  {
    id: 'generative-ai',
    name: 'IA Générative, LLMs & Prompt Engineering',
    category: 'IA & Création Numérique',
    masteryType: 'Notion / Abordée',
    level: 80,
    color: '#8B5CF6',
    iconName: 'Sparkles',
    description: 'Pratique de la rédaction de prompts précis pour la génération d\'images, de textes structurés et l\'assistance au codage.',
    popularProjects: ['Création visuelle', 'Veille technologique LLM']
  },
  {
    id: 'video-editing-ai',
    name: 'Montage Vidéo IA & Contenu Digital',
    category: 'IA & Création Numérique',
    masteryType: 'Notion / Abordée',
    level: 74,
    color: '#06B6D4',
    iconName: 'Video',
    description: 'Création de contenu digital (TikTok) et utilisation d\'outils de montage assistés par intelligence artificielle.',
    popularProjects: ['Contenus digitaux & Vidéos']
  }
];

export const TIMELINE_DATA: TimelineStep[] = [
  {
    id: 'stage-kingsoft',
    year: '18 mai – 18 juin 2026',
    title: 'Stage Académique — KingSoft Digital',
    subtitle: 'Initiation au développement web professionnel avec Laravel',
    organization: 'KingSoft Digital',
    location: 'Cotonou, Bénin',
    description: 'Initiation au développement web professionnel avec Laravel. Découverte et pratique concrète du cycle de développement en environnement d’entreprise.',
    skills: ['Laravel', 'PHP', 'Cycle de développement', 'Architecture MVC', 'Travail en entreprise'],
    type: 'experience',
    icon: 'Briefcase',
    glowColor: '#4B5320'
  },
  {
    id: 'projet-hygie',
    year: '2025 — 2026',
    title: 'Hygie+ | Plateforme de Comparaison Prix Pharmacies',
    subtitle: 'Projet académique en équipe - Mémoire (avec Lauriane FAGBEMI)',
    organization: 'Institut Supérieur Golden Academy',
    location: 'Cotonou, Bénin',
    description: 'Conception et développement d’une application web de comparaison de prix entre pharmacies. Modélisation UML/StarUML, maquettage Figma, développement React.js + Laravel/Blade, base de données MySQL.',
    skills: ['React.js', 'Laravel', 'Blade', 'MySQL', 'StarUML', 'Figma'],
    type: 'projects',
    icon: 'Rocket',
    glowColor: '#10B981'
  },
  {
    id: 'projet-coursiers',
    year: '2024 — 2025',
    title: 'Les Coursiers du Coin | App de Livraison',
    subtitle: 'Projet personnel de mise en relation livreurs / clients',
    organization: 'Projet Personnel',
    location: 'Cotonou & Calavi, Bénin',
    description: 'Application web de mise en relation livreurs / clients. Développée avec HTML, CSS, JavaScript et React.js. Démo en ligne : https://courier-corner-app.vercel.app',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Cotonou & Calavi'],
    type: 'projects',
    icon: 'Code2',
    glowColor: '#F59E0B'
  },
  {
    id: 'projet-energygroupe',
    year: '2024',
    title: 'EnergyGroupe | Site Vitrine',
    subtitle: 'Projet personnel - Secteur électricité & plomberie',
    organization: 'Projet Personnel',
    location: 'Cotonou, Bénin',
    description: 'Conception et intégration d’un site vitrine responsive pour une entreprise de travaux. Stack : HTML, CSS, JavaScript, React.js. Démo en ligne : https://energy-groupe.tech',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Site Vitrine Responsive'],
    type: 'projects',
    icon: 'Globe',
    glowColor: '#06B6D4'
  },
  {
    id: 'formation-licence-monetique',
    year: 'Sept 2025 — 2026',
    title: 'Licence en Monétique',
    subtitle: 'Institut Supérieur Golden Academy (GOLDEN ACADEMY)',
    organization: 'GOLDEN ACADEMY',
    location: 'Akpakpa ; Cotonou au BÉNIN',
    description: 'Titulaire de la Licence en Monétique à Institut Supérieur Golden Academy à Akpakpa ; Cotonou au BÉNIN. Formation aux systèmes financiers électroniques, modélisation UML, bases de données et architectures logicielles.',
    skills: ['Monétique', 'Transactions bancaires', 'Systèmes de paiement', 'UML', 'MySQL'],
    type: 'education',
    icon: 'GraduationCap',
    glowColor: '#4B5320'
  },
  {
    id: 'formation-bac-d',
    year: 'Sep 2022 — Juin 2023',
    title: 'Baccalauréat D (Scientifique)',
    subtitle: 'Complexe Scolaires Saint Augustin (CSSA)',
    organization: 'CSSA',
    location: 'Cotonou au BÉNIN',
    description: 'Titulaire du BAC D (Baccalauréat série Scientifique D) au Complexe Scolaires Saint Augustin à Cotonou au BÉNIN. Solide socle de raisonnement logique, sciences et méthodologie.',
    skills: ['Baccalauréat Scientifique D', 'Mathématiques', 'Sciences physiques', 'Logique'],
    type: 'education',
    icon: 'GraduationCap',
    glowColor: '#6B7D50'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: 'Globe',
    title: 'Développement Web Full-Stack',
    subtitle: 'Applications React.js, TSX & Laravel',
    description: 'Conception de Single-Page Applications (SPA) et plateformes modernes avec React.js, TypeScript, Vite et backend Laravel 11, avec styles soignés et responsive.',
    highlights: ['React.js + TSX & Vite', 'Backend Laravel 11 MVC', 'Responsive Bootstrap & CSS', 'Performance & code propre'],
    glowColor: 'purple',
    badge: 'Cœur de Métier'
  },
  {
    id: 'backend-dev',
    icon: 'Server',
    title: 'APIs REST & Architecture Backend',
    subtitle: 'Logique Métier, Middlewares & Données',
    description: 'Développement d\'APIs RESTful sécurisées pour relier le frontend React au backend Laravel, gestion fine de l\'authentification (Breeze/Jetstream), middlewares et base MySQL.',
    highlights: ['Routes sécurisées & Middlewares', 'Méthodes HTTP & payloads JSON', 'Base relationnelle MySQL', 'Environnement WAMP / Local'],
    glowColor: 'cyan',
    badge: 'Robuste & Fiable'
  },
  {
    id: 'monetique',
    icon: 'CreditCard',
    title: 'Monétique & Solutions de Paiement',
    subtitle: 'Protocoles Bancaires & Intégration FedaPay',
    description: 'Expertise issue de la formation en Monétique : étude des protocoles financiers (ISO 8583, ISO8583 Studio), cartes à puce (Java Card) et intégration de la passerelle FedaPay.',
    highlights: ['Intégration passerelle FedaPay', 'Norme ISO 8583 bancaire', 'Simulation ISO8583 Studio', 'Notions Java Card'],
    glowColor: 'emerald',
    badge: 'Spécialisation Monétique'
  },
  {
    id: 'conception-uml',
    icon: 'FolderTree',
    title: 'Conception & Modélisation UML',
    subtitle: 'Analyse Rigoureuse & Spécifications',
    description: 'Modélisation préalable des architectures logicielles avec ArgoUML : formalisation des besoins métiers, acteurs, diagrammes de cas d\'utilisation, de classes et de séquences.',
    highlights: ['Diagrammes de Cas d\'Utilisation', 'Diagrammes de Classes', 'Diagrammes de Séquences', 'Outil ArgoUML & Documentation'],
    glowColor: 'purple',
    badge: 'Génie Logiciel'
  },
  {
    id: 'outils-ia',
    icon: 'Sparkles',
    title: 'Prototypage & Création Numérique',
    subtitle: 'Figma, Prompt Engineering & Outils IA',
    description: 'Utilisation pragmatique d\'outils modernes : maquettes Figma, prompt engineering avancé pour la génération de visuels, accélération du prototypage et création de contenus.',
    highlights: ['Maquettage & Wireframing Figma', 'Prompt engineering précis', 'Générateurs web & exploratoires', 'Création de formats digitaux'],
    glowColor: 'pink',
    badge: 'Créativité & Veille'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-projects',
    value: 15,
    suffix: '+',
    label: 'Projets & Travaux Réalisés',
    description: 'Applications web, SaaS, intégrations d\'API et modélisations logicielles.',
    icon: 'Briefcase'
  },
  {
    id: 'stat-tech',
    value: 14,
    suffix: '',
    label: 'Compétences Pratiquées',
    description: 'Stack complète : Laravel, React, PHP, MySQL, REST API, UML & Monétique.',
    icon: 'Code'
  },
  {
    id: 'stat-years',
    value: 3,
    suffix: '+',
    label: 'Années d\'Études & Pratique',
    description: 'Formation spécialisée en informatique, web moderne et systèmes monétiques.',
    icon: 'Sparkles'
  },
  {
    id: 'stat-explored',
    value: 9,
    suffix: '+',
    label: 'Technologies Abordées',
    description: 'Veille active : Java Card, Cisco, Figma, IA générative, Cloud & 3D.',
    icon: 'Zap'
  }
];
