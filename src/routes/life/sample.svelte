<script>
    import Post from '../../components/Post.svelte';

    let category = 'life';
    let title = '제목인가';
    let create = '2021-11-10';
</script>

<Post {category} {title} {create}>
    <p>내용</p>
</Post>