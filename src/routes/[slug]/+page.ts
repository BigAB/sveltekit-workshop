import { getPostBySlug } from '$lib/posts';
export const load = async ({ params }) => {
	return {
		post: getPostBySlug(params.slug)
	};
};
