<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import ArrowLeftIcon from '~icons/ph/arrow-left';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const skill = $derived(data.skill);
	const projects = $derived(data.projects);
</script>

<svelte:head>
	<title>{skill.name} — Compétences</title>
	<meta name="description" content="Projets utilisant {skill.name}" />
</svelte:head>

<div class="skill-projects-page">
	<div class="page-header">
		<Button href="/competences" variant="secondary" icon={ArrowLeftIcon} iconPosition="left">
			Retour aux compétences
		</Button>

		<div class="skill-header">
			{#each [skill] as s}
				{@const Icon = s.icon}
				<div class="skill-icon-large">
					<Icon width="48" height="48" />
				</div>
			{/each}
			<div class="skill-info">
				<h1>{skill.name}</h1>
				{#if skill.category}
					<p class="skill-category">{skill.category}</p>
				{/if}
			</div>
		</div>
	</div>

	{#if projects.length > 0}
		<section class="projects-section">
			<h2>Projets utilisant {skill.name}</h2>
			<p class="section-description">
				Découvrez les projets dans lesquels j'ai utilisé cette compétence.
			</p>

			<div class="projects-grid">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>
	{:else}
		<div class="empty-state">
			<p>Aucun projet n'utilise encore cette compétence.</p>
			<Button href="/projets" variant="primary">Voir tous les projets</Button>
		</div>
	{/if}
</div>

<style>
	.skill-projects-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.page-header {
		margin-bottom: 3rem;
	}

	.skill-header {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;
		padding: 2rem;
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 16px;
	}

	.skill-icon-large {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		background: hsl(var(--accent-50));
		color: hsl(var(--accent-700));
		border-radius: 16px;
		flex-shrink: 0;
	}

	.skill-info h1 {
		margin: 0 0 0.5rem;
		font-size: 2.5rem;
	}

	.skill-category {
		color: hsl(var(--text-600));
		font-size: 1.125rem;
		margin: 0;
	}

	.projects-section {
		margin-top: 4rem;
	}

	.projects-section h2 {
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	.section-description {
		color: hsl(var(--text-700));
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 16px;
		margin-top: 2rem;
	}

	.empty-state p {
		color: hsl(var(--text-600));
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.skill-header {
			flex-direction: column;
			text-align: center;
		}

		.skill-info h1 {
			font-size: 2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
