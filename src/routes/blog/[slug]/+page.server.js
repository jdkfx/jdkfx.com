import { error } from '@sveltejs/kit';
// @ts-ignore
import posts from '../data.js';

export function load({ params }) {
	// @ts-ignore
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
