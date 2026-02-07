# 📊 Analyse de Conformité du Portfolio

**Date d'analyse :** 26 janvier 2026  
**Site analysé :** Portfolio Nino Ducceschi

---

## ✅ Points conformes aux exigences

### 📋 Consignes respectées

#### 1. Site web sur Git ✅

- ✅ Projet hébergé sur Git (consignes portfolio)
- ✅ Structure de fichiers organisée
- ✅ Commits réguliers et descriptifs en français

#### 2. Présentation des compétences ✅

- ✅ Page `/competences` dédiée aux compétences
- ✅ Compétences organisées par catégories (Frontend, Outils & Technologies)
- ✅ Référentiel PN BUT Info : 6 compétences (Réaliser, Optimiser, Administrer, Gérer, Conduire, Collaborer)
- ✅ Utilisation de badges visuels avec icônes (SkillBadge)
- ✅ Pas de jargon BUT (pas de "composante essentielle", "trace", etc.)

#### 3. Présentation des projets ✅

- ✅ Page `/projets` avec grille de projets
- ✅ Détails de projet avec descriptions
- ✅ Compétences liées à chaque projet (badges visibles)

#### 3.1. SAE 5.Real.01 (Booklet) ✅

- ✅ SAE 5.Real.01 : Développement avancé (PN BUT Info, p.148)
- ✅ Compétences ciblées : Réaliser, Optimiser, Collaborer
- ✅ Objectif : application en équipe, démarche iterative/incrementale, CI, qualite IHM/logicielle
- ✅ Livrables pro attendus : suivi projet, analyse/conception, code documente, jeux d'essais, revue finale, guide d'utilisation

#### 3.2. Ressource R5.02 (Portfolio) ✅

- ✅ Ressource R5.02 : Projet personnel et professionnel (PN BUT Info, p.151)
- ✅ Compétences ciblees : Réaliser, Optimiser, Administrer, Gerer, Conduire, Collaborer
- ✅ Objectif : insertion pro, formalisation du plan de carriere, posture professionnelle
- ✅ SAÉ associee : PORTFOLIO | Portfolio
- ✅ Apprentissages critiques : AC31.01, AC31.02, AC31.03, AC32.01, AC32.02, AC32.03, AC33.01, AC33.02, AC33.03, AC33.04, AC34.01, AC34.02, AC34.03, AC34.04, AC35.01, AC35.02, AC35.03, AC36.01, AC36.02, AC36.03, AC36.04

#### 4. CV téléchargeable ✅

- ✅ CV disponible en PDF (`/CV_Ducceschi_Nino.pdf`) (consignes portfolio)
- ✅ Bouton de téléchargement sur la page Compétences

#### 5. Formulaire de contact ✅

- ✅ Page `/contact` avec email visible
- ✅ Email direct : `nino.ducceschi@gmail.com`
- ✅ Liens vers réseaux sociaux (GitHub, LinkedIn)

---

### 🎨 Ergonomie web (Règles Amélie Boucher)

#### ✅ Règle 1 - Architecture

- ✅ Structure claire avec rubriques logiques (Accueil, Projets, Compétences, Contact)
- ✅ Navigation cohérente dans le menu

#### ✅ Règle 2 - Organisation visuelle

- ✅ Texte lisible : police sans-sérif (Instrument Sans)
- ✅ Moins de 3 polices utilisées (Instrument Sans + Outfit pour les titres)
- ✅ Contrastes positifs avec variables CSS adaptées au thème
- ✅ Liens identifiables (couleur accent, animations au survol)

#### ✅ Règle 3 - Cohérence

- ✅ Header sticky avec logo cohérent sur toutes les pages
- ✅ Composants réutilisables (Button, SkillBadge, ProjectCard)
- ✅ Charte graphique homogène avec système de design tokens

#### ✅ Règle 4 - Conventions

- ✅ Logo/nom en haut à gauche (header)
- ✅ Navigation horizontale en haut
- ✅ Footer avec informations (présumé)

#### ✅ Règle 10 - Liberté

- ✅ Pas d'actions automatiques au survol
- ✅ Navigation libre entre les pages

#### ✅ Règle 11 - Accessibilité

- ✅ Attributs ARIA sur la navigation (`aria-label`)
- ✅ Navigation au clavier possible
- ✅ Thème dark/light pour adaptation aux préférences
- ✅ Prise en compte de `prefers-reduced-motion`

---

## ⚠️ Points à améliorer / manquants

### 🔴 CRITIQUES (Grille d'évaluation)

#### 1. **Page d'accueil sans photo réelle** ⚠️

- ❌ L'image placeholder SVG n'est pas une vraie photo
- 📝 **Action requise :** Ajouter une photo professionnelle sur la page d'accueil
- 💡 **Impact :** Critère de la grille d'évaluation non respecté

#### 2. **Lien GitHub du site manquant** ⚠️

- ❌ Pas de lien vers le dépôt GitHub du portfolio sur le site
- 📝 **Action requise :** Ajouter un lien GitHub dans le footer ou sur la page contact
- 💡 **Impact :** "Site complet : lien GitHub" non respecté

#### 3. **Transitivité Projets ↔ Compétences** ⚠️

- ⚠️ Les compétences sont affichées sur les projets (page détail)
- ⚠️ Mais **pas de liens cliquables** depuis les compétences vers les projets qui les utilisent
- 📝 **Action requise :** Rendre les SkillBadges cliquables pour filtrer/afficher les projets associés
- 💡 **Impact :** Critère important de la grille ("Hyperlien entre Projets et Compétences")

#### 3.1. **Mapping AC -> PN (SAE 5.Real.01)** ✅

- ✅ AC31.01 -> Réaliser
- ✅ AC31.03 -> Réaliser
- ✅ AC32.01 -> Optimiser
- ✅ AC32.03 -> Optimiser
- ✅ AC36.01 -> Collaborer

#### 3.2. **Mapping AC -> PN (R5.02 Portfolio)** ✅

- ✅ AC31.01 -> Réaliser
- ✅ AC31.02 -> Réaliser
- ✅ AC31.03 -> Réaliser
- ✅ AC32.01 -> Optimiser
- ✅ AC32.02 -> Optimiser
- ✅ AC32.03 -> Optimiser
- ✅ AC33.01 -> Administrer
- ✅ AC33.02 -> Administrer
- ✅ AC33.03 -> Administrer
- ✅ AC33.04 -> Administrer
- ✅ AC34.01 -> Gerer
- ✅ AC34.02 -> Gerer
- ✅ AC34.03 -> Gerer
- ✅ AC34.04 -> Gerer
- ✅ AC35.01 -> Conduire
- ✅ AC35.02 -> Conduire
- ✅ AC35.03 -> Conduire
- ✅ AC36.01 -> Collaborer
- ✅ AC36.02 -> Collaborer
- ✅ AC36.03 -> Collaborer
- ✅ AC36.04 -> Collaborer

#### 4. **Page Compétences : personnalisation limitée** ⚠️

- ⚠️ Présentation des compétences est très technique (liste de technologies)
- ⚠️ Pas de mise en contexte des compétences avec des exemples concrets
- 📝 **Action requise :**
  - Ajouter des descriptions de compétences adaptées à un recruteur
  - Illustrer chaque compétence avec des réalisations concrètes
  - Éviter le jargon technique sans explication
- 💡 **Impact :** "Personnalisation de la présentation des compétences" peu marquée

### 🟡 AMÉLIORATIONS ERGONOMIQUES

#### 5. **Règle 5 - Information** 🟡

- ⚠️ Pas de feedback visible après certaines actions
- 📝 **Suggestion :** Ajouter des feedbacks visuels (ex: copie d'email, navigation)

#### 6. **Règle 8 - Gestion des erreurs** 🟡

- ⚠️ Pas de page 404 personnalisée visible
- 📝 **Suggestion :** Créer une page 404 custom avec lien retour accueil

#### 7. **Règle 12 - Satisfaction** 🟡

- ⚠️ Section "Parcours" très succincte (2 entrées seulement)
- 📝 **Suggestion :** Étoffer le parcours avec plus de détails, stages, projets marquants

### 🟢 AMÉLIORATIONS CONTENU

#### 8. **Projets insuffisants** 🟢

- ⚠️ Le nombre de projets doit rester suffisant et varié pour illustrer les compétences (grille d'évaluation)
- 📝 **Action recommandée :** Maintenir une sélection solide (3-5 projets minimum pertinents) avec :
  - Descriptions détaillées
  - Captures d'écran réelles
  - Liens GitHub/démo fonctionnels
  - Contexte : client/besoin/solution/résultat

#### 9. **Traces commentées manquantes** 🟢

- ⚠️ Pas de "traces" (captures, extraits de code) prouvant l'acquisition des compétences
- 📝 **Action requise :** Sur chaque projet, ajouter :
  - Extraits de code commentés
  - Captures d'écran annotées
  - Explications des choix techniques

#### 10. **Discours adapté au recruteur** 🟢

- ⚠️ Vocabulaire parfois trop technique ("SvelteKit", "TypeScript", "Vite")
- 📝 **Suggestion :** Ajouter des explications vulgarisées pour chaque technologie
- 💡 Exemple : "SvelteKit" → "Framework JavaScript moderne pour créer des applications web performantes"

---

## 🎯 Checklist de conformité

### Critères obligatoires (Grille d'évaluation)

| Critère                             | État | Notes                                      |
| ----------------------------------- | ---- | ------------------------------------------ |
| Page d'accueil avec photo           | ❌   | Placeholder SVG au lieu d'une vraie photo  |
| Menu identifiable, visible (sticky) | ✅   | Header sticky avec navigation claire       |
| Menu cohérent                       | ✅   | Navigation cohérente sur toutes les pages  |
| Compétences et projets dans le menu | ✅   | Liens présents                             |
| Homogénéité des pages               | ✅   | Design cohérent avec composants réutilisés |
| Moins de 3 polices                  | ✅   | 2 polices (Instrument Sans + Outfit)       |
| Contenu hiérarchisé                 | ✅   | Titres H1/H2/H3 bien utilisés              |
| Effort esthétique                   | ✅   | Design moderne et soigné                   |
| Personnalisation compétences        | ⚠️   | Présentation technique, manque contexte    |
| Hyperlien Projets ↔ Compétences     | ⚠️   | Lien unidirectionnel (projet → compétence) |
| Description et illustration projets | ⚠️   | Captures et contexte à renforcer           |
| Orthographe correcte                | ✅   | À vérifier en détail                       |
| Discours adapté                     | ⚠️   | Vocabulaire parfois trop technique         |
| Lien GitHub                         | ❌   | Manquant                                   |
| CV téléchargeable                   | ✅   | Présent                                    |
| Formulaire de contact               | ✅   | Email direct + réseaux sociaux             |

### Score estimé : **14/20**

---

## 📝 Plan d'action prioritaire

### 🔴 Urgent (impact grille d'évaluation)

1. **Ajouter une photo professionnelle sur la page d'accueil**
2. **Ajouter le lien GitHub du portfolio** (footer ou contact)
3. **Créer la transitivité Compétences → Projets**
   - Rendre les SkillBadges cliquables
   - Créer une page de filtrage par compétence
4. **Ajouter 3-5 projets supplémentaires** avec descriptions complètes

### 🟡 Important (améliorer la note)

5. **Personnaliser la présentation des compétences**
   - Ajouter du contexte et des exemples
   - Vulgariser le vocabulaire technique
6. **Ajouter des traces commentées** sur chaque projet
7. **Étoffer le parcours** (section expérience)

### 🟢 Optionnel (peaufinage)

8. Créer une page 404 personnalisée
9. Ajouter des feedbacks visuels
10. Optimiser les images (actuellement des placeholders)

---

## 📊 Synthèse

### ✅ Forces du portfolio actuel

- Structure technique solide (SvelteKit, TypeScript)
- Design moderne et responsive
- Accessibilité prise en compte
- Navigation intuitive
- Composants réutilisables bien organisés

### ⚠️ Faiblesses à corriger

- Contenu incomplet (1 seul projet)
- Photo professionnelle manquante
- Lien GitHub absent
- Transitivité Compétences ↔ Projets incomplète
- Manque de personnalisation dans la présentation

### 🎯 Objectif

Avec les corrections prioritaires, le portfolio peut atteindre **17-18/20** sur la grille d'évaluation.

---

## 💡 Recommandations finales

1. **Prioriser le contenu** avant d'améliorer le design
2. **Penser recruteur** : chaque élément doit prouver une compétence
3. **Ajouter du storytelling** : contexte, besoin, solution, résultat
4. **Tester avec un utilisateur** non-informaticien pour vérifier la clarté
5. **Vérifier l'orthographe** avec soin (critère de notation)

---

**Conclusion :** Le site a de très bonnes bases techniques et ergonomiques, mais nécessite **plus de contenu** et quelques ajustements pour répondre pleinement aux exigences de la grille d'évaluation.

---

## 📚 Sources utilisées (PDF)

- Consignes portfolio : portfolio de compétences, preuves, CV, site web sur Git, règles ergonomiques de base.
- Grille Eval Portfolio S6 : photo sur la page d'accueil, compétences/projets dans le menu, personnalisation des compétences, hyperlien Projets ↔ Compétences, description/illustration des projets, site complet (GitHub + CV + contact), mise en contexte (client/besoin/solution/résultat).
- PN BUT Info 2022 : référentiel des 6 compétences du BUT Informatique et démarche portfolio.
