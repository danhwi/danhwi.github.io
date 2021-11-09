<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin-left: var(--nav-margin);
		box-sizing: border-box;
	}

	.index-main {
		margin-left: unset;
		max-width: unset;
		padding: 0;
	}
</style>

{#if segment !== undefined}
	<Nav {segment}/>
{/if}

<main class="{segment === undefined ? 'index-main' : ''}">
	<slot></slot>
</main>