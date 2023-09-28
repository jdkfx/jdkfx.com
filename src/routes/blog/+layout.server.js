// @ts-ignore
import posts from './data.js';

export function load() {
	return {
		// @ts-ignore
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			date: post.date
		}))
	};
}
