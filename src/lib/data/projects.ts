export type Project = {
  slug: string;
  title: string;
  short: string;
  cover?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: 'exemple-projet-1',
    title: 'Projet Exemple 1',
    short: 'Prototype d’application web avec SvelteKit.',
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
    short: 'Outil d’analyse de données (prototype).',
    cover: '/images/proj3.png'
  }
];
