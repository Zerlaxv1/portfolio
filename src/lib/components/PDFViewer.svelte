<script lang="ts">
  export let href: string;
  export let title: string = 'Document';
</script>

<section>
  <h4>{title}</h4>
  <a href={href} target="_blank" rel="noopener noreferrer">Télécharger</a>
  <div style="margin-top:1rem;">
    <embed src={href} type="application/pdf" width="100%" height="500px" />
  </div>
</section>
