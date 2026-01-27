<script lang="ts">
	import { resolve } from '$app/paths';
	import { pnCompetences } from '$lib/data/pn-competences';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// Compter les projets par compétence
	function getProjectCount(compSlug: string) {
		return projects.filter((p) => p.pnCompetence?.slug === compSlug).length;
	}
</script>

<svelte:head>
	<title>Compétences — Mon Portfolio</title>
	<meta
		name="description"
		content="Découvrez mes compétences professionnelles en développement informatique"
	/>
</svelte:head>

<div class="competences-page" class:mounted>
	<section class="hero-section">
		<h1>Mes Compétences</h1>
		<p class="hero-description">
			Découvrez comment j'ai développé et appliqué mes compétences professionnelles à travers mes
			différents projets et expériences.
		</p>
	</section>

	<section class="competences-grid">
		{#each pnCompetences as competence, i}
			{@const projectCount = getProjectCount(competence.slug)}
			{@const Icon = competence.icon}
			<a
				href={resolve(`/competences/${competence.slug}`)}
				class="competence-card"
				style="--delay: {i * 0.1}s; --color: {competence.color}"
			>
				<div class="competence-icon">
					<Icon width="32" height="32" />
				</div>
				<div class="competence-content">
					<h2>{competence.shortTitle}</h2>
					<p class="competence-description">{competence.description}</p>
					<div class="competence-meta">
						<span class="project-count">
							{projectCount}
							{projectCount > 1 ? 'projets' : 'projet'}
						</span>
					</div>
				</div>
			</a>
		{/each}
	</section>
</div>

<style>
	.competences-page {
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.competences-page.mounted {
		opacity: 1;
	}

	.hero-section {
		text-align: center;
		padding: 3rem 0 4rem;
		animation: fadeUp 0.8s ease backwards;
	}

	.hero-section h1 {
		margin-bottom: 1rem;
	}

	.hero-description {
		font-size: 1.25rem;
		color: hsl(var(--text-700));
		max-width: 800px;
		margin: 0 auto;
	}

	.competences-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 2rem;
		padding-bottom: 4rem;
	}

	.competence-card {
		display: flex;
		gap: 1.5rem;
		background: hsl(var(--background-100));
		border: 2px solid hsl(var(--text-950) / 0.06);
		border-radius: 16px;
		padding: 2rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		opacity: 0;
		animation: fadeUp 0.6s ease forwards;
		animation-delay: var(--delay);
		position: relative;
		overflow: hidden;
	}

	.competence-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: hsl(var(--color));
		transform: scaleY(0);
		transition: transform 0.3s ease;
		transform-origin: top;
	}

	.competence-card:hover {
		border-color: hsl(var(--color));
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
		transform: translateY(-4px);
	}

	.competence-card:hover::before {
		transform: scaleY(1);
	}

	.competence-icon {
		flex-shrink: 0;
		width: 64px;
		height: 64px;
		border-radius: 12px;
		background: hsl(var(--color) / 0.1);
		color: hsl(var(--color));
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
	}

	.competence-card:hover .competence-icon {
		background: hsl(var(--color));
		color: white;
		transform: scale(1.1) rotate(5deg);
	}

	.competence-content {
		flex: 1;
	}

	.competence-content h2 {
		margin: 0 0 0.75rem;
		font-size: 1.5rem;
		color: hsl(var(--text-900));
	}

	.competence-description {
		color: hsl(var(--text-700));
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.competence-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.project-count {
		font-size: 0.875rem;
		font-weight: 600;
		color: hsl(var(--color));
		background: hsl(var(--color) / 0.1);
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.competences-grid {
			grid-template-columns: 1fr;
		}

		.competence-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.competences-page,
		.competence-card {
			animation: none;
			opacity: 1;
		}

		.hero-section {
			animation: none;
		}
	}
</style>
