<script lang="ts">
    import {acrylicColors} from "./colors.js";
    import {monthNames} from "$lib/months";

    export let onBlockClick: (index: number) => void | undefined;
    export let solution: string;
</script>

<div class="board-container">
    <div class="board">
        {#each solution as char, index}
            <div
                    class="block"
                    class:text={char === ' ' || char === 'X'}
                    class:selected={char === 'X'}
                    class:clickable={onBlockClick != null}
                    style="background-color: {char === ' ' || char === 'X' ? null : acrylicColors[char]}"
                    on:click={onBlockClick == null ? null : () => onBlockClick(index)}
            >
                {index < 12 ? monthNames[index] : index - 11}
            </div>
        {/each}
        <div class="placeholder top"></div>
        <div class="placeholder bottom"></div>
    </div>
</div>

<style>
    .board-container {
        display: flex;
        justify-content: center;
        container-type: size;
        container-name: board;
        width: 100%;
        height: 100%;
    }

    .board {
        background-color: black;
        box-sizing: border-box;
        width: 100cqmin;
        height: 100cqmin;
        padding: 3.5%;
        display: grid;
        grid-template: repeat(7, 1fr) / repeat(7, 1fr);
        border-radius: 3.5%;
    }

    .block {
        border: 2px solid transparent;
        transition: border 250ms, background-color 500ms, color 500ms;

        user-select: none;
        color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 125%;
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
        color: white;
    }

    .text.clickable {
        cursor: pointer;
    }

    .selected {
        border: 2px solid white;
    }
</style>