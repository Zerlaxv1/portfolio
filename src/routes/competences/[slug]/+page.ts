import { projects } from '$lib/data/projects';
import { pnCompetences } from '$lib/data/pn-competences';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const competence = pnCompetences.find((c) => c.slug === params.slug);

	if (!competence) {
		error(404, 'Compétence non trouvée');
	}

	// Filtrer les projets qui illustrent cette compétence
	const relatedProjects = projects.filter((project) =>
		project.pnCompetences?.some((competence) => competence.slug === params.slug)
	);

	return {
		competence,
		projects: relatedProjects
	};
};

export function entries() {
	return pnCompetences.map((c) => ({ slug: c.slug }));
}
