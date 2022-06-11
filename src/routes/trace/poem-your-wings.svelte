<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '너의 날개를';
    let create = '2014-06-24';
    let link = 'poem-your-wings';
</script>

<Post {category} {title} {create} {link}>
    <p>
        너는 분명<br/>
        날개를 가지고 싶댔지
    </p>    
    <p>
        네 바람대로<br/>
        저 하늘을 날고 싶댔지<br/>
        저 하늘 높이 날아가고 싶댔지
    </p>    
    <p>
        허나 너는<br/>
        중요한 것을 하나 잊고 있었지<br/>
        네 등에는 이미 날개가 있다는 것을
    </p>    
    <p>
        네 바람대로―라니<br/>
        그것이 진정 너의 바람이었다면<br/>
        날아갈 수 있었을 터인데
    </p>    
    <p>
        너는 분명<br/>
        날개를 가지고 있었지<br/>
        너의 심의가 닿지 않는<br/>
        퇴화되어 버린 작은 날개를
    </p>    
</Post>