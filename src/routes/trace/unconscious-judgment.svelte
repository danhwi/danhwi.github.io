<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '무의식적인 판단';
    let create = '2021-06-22';
    let link = 'unconscious-judgment';
</script>

<style>
    em {
        color: gray;
    }
</style>

<Post {category} {title} {create} {link}>
    <p>
        사람들은 다른 누군가를 판단할 때 자기 자신을 기준으로 판단하곤 한다.
        자신이 알지 못하는 부분에 대해서는 자신과 동일, 혹은 유사할 거라고 무의식적으로 가정하는 것이다.
        그것은 어쩌면 당연한 일이다가도 때로는 정말 씁쓸해진다.
        때론 누군가에게 악의 없는 상처를 주게 되기도 한다.
    </p>
    <p>
        그래, 사실 주변 사람들만 봐도 이게 갈린다.
        이와 같이 가정해버리고 판단하는 사람이 있는가 하면, 모든 가능성을 열어둔 채 생각하는 이도 있다.
        이런 인식 차이는 어디에서 오는 것일까.
    </p>
    <p>
        타고난 천성의 차이인지 후자의 존재가 좀 더 타인에게 상처주지 않기 위해 노력한 건지, 그런 질문을 던져 본다.
        후자의 비율이<em>—내 주변만으로 판단하건대—</em>상대적으로 낮아보인다는 점이 미묘하다.
        그리고 어쩌면 이것이 네가 내 관심을 끈 이유 중 하나이지 않을까, 하며 누군가를 떠올려 본다.
    </p>
    <p>
        이런 거 하나하나에 상처 받진 않는 삶을 살길 바라며.
        &#x1F6A9;
    </p>
    <p class="quote">
        &#x1F517; <a href="https://www.facebook.com/danhwi.jung/posts/1836870416491435">페이스북 게시물</a>에서 발췌
    </p>
</Post>