import { SECRET_POSTS_TOKEN } from '$env/static/private';

export const load = async ({ params, fetch }) => {
	const response = await fetch(`https://svelte.fun/api/posts/${params.slug}`, {
		headers: {
			Authorization: SECRET_POSTS_TOKEN
		}
	});
	return {
		post: response.json()
	};
};
