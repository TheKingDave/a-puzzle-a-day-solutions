<script>
	import Board from "../lib/Board.svelte";

	async function getSolution() {
		const today = new Date();
		const response = await fetch(`/solutions/${today.getMonth()+1}-${today.getDate()}.json`);
		return await response.json();
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
{:then {day, month, count, solutions}}
	<Board solution={solutions[Math.floor(Math.random()*solutions.length)]} month={month} day={day} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	h1 {
		width: 100%;
	}
</style>
