<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Application mobile développée pour le campus de Toulouse - IUT 3 Paul Sabatier. 
		Ce projet vise à améliorer l'expérience des étudiants en leur permettant de suivre 
		en temps réel la disponibilité des machines à laver du campus.
	</p>

	<h2>Problématique</h2>
	<p>
		Les étudiants ne savaient pas si les machines à laver étaient disponibles avant de 
		se déplacer à la laverie, ce qui générait des déplacements inutiles et des files d'attente. 
		L'objectif était de créer une solution mobile simple et efficace.
	</p>

	<h2>Architecture technique</h2>
	<p>
		L'application mobile a été développée avec Flutter et Dart, offrant une expérience 
		native sur iOS et Android. Elle consomme une API REST externe pour récupérer les 
		données en temps réel sans nécessiter de base de données locale.
	</p>

	<h2>Réalisations techniques</h2>
	<ul>
		<li>Développement d'une application mobile multiplateforme avec Flutter / Dart</li>
		<li>Consommation d'une API REST pour la récupération des données</li>
		<li>Interface utilisateur intuitive et responsive</li>
		<li>Système de rafraîchissement en temps réel</li>
		<li>Notifications push pour alerter les utilisateurs</li>
		<li>Gestion de l'état de l'application avec les patterns Flutter</li>
	</ul>

	<h2>Fonctionnalités principales</h2>
	<ul>
		<li>Visualisation en temps réel de l'état des machines (libre, occupée, temps restant)</li>
		<li>Système de réservation de créneaux horaires</li>
		<li>Historique des utilisations (stocké côté serveur via l'API)</li>
		<li>Notifications de fin de cycle</li>
		<li>Interface adaptée iOS et Android</li>
		<li>Rafraîchissement automatique des statuts</li>
	</ul>

	<h2>Impact</h2>
	<p>
		L'application a permis de réduire significativement les temps d'attente et d'améliorer 
		l'organisation de l'accès aux machines. Elle illustre ma capacité à identifier un besoin 
		concret, à concevoir une architecture client léger et à intégrer efficacement une API externe.
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
