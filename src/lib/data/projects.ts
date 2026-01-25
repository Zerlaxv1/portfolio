import type { Skill } from './skills';
import type { Component } from 'svelte';

export type ProjectFeature = {
  text: string;
  icon: Component;
};

export type Project = {
  slug: string;
  title: string;
  short: string;
  description?: Component;
  cover?: string;
  github?: string;
  demo?: string;
  skills?: Skill[];
  features?: ProjectFeature[];
  screenshots?: { url: string; caption: string }[];
  date?: Date;
  status?: 'En cours' | 'Terminé' | 'Archivé';
};

export const projects: Project[] = [
  {
    slug: 'portfolio-moderne',
    title: 'Portfolio Moderne',
    short: 'Site portfolio responsive avec SvelteKit et thème dark/light.',
    cover: '/images/portfolio-cover.jpg',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
    skills: [], // À remplir avec getSkill('sveltekit'), etc.
    features: [], // À remplir avec { text: '...', icon: IconComponent }
    screenshots: [
      { url: '/images/portfolio-home.jpg', caption: "Page d'accueil avec hero section" },
      { url: '/images/portfolio-projects.jpg', caption: 'Grille de projets responsive' },
      { url: '/images/portfolio-dark.jpg', caption: 'Mode dark avec transitions douces' }
    ],
    date: new Date('2026-01-26'),
    status: 'Terminé'
  }
];
