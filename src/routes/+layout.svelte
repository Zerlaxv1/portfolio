<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';
  import './layout.css';
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/colors.css" />
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
<style>
  @import '$lib/styles/ui.css';
</style>
