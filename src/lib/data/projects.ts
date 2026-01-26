import type { Skill, getSkill } from './skills';
import { getSkill as _getSkill } from './skills';
import type { Component } from 'svelte';
import PortfolioModerneDescription from '$lib/components/projects/PortfolioModerneDescription.svelte';
import MoonIcon from 'phosphor-svelte/lib/Moon';
import DeviceMobileIcon from 'phosphor-svelte/lib/DeviceMobile';
import SparkleIcon from 'phosphor-svelte/lib/Sparkle';
import RocketLaunchIcon from 'phosphor-svelte/lib/RocketLaunch';
import EyeIcon from 'phosphor-svelte/lib/Eye';
import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircle';

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
		description: PortfolioModerneDescription,
		cover: '/images/portfolio-cover.jpg',
		github: 'https://github.com/username/portfolio',
		demo: 'https://portfolio.example.com',
		skills: [
			_getSkill('sveltekit'),
			_getSkill('typescript'),
			_getSkill('tailwind'),
			_getSkill('vite'),
			_getSkill('phosphor')
		].filter((skill): skill is Skill => skill !== undefined),
		features: [
			{ text: 'Thème dark/light avec persistance', icon: MoonIcon },
			{ text: 'Design responsive (mobile-first)', icon: DeviceMobileIcon },
			{ text: 'Animations fluides avec Svelte', icon: SparkleIcon },
			{ text: 'Optimisation SEO et performance', icon: RocketLaunchIcon },
			{ text: 'Accessibilité WCAG AA', icon: EyeIcon },
			{ text: 'Déploiement statique', icon: CheckCircleIcon }
		],
		screenshots: [
			{ url: '/images/portfolio-home.jpg', caption: "Page d'accueil avec hero section" },
			{ url: '/images/portfolio-projects.jpg', caption: 'Grille de projets responsive' },
			{ url: '/images/portfolio-dark.jpg', caption: 'Mode dark avec transitions douces' }
		],
		date: new Date('2026-01-26'),
		status: 'Terminé'
	}
];
