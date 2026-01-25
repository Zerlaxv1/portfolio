<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projets — Mon Portfolio</title>
	<meta name="description" content="Découvrez mes projets et réalisations en développement web" />
</svelte:head>

<div class="projects-page">
	<section class="projects-header">
		<h1>Mes Projets</h1>
		<p class="header-description">
			Découvrez mes réalisations et expériences en développement web. Chaque projet illustre
			l’application de compétences spécifiques acquises au fil de ma formation.
		</p>
	</section>

	<div class="projects-grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	{#if projects.length === 0}
		<div class="empty-state">
			<p>Aucun projet pour le moment. Revenez bientôt !</p>
		</div>
	{/if}
</div>

<style>
	.projects-page {
		max-width: 1200px;
		margin: 0 auto;
	}

	.projects-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.projects-header h1 {
		margin-bottom: 1rem;
	}

	.header-description {
		font-size: 1.125rem;
		color: hsl(var(--text-700));
		max-width: 70ch;
		margin: 0 auto;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		color: hsl(var(--text-600));
		font-size: 1.125rem;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
