import CodeIcon from '~icons/ph/code';
import DatabaseIcon from '~icons/ph/database';
import PaintBrushIcon from '~icons/ph/paint-brush';
import GitBranchIcon from '~icons/ph/git-branch';
import BracketsAngleIcon from '~icons/ph/brackets-angle';
import FileHtmlIcon from '~icons/ph/file-html';
import FileCssIcon from '~icons/ph/file-css';
import FileJsIcon from '~icons/ph/file-js';
import FileVueIcon from '~icons/ph/file-vue';
import FramerLogoIcon from '~icons/ph/framer-logo';
import PackageIcon from '~icons/ph/package';
import type { Component } from 'svelte';

export type Skill = {
	id: string;
	name: string;
	icon: Component;
	category: 'frontend' | 'backend' | 'tools' | 'design';
};

export const SKILLS_MAP: Record<string, Skill> = {
	// Frontend
	sveltekit: {
		id: 'sveltekit',
		name: 'SvelteKit',
		icon: FileVueIcon,
		category: 'frontend'
	},
	svelte: {
		id: 'svelte',
		name: 'Svelte',
		icon: FileVueIcon,
		category: 'frontend'
	},
	typescript: {
		id: 'typescript',
		name: 'TypeScript',
		icon: FileJsIcon,
		category: 'frontend'
	},
	javascript: {
		id: 'javascript',
		name: 'JavaScript',
		icon: FileJsIcon,
		category: 'frontend'
	},
	html: {
		id: 'html',
		name: 'HTML',
		icon: FileHtmlIcon,
		category: 'frontend'
	},
	css: {
		id: 'css',
		name: 'CSS',
		icon: FileCssIcon,
		category: 'frontend'
	},
	tailwind: {
		id: 'tailwind',
		name: 'Tailwind CSS',
		icon: PaintBrushIcon,
		category: 'frontend'
	},

	// Backend
	node: {
		id: 'node',
		name: 'Node.js',
		icon: CodeIcon,
		category: 'backend'
	},
	database: {
		id: 'database',
		name: 'Database',
		icon: DatabaseIcon,
		category: 'backend'
	},

	// Tools
	vite: {
		id: 'vite',
		name: 'Vite',
		icon: PackageIcon,
		category: 'tools'
	},
	git: {
		id: 'git',
		name: 'Git',
		icon: GitBranchIcon,
		category: 'tools'
	},
	phosphor: {
		id: 'phosphor',
		name: 'Phosphor Icons',
		icon: FramerLogoIcon,
		category: 'tools'
	}
};

// Helper pour obtenir un skill par ID
export function getSkill(id: string): Skill | undefined {
	return SKILLS_MAP[id.toLowerCase()];
}

// Liste de tous les skills disponibles
export const ALL_SKILLS = Object.values(SKILLS_MAP);
