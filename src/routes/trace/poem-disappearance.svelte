<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '소실';
    let create = '2014-06-20';
    let link = 'poem-disappearance';
</script>

<Post {category} {title} {create} {link}>
    <p>
        시간은<br/>
        흘러간 뒤에야 보이더구나
    </p>
    <p>
        우리가 함께 한 시간<br/>
        너무나 빨리 지나간 추억들<br/>
        그 모든 것이 나는<br/>
        한참 뒤에야 보이더구나
    </p>
    <p>
        진실은<br/>
        밝혀진 뒤에야 보이더구나
    </p>
    <p>
        결코 알지 못한 진실<br/>
        그렇기에 쌓여가던 오해가<br/>
        한참 뒤에야 겨우 보이더구나
    </p>
    <p>
        기회는<br/>
        지나간 뒤에야 보이더구나<br/>
        희망은 행복은 소중한 것들은<br/>
    </p>
    <p>
        그것은 전부<br/>
        사라진 뒤에야 보이더구나
    </p>
</Post>