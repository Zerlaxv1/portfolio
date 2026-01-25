<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<section style="padding:2rem;">
  <h2>Projets</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:1rem;">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>
