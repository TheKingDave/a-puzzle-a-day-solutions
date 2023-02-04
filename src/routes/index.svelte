<script>
    import Board from "$lib/Board.svelte";
    import Spinner from "$lib/Spinner.svelte";
    import ErrorIcon from "$lib/ErrorIcon.svelte";

    async function getSolution() {
        const today = new Date();
        const response = await fetch(`/solutions/${today.getMonth() + 1}-${today.getDate()}.json`);
        return await response.json();
    }

    const promise = getSolution();
</script>

<svelte:head>
    <title>Today</title>
    <meta name="description" content="Today's solution"/>
</svelte:head>

<h1>Today's solution:
    {#await promise}
        <Spinner></Spinner>
    {:catch error}
        <ErrorIcon></ErrorIcon>
    {/await}
</h1>
{#await promise then {day, month, count, solutions}}
    <Board solution={solutions[Math.floor(Math.random()*solutions.length)]}/>
{:catch error}
    <p style="color: var(--accent-color)">{error.message}</p>
{/await}
