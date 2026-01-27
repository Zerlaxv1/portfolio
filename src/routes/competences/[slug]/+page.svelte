<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import ArrowLeftIcon from '~icons/ph/arrow-left';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const competence = $derived(data.competence);
	const projects = $derived(data.projects);
</script>

<svelte:head>
	<title>{competence.title} — Compétences</title>
	<meta name="description" content={competence.description} />
</svelte:head>

<div class="competence-page">
	<div class="page-header">
		<Button
			href={resolve('/competences')}
			variant="secondary"
			icon={ArrowLeftIcon}
			iconPosition="left"
		>
			Retour aux compétences
		</Button>

		<div class="competence-hero" style="--color: {competence.color}">
			{#each [competence] as c}
				{@const Icon = c.icon}
				<div class="competence-icon-large">
					<Icon width="64" height="64" />
				</div>
			{/each}
			<div class="competence-info">
				<h1>{competence.title}</h1>
				<p class="competence-description">{competence.description}</p>
			</div>
		</div>
	</div>

	<section class="exemples-section">
		<h2>Mise en œuvre</h2>
		<ul class="exemples-list">
			{#each competence.exemples as exemple}
				<li>{exemple}</li>
			{/each}
		</ul>
	</section>

	{#if projects.length > 0}
		<section class="projects-section">
			<h2>Projets illustrant cette compétence</h2>
			<p class="section-description">
				Découvrez comment j'ai appliqué cette compétence dans mes différents projets.
			</p>

			<div class="projects-grid">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</section>
	{:else}
		<div class="empty-state">
			<p>Aucun projet n'illustre encore cette compétence.</p>
			<Button href={resolve('/projets')} variant="primary">Voir tous les projets</Button>
		</div>
	{/if}
</div>

<style>
	.competence-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.page-header {
		margin-bottom: 3rem;
	}

	.competence-hero {
		display: flex;
		gap: 2rem;
		margin-top: 2rem;
		padding: 3rem;
		background: linear-gradient(135deg, hsl(var(--color) / 0.05), hsl(var(--color) / 0.02));
		border: 2px solid hsl(var(--color) / 0.2);
		border-radius: 24px;
		position: relative;
		overflow: hidden;
	}

	.competence-hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: hsl(var(--color));
	}

	.competence-icon-large {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 120px;
		background: hsl(var(--color) / 0.15);
		color: hsl(var(--color));
		border-radius: 24px;
		flex-shrink: 0;
	}

	.competence-info h1 {
		margin: 0 0 1rem;
		font-size: 2.5rem;
		color: hsl(var(--text-900));
	}

	.competence-description {
		color: hsl(var(--text-700));
		font-size: 1.25rem;
		line-height: 1.7;
		margin: 0;
	}

	.exemples-section {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 16px;
		padding: 2rem;
		margin-bottom: 3rem;
	}

	.exemples-section h2 {
		margin: 0 0 1.5rem;
		font-size: 1.75rem;
	}

	.exemples-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 1rem;
	}

	.exemples-list li {
		padding-left: 2rem;
		position: relative;
		color: hsl(var(--text-800));
		line-height: 1.6;
	}

	.exemples-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: hsl(var(--color));
		font-weight: bold;
		font-size: 1.25rem;
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
		.competence-hero {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 2rem;
		}

		.competence-info h1 {
			font-size: 2rem;
		}

		.competence-icon-large {
			width: 96px;
			height: 96px;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
