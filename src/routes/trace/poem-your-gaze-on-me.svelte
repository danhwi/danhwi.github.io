<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '나를 보는 너의 시선';
    let create = '2014-07-09';
    let link = 'poem-your-gaze-on-me';
</script>

<Post {category} {title} {create} {link}>
    <p>
        내가 너를 보았는지는<br/>
        그것은 확신할 수 없지만<br/>
        한 가지 확실한 건<br/>
        너는 나를 보았다
    </p>    
    <p>
        너는 나를 멍하니<br/>
        그저 그렇게 바라보며<br/>
        혼자 가만히 나에 대해<br/>
        깊이 생각하고 있었다
    </p>    
    <p>
        그 때 내가 무엇을 하고 있었는가<br/>
        그것은 알 수 없다<br/>
        네가 보기에 나의 모습은<br/>
        그저 이상해보일 뿐<br/>
        무엇을 하고 있었는지는 알 수 없다
    </p>    
    <p>
        너는 나를 이해할 수 없었다<br/>
        때로는 나를 보며<br/>
        미쳤다고 중얼거리기도<br/>
        나의 말을 듣지 않고<br/>
        외면하기도 하였다<br/>
        사실 너는<br/>
        나의 말을 알아듣지 못했다<br/>
        그 의미를 알 수 없었다<br/>
        무의미하다고 여기며 넘겼다
    </p>    
    <p>
        너는 나를 보며 그랬다<br/>
        그리고 지금 이 순간<br/>
        너는 나를 보며 그런다
    </p>    
</Post>