<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import DownloadIcon from 'phosphor-svelte/lib/DownloadIcon';
	import EnvelopeIcon from 'phosphor-svelte/lib/EnvelopeIcon';
	import { SKILLS_MAP } from '$lib/data/skills';

	const cvHref = asset('/CV_Ducceschi_Nino.pdf');

	const skillCategories = [
		{
			category: 'Développement Frontend',
			skills: [
				SKILLS_MAP.sveltekit,
				SKILLS_MAP.svelte,
				SKILLS_MAP.typescript,
				SKILLS_MAP.javascript,
				SKILLS_MAP.html,
				SKILLS_MAP.css,
				SKILLS_MAP.tailwind
			]
		},
		{
			category: 'Outils & Technologies',
			skills: [SKILLS_MAP.vite, SKILLS_MAP.git, SKILLS_MAP.phosphor, SKILLS_MAP.node]
		}
	];
</script>

<svelte:head>
	<title>Compétences — Mon Portfolio</title>
	<meta
		name="description"
		content="Découvrez mes compétences en développement web et mon parcours"
	/>
</svelte:head>

<div class="about-page">
	<section class="about-header">
		<div class="header-content">
			<div class="profile-image">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="120"
					height="120"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<circle cx="12" cy="8" r="5" />
					<path d="M20 21a8 8 0 1 0-16 0" />
				</svg>
			</div>
			<div class="header-text">
				<h1>Compétences & Parcours</h1>
				<p class="header-description">
					Développeur web passionné par la création d'interfaces accessibles et performantes.
					Expérience en développement front-end avec les technologies modernes.
				</p>
				<div class="header-actions">
					<Button href={cvHref} variant="primary" icon={DownloadIcon}>
						Télécharger mon CV
					</Button>
					<Button href={resolve('/contact')} variant="secondary" icon={EnvelopeIcon}>Me contacter</Button>
				</div>
			</div>
		</div>
	</section>

	<section class="skills-section">
		<h2>Compétences techniques</h2>
		<p class="section-intro">
			Technologies et outils que j'utilise régulièrement dans mes projets de développement web.
		</p>

		<div class="skills-grid">
			{#each skillCategories as category}
				<div class="skill-category">
					<h3>{category.category}</h3>
					<div class="skills-list">
						{#each category.skills as skill}
							<SkillBadge {skill} size="md" />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="experience-section">
		<h2>Parcours</h2>
		<div class="timeline">
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>BUT Informatique</h3>
					<p class="timeline-period">2022 — Présent</p>
					<p>Formation en développement web, programmation et gestion de projets informatiques.</p>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>Projets personnels</h3>
					<p class="timeline-period">2023 — Présent</p>
					<p>
						Développement de sites web et applications pour consolider mes compétences techniques.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.about-page {
		max-width: 1200px;
		margin: 0 auto;
	}

	.about-header {
		margin-bottom: 5rem;
	}

	.header-content {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 3rem;
		align-items: center;
	}

	.profile-image {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		background: linear-gradient(135deg, hsl(var(--accent-100)), hsl(var(--primary-100)));
		display: flex;
		align-items: center;
		justify-content: center;
		color: hsl(var(--accent-600));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
	}

	.header-text h1 {
		margin-bottom: 1rem;
	}

	.header-description {
		font-size: 1.125rem;
		color: hsl(var(--text-700));
		margin-bottom: 2rem;
		line-height: 1.7;
	}

	.header-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.skills-section {
		margin-bottom: 5rem;
	}

	.skills-section h2 {
		margin-bottom: 1rem;
	}

	.section-intro {
		color: hsl(var(--text-700));
		font-size: 1.125rem;
		margin-bottom: 3rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.skill-category {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	}

	.skill-category h3 {
		margin: 0 0 1.5rem;
		font-size: 1.375rem;
		color: hsl(var(--primary-700));
	}

	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.experience-section h2 {
		margin-bottom: 2rem;
	}

	.timeline {
		position: relative;
		padding-left: 2.5rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 8px;
		top: 12px;
		bottom: 12px;
		width: 2px;
		background: linear-gradient(to bottom, hsl(var(--accent-300)), hsl(var(--primary-300)));
	}

	.timeline-item {
		position: relative;
		margin-bottom: 2.5rem;
	}

	.timeline-marker {
		position: absolute;
		left: -2.5rem;
		top: 6px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: hsl(var(--accent-500));
		border: 3px solid white;
		box-shadow: 0 0 0 2px hsl(var(--accent-300));
	}

	.timeline-content h3 {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
	}

	.timeline-period {
		color: hsl(var(--accent-600));
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.timeline-content p:last-child {
		color: hsl(var(--text-700));
	}

	@media (max-width: 768px) {
		.header-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.profile-image {
			margin: 0 auto;
			width: 140px;
			height: 140px;
		}

		.header-actions {
			justify-content: center;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
