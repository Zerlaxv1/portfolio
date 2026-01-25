<script lang="ts">
  import PDFViewer from '$lib/components/PDFViewer.svelte';

  const pdfs = [
    { href: '/docs/Consignes portfolio.pdf', title: 'Consignes portfolio' },
    { href: '/docs/ergonomie web-3.pdf', title: 'Ergonomie web' },
    { href: '/docs/Grille Eval Portfolio S6.pdf', title: "Grille d'évaluation" }
  ];
</script>

<section style="padding:2rem;">
  <h2>Ressources / PDFs</h2>
  <p>Placez les PDF de développement dans <code>/static/docs/</code> pour qu'ils soient visibles ici.</p>

  {#each pdfs as pdf}
    <PDFViewer href={pdf.href} title={pdf.title} />
  {/each}
</section>
