<script context="module">
    import pagesJson from './_pages.json';

    let pages = pagesJson;
    let origin = pages.pages;

    export async function preload(page, session) {
        if (page.query.q) {
            pages.pages = pagesJson.pages.filter(
                p => p.title.includes(page.query.q)
            );
        } else {
            pages.pages = origin;
        }
    }
</script>

<script>
    import Board from '../../components/Board.svelte';
</script>

<svelte:head>
    <title>단휘로그::{pages.category}</title>
</svelte:head>

<Board {pages} />