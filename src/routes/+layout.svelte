<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">about</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav ul {
		display: flex;
		list-style: none;
		gap: 1em;
		padding: 0;
	}
</style>
