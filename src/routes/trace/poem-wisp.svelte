<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '도깨비불';
    let create = '2022-06-10';
    let link = 'poem-wisp';
</script>

<Post {category} {title} {create} {link}>
    <p>
        널 사랑했는지<br/>
        널 사랑하는 날 사랑했는지<br/>
        이제 와서는 아무것도 떠오르지 않지만<br/>
        우리가 함께 한 시간을 사랑한다
    </p>    
    <p>
        널 기억하는지<br/>
        널 기억한다 난 착각하는지<br/>
        가끔 스치는 조그마한 기억들을 느끼며
    </p>    
    <p>
        무엇이 우리를 이리로 이끌었는지<br/>
        우리의 추억이란 존재하긴 하는지<br/>
        모든 게 다 공상같아
    </p>    
    <p>
        오늘도 널 그저 그려 본다
    </p>
</Post>