<script>
    import Card from "../shared/Card.svelte";
    import pollStore from "../stores/PollStore";
    export let poll;

    const handleVote = (option, id) => {
        pollStore.update(currentPolls => {
            const copyPolls = [...currentPolls];
		    const updatedPoll = copyPolls.find((item) => item.id == id );
            if (option === 'a') {
                updatedPoll.votesA++;
            }
            if (option === 'b') {
                updatedPoll.votesB++;
            }
            return copyPolls;
        })
    }
    
    $: totalVotes = poll.votesA + poll.votesB;
    $: persentA = Math.floor(100/totalVotes*poll.votesA);
    $: persentB = Math.floor(100/totalVotes*poll.votesB);
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: { totalVotes }</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="persent persent-a" style="width: {persentA}%;"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="persent persent-b" style="width: {persentB}%;"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px; 
    }
    .persent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .persent-a {
        background: rgba(217, 67, 26, 0.2);
        border-left: 4px solid  #d91b42;  
    }
    .persent-b {
        background: rgba(69, 196, 150, 0.2);
        border-left: 4px solid #45c496
    }
</style>