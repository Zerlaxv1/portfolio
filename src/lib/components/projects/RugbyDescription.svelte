<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Application web développée en deux phases dans le cadre de la ressource R3.01. 
		Ce projet illustre l'évolution d'une application monolithique vers une architecture 
		client-serveur moderne avec séparation des responsabilités.
	</p>

	<h2>Évolution du projet en 2 temps</h2>
	
	<h3>Phase 1 : Application MVC monolithique (R3.01)</h3>
	<p>
		Dans un premier temps, l'application a été développée selon le pattern MVC (Modèle-Vue-Contrôleur) 
		en une seule base de code. Cette architecture permettait de gérer les joueurs, les entraînements 
		et les matchs via une interface web classique générée côté serveur.
	</p>
	<ul>
		<li>Architecture MVC avec PHP</li>
		<li>Base de données MySQL pour la persistance</li>
		<li>Génération de vues HTML côté serveur</li>
		<li>Gestion complète des opérations CRUD</li>
	</ul>

	<h3>Phase 2 : Séparation UI / API REST</h3>
	<p>
		Dans un second temps, le projet a été refactoré pour séparer l'interface utilisateur 
		d'une API REST. Cette évolution a permis d'améliorer la maintenabilité et d'ouvrir 
		la possibilité d'utiliser l'API depuis différents clients.
	</p>
	<ul>
		<li>Développement d'une API REST en PHP (endpoints JSON)</li>
		<li>Refonte de l'interface avec FrankenUI pour un design moderne</li>
		<li>Communication client-serveur via requêtes AJAX</li>
		<li>Séparation claire des responsabilités (front-end / back-end)</li>
		<li>Amélioration de l'expérience utilisateur (interface réactive)</li>
	</ul>

	<h2>Fonctionnalités principales</h2>
	<ul>
		<li>Gestion des fiches joueurs (informations personnelles, postes, historique)</li>
		<li>Planning des entraînements et des matchs</li>
		<li>Suivi des présences et des performances</li>
		<li>Tableau de bord avec statistiques globales</li>
		<li>Système d'authentification sécurisé</li>
	</ul>

	<h2>Compétences développées</h2>
	<p>
		Ce projet m'a permis de comprendre l'évolution des architectures web et les avantages 
		de la séparation front-end / back-end. J'ai acquis des compétences en conception d'API REST, 
		en refactoring et en utilisation de frameworks UI modernes.
	</p>
</div>

<style>
	.project-description {
		line-height: 1.8;
	}

	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: hsl(var(--primary-700));
	}

	h3 {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: hsl(var(--primary-600));
		font-size: 1.125rem;
	}

	p {
		margin-bottom: 1rem;
		color: hsl(var(--text-700));
	}

	ul {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
		color: hsl(var(--text-700));
	}
</style>
