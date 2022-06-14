<script>
	export let segment;

	let query;
</script>

<style>
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		font-weight: bold;
		background-color: var(--canonical-color);
		height: 100%;
		width: var(--nav-margin);
		padding: 1rem 0;
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

	.mobile-nav {
		display: none;
	}

	.logo {
		color: var(--ubuntu-color);
		font-weight: bold;
		font-size: 2rem;
		font-family: Ubuntu;
		padding: 0;
		margin: 1rem 0;
	}

	.search {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		color: white;
	}

	.search button {
		border: none;
		background-color: transparent;
		font-size: 1.2rem;
	}

	input {
		width: calc( var(--nav-margin) - 4rem );
	}

	@media (max-width: 600px) {
		nav {
			display: flex;
			width: 100%;
			padding: 3vw 0;
		}

		nav.off {
			display: none;
		}

		li {
			font-size: 3.6vw;
		}

		a {
			margin: 3vw 1.5vw;
			padding: 1.5vw;
		}

		.mobile-nav {
			position: absolute;
			background-color: transparent;
			display: block;
			height: 2rem;
			padding: 1rem 0;
			z-index: 2;
		}

		.mobile-nav a {
			display: inline;
		}

		.mobile-nav.on {
			position: unset;
			background-color:var(--canonical-color);
		}

		.mobile-nav img {
			display: none;
		}
		.mobile-nav.on img{
			display: unset;
			width: 2rem;
			margin: 0 1rem;
		}

		.mobile-nav span {
			display: inline-block;
			color: white;
			font-size: 10vw;
			width: 2rem;
			margin: 0 1rem;
			line-height: 0.5;
		}
		.mobile-nav.on span {
			display: none;
		}

		.menu {
			padding: 0;
			border: none;
			background-color: transparent;
		}

		.logo {
			font-size: 6vw;
			font-family: Ubuntu;
			padding: 0;
			margin: 3vw 0;
		}

		.search {
			position: unset;
			color: white;
			margin: 2vw;
		}

		.search button {
			font-size: 3.6vw;
		}
	}
</style>

<nav id="nav" class="off">
	<a href="." class="logo">danhwi.log</a>

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

	<div class="search">
			<input type="text" bind:value={query} />
			<button onclick="location.href='{segment}?q={query}'"
				disabled={!query}>
				&#x1F50D;
			</button>
	</div>
</nav>

<span class="mobile-nav on" id="mobile-nav">
	<a class="menu" id="mobile-nav" href=".">
		<img src="logo-192.png" alt="danhwi.log">
		<span>×</span>
	</a>
</span>