<script lang="ts">
  // Page À propos — remplissez le texte et la photo à votre convenance
  const cvHref = '/CV_Ducceschi_Nino.pdf';
</script>

<section style="padding:2rem;max-width:900px;margin:0 auto;">
  <h2>À propos</h2>
  <p>Bonjour — je suis développeur·se web et voici mon portfolio. Remplissez cette section avec votre parcours, expériences et compétences.</p>

  <h3>Résumé</h3>
  <p>Ex : Étudiant en BUT Informatique, passionné par le développement web, l'accessibilité et les interfaces réactives.</p>

  <h3>Télécharger mon CV</h3>
  <a class="btn-accent" href={cvHref} download>Télécharger le CV (PDF)</a>

  <h3 style="margin-top:2rem;">Compétences</h3>
  <ul>
    <li>Svelte / SvelteKit</li>
    <li>TypeScript</li>
    <li>HTML / CSS — Accessibilité</li>
    <li>Git / CI</li>
  </ul>
</section>
