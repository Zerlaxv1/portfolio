import type { Component } from 'svelte';
import CodeIcon from '~icons/ph/code';
import SparkleIcon from '~icons/ph/sparkle';
import DatabaseIcon from '~icons/ph/database';
import ChartLineIcon from '~icons/ph/chart-line';
import UsersIcon from '~icons/ph/users';
import RocketLaunchIcon from '~icons/ph/rocket-launch';

export type PNCompetence = {
	slug: string;
	title: string;
	shortTitle: string; // Titre court pour le menu
	description: string;
	icon: Component;
	color: string; // Couleur thématique (HSL)
	exemples: string[]; // Exemples concrets de mise en œuvre
};

export const pnCompetences: PNCompetence[] = [
	{
		slug: 'realiser',
		title: 'Réaliser un développement d\'application',
		shortTitle: 'Réaliser',
		description:
			'Développer — c\'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
		icon: CodeIcon,
		color: '0 75% 45%', // Rouge
		exemples: [
			'Développement d\'applications web (SvelteKit, TypeScript, PHP)',
			'Création d\'applications de bureau (Java Swing, SQLite)',
			'Développement mobile (Flutter, Dart)',
			'Tests unitaires et validation du code (JUnit, tests automatiques)',
			'Conception d\'interfaces utilisateur accessibles et intuitives'
		]
	},
	{
		slug: 'optimiser',
		title: 'Optimiser des applications informatiques',
		shortTitle: 'Optimiser',
		description:
			'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources.',
		icon: SparkleIcon,
		color: '25 85% 60%', // Orange
		exemples: [
			'Optimisation des performances frontend (bundle size, lazy loading)',
			'Amélioration de l\'architecture logicielle (patterns MVC, organisation du code)',
			'Optimisation des requêtes et de l\'accès aux bases de données',
			'Réduction du temps de réponse et de la consommation de ressources',
			'Analyse et amélioration de la qualité du code'
		]
	},
	{
		slug: 'administrer',
		title: 'Administrer des systèmes informatiques communicants',
		shortTitle: 'Administrer',
		description:
			'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d\'une organisation.',
		icon: DatabaseIcon,
		color: '48 90% 50%', // Jaune
		exemples: [
			'Déploiement d\'applications (Vercel, GitHub Pages, serveurs)',
			'Configuration et administration de bases de données (PostgreSQL, SQLite)',
			'Mise en place de pipelines CI/CD avec GitHub Actions',
			'Gestion des environnements de développement et production',
			'Sécurisation des applications et des données'
		]
	},
	{
		slug: 'gerer',
		title: 'Gérer des données de l\'information',
		shortTitle: 'Gérer',
		description:
			'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.',
		icon: ChartLineIcon,
		color: '120 45% 50%', // Vert
		exemples: [
			'Modélisation et conception de bases de données relationnelles',
			'Implémentation de systèmes CRUD (Create, Read, Update, Delete)',
			'Utilisation d\'ORM pour l\'abstraction des données (Drizzle)',
			'Gestion de la persistance avec SQLite, PostgreSQL',
			'Migrations de schémas et versioning de bases de données'
		]
	},
	{
		slug: 'conduire',
		title: 'Conduire un projet',
		shortTitle: 'Conduire',
		description:
			'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
		icon: RocketLaunchIcon,
		color: '220 80% 25%', // Bleu marine
		exemples: [
			'Analyse des besoins utilisateurs et spécifications fonctionnelles',
			'Planification et découpage de projets (sprints, jalons)',
			'Gestion de projets en méthode agile',
			'Suivi de l\'avancement et respect des délais',
			'Rédaction de documentation technique et utilisateur'
		]
	},
	{
		slug: 'collaborer',
		title: 'Travailler en équipe',
		shortTitle: 'Collaborer',
		description:
			'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
		icon: UsersIcon,
		color: '0 0% 15%', // Noir/Gris foncé
		exemples: [
			'Travail collaboratif en équipe sur des projets (gestion immobilière, rugby, tracking)',
			'Utilisation de Git pour le travail collaboratif (branches, pull requests)',
			'Communication régulière avec les membres de l\'\u00e9quipe',
			'Partage de connaissances et entraide',
			'Respect des conventions de code et des bonnes pratiques'
		]
	}
];

export function getPNCompetence(slug: string): PNCompetence | undefined {
	return pnCompetences.find((c) => c.slug === slug);
}
