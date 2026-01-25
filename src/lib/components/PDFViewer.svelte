<script lang="ts">
  export let href: string;
  export let title: string = 'Document';
</script>

<section>
  <h4>{title}</h4>
  <p class="sr-only">Document PDF. Utilisez le lien de téléchargement si l'aperçu ne fonctionne pas.</p>
  <a href={href} target="_blank" rel="noopener noreferrer">Télécharger (PDF)</a>
  <div style="margin-top:1rem;">
    <object data={href} type="application/pdf" width="100%" style="min-height:40vh;">
      <p>Le navigateur ne peut pas afficher le PDF. <a href={href}>Télécharger le PDF</a>.</p>
    </object>
  </div>
</section>
