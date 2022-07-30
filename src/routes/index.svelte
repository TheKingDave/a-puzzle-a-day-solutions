<script>
	import Board from "../lib/Board.svelte";

	async function getSolution() {
		const today = new Date();
		const response = await fetch(`/solutions/${today.getMonth()+1}-${today.getDate()}.json`);
		const solutions = await response.json();
		console.log(solutions);
		return solutions;
	}
	const promise = getSolution();
</script>

<svelte:head>
	<title>Today</title>
	<meta name="description" content="Todays solution" />
</svelte:head>

<h1>Today's solution:</h1>

{#await promise}
	<p>Loading...</p>
{:then solutions}
	<h2>{solutions.day} {solutions.month} {solutions.count}</h2>
	<Board solution={solutions.solutions[0]} month={solutions.month} day={solutions.day} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
