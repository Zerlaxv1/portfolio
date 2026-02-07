<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import ArrowRightIcon from '~icons/ph/arrow-right';
	import GithubLogoIcon from '~icons/ph/github-logo';
	import GlobeIcon from '~icons/ph/globe';
	import CalendarIcon from '~icons/ph/calendar';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const project = $derived(data.project);

	const formattedDate = $derived.by(() => {
		if (!project.endDate) return null;

		const formatter = new Intl.DateTimeFormat('fr-FR', {
			year: 'numeric',
			month: 'long'
		});

		return formatter.format(project.endDate);
	});
</script>

<svelte:head>
	<title>{project.title} — Mon Portfolio</title>
	<meta name="description" content={project.short} />
</svelte:head>

<article class="project-detail">
	<div class="project-header">
		<h1>{project.title}</h1>
		<p class="project-tagline">{project.short}</p>

		{#if project.pnCompetences && project.pnCompetences.length > 0}
			<div class="competence-banner-wrapper">
				<span class="competence-section-label">Compétences PN</span>
				<div class="competence-badges">
					{#each project.pnCompetences as competence (competence.slug)}
						{@const Icon = competence.icon}
						<a
							href={resolve(`/competences/${competence.slug}`)}
							class="competence-badge"
							style={`--color: ${competence.color}`}
						>
							<Icon width="20" height="20" />
							<span>{competence.title}</span>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<div class="project-meta">
			{#if formattedDate}
				<span class="meta-item">
					<CalendarIcon width="16" height="16" class="meta-icon" />
					{formattedDate}
				</span>
			{/if}
			{#if project.status}
				<span class="meta-item status" class:status-complete={project.status === 'Terminé'}>
					{project.status}
				</span>
			{/if}
		</div>

		<div class="project-actions">
			{#if project.github}
				<Button
					href={project.github}
					variant="primary"
					icon={GithubLogoIcon}
					target="_blank"
					rel="noopener noreferrer"
				>
					Code source
				</Button>
			{/if}
			{#if project.demo}
				<Button
					href={project.demo}
					variant="secondary"
					icon={GlobeIcon}
					target="_blank"
					rel="noopener noreferrer"
				>
					Voir la démo
				</Button>
			{/if}
		</div>
	</div>

	{#if project.cover}
		<div class="project-cover">
			<img src={project.cover} alt={`Aperçu de ${project.title}`} />
		</div>
	{/if}

	{#if project.skills && project.skills.length > 0}
		<section class="project-section">
			<h2>Technologies utilisées</h2>
			<div class="skills-list">
				{#each project.skills as skill (skill.id)}
					<SkillBadge {skill} />
				{/each}
			</div>
		</section>
	{/if}

	{#if project.description}
		{@const Description = project.description}
		<section class="project-section project-description">
			<h2>À propos du projet</h2>
			<Description />
		</section>
	{/if}

	{#if project.features && project.features.length > 0}
		<section class="project-section">
			<h2>Fonctionnalités principales</h2>
			<ul class="features-list">
				{#each project.features as feature (feature.text)}
					{@const Icon = feature.icon}
					<li>
						<Icon width="18" height="18" class="feature-icon" />
						{feature.text}
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if project.screenshots && project.screenshots.length > 0}
		<section class="project-section">
			<h2>Captures d'écran</h2>
			<div class="screenshots-grid">
				{#each project.screenshots as screenshot (screenshot.component)}
					<figure class="screenshot-item">
						<img src={screenshot.component} alt={screenshot.caption} />
						<figcaption>{screenshot.caption}</figcaption>
					</figure>
				{/each}
			</div>
		</section>
	{/if}

	<div class="project-footer">
		<Button
			href={resolve('/projets')}
			variant="secondary"
			icon={ArrowRightIcon}
			iconPosition="left"
		>
			Retour aux projets
		</Button>
	</div>
</article>

<style>
	.project-detail {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.project-header {
		margin-bottom: 3rem;
	}

	.project-header h1 {
		margin-bottom: 1rem;
		font-size: clamp(2rem, 5vw, 3rem);
	}

	.project-tagline {
		font-size: 1.25rem;
		color: hsl(var(--text-700));
		margin-bottom: 2rem;
	}

	.competence-banner-wrapper {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.competence-section-label {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: hsl(var(--text-600));
	}

	.competence-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.competence-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		border-radius: 999px;
		background: hsl(var(--color) / 0.12);
		border: 1px solid hsl(var(--color) / 0.3);
		color: hsl(var(--color));
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.competence-badge:hover {
		background: hsl(var(--color) / 0.2);
		transform: translateY(-2px);
		box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
	}

	.competence-badge :global(svg) {
		flex-shrink: 0;
	}

	.project-meta {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.meta-item {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 8px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.status {
		color: hsl(var(--text-700));
	}

	.status-complete {
		background: hsl(var(--accent-50));
		color: hsl(var(--accent-700));
		border-color: hsl(var(--accent-200));
	}

	.project-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.project-cover {
		margin-bottom: 3rem;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
		max-height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: hsl(var(--background-100));
	}

	.project-cover img {
		width: 100%;
		height: 100%;
		max-height: 500px;
		object-fit: contain;
		display: block;
	}

	.project-section {
		margin-bottom: 3rem;
	}

	.project-section h2 {
		margin-bottom: 1.5rem;
		font-size: 1.75rem;
		color: hsl(var(--primary-700));
	}

	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.features-list {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	.features-list li {
		padding: 1rem 1.25rem;
		padding-left: 3rem;
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 10px;
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.features-list li :global(.feature-icon) {
		position: absolute;
		left: 1rem;
		color: hsl(var(--accent-600));
	}

	.screenshots-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.screenshot-item {
		margin: 0;
	}

	.screenshot-item img {
		width: 100%;
		height: auto;
		border-radius: 12px;
		border: 1px solid hsl(var(--text-950) / 0.08);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		transition: transform 0.3s ease;
	}

	.screenshot-item img:hover {
		transform: scale(1.02);
	}

	.screenshot-item figcaption {
		margin-top: 0.75rem;
		text-align: center;
		color: hsl(var(--text-700));
		font-size: 0.9rem;
	}

	.project-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid hsl(var(--text-950) / 0.08);
	}

	@media (max-width: 768px) {
		.screenshots-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.screenshot-item img {
			transition: none;
		}

		.screenshot-item img:hover {
			transform: none;
		}
	}
</style>
