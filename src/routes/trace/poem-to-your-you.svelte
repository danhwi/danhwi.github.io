<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '너의 너에게';
    let create = '2014-06-19';
    let link = 'poem-to-your-you';
</script>

<Post {category} {title} {create} {link}>
    <p>
        기나긴 시간을<br/>
        너는 어째서<br/>
        너를 등지고 걸어가는가
    </p>
    <p>
        떠나가는가<br/>
        이 나의 세상에서<br/>
        너를 남긴 채 너는<br/>
        이대로 떠나가는가
    </p>
    <p>
        떠나야만 했는가<br/>
        아니 떠나야만 하는가
    </p>
    <p>
        네가 있을 곳은 이곳<br/>
        지금 이곳에 있는데<br/>
        너는 어째서
    </p>
    <p>
        공허한 마음에<br/>
        너는 어째서<br/>
        너를 등지고 걸어가는가
    </p>
</Post>