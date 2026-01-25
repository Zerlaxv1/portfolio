<script lang="ts">
  export let project: { slug: string; title: string; short: string; demo?: string };
</script>

<article class="p-4 rounded-lg shadow-sm" style="border:1px solid rgba(0,0,0,0.06);">
  <h3 class="text-lg font-semibold">{project.title}</h3>
  <p class="text-sm text-muted">{project.short}</p>
  <div style="margin-top:0.75rem;display:flex;gap:0.5rem;">
    {#if project.demo}
      <a class="btn-accent" href={project.demo} target="_blank" rel="noopener noreferrer">Voir la démo</a>
    {/if}
    <a href={`/projects/${project.slug}`} class="underline">Détails</a>
  </div>
</article>
