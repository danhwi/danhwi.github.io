<svelte:head>
	<title>단휘로그</title>

	<meta name="description" content="당신의 삶에서 유의미한 가치를 갖길 바라는, 단휘의 소소한 끄적임">
	<link rel="canonical" href="https://danhwi.web.app">

	<meta property="og:title" content="danhwi.log">
	<meta property="og:description" content="당신의 삶에서 유의미한 가치를 갖길 바라는, 단휘의 소소한 끄적임">
	<meta property="og:image" content="https://danhwi.github.io/logo-512.png">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="danhwi.log">
    <meta name="twitter:description" content="당신의 삶에서 유의미한 가치를 갖길 바라는, 단휘의 소소한 끄적임">
    <meta name="twitter:image" content="https://danhwi.github.io/logo-512.png">
    <meta name="twitter:url" content="https://danhwi.github.io">
</svelte:head>

<style>
	.cover {
		text-align: center;
		background-color: var(--canonical-color);
		height: 48rem;
	}

	.title {
		color: var(--ubuntu-color);
		font-weight: bold;
		font-size: 5rem;
		font-family: Ubuntu;
		padding: 0;
		margin: 0;
	}

	.content {
		color: white;
		font-size: 1.2rem;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-weight: bold;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}


	li {
		display: block;
		float: left;
		font-size: 1.2rem;
		white-space: nowrap;
		margin: 1rem 1vw;
	}

	a {
		text-decoration: none;
		margin: 1em 0.5em;
		padding: 0.5em;
		display: inline-block;
		background-color: var(--canonical-color);
	}

	.title a {
		padding: 0;
		background-color: transparent;
	}

	@media (max-width: 600px) {
		.cover {
			height: 120vw;
		}

		.title {
			font-size: 12vw;
		}

		.content {
			font-size: 3vw;
		}

		nav {
			padding: 0 3vw;
		}

		li {
			font-size: 3.6vw;
			margin: 3vw 9vw;
			float: unset;
		}

		a {
			padding: 1.5vw;
		}

		nav a {
			margin: 2vw;
		}
	}
</style>

<section class="cover">
	<h1 class="title"><a href=".">danhwi.log</a></h1>
	<div class="content">
		이 작은 끄적임들이 모여 어떤 의미로 남을지는 알 수 없지만<br />
		나의 이야기를 조금씩 써내려 갑니다.<br />
		<br />
		그리고 그 이야기들이 모여 이루어 낼 또 다른 나를 기대해 봅니다.<br />
		<br />
		이곳에 모인 나의 이야기 조각들이<br />
		나와 당신의 삶에 있어서 유의미한 가치를 가질 수 있길 바라며<br />
		내 작은 기록들을 담아 봅니다.<br />
		<br />
		때로는 아무 말이나 내뱉는 것 같기도 하고<br />
		때로는 이해할 수 없는 중얼거림일지라도<br />
		그 모든 이야기들엔 각자 나름의 의미가 있다고 믿습니다.<br />
		<br />
		내가 누군가에게 그러하고, 당신이 누군가에게 그러하듯이.<br />
	</div>
</section>
<section>
<nav>
	<ul>
		<li>
			<a href="life" class="hvr-curl-bottom-right">
				살아가는 이야기
			</a>
		</li>
		<li>
			<a href="fiction" class="hvr-curl-bottom-right">
				가상세계 이야기
			</a>
		</li>
		<li>
			<a href="trace" class="hvr-curl-bottom-right">
				언젠가의 이야기
			</a>
		</li>
	</ul>
</nav>
</section>