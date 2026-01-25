<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';
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
