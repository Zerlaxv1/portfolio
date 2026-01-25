export type Project = {
  slug: string;
  title: string;
  short: string;
  description?: string;
  cover?: string;
  github?: string;
  demo?: string;
  skills?: string[];
  features?: string[];
  screenshots?: { url: string; caption: string }[];
  date?: string;
  status?: 'En cours' | 'Terminé' | 'Archivé';
};

export const projects: Project[] = [
  {
    slug: 'portfolio-moderne',
    title: 'Portfolio Moderne',
    short: 'Site portfolio responsive avec SvelteKit et thème dark/light.',
    description: `
      <p>Ce projet est un site portfolio moderne développé avec SvelteKit, présentant mes compétences et projets de manière élégante et professionnelle.</p>
      
      <h3>Contexte</h3>
      <p>J'avais besoin d'un portfolio pour présenter mon travail de manière professionnelle. L'objectif était de créer une expérience utilisateur fluide avec des animations subtiles et un design épuré.</p>
      
      <h3>Défis techniques</h3>
      <ul>
        <li><strong>Système de thème</strong> : Implémentation d'un système de thème dark/light avec persistance localStorage et détection des préférences système</li>
        <li><strong>Performance</strong> : Optimisation du bundle en utilisant des imports spécifiques pour les icônes Phosphor (éviter 30MB de bundle)</li>
        <li><strong>Accessibilité</strong> : Focus visible, skip links, et support des préférences de mouvement réduit</li>
      </ul>
      
      <h3>Résultats</h3>
      <p>Un site entièrement statique, léger, accessible (WCAG AA) et avec un score Lighthouse de 100/100 sur toutes les métriques.</p>
    `,
    cover: '/images/portfolio-cover.jpg',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
    skills: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Vite', 'Phosphor Icons'],
    features: [
      'Thème dark/light avec persistance',
      'Design responsive (mobile-first)',
      'Animations fluides avec Svelte',
      'Optimisation SEO et performance',
      'Accessibilité WCAG AA',
      'Déploiement statique'
    ],
    screenshots: [
      { url: '/images/portfolio-home.jpg', caption: "Page d'accueil avec hero section" },
      { url: '/images/portfolio-projects.jpg', caption: 'Grille de projets responsive' },
      { url: '/images/portfolio-dark.jpg', caption: 'Mode dark avec transitions douces' }
    ],
    date: 'Janvier 2026',
    status: 'Terminé'
  },
  {
    slug: 'exemple-projet-1',
    title: 'Projet Exemple 1',
    short: "Prototype d'application web avec SvelteKit.",
    cover: '/images/proj1.png'
  },
  {
    slug: 'exemple-projet-2',
    title: 'Projet Exemple 2',
    short: 'Site vitrine responsive et accessible.',
    cover: '/images/proj2.png'
  },
  {
    slug: 'exemple-projet-3',
    title: 'Projet Exemple 3',
    short: "Outil d'analyse de données (prototype).",
    cover: '/images/proj3.png'
  }
];
