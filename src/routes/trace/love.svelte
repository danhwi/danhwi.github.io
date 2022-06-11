<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '사랑';
    let create = '2014-12-29';
    let link = 'love';
</script>

<Post {category} {title} {create} {link}>
    <p>
        누구였더라? 어느 교사 분이 말씀하셨다.<br/>
        '사랑한다'는 말은 자주, 많이 할수록 그 밀도가 낮아진다고.<br/>
        '사랑한다'는 말을 자주 한다면 그 말에서 느껴지는 진심은 줄어든다는 것이다.<br/>
        또한 '사랑'이라는 것은 말로 전해지는 것이 아니지 않은가.<br/>
        잘 생각해보아라.<br>
        '사랑한다'는 말을 통하지 않아도 그 마음은, 진심은 얼마든지 전해질 수 있다.<br/>
        그러니 '사랑한다'는 말의 빈도보다는 밀도를 높이라는 것이다.<br/>
        그런 의미에서 한 마디만 하겠다.
    </p>
    <p>
        ―사랑한다.
    </p>
</Post>