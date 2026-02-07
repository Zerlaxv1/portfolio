<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Refonte du projet Rugby Manager en deux depots distincts : un front web en MVC et
		une API REST dediee. L'objectif etait d'ameliorer l'architecture et la maintenabilite
		du produit.
	</p>

	<h2>Architecture</h2>
	<ul>
		<li>Front web MVC (interface, vues, logique presentation)</li>
		<li>API REST "sport-api" avec router et endpoints JSON</li>
		<li>Authentification par JWT (tokens)</li>
		<li>Base de donnees MySQL hebergee sur AlwaysData</li>
		<li>Communication client-serveur via requetes AJAX</li>
	</ul>

	<h2>Fonctionnalites principales</h2>
	<ul>
		<li>Gestion des effectifs, matchs et entrainements</li>
		<li>Suivi des presences et statistiques d'equipe</li>
		<li>Gestion des acces et securisation des routes</li>
		<li>API reutilisable pour d'autres clients</li>
	</ul>

	<h2>Apprentissages</h2>
	<p>
		Cette refonte m'a permis de mieux comprendre la separation front/back, la conception
		d'une API REST, la securisation via JWT et la mise en place d'une base de donnees
		environnement cloud.
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