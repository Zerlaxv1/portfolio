<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	export let title = 'Ducceschi Nino';
</script>

<header class="site-header">
	<div class="header-container">
		<div class="logo-section">
			<a href="/" aria-label="Retour à l'accueil" class="logo-link">
				<span class="logo-text">{title}</span>
			</a>
		</div>

		<nav aria-label="Navigation principale" class="main-nav">
			<a href="/" class="nav-link">Accueil</a>
			<a href="/projects" class="nav-link">Projets</a>
			<a href="/about" class="nav-link">Compétences</a>
			<a href="/contact" class="nav-link">Contact</a>
			<ThemeToggle />
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.25rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo-link {
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s ease;
	}

	.logo-link:hover {
		opacity: 0.7;
	}

	.logo-text {
		font-family: 'Outfit', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: hsl(var(--primary-700));
		letter-spacing: -0.02em;
	}

	.main-nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-link {
		position: relative;
		color: hsl(var(--text-700));
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: color 0.2s ease;
		padding: 0.25rem 0;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: hsl(var(--accent-500));
		transition: width 0.3s ease;
	}

	.nav-link:hover {
		color: hsl(var(--accent-600));
	}

	.nav-link:hover::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		.header-container {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}

		.main-nav {
			gap: 1.25rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.nav-link,
		.nav-link::after,
		.logo-link {
			transition: none;
		}
	}
</style>
