<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© <a href="https://davidlangheiter.com">David Langheiter</a> 2022</p>
</footer>

<style>
	main {
		display: flex;
		justify-content: stretch;
		align-items: stretch;
		flex-direction: column;
		padding: 0 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	footer p {
		margin-block-start: 0;
		margin-block-end: 0;
	}

	footer a {
		font-weight: bold;
		color: var(--heading-color);
	}
</style>
