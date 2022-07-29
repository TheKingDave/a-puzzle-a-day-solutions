<script context="module">
    import {browser, dev} from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div class="content">
    <h1>About this app</h1>

    <p>
        This app was created to help a friend of mine solve the puzzles because she could not solve them ;).
    </p>

    <p>
        This is a small side project because it peaked my interest.
    </p>

    <p>
        This page is in no way associated <a href="http://a-puzzle-a-day.com">a-puzzle-a-day</a> or <a
            href="https://www.dragonfjord.com/">DragonFjord</a>.
    </p>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
