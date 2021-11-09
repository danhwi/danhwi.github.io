<script>
    import Board from '../../components/Board.svelte';
    import pages from './_pages.json';
</script>

<svelte:head>
    <title>단휘로그::{pages.category}</title>
</svelte:head>

<Board {pages} />