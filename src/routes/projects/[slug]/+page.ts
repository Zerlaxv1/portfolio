import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		error(404, 'Projet non trouvé');
	}

	return {
		project
	};
};

export const entries: EntryGenerator = () => {
	return projects.map((project) => ({
		slug: project.slug
	}));
};
