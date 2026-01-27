import type { Skill } from './skills';
import { getSkill } from './skills';
import type { PNCompetence } from './pn-competences';
import { getPNCompetence } from './pn-competences';
import type { Component } from 'svelte';
import PortfolioModerneDescription from '$lib/components/projects/PortfolioModerneDescription.svelte';
import BookletDescription from '$lib/components/projects/BookletDescription.svelte';
import GestionImmoDescription from '$lib/components/projects/GestionImmoDescription.svelte';
import RugbyDescription from '$lib/components/projects/RugbyDescription.svelte';
import LaundryTrackerDescription from '$lib/components/projects/LaundryTrackerDescription.svelte';
import LeChatDescription from '$lib/components/projects/LeChatDescription.svelte';
import ProxyFTPDescription from '$lib/components/projects/ProxyFTPDescription.svelte';
import EncryptionCDescription from '$lib/components/projects/EncryptionCDescription.svelte';
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
	skills?: Skill[]; // Compétences techniques (TypeScript, Svelte, etc.)
	pnCompetences?: PNCompetence[]; // Compétences du Programme National
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
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser'),
			getPNCompetence('administrer'),
			getPNCompetence('conduire')
		].filter((comp): comp is PNCompetence => comp !== undefined),
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
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('gerer'),
			getPNCompetence('collaborer'),
			getPNCompetence('conduire')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		startDate: new Date('2025-10-13'),
		status: 'Terminé'
	},
	{
		slug: 'gestion-immobiliere',
		title: 'Gestion Immobilière',
		short: 'Application Java de gestion de portefeuille immobilier avec interface Swing.',
		description: GestionImmoDescription,
		skills: [
			getSkill('java'),
			getSkill('swing'),
			getSkill('sqlite'),
			getSkill('junit')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('gerer'),
			getPNCompetence('collaborer')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		startDate: new Date('2024-09-01'),
		endDate: new Date('2024-12-20'),
		status: 'Terminé'
	},
	{
		slug: 'rugby-manager',
		title: 'Rugby Manager',
		short: 'Application web PHP pour la gestion d’une équipe de rugby amateur.',
		description: RugbyDescription,
		skills: [
			getSkill('php'),
			getSkill('mysql'),
			getSkill('frankenui'),
			getSkill('html'),
			getSkill('css')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('gerer'),
			getPNCompetence('conduire')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		startDate: new Date('2024-02-01'),
		endDate: new Date('2024-05-30'),
		status: 'Terminé'
	},
	{
		slug: 'laundry-tracker',
		title: 'Laundry Tracker',
		short: 'Application mobile de suivi des machines à laver du campus IUT Paul Sabatier.',
		description: LaundryTrackerDescription,
		skills: [
			getSkill('dart'),
			getSkill('flutter')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('conduire'),
			getPNCompetence('collaborer')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		startDate: new Date('2025-03-01'),
		endDate: new Date('2025-06-15'),
		status: 'Terminé'
	},
	{
		slug: 'le-chat',
		title: 'Le Chat',
		short: 'Application de messagerie en temps réel avec channels et AJAX polling.',
		description: LeChatDescription,
		skills: [
			getSkill('php'),
			getSkill('mysql'),
			getSkill('javascript'),
			getSkill('html'),
			getSkill('css')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('gerer'),
			getPNCompetence('administrer'),
			getPNCompetence('conduire')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		endDate: new Date('2025-03-25'),
		status: 'Terminé'
	},
	{
		slug: 'proxy-ftp',
		title: 'Proxy FTP',
		short: 'Proxy FTP complet implémenté en C sans dépendances externes.',
		description: ProxyFTPDescription,
		skills: [
			getSkill('c')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('administrer'),
			getPNCompetence('conduire')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		endDate: new Date('2025-01-16'),
		status: 'Terminé'
	},
	{
		slug: 'encryption-c',
		title: 'Chiffrement César & Vigenère',
		short: 'Implémentation en C des algorithmes de chiffrement classiques.',
		description: EncryptionCDescription,
		skills: [
			getSkill('c')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser')
		].filter((comp): comp is PNCompetence => comp !== undefined),
		endDate: new Date('2024-05-26'),
		status: 'Terminé'
	}
];
