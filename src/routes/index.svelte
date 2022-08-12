<script>
    import Board from "../lib/Board.svelte";
    import {onMount} from "svelte";
    import elementResizeDetectorMaker from "element-resize-detector";

    export let wrapper;
    export let maxWidth;

    async function getSolution() {
        const today = new Date();
        const response = await fetch(`/solutions/${today.getMonth() + 1}-${today.getDate()}.json`);
        return await response.json();
    }

    const promise = getSolution();

    onMount(() => {
        const erd = elementResizeDetectorMaker({
            strategy: "scroll"
        });
        erd.listenTo(wrapper, () => {
            maxWidth = wrapper.clientWidth;
            console.log('maxWidth', maxWidth);
        });
    });
</script>

<svelte:head>
    <title>Today</title>
    <meta name="description" content="Todays solution"/>
</svelte:head>

<div class="wrapper" bind:this={wrapper}>
    <h1>Today's solution:</h1>
    {#await promise}
        <p>Loading...</p>
    {:then {day, month, count, solutions}}
        <Board solution={solutions[Math.floor(Math.random()*solutions.length)]} month={month} day={day}
               maxWidth={maxWidth}/>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
    :global(main) {
        display: grid;
        grid-template-rows: 1fr;
        justify-items: stretch;
        overflow: hidden;
    }
    
    .wrapper {
        display: grid;
        grid-template-rows: auto 1fr;
        justify-items: stretch;
        overflow: hidden;
    }

    h1 {
        width: 100%;
    }
</style>
