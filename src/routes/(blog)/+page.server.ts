import { SECRET_POSTS_TOKEN } from '$env/static/private';

export const load = async ({ fetch }) => {
	const response = await fetch('https://svelte.fun/api/posts', {
		headers: {
			Authorization: SECRET_POSTS_TOKEN
		}
	});
	return {
		posts: response.json()
	};
};
