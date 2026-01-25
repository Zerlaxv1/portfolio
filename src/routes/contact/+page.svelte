<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
</script>

<section style="padding:2rem;max-width:700px;margin:0 auto;">
  <h2>Contact</h2>
  <p>Utilisez le formulaire ci‑dessous pour me contacter. (Le formulaire envoie vers votre messagerie via mailto pour le moment.)</p>

  <form on:submit|preventDefault={() => window.location.href = `mailto:you@example.com?subject=Contact de ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`}>
    <label>
      Nom
      <input bind:value={name} type="text" required />
    </label>

    <label>
      Email
      <input bind:value={email} type="email" required />
    </label>

    <label>
      Message
      <textarea bind:value={message} required rows={6}></textarea>
    </label>

    <button class="btn-accent" type="submit">Envoyer</button>
  </form>
</section>
