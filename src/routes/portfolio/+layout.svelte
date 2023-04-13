<script lang="ts">
	import '../../styles.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/portfolio">Portfolio</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		padding: 1em;
	}
	ul {
		display: flex;
		list-style: none;
		gap: 1em;
		padding: 0;
		margin: 0;
	}
</style>
