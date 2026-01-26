<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';
	import '$lib/styles/main.css'

	// Initialiser le thème au montage
	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Skip link for keyboard users -->
<a
	href="#content"
	class="skip-link"
	style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;"
	>Passer au contenu</a
>

<Header />

<main id="content">
	<slot />
</main>

<Footer />

<style>
	@import '$lib/styles/ui.css';
</style>
