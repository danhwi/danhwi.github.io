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

	/* https://github.com/IanLunn/Hover */
	.hvr-curl-bottom-right {
		display: inline-block;
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
	}
	.hvr-curl-bottom-right:before {
		pointer-events: none;
		position: absolute;
		content: '';
		height: 0;
		width: 0;
		bottom: 0;
		right: 0;
		background: white;
		/* IE9 */
		background: linear-gradient(315deg, white 45%, #aaa 50%, #ccc 56%, white 80%);
		box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: width, height;
		transition-property: width, height;
	}
	.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {
		width: 25px;
		height: 25px;
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
	<button class="logo" onclick="location.href='.'" style="background-color: white; height: 3rem; width: 10rem; text-align: center;">logo placeholder</button>

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
