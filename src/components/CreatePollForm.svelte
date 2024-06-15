<script>
    import Button from "../shared/Button.svelte";
    import { createEventDispatcher } from "svelte";
    import pollStore from "../stores/PollStore";
    let dispatch = createEventDispatcher();
    let fields = { question: '', answerA: '', answerB: '' };
    let errors = { question: '', answerA: '', answerB: '' };
    let valid = false;

    const submitHandler = () => {
        valid = true;
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least 5 characters long'
        } else {
            errors.question = '';
        }
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = 'Answer A must not be empty'
        } else {
            errors.answerA = '';
        }
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = 'Answer B must not be empty'
        } else {
            errors.answerB = '';
        }
        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
            pollStore.update(currentPolls => [poll, ...currentPolls])
            dispatch('addPoll');
        }
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answerA">Answer A:</label>
        <input type="text" id="answerA" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answerB">Answer B:</label>
        <input type="text" id="answerB" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button buttonType="secondary" flat={true} inverse={false}>Add Polls</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>