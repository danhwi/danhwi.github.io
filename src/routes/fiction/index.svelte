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

<Board {pages} />