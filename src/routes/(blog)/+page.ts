import { getPostSummaries } from '$lib/posts';
export const load = async () => ({
	posts: getPostSummaries()
});
