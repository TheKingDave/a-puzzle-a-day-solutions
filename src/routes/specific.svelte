<script context="module">
    import {browser, dev} from '$app/env';

    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="content">
    <h1>Not implemented yet :(</h1>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
