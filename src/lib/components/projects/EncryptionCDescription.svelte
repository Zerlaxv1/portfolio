<div class="project-description">
	<h2>Contexte</h2>
	<p>
		Mini-projet réalisé dans le cadre de la ressource R2.04, centré sur l'implémentation 
		d'algorithmes de chiffrement classiques en langage C. L'objectif pédagogique était 
		de comprendre les principes fondamentaux de la cryptographie.
	</p>

	<h2>Algorithmes implémentés</h2>
	
	<h3>Chiffrement de César</h3>
	<p>
		Le chiffre de César est une méthode de chiffrement par substitution où chaque lettre 
		du texte clair est décalée d'un nombre fixe de positions dans l'alphabet. J'ai implémenté 
		à la fois le chiffrement et le déchiffrement avec gestion des différents cas (majuscules, 
		minuscules, caractères spéciaux).
	</p>
	<ul>
		<li>Chiffrement et déchiffrement avec clé paramétrable</li>
		<li>Gestion des caractères ASCII étendus</li>
		<li>Préservation de la casse et des caractères non alphabétiques</li>
		<li>Interface en ligne de commande</li>
	</ul>

	<h3>Chiffrement de Vigenère</h3>
	<p>
		Le chiffre de Vigenère est une extension du chiffre de César utilisant une clé alphabétique 
		répétée. Chaque lettre de la clé détermine le décalage à appliquer à la lettre correspondante 
		du texte. Cette méthode offre une sécurité supérieure au chiffre de César.
	</p>
	<ul>
		<li>Chiffrement et déchiffrement avec clé variable</li>
		<li>Répétition automatique de la clé selon la longueur du message</li>
		<li>Gestion robuste des entrées utilisateur</li>
		<li>Validation et normalisation de la clé</li>
	</ul>

	<h2>Réalisations techniques</h2>
	<ul>
		<li>Implémentation en C pur avec gestion manuelle de la mémoire</li>
		<li>Algorithmes optimisés pour les performances</li>
		<li>Gestion des erreurs et validation des entrées</li>
		<li>Interface utilisateur en ligne de commande claire</li>
		<li>Code modulaire et réutilisable</li>
		<li>Documentation complète des fonctions</li>
	</ul>

	<h2>Aspects pédagogiques</h2>
	<p>
		Ce projet m'a permis de comprendre les bases de la cryptographie, l'importance de la 
		complexité algorithmique, et les limites des méthodes de chiffrement classiques. 
		J'ai également travaillé sur l'optimisation du code et la gestion efficace de la mémoire en C.
	</p>

	<h2>Compétences développées</h2>
	<p>
		Maîtrise des algorithmes de chiffrement classiques, manipulation de chaînes de caractères 
		en C, optimisation de code, et compréhension des principes fondamentaux de la sécurité 
		informatique.
	</p>
</div>

<style>
	.project-description {
		line-height: 1.8;
	}

	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: hsl(var(--primary-700));
	}

	h3 {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: hsl(var(--primary-600));
		font-size: 1.125rem;
	}

	p {
		margin-bottom: 1rem;
		color: hsl(var(--text-700));
	}

	ul {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
		color: hsl(var(--text-700));
	}
</style>
