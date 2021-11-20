<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '소프트웨어 공학적 관점';
    let create = '2020-08-28';
    let link = 'software-engineering';
</script>

<Post {category} {title} {create} {link}>
    <p>
        정말 사소한 것 하나를 작동시킨다 하더라도
    </p>
    <p>
        구현하기 전엔 실행하지 못할 것이요,<br />
        설계하기 전엔 구현하지 못할 것이요,<br />
        분석하기 전엔 설계하지 못할 것이요,<br />
        이해하기 전엔 분석하지 못할 것이다.
    </p>
    <p>
        인간이란 결국
        임베디드 하드웨어와 임베디드 소프트웨어로 구성된
        임베디드 시스템.
    </p>
    <p>
        ... 시스템 소프트웨어랑 소프트웨어 공학
        너무 좋아하는 것 같다.
    </p>
    <p>
        하지만 정말 호흡이라는 Tick과 충동이라는 Trigger로,
        사실 그렇잖아.
        고대 그리스에선 공학과 예술은 본디 하나였는걸?&#x1F3AD;
    </p>
    <p class="quote">
        &#x1F517; <a href="https://www.facebook.com/danhwi.jung/posts/1600992953412517">페이스북 게시물</a>에서 발췌
    </p>
</Post>