import { projects } from '$lib/data/projects';
import { SKILLS_MAP } from '$lib/data/skills';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const skill = SKILLS_MAP[params.slug];

	if (!skill) {
		error(404, 'Compétence non trouvée');
	}

	// Filtrer les projets qui utilisent cette compétence
	const relatedProjects = projects.filter(
		(project) => project.skills?.some((s) => s.id === params.slug)
	);

	return {
		skill,
		projects: relatedProjects
	};
};

export function entries() {
	return Object.keys(SKILLS_MAP).map((slug) => ({ slug }));
}
