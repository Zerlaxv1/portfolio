import type { Skill } from './skills';
import { getSkill } from './skills';
import type { Component } from 'svelte';
import PortfolioModerneDescription from '$lib/components/projects/PortfolioModerneDescription.svelte';
import BookletDescription from '$lib/components/projects/BookletDescription.svelte';
import MoonIcon from '~icons/ph/moon';
import DeviceMobileIcon from '~icons/ph/device-mobile';
import SparkleIcon from '~icons/ph/sparkle';
import RocketLaunchIcon from '~icons/ph/rocket-launch';
import EyeIcon from '~icons/ph/eye';
import CheckCircleIcon from '~icons/ph/check-circle';

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
	startDate?: Date;
	endDate?: Date;
	status?: 'En cours' | 'Terminé' | 'Archivé';
};

export const projects: Project[] = [
	{
		slug: 'portfolio-moderne',
		title: 'Portfolio Moderne',
		short: 'Site portfolio responsive avec SvelteKit et thème dark/light.',
		description: PortfolioModerneDescription,
		cover: '/images/portfolio-cover.jpg',
		github: 'https://github.com/Zerlaxv1/portfolio',
		demo: 'https://portfolio.example.com',
		skills: [
			getSkill('sveltekit'),
			getSkill('typescript'),
			getSkill('vite'),
			getSkill('phosphor')
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
		startDate: new Date('2025-12-01'),
		endDate: new Date('2026-01-26'),
		status: 'Terminé'
	},
	{
		slug: 'booklet',
		title: 'Booklet',
		description: BookletDescription,
		short: "Application d'apprentissage d'anglais ludique pour etudiants.",
		cover: '/images/booklet-cover.png',
		screenshots: [
			{ url: '/images/portfolio-home.jpg', caption: "Page d'accueil avec hero section" },
			{ url: '/images/portfolio-projects.jpg', caption: 'Grille de projets responsive' },
			{ url: '/images/portfolio-dark.jpg', caption: 'Mode dark avec transitions douces' }
		],
		skills: [
			getSkill('sveltekit'),
			getSkill('typescript'),
			getSkill('drizzle'),
			getSkill('postgres'),
			getSkill('phosphor'),
			getSkill('vite')
		].filter((skill): skill is Skill => skill !== undefined),
		startDate: new Date('2025-10-13'),
		status: 'Terminé'
	}
];
