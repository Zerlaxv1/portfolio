<script lang="ts">
  import { projects } from '$lib/data/projects';
</script>

<section style="padding:2rem;">
  <h2>Bienvenue</h2>
  <p>Bienvenue sur mon portfolio — site en français, construit avec SvelteKit. Voici quelques projets exemples.</p>

  <h3 style="margin-top:2rem;">Projets récents</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-top:1rem;">
    {#each projects as p}
      <div>
        <a href={`/projects/${p.slug}`}>
          <strong>{p.title}</strong>
        </a>
        <p>{p.short}</p>
      </div>
    {/each}
  </div>
</section>
