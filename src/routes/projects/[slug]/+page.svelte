<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';
  import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogo';
  import GlobeIcon from 'phosphor-svelte/lib/Globe';
  
  // Projet en dur pour tester le design
  const project = {
    slug: 'portfolio-moderne',
    title: 'Portfolio Moderne',
    short: 'Site portfolio responsive avec SvelteKit et thème dark/light.',
    description: `
      <p>Ce projet est un site portfolio moderne développé avec SvelteKit, présentant mes compétences et projets de manière élégante et professionnelle.</p>
      
      <h3>Contexte</h3>
      <p>J'avais besoin d'un portfolio pour présenter mon travail de manière professionnelle. L'objectif était de créer une expérience utilisateur fluide avec des animations subtiles et un design épuré.</p>
      
      <h3>Défis techniques</h3>
      <ul>
        <li><strong>Système de thème</strong> : Implémentation d'un système de thème dark/light avec persistance localStorage et détection des préférences système</li>
        <li><strong>Performance</strong> : Optimisation du bundle en utilisant des imports spécifiques pour les icônes Phosphor (éviter 30MB de bundle)</li>
        <li><strong>Accessibilité</strong> : Focus visible, skip links, et support des préférences de mouvement réduit</li>
      </ul>
      
      <h3>Résultats</h3>
      <p>Un site entièrement statique, léger, accessible (WCAG AA) et avec un score Lighthouse de 100/100 sur toutes les métriques.</p>
    `,
    cover: '/images/portfolio-cover.jpg',
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
    skills: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Vite', 'Phosphor Icons'],
    features: [
      'Thème dark/light avec persistance',
      'Design responsive (mobile-first)',
      'Animations fluides avec Svelte',
      'Optimisation SEO et performance',
      'Accessibilité WCAG AA',
      'Déploiement statique'
    ],
    screenshots: [
      { url: '/images/portfolio-home.jpg', caption: "Page d'accueil avec hero section" },
      { url: '/images/portfolio-projects.jpg', caption: 'Grille de projets responsive' },
      { url: '/images/portfolio-dark.jpg', caption: 'Mode dark avec transitions douces' }
    ],
    date: 'Janvier 2026',
    status: 'Terminé'
  };
</script>

<svelte:head>
  <title>{project.title} — Mon Portfolio</title>
  <meta name="description" content={project.short} />
</svelte:head>

<article class="project-detail">
  <div class="project-header">
    <h1>{project.title}</h1>
    <p class="project-tagline">{project.short}</p>
    
    <div class="project-meta">
      {#if project.date}
        <span class="meta-item">📅 {project.date}</span>
      {/if}
      {#if project.status}
        <span class="meta-item status" class:status-complete={project.status === 'Terminé'}>
          {project.status}
        </span>
      {/if}
    </div>

    <div class="project-actions">
      {#if project.github}
        <Button href={project.github} variant="primary" icon={GithubLogoIcon} target="_blank" rel="noopener noreferrer">
          Code source
        </Button>
      {/if}
      {#if project.demo}
        <Button href={project.demo} variant="secondary" icon={GlobeIcon} target="_blank" rel="noopener noreferrer">
          Voir la démo
        </Button>
      {/if}
    </div>
  </div>

  {#if project.cover}
    <div class="project-cover">
      <img src={project.cover} alt={`Aperçu de ${project.title}`} />
    </div>
  {/if}

  {#if project.skills && project.skills.length > 0}
    <section class="project-section">
      <h2>Technologies utilisées</h2>
      <div class="skills-list">
        {#each project.skills as skill}
          <span class="skill-badge">{skill}</span>
        {/each}
      </div>
    </section>
  {/if}

  {#if project.description}
    <section class="project-section project-description">
      <h2>À propos du projet</h2>
      {@html project.description}
    </section>
  {/if}

  {#if project.features && project.features.length > 0}
    <section class="project-section">
      <h2>Fonctionnalités principales</h2>
      <ul class="features-list">
        {#each project.features as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </section>
  {/if}

  {#if project.screenshots && project.screenshots.length > 0}
    <section class="project-section">
      <h2>Captures d'écran</h2>
      <div class="screenshots-grid">
        {#each project.screenshots as screenshot}
          <figure class="screenshot-item">
            <img src={screenshot.url} alt={screenshot.caption} />
            <figcaption>{screenshot.caption}</figcaption>
          </figure>
        {/each}
      </div>
    </section>
  {/if}

  <div class="project-footer">
    <Button href="/projects" variant="secondary" icon={ArrowRightIcon} iconPosition="left">
      Retour aux projets
    </Button>
  </div>
</article>

<style>
  .project-detail {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }

  .project-header {
    margin-bottom: 3rem;
  }

  .project-header h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem, 5vw, 3rem);
  }

  .project-tagline {
    font-size: 1.25rem;
    color: hsl(var(--text-700));
    margin-bottom: 1.5rem;
  }

  .project-meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .meta-item {
    padding: 0.5rem 1rem;
    background: hsl(var(--background-100));
    border: 1px solid hsl(var(--text-950) / 0.08);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .status {
    color: hsl(var(--text-700));
  }

  .status-complete {
    background: hsl(var(--accent-50));
    color: hsl(var(--accent-700));
    border-color: hsl(var(--accent-200));
  }

  .project-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .project-cover {
    margin-bottom: 3rem;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .project-cover img {
    width: 100%;
    height: auto;
    display: block;
  }

  .project-section {
    margin-bottom: 3rem;
  }

  .project-section h2 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    color: hsl(var(--primary-700));
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .skill-badge {
    padding: 0.5rem 1rem;
    background: hsl(var(--accent-50));
    color: hsl(var(--accent-700));
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .project-description :global(h3) {
    font-size: 1.375rem;
    margin: 2rem 0 1rem;
    color: hsl(var(--primary-600));
  }

  .project-description :global(p) {
    margin-bottom: 1.25rem;
    line-height: 1.7;
    color: hsl(var(--text-800));
  }

  .project-description :global(ul) {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }

  .project-description :global(li) {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    line-height: 1.6;
  }

  .project-description :global(li::before) {
    content: '→';
    position: absolute;
    left: 0;
    color: hsl(var(--accent-600));
    font-weight: 700;
  }

  .project-description :global(strong) {
    color: hsl(var(--primary-700));
    font-weight: 600;
  }

  .features-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
  }

  .features-list li {
    padding: 1rem 1.25rem;
    background: hsl(var(--background-100));
    border: 1px solid hsl(var(--text-950) / 0.08);
    border-radius: 10px;
    position: relative;
    padding-left: 3rem;
  }

  .features-list li::before {
    content: '✓';
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: hsl(var(--accent-600));
    color: hsl(var(--background-50));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.875rem;
  }

  .screenshots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .screenshot-item {
    margin: 0;
  }

  .screenshot-item img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    border: 1px solid hsl(var(--text-950) / 0.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .screenshot-item img:hover {
    transform: scale(1.02);
  }

  .screenshot-item figcaption {
    margin-top: 0.75rem;
    text-align: center;
    color: hsl(var(--text-700));
    font-size: 0.9rem;
  }

  .project-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid hsl(var(--text-950) / 0.08);
  }

  @media (max-width: 768px) {
    .screenshots-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .screenshot-item img {
      transition: none;
    }
    
    .screenshot-item img:hover {
      transform: none;
    }
  }
</style>
