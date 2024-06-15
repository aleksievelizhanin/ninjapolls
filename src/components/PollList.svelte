<script>
    import PollDetails from "./PollDetails.svelte";
    import { subscribe } from "svelte/internal";
    import pollStore from "../stores/PollStore"

    export let polls = [];
    subscribe(pollStore, (data) => {
        polls = data;
    })


</script>

<div class="poll-list">
    {#each polls as poll}
        <PollDetails {poll} on:Vote />    
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

</style>