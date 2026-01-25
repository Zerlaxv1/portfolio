import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Fonction pour détecter la préférence système
function getSystemTheme(): Theme {
  if (!browser) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Fonction pour charger le thème depuis localStorage ou système
function getInitialTheme(): Theme {
  if (!browser) return 'light';
  
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored) return stored;
  
  return getSystemTheme();
}

// Créer le store avec la valeur initiale
const themeStore = writable<Theme>(getInitialTheme());

// Fonction pour mettre à jour le thème
export const theme = {
  subscribe: themeStore.subscribe,
  toggle: () => {
    themeStore.update(current => {
      const newTheme = current === 'light' ? 'dark' : 'light';
      
      if (browser) {
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
      
      return newTheme;
    });
  },
  set: (value: Theme) => {
    themeStore.set(value);
    
    if (browser) {
      localStorage.setItem('theme', value);
      document.documentElement.classList.toggle('dark', value === 'dark');
    }
  },
  init: () => {
    if (browser) {
      const current = getInitialTheme();
      themeStore.set(current);
      document.documentElement.classList.toggle('dark', current === 'dark');
    }
  }
};
