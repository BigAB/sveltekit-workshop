<script lang="ts">
	export let data;
</script>

<h1>The SvelteKit Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<article>
				<h4><a href={post.slug}>{post.title}</a></h4>
				<p>{post.excerpt}</p>
			</article>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: rebeccapurple;

		margin-bottom: 3rem;
	}

	ul {
		list-style: none;
	}

	h4 {
		margin: 0;
		color: rebeccapurple;
	}

	article {
		margin-bottom: 3rem;
	}
</style>
