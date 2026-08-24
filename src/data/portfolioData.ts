import { Project, SkillItem, TimelineStep, ServiceItem, StatItem } from '../types';
import energyGroupImg from '../assets/images/energy_group_preview_1787531234512.jpg';

export const DEVELOPER_INFO = {
  firstName: 'Mouflihath',
  fullName: 'SADIKOU Mouflihath',
  title: 'Full-Stack Developer • Creative Developer • Digital Builder',
  tagline: 'Architecte de solutions numériques intuitives, sécurisées et performantes.',
  shortBio: 'Passionnée par le développement Full-Stack robuste, l\'architecture moderne et les solutions web à fort impact. Je conçois des plateformes SaaS d\'envergure (Energy Group, Les Coursiers du Coin, HYGIE+, ARIYA) alliant performance, scalabilité et ergonomie.',
  location: 'Bénin (Centre d\'accueil) • Remote & International',
  email: 'kikesadikou@gmail.com',
  whatsapp: ['01 42 81 55 62'],
  whatsappLinks: ['https://wa.me/2290142815562'],
  github: 'https://github.com/mouflihath-dev',
  linkedin: 'https://linkedin.com/in/mouflihath-sadikou',
  twitter: 'https://twitter.com',
  discord: 'mouflihath_dev',
  yearsOfExperience: 4,
  completedProjectsCount: 22,
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
    githubUrl: 'https://github.com/mouflihath-dev/energy-group-platform',
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
    githubUrl: 'https://github.com/mouflihath-dev/les-coursiers-du-coin',
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
    githubUrl: 'https://github.com/amina-dev/ariya-event-marketplace',
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
    githubUrl: 'https://github.com/amina-dev/hygie-plus-platform',
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
    githubUrl: 'https://github.com/amina-dev/cybershield-security-suite',
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
    githubUrl: 'https://github.com/amina-dev/nexus-ai-workspace',
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
    githubUrl: 'https://github.com/amina-dev/aurora-webgl-studio',
    architectureDetails: 'Canvas WebGL dédié avec shaders GLSL personnalisés, post-processing bloom léger et chargement asynchrone des assets 3D.'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    level: 95,
    color: '#FF2D20',
    iconName: 'Server',
    description: 'Développement d\'architectures MVC robustes, Eloquent ORM, files d\'attente, API REST sécurisées et authentification multi-rôles.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA']
  },
  {
    id: 'php',
    name: 'PHP 8.x',
    category: 'Backend',
    level: 92,
    color: '#777BB4',
    iconName: 'Code2',
    description: 'Programmation orientée objet avancée, design patterns, types stricts, performances optimisées et sécurité backend.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+']
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    level: 96,
    color: '#61DAFB',
    iconName: 'Atom',
    description: 'Composants fonctionnels, Hooks personnalisés, gestion d\'état moderne, Suspense, performance et interfaces réactives.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA', 'NEXUS AI']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 92,
    color: '#3178C6',
    iconName: 'FileCode',
    description: 'Typage strict, interfaces génériques, architecture d\'applications scalables sans bugs à l\'exécution.',
    popularProjects: ['Les Coursiers du Coin', 'CYBER-SHIELD', 'Portfolio 3D']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 98,
    color: '#F7DF1E',
    iconName: 'Cpu',
    description: 'DOM manipulation poussée, programmation asynchrone (Async/Await), Web APIs, Canvas et animations interactives.',
    popularProjects: ['Energy-Group', 'HYGIE+', 'ARIYA', 'AURORA 3D']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database & Cloud',
    level: 90,
    color: '#4479A1',
    iconName: 'Database',
    description: 'Modélisation relationnelle (MCD/MLD), optimisation d\'index, requêtes complexes, transactions ACID et intégrité des données.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA']
  },
  {
    id: 'rest-api',
    name: 'REST API',
    category: 'Backend',
    level: 95,
    color: '#10B981',
    iconName: 'Network',
    description: 'Conception de standards d\'API RESTful, documentation Swagger/Postman, rate limiting, JWT & OAuth2.',
    popularProjects: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'CYBER-SHIELD']
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools & Design',
    level: 94,
    color: '#F05032',
    iconName: 'GitBranch',
    description: 'Gestion de versions avancée, Gitflow, pull requests, revues de code rigoureuses et workflows CI/CD GitHub Actions.',
    popularProjects: ['Tous les projets']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tools & Design',
    level: 88,
    color: '#F24E1E',
    iconName: 'Palette',
    description: 'Design systems complets, wireframing, prototypage haute fidélité, micro-interactions et accessibilité UI/UX.',
    popularProjects: ['Energy-Group UI', 'Les Coursiers du Coin', 'ARIYA UI', 'HYGIE+']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Security & AI',
    level: 90,
    color: '#06B6D4',
    iconName: 'ShieldCheck',
    description: 'Audit OWASP Top 10, protection contre XSS/CSRF/SQLi, durcissement des serveurs, politiques CSP et cryptographie.',
    popularProjects: ['CYBER-SHIELD', 'HYGIE+ Health Data', 'Energy-Group API']
  },
  {
    id: 'ai',
    name: 'AI & LLMs',
    category: 'Security & AI',
    level: 89,
    color: '#A855F7',
    iconName: 'Sparkles',
    description: 'Intégration d\'APIs d\'IA avancées (Gemini, OpenAI), prompt engineering, modèles multimodaux et architectures RAG.',
    popularProjects: ['HYGIE+ Prescription AI', 'NEXUS AI']
  },
  {
    id: 'threejs',
    name: 'Three.js & WebGL',
    category: 'Frontend',
    level: 86,
    color: '#FFFFFF',
    iconName: 'Box',
    description: 'Scènes 3D interactives dans le navigateur, shaders, éclairages dynamiques, particules et animations caméra.',
    popularProjects: ['Portfolio 3D', 'AURORA 3D', 'CYBER-SHIELD 3D']
  }
];

export const TIMELINE_DATA: TimelineStep[] = [
  {
    id: 'step-1',
    year: '2021 — 2022',
    title: 'Fondations & Ingénierie Logicielle',
    subtitle: 'Diplôme & Formation Académique d\'Excellence',
    organization: 'Université Technologique & Instituts Numériques',
    location: 'Cursus Supérieur en Informatique',
    description: 'Apprentissage approfondi des structures de données fondamentales, algorithmique avancée, architecture des ordinateurs et programmation orientée objet (C, Java, bases de données relationnelles SQL).',
    skills: ['Algorithmique', 'Structures de Données', 'POO', 'Architecture Logicielle', 'SQL'],
    type: 'education',
    icon: 'GraduationCap',
    glowColor: '#8B5CF6'
  },
  {
    id: 'step-2',
    year: '2022 — 2023',
    title: 'Développement Web Full-Stack & Projets',
    subtitle: 'Immersion dans les technologies modernes',
    organization: 'Web Craft Academy & Ateliers Innovants',
    location: 'Full-Stack Modern Stack',
    description: 'Maîtrise de l\'écosystème PHP/Laravel et JavaScript/React. Conception et déploiement de plusieurs applications web complètes avec architectures MVC et consommation d\'APIs RESTful sécurisées.',
    skills: ['Laravel', 'PHP', 'React.js', 'JavaScript ES6+', 'REST API', 'MySQL'],
    type: 'experience',
    icon: 'Code2',
    glowColor: '#EC4899'
  },
  {
    id: 'step-3',
    year: '2023 — 2024',
    title: 'Projets Majeurs & Impact Numérique',
    subtitle: 'Création d\'Energy-Group, Les Coursiers du Coin, HYGIE+ & ARIYA',
    organization: 'Digital Builder & Projets d\'Envergure',
    location: 'Innovation & Tech for Good',
    description: 'Conception et développement de solutions de référence : la plateforme de monitoring énergétique Energy-Group, l\'application de logistique urbaine Les Coursiers du Coin, ainsi que les plateformes HYGIE+ et ARIYA.',
    skills: ['Energy-Group', 'Les Coursiers du Coin', 'HYGIE+', 'ARIYA', 'React.js', 'Laravel', 'WebSockets', 'Architecture'],
    type: 'projects',
    icon: 'Rocket',
    glowColor: '#06B6D4'
  },
  {
    id: 'step-4',
    year: '2024 — 2025',
    title: 'Expériences Professionnelles & Solutions Métiers',
    subtitle: 'Développeuse Full-Stack & Consultante Tech',
    organization: 'Collaborations Entreprises & Équipes Agiles',
    location: 'SaaS & Digital Transformation',
    description: 'Développement d\'outils métiers, refactorisation d\'applications legacy vers des micro-services modernes, collaboration avec des équipes pluridisciplinaires et optimisation des temps de réponse serveurs.',
    skills: ['TypeScript', 'CI/CD GitHub Actions', 'Docker', 'Performances Web', 'Gestion de Projet Agile'],
    type: 'experience',
    icon: 'Briefcase',
    glowColor: '#A855F7'
  },
  {
    id: 'step-5',
    year: '2025 — Présent',
    title: 'Spécialisation : Cybersécurité & Intelligence Artificielle',
    subtitle: 'Sécurisation des architectures web & Intégrations IA générative',
    organization: 'Laboratoire Tech & Certifications Avancées',
    location: 'Cybersécurité & R&D IA',
    description: 'Approfondissement des audits de sécurité web (OWASP, protection des données sensibles), création de la suite CYBER-SHIELD et intégration d\'agents intelligents et de modèles de langage (LLMs) dans les produits digitaux.',
    skills: ['Audits OWASP', 'Sécurité Web', 'LLM / Gemini API', 'Three.js 3D Web', 'Next-Gen UI'],
    type: 'specialization',
    icon: 'ShieldCheck',
    glowColor: '#10B981'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: 'Globe',
    title: 'Web Development',
    subtitle: 'Applications Web Modernes & Scalables',
    description: 'Création d\'applications web Single-Page (SPA) et plateformes SaaS performantes, fluides et responsives avec React.js, TypeScript et Laravel.',
    highlights: ['Architecture propre & modulaire', 'Temps de chargement < 1s', 'Optimisation SEO & Mobile first', 'Expérience utilisateur ultra-fluide'],
    glowColor: 'purple',
    badge: 'Core Expertise'
  },
  {
    id: 'ui-ux',
    icon: 'Palette',
    title: 'UI/UX & Creative Design',
    subtitle: 'Interfaces Immersives & Intuitives',
    description: 'Design d\'interfaces visuelles percutantes sur Figma, micro-interactions soignées, design systems cohérents et intégration 3D WebGL.',
    highlights: ['Design System complet', 'Animations 60 FPS', 'Prototypes interactifs Figma', 'Dark/Light mode sophistiqué'],
    glowColor: 'pink',
    badge: 'Visual Craft'
  },
  {
    id: 'backend-dev',
    icon: 'Server',
    title: 'Backend & API Architecture',
    subtitle: 'Moteurs Logiques Robustes & Sécurisés',
    description: 'Développement d\'APIs RESTful haute disponibilité avec Laravel et Node.js, modélisation de bases MySQL performantes et traitement asynchrone.',
    highlights: ['Bases relationnelles optimisées', 'Authentification JWT / OAuth2', 'Systèmes de paiement sécurisés', 'WebSockets temps réel'],
    glowColor: 'cyan',
    badge: 'High Reliability'
  },
  {
    id: 'cybersecurity',
    icon: 'ShieldCheck',
    title: 'Cybersecurity & Audits',
    subtitle: 'Protection des Données & Résilience',
    description: 'Audit de sécurité selon les normes OWASP, durcissement des applications web, sécurisation des flux de données sensibles et conformité.',
    highlights: ['Prévention failles XSS, SQLi, CSRF', 'En-têtes de sécurité renforcés', 'Chiffrement des données sensibles', 'Rapports d\'audit détaillés'],
    glowColor: 'emerald',
    badge: 'Trust & Shield'
  },
  {
    id: 'ai-integration',
    icon: 'Sparkles',
    title: 'AI & Smart Features',
    subtitle: 'Intelligence Artificielle Connectée',
    description: 'Intégration d\'agents intelligents et de modèles de langage (LLMs / Vision) dans vos applications pour automatiser et enrichir l\'expérience utilisateur.',
    highlights: ['Intégration APIs Gemini & OpenAI', 'Traitement intelligent de documents', 'Chatbots & assistants sur mesure', 'Workflows d\'IA générative'],
    glowColor: 'purple',
    badge: 'Future Tech'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-projects',
    value: 15,
    suffix: '+',
    label: 'Projets Conçus',
    description: 'Plateformes web, SaaS et solutions numériques livrées avec succès.',
    icon: 'Briefcase'
  },
  {
    id: 'stat-tech',
    value: 12,
    suffix: '+',
    label: 'Technologies Clés',
    description: 'Du frontend réactif au backend sécurisé en passant par l\'IA & la 3D.',
    icon: 'Code'
  },
  {
    id: 'stat-years',
    value: 4,
    suffix: '+',
    label: 'Années d\'Apprentissage & Pratique',
    description: 'Passion constante pour l\'artisanat du code et la veille technologique.',
    icon: 'Sparkles'
  },
  {
    id: 'stat-ideas',
    value: 999,
    suffix: '∞',
    prefix: '',
    label: 'Idées & Créativité Digitale',
    description: 'Toujours prête à repousser les limites des expériences interactives.',
    icon: 'Zap'
  }
];
