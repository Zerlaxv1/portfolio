<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { resolve } from '$app/paths';
	import SkillBadge from './SkillBadge.svelte';

	export let project: Project;
</script>

<article class="project-card">
	<div class="card-header">
		<h3>{project.title}</h3>
	</div>

	<p class="card-description">{project.short}</p>

	{#if project.pnCompetences && project.pnCompetences.length > 0}
		<div class="card-competences">
			<span class="competences-label">Compétences :</span>
			<div class="competences-list">
				{#each project.pnCompetences as competence}
					{@const Icon = competence.icon}
					<a href={resolve(`/competences/${competence.slug}`)} class="competence-badge">
						<Icon width="14" height="14" />
						<span>{competence.shortTitle}</span>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	{#if project.skills && project.skills.length > 0}
		<div class="card-skills">
			{#each project.skills as skill}
				<SkillBadge {skill} size="sm" clickable={true} />
			{/each}
		</div>
	{/if}

	<div class="card-actions">
		{#if project.demo}
			<a class="btn-accent" href={project.demo} target="_blank" rel="noopener noreferrer">
				Voir la démo
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<path d="M15 3h6v6" />
					<path d="M10 14L21 3" />
				</svg>
			</a>
		{/if}
		<a href={resolve(`/projets/${project.slug}`)} class="link-details">
			Détails du projet
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				aria-hidden="true"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</article>

<style>
	.project-card {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.06);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		border-color: hsl(var(--accent-300));
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
		transform: translateY(-4px);
	}

	.card-header h3 {
		margin: 0 0 1rem;
		font-size: 1.5rem;
		color: hsl(var(--primary-700));
	}

	.card-description {
		color: hsl(var(--text-700));
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	.card-competences {
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid hsl(var(--text-950) / 0.06);
	}

	.competences-label {
		display: block;
		font-size: 0.8rem;
		font-weight: 600;
		color: hsl(var(--text-600));
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.competences-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.competence-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.375rem 0.75rem;
		background: hsl(var(--primary-50));
		color: hsl(var(--primary-700));
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
		border: 1px solid hsl(var(--primary-200));
	}

	.competence-badge:hover {
		background: hsl(var(--primary-100));
		border-color: hsl(var(--primary-300));
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.card-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.card-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.link-details {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: hsl(var(--accent-600));
		font-weight: 600;
		text-decoration: none;
		transition: gap 0.3s ease;
	}

	.link-details:hover {
		gap: 0.75rem;
	}

	.btn-accent {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.project-card,
		.link-details,
		.competence-badge {
			transition: none;
		}

		.project-card:hover,
		.competence-badge:hover {
			transform: none;
		}
	}
</style>
