<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '연기는 Agile이다?';
    let create = '2020-08-02';
    let link = 'act-agile';
</script>

<style>
    em {
        color: gray;
    }
</style>

<Post {category} {title} {create} {link}>
    <p>
        요구사항―대본을 바탕으로 분석하고 설계한다.
        그것을 바탕으로 실행 가능한 형태의 코드―연기를 구현하고 실행한다.
        실행 결과는 분석·설계한 것을 바탕으로 확인하고 검증한다.
    </p>
    <p>
        결국 그런 이야기.
        <em>분석 및 설계 → 구현 및 실행 → 확인 및 검증, 그런 프로세스.</em>
        그리고 이것은 단 하나의 waterfall이 아니라
        여러 번의 iteration으로 반복 수행된다.
        처음부터 모든 것을 해내려고 하기 보다는 조금씩 적용해가며
        반복할 때마다 확장적으로 개선되어 간다.
    </p>
    <p>
        그건 마치 Iterative Spiral Model... 결국 연기는 Agile이다?&#x1F3AD;
    </p>
    <p class="quote">
        &#x1F517; <a href="https://www.facebook.com/danhwi.jung/posts/1577522255759587">페이스북 게시물</a>에서 발췌
    </p>
</Post>