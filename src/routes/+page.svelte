<script lang="ts">
	import { resolve } from '$app/paths';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import FolderIcon from '~icons/ph/folder';
	import UserIcon from '~icons/ph/user';
	import ArrowRightIcon from '~icons/ph/arrow-right';
	import Moi from '$lib/assets/images/moi.webp';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Accueil — Mon Portfolio</title>
	<meta
		name="description"
		content="Portfolio de développement web — Compétences, projets et réalisations"
	/>
</svelte:head>

<div class="home-page" class:mounted>
	<section class="hero-section">
		<div class="hero-content">
			<div class="hero-text">
				<h1>Développeur Web Full-Stack</h1>
				<p class="hero-description">
					Bienvenue sur mon portfolio — Un espace dédié à mes compétences, projets et réalisations
					en développement web.
				</p>
				<div class="hero-actions">
					<Button href={resolve('/projets')} variant="primary" icon={FolderIcon}>
						Découvrir mes projets
					</Button>
					<Button href={resolve('/competences')} variant="secondary" icon={UserIcon}
						>Mes compétences</Button
					>
				</div>
			</div>
			<div class="hero-image">
				<div class="image-placeholder">
					<img alt="Hero de moi" src={Moi} class="hero-photo" />
				</div>
			</div>
		</div>
	</section>

	<section class="projects-section">
		<h2>Projets récents</h2>
		<p class="section-description">
			Découvrez une sélection de mes réalisations et expériences professionnelles.
		</p>

		<div class="projects-grid">
			{#each projects.slice(0, 3) as project, i}
				<article class="project-card" style="--delay: {i * 0.1}s">
					<h3>{project.title}</h3>
					<p>{project.short}</p>
					<div class="card-actions">
						<a href={resolve(`/projets/${project.slug}`)} class="card-link">
							Voir les détails
							<ArrowRightIcon width="16" height="16" />
						</a>
					</div>
				</article>
			{/each}
		</div>

		<div class="view-all">
			<Button href={resolve('/projets')} variant="secondary" icon={ArrowRightIcon}>
				Voir tous les projets
			</Button>
		</div>
	</section>
</div>

<style>
	.home-page {
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.home-page.mounted {
		opacity: 1;
	}

	.hero-section {
		padding: 3rem 0 5rem;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-text h1 {
		margin-bottom: 1.5rem;
		animation: fadeUp 0.8s ease backwards;
	}

	.hero-description {
		font-size: 1.125rem;
		color: hsl(var(--text-700));
		margin-bottom: 2rem;
		animation: fadeUp 0.8s ease 0.1s backwards;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		animation: fadeUp 0.8s ease 0.2s backwards;
	}

	.hero-image {
		display: flex;
		justify-content: center;
		animation: fadeUp 0.8s ease 0.3s backwards;
	}

	.hero-photo {
		width: 100%;
		height: auto;
		border-radius: 50%;
		object-fit: cover;
	}

	.image-placeholder {
		width: 280px;
		height: 280px;
		border-radius: 50%;
		background: linear-gradient(135deg, hsl(var(--accent-100)), hsl(var(--primary-100)));
		display: flex;
		align-items: center;
		justify-content: center;
		color: hsl(var(--accent-600));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
	}

	.projects-section {
		padding: 4rem 0;
	}

	.projects-section h2 {
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.section-description {
		text-align: center;
		color: hsl(var(--text-600));
		margin-bottom: 3rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.project-card {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.06);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
		opacity: 0;
		animation: fadeUp 0.6s ease forwards;
		animation-delay: var(--delay);
	}

	.project-card:hover {
		border-color: hsl(var(--accent-300));
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
		transform: translateY(-4px);
	}

	.project-card h3 {
		margin: 0 0 0.75rem;
		font-size: 1.5rem;
	}

	.project-card p {
		color: hsl(var(--text-700));
		margin-bottom: 1.5rem;
	}

	.card-actions {
		display: flex;
		gap: 1rem;
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: hsl(var(--accent-600));
		font-weight: 600;
		text-decoration: none;
		transition: gap 0.3s ease;
	}

	.card-link:hover {
		gap: 0.75rem;
	}

	.view-all {
		text-align: center;
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
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hero-image {
			order: -1;
		}

		.image-placeholder {
			width: 200px;
			height: 200px;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.home-page,
		.project-card {
			animation: none;
			opacity: 1;
		}

		.hero-text h1,
		.hero-description,
		.hero-actions,
		.hero-image {
			animation: none;
		}
	}
</style>
