<script lang="ts">
  export let title = 'Mon Portfolio';
</script>

<header class="px-6 py-4" style="display:flex;align-items:center;justify-content:space-between;">
  <div style="display:flex;align-items:center;gap:1rem;">
    <a href="/" aria-label="Accueil" style="text-decoration:none;color:inherit;">
      <span style="font-family: 'Playfair Display', serif;font-size:1.25rem;">{title}</span>
    </a>
  </div>
  <nav aria-label="Navigation principale">
    <a href="/" style="margin-right:1rem;">Accueil</a>
    <a href="/projects" style="margin-right:1rem;">Projets</a>
    <a href="/resources" style="margin-right:1rem;">Ressources</a>
    <a href="/about">À propos</a>
  </nav>
</header>
