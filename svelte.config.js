import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
// TODO: supprimer quand plus besoin
const config = {
	kit: { 
		adapter: adapter({
			strict: false
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignorer les erreurs 404 sur les fichiers statiques manquants
				if (path.includes('/images/')) {
					return;
				}
				throw new Error(message);
			}
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
