<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import EnvelopeIcon from 'phosphor-svelte/lib/EnvelopeIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';

	const email = 'nino.ducceschi@etu.iut-tlse3.fr';
</script>

<svelte:head>
	<title>Contact — Mon Portfolio</title>
	<meta name="description" content="Contactez-moi pour toute demande professionnelle" />
</svelte:head>

<div class="contact-page">
	<section class="contact-header">
		<div class="email-icon">
			<EnvelopeIcon size={80} weight="duotone" />
		</div>
		<h1>Me contacter</h1>
		<p class="header-description">
			N'hésitez pas à me contacter pour toute opportunité professionnelle, collaboration ou
			question.
		</p>
	</section>

	<div class="contact-content">
		<div class="email-section">
			<h2>Email</h2>
			<a href={`mailto:${email}`} class="email-link">{email}</a>
			<div class="button-group">
				<Button href={`mailto:${email}`} variant="primary" icon={EnvelopeIcon}>
					M'envoyer un email
				</Button>
			</div>
		</div>

		<div class="social-section">
			<h2>Réseaux sociaux</h2>
			<p class="social-description">Retrouvez-moi également sur ces plateformes :</p>
			<div class="social-links">
				<Button
					href="https://github.com/Zerlaxv1"
					variant="secondary"
					icon={GithubLogoIcon}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Button>
				<Button
					href="https://www.linkedin.com/in/nino-ducceschi"
					variant="secondary"
					icon={LinkedinLogoIcon}
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</Button>
			</div>
		</div>

		<div class="availability-section">
			<h3>Disponibilité</h3>
			<p>
				Je suis actuellement disponible pour des opportunités professionnelles, des stages et des
				projets de collaboration.
			</p>
		</div>
	</div>
</div>

<style>
	.contact-page {
		max-width: 800px;
		margin: 0 auto;
	}

	.contact-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.email-icon {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		color: hsl(var(--accent-600));
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
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.email-section {
		background: hsl(var(--background-100));
		border: 1px solid hsl(var(--text-950) / 0.08);
		border-radius: 12px;
		padding: 2.5rem;
		text-align: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	}

	.email-section h2 {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.email-link {
		display: block;
		font-size: 1.5rem;
		font-weight: 600;
		color: hsl(var(--accent-600));
		text-decoration: none;
		margin-bottom: 2rem;
		word-break: break-all;
	}

	.email-link:hover {
		color: hsl(var(--accent-700));
		text-decoration: underline;
	}

	.button-group {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.social-section {
		text-align: center;
	}

	.social-section h2 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.social-description {
		color: hsl(var(--text-700));
		margin-bottom: 1.5rem;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.availability-section {
		background: hsl(var(--accent-50));
		border: 1px solid hsl(var(--accent-200));
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
	}

	.availability-section h3 {
		margin-top: 0;
		margin-bottom: 1rem;
		color: hsl(var(--accent-700));
	}

	.availability-section p {
		color: hsl(var(--text-800));
		margin: 0;
	}

	@media (max-width: 768px) {
		.email-link {
			font-size: 1.125rem;
		}

		.email-section {
			padding: 1.5rem;
		}

		.social-links {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
