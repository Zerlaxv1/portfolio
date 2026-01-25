<script context="module" lang="ts">
  import type { PageLoad } from './$types';
  import { projects } from '$lib/data/projects';

  export const load: PageLoad = ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
      return { status: 404 } as any;
    }
    return { project } as any;
  };
</script>

<script lang="ts">
  export let data: any;
  const { project } = data;
</script>

<section style="padding:2rem;">
  <h2>{project.title}</h2>
  <p>{project.short}</p>
  <p>Contenu détaillé à remplir manuellement.</p>
  {#if project.github}
    <p><a href={project.github} target="_blank" rel="noopener">Code source</a></p>
  {/if}
</section>
