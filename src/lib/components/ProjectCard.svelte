<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { resolve } from '$app/paths';
	import SkillBadge from './SkillBadge.svelte';
	import Button from './Button.svelte';
	import ArrowSquareOutIcon from '~icons/ph/arrow-square-out';

	const { project }: { project: Project } = $props();
</script>

<article class="project-card">

	<div class="card-header">
		<h3>{project.title}</h3>
	</div>

	<p class="card-description">{project.short}</p>

	{#if project.skills && project.skills.length > 0}
		<div class="card-skills">
			{#each project.skills as skill (skill.id)}
				<SkillBadge {skill} size="sm" clickable={true} />
			{/each}
		</div>
	{/if}

	<div class="card-actions">
		{#if project.demo}
			<Button
				href={project.demo}
				variant="primary"
				icon={ArrowSquareOutIcon}
				target="_blank"
				rel="noopener noreferrer"
			>
				Voir la démo
			</Button>
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

	@media (prefers-reduced-motion: reduce) {
		.project-card,
		.link-details,
		.project-card:hover {
			transform: none;
		}
	}
</style>
