<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '대경양';
    let create = '2014-06-23';
    let link = 'poem-fts';
</script>

<Post {category} {title} {create} {link}>
    <p>
        제1이 사라진다는 건<br/>
        제2가 나타난다는 것<br/>
        제2가 나타난다는 건<br/>
        제1이 존재한다는 것
    </p>
    <p>
        제1이 사라진다는 건<br/>
        제1이 존재한다는 것
    </p>
</Post>