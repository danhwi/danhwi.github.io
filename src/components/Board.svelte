<script>
    export let pages;
</script>

<style>
    .title {
        color: var(--canonical-color);
		font-weight: bold;
		font-size: 3rem;
		font-family: Ubuntu;
		padding: 0;
		margin: 0;
    }

    .description {
        color: gray;
        font-size: 1.2rem;
        margin: 0.5rem 2rem;
    }

    .alert {
        color: gray;
        font-size: 2rem;
        text-align: center;
    }

    table {
        width: 100%;
        border-spacing: 0 0.8rem;
    }

    tr {
        text-align: center;
        font-size: 1.1rem;
    }

    th {
        font-size: 1.2rem;
        color: white;
        background-color: var(--canonical-color);
    }

    a {
        text-decoration: none;
    }

    a:hover {
        font-weight: bold;
    }
</style>

<h1 class="title">{pages.category}</h1>
<div class="description">{pages.description}</div>
<hr />

{#if pages.pages.length > 0}
    <table>
        <tr>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
        </tr>
        {#each pages.pages as page}
            <tr>
                <td><a href="{pages.segment}/{page.link}">{page.title}</a></td>
                <td>{page.create}</td>
            </tr>
        {/each}
    </table>
{:else}
    <div class="alert">No data.</div>
{/if}