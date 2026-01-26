<script lang="ts">
	import type { Skill } from '$lib/data/skills';

	let {
		skill,
		size = 'md',
		clickable = false
	}: { skill: Skill; size?: 'sm' | 'md' | 'lg'; clickable?: boolean } = $props();

	const href = $derived(clickable ? `/competences/${skill.id}` : undefined);
</script>

{#each [skill] as s}
	{@const Icon = s.icon}
	{@const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
	{#if href}
		<a
			{href}
			class="skill-badge"
			class:size-sm={size === 'sm'}
			class:size-md={size === 'md'}
			class:size-lg={size === 'lg'}
			class:clickable
		>
			<Icon size={iconSize} weight="bold" />
			<span>{s.name}</span>
		</a>
	{:else}
		<span
			class="skill-badge"
			class:size-sm={size === 'sm'}
			class:size-md={size === 'md'}
			class:size-lg={size === 'lg'}
		>
			<Icon size={iconSize} weight="bold" />
			<span>{s.name}</span>
		</span>
	{/if}
{/each}

<style>
	.skill-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: hsl(var(--accent-50));
		color: hsl(var(--accent-700));
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.2s ease;
		text-decoration: none;
	}

	.skill-badge:hover {
		background: hsl(var(--accent-100));
		transform: translateY(-1px);
	}

	.skill-badge.clickable {
		cursor: pointer;
	}

	.skill-badge.clickable:hover {
		background: hsl(var(--accent-200));
		box-shadow: 0 4px 12px hsl(var(--accent-700) / 0.15);
	}

	.size-sm {
		padding: 0.375rem 0.75rem;
		font-size: 0.85rem;
		gap: 0.375rem;
	}

	.size-md {
		padding: 0.5rem 1rem;
		font-size: 0.95rem;
		gap: 0.5rem;
	}

	.size-lg {
		padding: 0.625rem 1.25rem;
		font-size: 1.05rem;
		gap: 0.625rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.skill-badge {
			transition: none;
		}

		.skill-badge:hover {
			transform: none;
		}
	}
</style>
