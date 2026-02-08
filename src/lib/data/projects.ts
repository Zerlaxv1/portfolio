import type { Skill } from './skills';
import { getSkill } from './skills';
import type { PNCompetence } from './pn-competences';
import { getPNCompetence } from './pn-competences';
import type { Component } from 'svelte';
import PortfolioModerneDescription from '$lib/components/projects/PortfolioModerneDescription.svelte';
import BookletDescription from '$lib/components/projects/BookletDescription.svelte';
import GestionImmoDescription from '$lib/components/projects/GestionImmoDescription.svelte';
import RugbyMonolithDescription from '$lib/components/projects/RugbyMonolithDescription.svelte';
import RugbyRewriteDescription from '$lib/components/projects/RugbyRewriteDescription.svelte';
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
import bookletScreenshotExercice from '$lib/assets/images/booklet/booklet ex.webp';
import bookletScreenshotHome from '$lib/assets/images/booklet/booklet home.webp';
import bookletScreenshotProf from '$lib/assets/images/booklet/booklet prof.webp';
import bookletLogo from '$lib/assets/images/booklet/bookletlogo.svg';
import LeChatImage from '$lib/assets/images/le-chat/image.png';
import LeChatImage2 from '$lib/assets/images/le-chat/image2.png';
import RugbyImage from '$lib/assets/images/rugby/image1.png';
import RugbyImage2 from '$lib/assets/images/rugby/image2.png';
import FromageImage from '$lib/assets/images/fromage/image.png';
import BiensImmoImage from '$lib/assets/images/biens-immobilié/image.png';

export type ProjectFeature = {
	text: string;
	icon: Component;
};

export type ProjectScreenshot = {
	component: string;
	caption: string;
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
	screenshots?: ProjectScreenshot[];
	endDate?: Date;
	status?: 'En cours' | 'Terminé' | 'Archivé';
};

const allProjects: Project[] = [
	{
		slug: 'fromages-panier',
		title: 'Panier & Facture Fromages',
		short:
			"Application Swing de panier et facture pour fromages avec frais de livraison dynamiques.",
		cover: FromageImage,
		skills: [getSkill('java'), getSkill('swing')].filter(
			(skill): skill is Skill => skill !== undefined
		),
		pnCompetences: [getPNCompetence('realiser')].filter(
			(competence): competence is PNCompetence => competence !== undefined
		),
		status: 'Terminé'
	},
	{
		slug: 'portfolio',
		title: 'Portfolio',
		short: 'Site portfolio responsive avec SvelteKit et thème dark/light.',
		description: PortfolioModerneDescription,
		github: 'https://github.com/Zerlaxv1/portfolio',
		demo: 'https://zerlaxv1.github.io/portfolio/',
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
			getPNCompetence('gerer'),
			getPNCompetence('conduire'),
			getPNCompetence('collaborer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		features: [
			{ text: 'Thème dark/light avec persistance', icon: MoonIcon },
			{ text: 'Design responsive (mobile-first)', icon: DeviceMobileIcon },
			{ text: 'Animations fluides avec Svelte', icon: SparkleIcon },
			{ text: 'Optimisation SEO et performance', icon: RocketLaunchIcon },
			{ text: 'Accessibilité WCAG AA', icon: EyeIcon },
			{ text: 'Déploiement statique', icon: CheckCircleIcon }
		],
		endDate: new Date('2026-01-26'),
		status: 'Terminé'
	},
	{
		slug: 'booklet',
		title: 'Booklet',
		description: BookletDescription,
		short: "Application d'apprentissage d'anglais ludique pour etudiants.",
		cover: bookletLogo,
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
			getPNCompetence('optimiser'),
			getPNCompetence('collaborer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		screenshots: [
			{ component: bookletScreenshotExercice, caption: "Page d'exercice interactif" },
			{ component: bookletScreenshotHome, caption: "Page d'accueil de l'application" },
			{ component: bookletScreenshotProf, caption: "Espace professeur pour gérer les élèves" }
		],
		endDate: new Date('2026-01-01'),
		status: 'Terminé'
	},
	{
		slug: 'gestion-immobiliere',
		title: 'Gestion Immobilière',
		short: 'Application Java de gestion de portefeuille immobilier avec interface Swing.',
		description: GestionImmoDescription,
		cover: BiensImmoImage,
		skills: [getSkill('java'), getSkill('swing'), getSkill('sqlite'), getSkill('junit')].filter(
			(skill): skill is Skill => skill !== undefined
		),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser'),
			getPNCompetence('administrer'),
			getPNCompetence('gerer'),
			getPNCompetence('conduire'),
			getPNCompetence('collaborer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		endDate: new Date('2024-12-20'),
		status: 'Terminé'
	},
	{
		slug: 'rugby-manager',
		title: 'Rugby Manager',
		short: "Mini-projet PHP monolithique pour choisir un sport et gerer une equipe.",
		description: RugbyMonolithDescription,
		skills: [
			getSkill('php'),
			getSkill('mysql'),
			getSkill('frankenui'),
			getSkill('html'),
			getSkill('css')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser'),
			getPNCompetence('administrer'),
			getPNCompetence('gerer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		endDate: new Date('2024-11-30'),
		screenshots: [
			{ component: RugbyImage, caption: 'Page d’accueil avec choix du sport' },
			{ component: RugbyImage2, caption: 'Interface de gestion d’équipe' }
		],
		status: 'Terminé'
	},
	{
		slug: 'rugby-manager-rewrite',
		title: 'Rugby Manager Refonte (Web + API)',
		short: 'Refonte en deux depots : front MVC et API REST securisee par JWT.',
		description: RugbyRewriteDescription,
		skills: [
			getSkill('php'),
			getSkill('mysql'),
			getSkill('frankenui'),
			getSkill('html'),
			getSkill('css')
		].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser'),
			getPNCompetence('administrer'),
			getPNCompetence('gerer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		endDate: new Date('2025-03-31'),
		status: 'Terminé'
	},
	{
		slug: 'laundry-tracker',
		title: 'LaundrIUT',
		short: 'Application mobile de suivi des machines à laver du campus IUT Paul Sabatier.',
		description: LaundryTrackerDescription,
		skills: [getSkill('dart'), getSkill('flutter')].filter(
			(skill): skill is Skill => skill !== undefined
		),
		pnCompetences: [
			getPNCompetence('realiser'),
			getPNCompetence('optimiser'),
			getPNCompetence('gerer'),
			getPNCompetence('conduire')
		].filter((competence): competence is PNCompetence => competence !== undefined),
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
			getPNCompetence('optimiser'),
			getPNCompetence('gerer'),
			getPNCompetence('conduire')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		endDate: new Date('2025-03-25'),
		status: 'Terminé',
		screenshots: [
			{ component: LeChatImage, caption: 'Interface de messagerie avec des messages' },
			{ component: LeChatImage2, caption: 'Interface avec liste des channels' }
		]
	},
	{
		slug: 'proxy-ftp',
		title: 'Proxy FTP',
		short: 'Proxy FTP complet implémenté en C sans dépendances externes.',
		description: ProxyFTPDescription,
		skills: [getSkill('c')].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [getPNCompetence('optimiser'),
						getPNCompetence('administrer')
		].filter(
			(competence): competence is PNCompetence => competence !== undefined
		),
		endDate: new Date('2025-01-16'),
		status: 'Terminé'
	},
	{
		slug: 'encryption-c',
		title: 'Chiffrement César & Vigenère',
		short: 'Implémentation en C des algorithmes de chiffrement classiques.',
		description: EncryptionCDescription,
		skills: [getSkill('c')].filter((skill): skill is Skill => skill !== undefined),
		pnCompetences: [
			getPNCompetence('optimiser'),
			getPNCompetence('administrer')
		].filter((competence): competence is PNCompetence => competence !== undefined),
		endDate: new Date('2024-05-26'),
		status: 'Terminé'
	}
];

// Trier les projets par date de fin (plus récent en premier)
export const projects = allProjects.sort((a, b) => {
	const dateA = a.endDate?.getTime() ?? 0;
	const dateB = b.endDate?.getTime() ?? 0;
	return dateB - dateA;
});
