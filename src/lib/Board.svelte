<script lang="ts">
    import elementResizeDetectorMaker from 'element-resize-detector';
    import {labelToColour} from "./svg.js";
    import {afterUpdate, onMount} from 'svelte';

    export let solution: string;
    export let month: string;
    export let day: number;
    export let maxWidth: number;

    export let wrapper: HTMLElement;
    export let board: HTMLElement;

    const updateSize = () => {
        const min = Math.min(wrapper.clientWidth, wrapper.clientHeight, maxWidth);
        console.log(wrapper.clientWidth, wrapper.clientHeight, maxWidth, min);
        board.style.width = `${min}px`;
        board.style.height = `${min}px`;
    }

    onMount(() => {
        const erd = elementResizeDetectorMaker({
            strategy: "scroll"
        });
        erd.listenTo(wrapper, updateSize);
    });

    afterUpdate(() => {
        updateSize();
    })
</script>

<div class="center">
    <div class="fix-padding">
        <div class="board" bind:this={board} style="background-image: url('/images/wood.jpg');">
            {#each solution as char, i}
                {#if char === ' '}
                    <div class="block text">{i < 12 ? month : day}</div>
                {:else}
                    <div class="block" style="background-color: {labelToColour[char]}"></div>
                {/if}
            {/each}
            <div class="placeholder top"></div>
            <div class="placeholder bottom"></div>
        </div>
    </div>
</div>
<div class="wrapper" bind:this={wrapper}></div>

<style>
    .center {
        display: flex;
        justify-content: center;
        grid-row: 2;
        grid-column: 1;
    }

    .wrapper {
        grid-row: 2;
        grid-column: 1;
    }

    .board {
        box-sizing: border-box;
        aspect-ratio: 1 / 1;
        padding: 3.5%;
        display: grid;
        grid-template: repeat(7, 1fr) / repeat(7, 1fr);
        background-color: #C8A16A;
        background-size: cover;
        border-radius: 3.5%;
        grid-gap: 1px;
    }

    .block {
        /*border: 1px solid black;*/
        box-shadow: 1px 1px 1px black, -1px 1px 1px black, 1px -1px 1px black, -1px -1px 1px black;
    }

    .placeholder.top {
        grid-row: 1 / span 2;
        grid-column: -2 / span 1;
    }

    .placeholder.bottom {
        grid-row: -2 / span 1;
        grid-column: 4 / -1;
    }

    .text {
        /*background-color: white;*/
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 125%;
    }
</style>