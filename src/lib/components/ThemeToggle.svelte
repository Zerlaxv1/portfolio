<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import SunIcon from '~icons/ph/sun';
	import MoonIcon from '~icons/ph/moon';

	$: isDark = $theme === 'dark';
</script>

<button
	class="theme-toggle"
	on:click={theme.toggle}
	aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
	title={isDark ? 'Mode clair' : 'Mode sombre'}
>
	{#if isDark}
		<SunIcon width="20" height="20" />
	{:else}
		<MoonIcon width="20" height="20" />
	{/if}
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		border: none;
		background: hsl(var(--background-100));
		color: hsl(var(--text-700));
		cursor: pointer;
		transition: all 0.2s ease;
		touch-action: manipulation;
	}

	.theme-toggle:hover {
		background: hsl(var(--accent-100));
		color: hsl(var(--accent-600));
		transform: scale(1.05);
	}

	.theme-toggle:active {
		transform: scale(0.95);
	}

	.theme-toggle:focus-visible {
		outline: 3px solid hsl(var(--accent-500));
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		.theme-toggle {
			transition: none;
		}

		.theme-toggle:hover {
			transform: none;
		}
	}
</style>
