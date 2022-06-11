<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '소통';
    let create = '2014-06-22';
    let link = 'poem-communication';
</script>

<Post {category} {title} {create} {link}>
    <p>
        나는 하고 싶었다<br/>
        그러나 할 수 없었다
    </p>
    <p>
        세상과 단절된 채<br/>
        저 속으로 저 깊은 곳으로<br/>
        빨려내려 흘러가는<br/>
        그런 난 할 수 없었다
    </p>
    <p>
        먼 훗날<br/>
        모든 문이 열리고<br/>
        너와 소통하게 된다면<br/>
        비로소 통하게 되겠지
    </p>
</Post>