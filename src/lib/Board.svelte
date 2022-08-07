<script lang="ts">
    import {labelToColour} from "./svg.js";

    export let solution: string;
    export let month: string;
    export let day: number;
</script>

<div class="board">
    {#each solution as char, i}
        {#if char === ' '}
            <div class="text">{i < 12 ? month : day}</div>
        {:else}
            <div style="background-color: {labelToColour[char]}"></div>
        {/if}
    {/each}
    <div class="placeholder top"></div>
    <div class="placeholder bottom"></div>
</div>

<style>
    .board {
        aspect-ratio: 1;
        border: 15px solid #774D2B;
        display: grid;
        grid-template: repeat(7, 1fr) / repeat(7, 1fr);
    }

    .placeholder {
        background-color: #774D2B;
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
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 125%;
    }
</style>