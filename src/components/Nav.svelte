<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		font-weight: bold;
		padding: 1em;
		background-color: var(--canonical-color);
		height: 100%;
		width: var(--nav-margin);
		z-index: 1;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		display: block;
		font-size: 1.2rem;
	}

	a {
		text-decoration: none;
		margin: 1em 0.5em;
		padding: 0.5rem;
		display: block;
	}
	
	[aria-current] {
		color: var(--ubuntu-color);
		background-color: white;
	}

	.logo {
		margin: 1rem;
	}
</style>

<nav>
	{#if segment !== undefined}
		<button class="logo" onclick="location.href='.'" style="background-color: white; height: 3rem; width: 10rem; text-align: center;">logo placeholder</button>
	{/if}

	<ul>
		<li>
			<a href="life" class="{segment === 'life' ? '' : 'hvr-curl-bottom-right'}"
				aria-current="{segment === 'life' ? 'page' : undefined}"
			>
				살아가는 이야기
			</a>
		</li>
		<li>
			<a href="fiction" class="{segment === 'fiction' ? '' : 'hvr-curl-bottom-right'}"
				aria-current="{segment === 'fiction' ? 'page' : undefined}"
			>
				가상세계 이야기
			</a>
		</li>
		<li>
			<a href="trace" class="{segment === 'trace' ? '' : 'hvr-curl-bottom-right'}"
				aria-current="{segment === 'trace' ? 'page' : undefined}"
			>
				언젠가의 이야기
			</a>
		</li>
	</ul>
</nav>
