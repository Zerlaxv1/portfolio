<script lang="ts">
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let errors: Record<string, string> = {};
	let submitted = false;

	function validateForm() {
		errors = {};

		if (!formData.name.trim()) {
			errors.name = 'Le nom est obligatoire';
		}

		if (!formData.email.trim()) {
			errors.email = "L'email est obligatoire";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = "L'email n'est pas valide";
		}

		if (!formData.message.trim()) {
			errors.message = 'Le message est obligatoire';
		}

		return Object.keys(errors).length === 0;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();

		if (validateForm()) {
			// Envoyer via mailto
			const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(formData.subject || `Contact de ${formData.name}`)}&body=${encodeURIComponent(formData.message + '\n\nEmail: ' + formData.email)}`;
			window.location.href = mailtoLink;

			submitted = true;
			setTimeout(() => {
				submitted = false;
				formData = { name: '', email: '', subject: '', message: '' };
			}, 3000);
		}
	}
</script>

<svelte:head>
	<title>Contact — Mon Portfolio</title>
	<meta name="description" content="Contactez-moi pour toute demande professionnelle" />
</svelte:head>

<div class="contact-page">
	<section class="contact-header">
		<h1>Contactez-moi</h1>
		<p class="header-description">
			Vous avez un projet, une opportunité ou simplement une question ? N'hésitez pas à me contacter
			via ce formulaire.
		</p>
	</section>

	<div class="contact-content">
		<div class="contact-info">
			<h2>Informations de contact</h2>
			<div class="info-block">
				<h3>Email</h3>
				<p><a href="mailto:contact@example.com">contact@example.com</a></p>
			</div>

			<div class="info-block">
				<h3>Réseaux professionnels</h3>
				<ul>
					<li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
					<li>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</li>
				</ul>
			</div>

			<div class="info-block">
				<h3>Disponibilité</h3>
				<p>
					Je suis actuellement disponible pour des opportunités professionnelles et des
					collaborations.
				</p>
			</div>
		</div>

		<form class="contact-form" on:submit={handleSubmit} novalidate>
			{#if submitted}
				<div class="success-message" role="alert" aria-live="polite">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
						<path d="m9 11 3 3L22 4" />
					</svg>
					Merci ! Votre client email va s'ouvrir…
				</div>
			{/if}

			<div class="form-group">
				<label for="name">Nom complet <span class="required">*</span></label>
				<input
					type="text"
					id="name"
					name="name"
					bind:value={formData.name}
					aria-required="true"
					aria-invalid={errors.name ? 'true' : 'false'}
					aria-describedby={errors.name ? 'name-error' : undefined}
					autocomplete="name"
				/>
				{#if errors.name}
					<span class="error-message" id="name-error" role="alert">{errors.name}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="email">Email <span class="required">*</span></label>
				<input
					type="email"
					id="email"
					name="email"
					bind:value={formData.email}
					aria-required="true"
					aria-invalid={errors.email ? 'true' : 'false'}
					aria-describedby={errors.email ? 'email-error' : undefined}
					autocomplete="email"
					inputmode="email"
					spellcheck={false}
				/>
				{#if errors.email}
					<span class="error-message" id="email-error" role="alert">{errors.email}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="subject">Sujet</label>
				<input
					type="text"
					id="subject"
					name="subject"
					bind:value={formData.subject}
					autocomplete="off"
				/>
			</div>

			<div class="form-group">
				<label for="message">Message <span class="required">*</span></label>
				<textarea
					id="message"
					name="message"
					rows="6"
					bind:value={formData.message}
					aria-required="true"
					aria-invalid={errors.message ? 'true' : 'false'}
					aria-describedby={errors.message ? 'message-error' : undefined}
				></textarea>
				{#if errors.message}
					<span class="error-message" id="message-error" role="alert">{errors.message}</span>
				{/if}
			</div>

			<button type="submit" class="btn-accent btn-submit"> Envoyer le message </button>
		</form>
	</div>
</div>

<style>
	.contact-page {
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.contact-header h1 {
		margin-bottom: 1rem;
	}

	.header-description {
		font-size: 1.125rem;
		color: hsl(var(--text-700));
		max-width: 60ch;
		margin: 0 auto;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 4rem;
		align-items: start;
	}

	.contact-info h2 {
		margin-top: 0;
		font-size: 1.5rem;
	}

	.info-block {
		margin-bottom: 2rem;
	}

	.info-block h3 {
		font-size: 1.125rem;
		margin-bottom: 0.5rem;
	}

	.info-block p {
		color: hsl(var(--text-700));
	}

	.info-block ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.info-block li {
		margin-bottom: 0.5rem;
	}

	.contact-form {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 12px;
		padding: 2.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: hsl(var(--text-900));
	}

	.required {
		color: hsl(var(--accent-600));
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 2px solid hsl(var(--text-950) / 0.1);
		border-radius: 8px;
		font-family: inherit;
		font-size: 1rem;
		transition: all 0.2s ease;
		background: hsl(var(--background-50));
		color: hsl(var(--text-900));
	}

	input:hover,
	textarea:hover {
		border-color: hsl(var(--accent-300));
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: hsl(var(--accent-500));
		box-shadow: 0 0 0 3px hsla(var(--accent-500), 0.1);
	}

	input[aria-invalid='true'],
	textarea[aria-invalid='true'] {
		border-color: hsl(0, 70%, 50%);
	}

	.error-message {
		display: block;
		color: hsl(0, 70%, 50%);
		font-size: 0.875rem;
		margin-top: 0.5rem;
	}

	.success-message {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background: hsl(142, 76%, 95%);
		color: hsl(142, 76%, 36%);
		border: 1px solid hsl(142, 76%, 80%);
		border-radius: 8px;
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.success-message svg {
		flex-shrink: 0;
	}

	.btn-submit {
		width: 100%;
		padding: 1rem 2rem;
		font-size: 1rem;
		cursor: pointer;
		border: none;
	}

	@media (max-width: 768px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.contact-form {
			padding: 1.5rem;
		}
	}
</style>
