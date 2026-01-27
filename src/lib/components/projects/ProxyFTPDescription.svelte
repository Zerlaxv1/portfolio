<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Projet ambitieux de développement d'un proxy FTP complet en langage C, réalisé 
		entièrement sans dépendances externes. L'objectif était de comprendre en profondeur 
		le protocole FTP et la programmation réseau bas niveau.
	</p>

	<h2>Philosophie du projet</h2>
	<p>
		Ce projet a été conçu avec une contrainte forte : <strong>aucune bibliothèque tierce</strong>. 
		Toutes les fonctionnalités ont été implémentées from scratch, y compris la gestion des sockets, 
		le parsing du protocole FTP, et la gestion des connexions multiples. Cette approche a permis 
		une compréhension approfondie des mécanismes sous-jacents.
	</p>

	<h2>Réalisations techniques</h2>
	<ul>
		<li>Implémentation complète du protocole FTP (RFC 959) en C pur</li>
		<li>Gestion des sockets TCP/IP sans bibliothèques externes</li>
		<li>Support des modes actif et passif du protocole FTP</li>
		<li>Gestion des commandes FTP (USER, PASS, LIST, RETR, STOR, etc.)</li>
		<li>Proxy transparent entre client et serveur FTP</li>
		<li>Gestion de multiples connexions simultanées</li>
		<li>Parsing manuel des commandes et réponses FTP</li>
		<li>Gestion robuste des erreurs et des cas limites</li>
	</ul>

	<h2>Défis techniques</h2>
	<p>
		Sans dépendances, chaque aspect du proxy a dû être implémenté manuellement : 
		création et gestion des sockets, multiplexage des connexions, parsing du protocole, 
		gestion de la mémoire. Le protocole FTP, avec ses deux canaux (commande et données) 
		et ses modes actif/passif, a nécessité une attention particulière à l'architecture.
	</p>

	<h2>Architecture</h2>
	<ul>
		<li>Séparation claire entre canal de contrôle et canal de données</li>
		<li>Machine à états pour gérer les différentes phases de connexion</li>
		<li>Gestion manuelle de la mémoire (allocation/libération)</li>
		<li>Structure modulaire malgré l'absence de framework</li>
	</ul>

	<h2>Compétences développées</h2>
	<p>
		Ce projet m'a permis de développer une expertise en programmation système, 
		en gestion de la mémoire, et en protocoles réseau. J'ai acquis une compréhension 
		profonde du fonctionnement des communications réseau et de la rigueur nécessaire 
		en programmation C bas niveau.
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

	strong {
		color: hsl(var(--primary-700));
		font-weight: 700;
	}
</style>
