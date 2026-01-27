<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import { projects } from '$lib/data/projects';
	import { page } from '$app/stores';
	import type { Skill } from '$lib/data/skills';
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';

	// Récupérer toutes les compétences uniques
	const allSkills: Skill[] = [];
	const skillsSet = new Set<string>();
	
	projects.forEach(project => {
		project.skills?.forEach(skill => {
			if (!skillsSet.has(skill.id)) {
				skillsSet.add(skill.id);
				allSkills.push(skill);
			}
		});
	});

	// Trier les compétences par ordre alphabétique
	allSkills.sort((a, b) => a.name.localeCompare(b.name));

	// Filtre actuel depuis l'URL (uniquement côté client)
	let selectedSkillId = $derived(browser ? $page.url.searchParams.get('skill') : null);

	// Projets filtrés
	let filteredProjects = $derived(
		selectedSkillId
			? projects.filter(p => p.skills?.some(s => s.id === selectedSkillId))
			: projects
	);

	// Compétence sélectionnée
	let selectedSkill = $derived(
		selectedSkillId ? allSkills.find(s => s.id === selectedSkillId) : null
	);
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
			l'application de compétences spécifiques acquises au fil de ma formation.
		</p>
	</section>

	{#if allSkills.length > 0}
		<section class="filter-section">
			<h2>Filtrer par technologie</h2>
			<div class="skills-filter">
				{#if selectedSkillId}
					<a href={resolve("/projets")} class="filter-badge filter-badge-all">
						Toutes
					</a>
				{/if}
				{#each allSkills as skill}
					<SkillBadge 
						{skill} 
						size="md" 
						clickable={true}
						active={selectedSkillId === skill.id}
					/>
				{/each}
			</div>
			
			{#if selectedSkill}
				<p class="filter-info">
					Affichage des projets utilisant <strong>{selectedSkill.name}</strong>
					• {filteredProjects.length} {filteredProjects.length > 1 ? 'projets' : 'projet'}
				</p>
			{/if}
		</section>
	{/if}

	<div class="projects-grid">
		{#each filteredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	{#if filteredProjects.length === 0}
		<div class="empty-state">
			<p>Aucun projet trouvé avec ce filtre.</p>
			<a href={resolve("/projets")} class="reset-link">Réinitialiser les filtres</a>
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
		margin-bottom: 3rem;
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

	.filter-section {
		margin-bottom: 3rem;
		padding: 2rem;
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 16px;
	}

	.filter-section h2 {
		margin: 0 0 1.5rem;
		font-size: 1.25rem;
	}

	.skills-filter {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.filter-badge-all {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
		background: hsl(var(--primary-500));
		color: white;
		border: 2px solid hsl(var(--primary-500));
	}

	.filter-badge-all:hover {
		background: hsl(var(--primary-600));
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.filter-info {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid hsl(var(--text-950) / 0.08);
		color: hsl(var(--text-700));
		font-size: 0.95rem;
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

	.reset-link {
		display: inline-block;
		margin-top: 1rem;
		color: hsl(var(--accent-600));
		text-decoration: underline;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		.filter-section {
			padding: 1.5rem;
		}
	}
</style>
