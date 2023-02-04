<script lang="ts">
    import Board from "$lib/Board.svelte";
    import {cancellableFetch} from "$lib/request";
    import {CancellablePromise} from "real-cancellable-promise";
    import type {SolutionsDto} from "$lib/solutions";
    import Spinner from "$lib/Spinner.svelte";
    import ErrorIcon from "$lib/ErrorIcon.svelte";

    let boardSelection = ' '.repeat(12 + 31);
    let promise: null | CancellablePromise<SolutionsDto> = null;
    let solution: SolutionsDto | null = null;
    let selectedSolution = 0;

    function getSolution(month: number, day: number): CancellablePromise<SolutionsDto> {
        return cancellableFetch(`/solutions/${month + 1}-${day + 1}.json`).then(resp => resp.json());
    }

    function onBlockClick(index: number) {
        const monthIndex = boardSelection.indexOf('X');
        const dayIndex = boardSelection.lastIndexOf('X');

        let month = (monthIndex < 0 || monthIndex > 11) ? null : monthIndex;
        let day = dayIndex < 12 ? null : dayIndex;

        if (index < 12) {
            month = month == index ? null : index;
        } else {
            day = day == index ? null : index;
        }
        boardSelection = buildSelectionString(month, day);

        if (month != null && day != null) {
            solution = null;
            promise?.cancel();
            promise = getSolution(month, day - 12).then((resp) => {
                solution = resp;
                setSelectedSolution(Math.floor(Math.random() * solution.count));
            });
        } else {
            promise?.cancel();
            promise = null;
            solution = null;
        }
    }

    function setSelectedSolution(index: number) {
        if (solution == null || index < 0 || index + 1 > solution.count) {
            return;
        }
        selectedSolution = index;
        boardSelection = solution.solutions[index].replaceAll(' ', 'X');
    }

    function buildSelectionString(month: number | null, day?: number | null): string {
        day = day == null ? null : day - 12;
        const monthStr = ' '.repeat(month ?? 0) + (month == null ? ' ' : 'X') + ' '.repeat(12 - (month ?? 0) - 1);
        const dayStr = ' '.repeat(day ?? 0) + (day == null ? ' ' : 'X') + ' '.repeat(31 - (day ?? 0) - 1);

        return `${monthStr}${dayStr}`;
    }
</script>
<script context="module">
    import {browser, dev} from '$app/env.js';

    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<svelte:head>
    <title>Specific</title>
    <meta name="description" content="See solutions for a specific day"/>
</svelte:head>

{#if solution == null}
    <h1 class="title">
        Select the date
        {#await promise}
            <Spinner></Spinner>
        {:catch error}
            <ErrorIcon></ErrorIcon>
        {/await}
    </h1>
{:else}
    <h1 class="title">
        <span on:click={() => setSelectedSolution(selectedSolution-1)}>&lt;</span>
        Solution {selectedSolution + 1} of {solution.count}
        <span on:click={() => setSelectedSolution(selectedSolution+1)}>&gt;</span>
    </h1>
{/if}

<Board solution={boardSelection} onBlockClick={onBlockClick}/>

<style>
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 span {
        margin-left: 1rem;
        margin-right: 1rem;
        cursor: pointer;
        user-select: none;
    }
</style>