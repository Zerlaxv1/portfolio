<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Projet réalisé dans le cadre de la ressource R4.A10, visant à développer une application 
		de messagerie en temps réel. L'objectif était de créer un système permettant à plusieurs 
		utilisateurs de communiquer via différents channels.
	</p>

	<h2>Architecture technique</h2>
	<p>
		L'application utilise une architecture client-serveur avec PHP côté back-end et une 
		base de données MySQL hébergée sur ALWAYS-DATA. Pour simuler le temps réel, la technique 
		de l'AJAX polling a été mise en place, permettant au client de récupérer régulièrement 
		les nouveaux messages sans recharger la page.
	</p>

	<h2>Réalisations techniques</h2>
	<ul>
		<li>Développement d'une API REST en PHP pour la gestion des messages et channels</li>
		<li>Base de données MySQL cloud hébergée sur ALWAYS-DATA</li>
		<li>Implémentation de l'AJAX polling pour la récupération temps réel des messages</li>
		<li>Système d'authentification et gestion des utilisateurs</li>
		<li>Création et gestion de multiples channels de discussion</li>
		<li>Interface utilisateur dynamique sans rechargement de page</li>
	</ul>

	<h2>Fonctionnalités principales</h2>
	<ul>
		<li>Inscription et connexion des utilisateurs</li>
		<li>Création de channels thématiques publics ou privés</li>
		<li>Envoi et réception de messages en temps réel via polling</li>
		<li>Navigation entre les différents channels</li>
		<li>Historique des messages persisté en base de données</li>
		<li>Interface responsive et ergonomique</li>
	</ul>

	<h2>Défis techniques</h2>
	<p>
		La principale contrainte était de gérer la communication temps réel sans utiliser de 
		WebSockets. L'AJAX polling a été choisi comme solution, avec optimisation de la fréquence 
		des requêtes pour équilibrer réactivité et charge serveur. L'hébergement cloud sur ALWAYS-DATA 
		a également nécessité une attention particulière à la configuration et aux performances.
	</p>

	<h2>Compétences développées</h2>
	<p>
		Ce projet m'a permis de maîtriser les techniques de communication asynchrone, 
		la gestion d'une base de données cloud, et l'optimisation des interactions client-serveur. 
		J'ai également appris à concevoir une architecture scalable pour une application en temps réel.
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
