<script>
    import Post from '../../components/Post.svelte';

    let category = 'trace';
    let title = '회상';
    let create = '2014-07-16';
    let link = 'poem-reminiscence';
</script>

<Post {category} {title} {create} {link}>
    <p>
        항상 그랬지<br/>
        너울가지가 좋아<br/>
        주변 사람 모두와<br/>
        너나들이로 지내는 듯<br/>
        그래 보였지
    </p>    
    <p>
        자기 깜냥도 모른 채<br/>
        헤살꾼처럼 굴던<br/>
        이런 나와는 다르게<br/>
        정말 웅숭깊었지
    </p>    
    <p>
        시나브로 변해가는 계절<br/>
        그 속에서 우리도<br/>
        그렇게 변해가는데
    </p>    
    <p>
        아직도 내 안에는<br/>
        그 시절이 남아있더라
    </p>    
    <p>
        좋아했던 마음 그대로
    </p>
</Post>