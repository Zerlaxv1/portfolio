<div class="project-content">
	<p>
		Ce projet est un site pour apprendre l'anglais au étudiants de 1er année au BUT Informatique.
	</p>

	<h3>Contexte</h3>
	<p>
		ce site web avait pour but de remplacer l'application exsitante qui est bassé sur 
        <a href="https://en.wikipedia.org/wiki/ToolBook">ToolBook</a> 
        qui n'est plus maintenu depuis 2012 et la personne chargé la maintenance de neuron n'était plus disponible.
	</p>

	<h3>Défis techniques</h3>
	<ul>
		<li>
			<strong>Système de thème</strong> : Implémentation d'un système de thème dark/light avec persistance
			localStorage et détection des préférences système
		</li>
		<li>
			<strong>Performance</strong> : Optimisation du bundle en utilisant des imports spécifiques pour
			les icônes Phosphor (éviter 30MB de bundle)
		</li>
		<li>
			<strong>Accessibilité</strong> : Focus visible, skip links, et support des préférences de mouvement
			réduit
		</li>
	</ul>

	<h3>Résultats</h3>
	<p>
		Un site entièrement statique, léger, accessible (WCAG AA) et avec un score Lighthouse de 100/100
		sur toutes les métriques.
	</p>
</div>

<style>
	.project-content :global(h3) {
		font-size: 1.375rem;
		margin: 2rem 0 1rem;
		color: hsl(var(--primary-600));
	}

	.project-content :global(p) {
		margin-bottom: 1.25rem;
		line-height: 1.7;
		color: hsl(var(--text-800));
	}

	.project-content :global(ul) {
		list-style: none;
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.project-content :global(li) {
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
		position: relative;
		line-height: 1.6;
	}

	.project-content :global(li::before) {
		content: '→';
		position: absolute;
		left: 0;
		color: hsl(var(--accent-600));
		font-weight: 700;
	}

	.project-content :global(strong) {
		color: hsl(var(--primary-700));
		font-weight: 600;
	}
</style>
