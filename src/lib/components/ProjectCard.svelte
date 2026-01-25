<script lang="ts">
  export let project: { slug: string; title: string; short: string; demo?: string };
</script>

<article style="border:1px solid rgba(0,0,0,0.06);padding:1rem;border-radius:8px;">
  <h3>{project.title}</h3>
  <p>{project.short}</p>
  {#if project.demo}
    <a class="btn-accent" href={project.demo} target="_blank" rel="noopener noreferrer">Voir la démo</a>
  {/if}
  <a href={`/projects/${project.slug}`} style="margin-left:0.5rem;">Détails</a>
</article>
