<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-section">
			<h3>Navigation</h3>
			<ul>
				<li><a href="/">Accueil</a></li>
				<li><a href="/projets">Projets</a></li>
				<li><a href="/competences">Compétences</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>

		<div class="footer-section">
			<h3>Liens utiles</h3>
			<ul>
				<li>
					<a href="https://github.com/Zerlaxv1/portfolio" target="_blank" rel="noopener noreferrer">
						GitHub du Portfolio
					</a>
				</li>
				<li><a href="/CV_Ducceschi_Nino.pdf" target="_blank">CV (PDF)</a></li>
			</ul>
		</div>

		<div class="footer-section">
			<h3>Contact</h3>
			<p>
				Pour toute demande professionnelle, n’hésitez pas à me contacter via mail à
				<a href="mailto:nino.ducceschi@etu.iut-tlse3.fr">nino.ducceschi@etu.iut-tlse3.fr</a>.
			</p>
		</div>
	</div>

	<div class="footer-bottom">
		<small>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</small>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: 6rem;
		padding: 3rem 1.5rem 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.08);
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02));
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;
		margin-bottom: 2rem;
	}

	.footer-section h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: hsl(var(--text-900));
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-section li {
		margin-bottom: 0.5rem;
	}

	.footer-section a {
		color: hsl(var(--text-700));
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer-section a:hover {
		color: hsl(var(--accent-600));
	}

	.footer-section p {
		color: hsl(var(--text-700));
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 2rem;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
		text-align: center;
		color: hsl(var(--text-600));
	}

	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
