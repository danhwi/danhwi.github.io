<svelte:head>
    <title>{title}</title>

    <meta name="description" content="{category} - {create}">

	<meta property="og:title" content="{title}">
    <meta property="og:description" content="{category} - {create}">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{category} - {create}">
    <meta name="twitter:image" content="https://danhwi.github.io/logo-512.png">
    <meta name="twitter:url" content="https://danhwi.github.io">
</svelte:head>

<script>
    export let category;
    export let title;
    export let create;
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

    .create {
        color: gray;
        font-size: 1.2rem;
        margin: 0.5rem 2rem;
        text-align: right;
    }

    .list {
        display: inline-block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        border-radius: 1rem;
        background-color: var(--canonical-color);
        color: white;
        font-weight: bold;
    }

    @media (max-width: 600px) {
        .title {
            font-size: 9vw;
        }

        .create {
            font-size: 3.6vw;
            margin: 1.5vw 6vw;
        }

        .list {
            padding: 1.5vw 3vw;
            margin: 3vw 0;
            border-radius: 3vw;
        }
    }
</style>

<h1 class="title">{title}</h1>
<h2 class="create">{create}</h2>
<hr />
<slot class="content"></slot>

<a class="list" href={category}>목록</a>