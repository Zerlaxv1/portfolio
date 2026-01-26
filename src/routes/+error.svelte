<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import House from '~icons/ph/house';
	import WarningCircleIcon from '~icons/ph/warning-circle';
</script>

<svelte:head>
	<title>Erreur {$page.status} — Mon Portfolio</title>
</svelte:head>

<div class="error-page">
	<div class="error-content">
		<div class="error-icon">
			<WarningCircleIcon width="120" height="120" />
		</div>

		<h1 class="error-code">{$page.status}</h1>

		<h2 class="error-title">
			{#if $page.status === 404}
				Page introuvable
			{:else}
				Une erreur est survenue
			{/if}
		</h2>

		<p class="error-message">
			{#if $page.status === 404}
				La page que vous recherchez n'existe pas ou a été déplacée.
			{:else}
				{$page.error?.message || 'Une erreur inattendue est survenue.'}
			{/if}
		</p>

		<div class="error-actions">
			<Button href={resolve('/')} variant="primary" icon={House}>Retour à l'accueil</Button>
		</div>
	</div>
</div>

<style>
	.error-page {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.error-content {
		text-align: center;
		max-width: 600px;
	}

	.error-icon {
		color: hsl(var(--accent-600));
		margin-bottom: 2rem;
		animation: fadeIn 0.6s ease;
	}

	.error-code {
		font-size: clamp(4rem, 15vw, 8rem);
		font-weight: 800;
		color: hsl(var(--primary-700));
		margin: 0 0 1rem;
		line-height: 1;
		animation: fadeIn 0.6s ease 0.1s backwards;
	}

	.error-title {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		margin: 0 0 1rem;
		color: hsl(var(--text-900));
		animation: fadeIn 0.6s ease 0.2s backwards;
	}

	.error-message {
		font-size: 1.125rem;
		color: hsl(var(--text-700));
		margin-bottom: 2rem;
		animation: fadeIn 0.6s ease 0.3s backwards;
	}

	.error-actions {
		animation: fadeIn 0.6s ease 0.4s backwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.error-icon,
		.error-code,
		.error-title,
		.error-message,
		.error-actions {
			animation: none;
		}
	}
</style>
