<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '어느 甲午年의 꽃';
    let create = '2014-07-31';
    let link = 'poem-flower-of-the-year-of-the-blue-horse';
</script>

<Post {category} {title} {create} {link}>
    <p>
        꽃이 피는 계절<br/>
        소년소녀와 같은 꽃들이<br/>
        그 동네에는 피어나고 있었다
    </p>    
    <p>
        한창 피어나던 찰나에<br/>
        꽃은 시들어 버렸다<br/>
        너무 많은 물에<br/>
        버티지 못한 꽃은<br/>
        사회의 근본과 같은<br/>
        썩어버린 뿌리 때문에<br/>
        빛이 바랜 채 사라져 간다
    </p>    
    <p>
        아직 꽃이 피던 계절<br/>
        그러나 그 동네의 꽃은<br/>
        어여쁜 소년소녀와 같은 꽃은<br/>
        그 날 이후로 사라져 버렸다
    </p>    
    <p>
        너는 보았는가<br/>
        몇 송이 남지 않은 꽃의 슬픔을<br/>
        그리고 그 고통을<br/>
        너는 느낄 수 있는가<br/>
        18세 청춘과도 같은<br/>
        몇 남지 않고 시들어 버린<br/>
        그 동네 그 꽃의 마음을
    </p>
</Post>