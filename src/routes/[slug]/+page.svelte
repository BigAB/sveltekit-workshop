<script lang="ts">
	export let data;
</script>

<article>
	<h1>{data.post?.title}</h1>
	<p>{data.post?.content}</p>
</article>

<style>
	h1 {
		color: rebeccapurple;
		margin-bottom: 3rem;
	}

	article {
		margin: auto;

		max-width: min(800px, 90%);
	}
</style>
