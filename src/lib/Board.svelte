<script lang="ts">
    import {generateSvg} from "./svg.js";
    import { onMount } from 'svelte';

    export let solution: string;
    export let month: string;
    export let day: number;
    
    let elem: HTMLDivElement;
    
    onMount(() => {
        elem.appendChild(generateSvg(solution, month, day));
    })
    
    
</script>

<div bind:this={elem}></div>

<style>
    .board {
        border: 1px solid black;
    }
</style>