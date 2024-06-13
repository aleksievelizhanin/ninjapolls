<script>
    import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
    import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
    import PollList from "./components/PollList.svelte";

	let items = ['Polls', 'Add new one'];
	let polls = [];
	let activeItem = 'Polls';
	const changeTab = (e) => {
		activeItem = e.detail;
	}
	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = 'Polls';
		console.log(polls);
	}
	const handleVote = (e) => {
		const { id, option } = e.detail;
		const copyPolls = [...polls];
		const updatedPoll = copyPolls.find((item) => item.id == id );
		if (option === 'a') {
			updatedPoll.votesA++;
		}
		if (option === 'b') {
			updatedPoll.votesB++;
		}

		polls = copyPolls;
	}
</script>

<Header></Header>

<main>
	<Tabs {items} {activeItem} on:tabChange={changeTab}></Tabs>
	{#if activeItem === 'Polls'}
		<PollList {polls} on:Vote={handleVote}/>
	{:else if activeItem === 'Add new one'}	
		<CreatePollForm on:addPoll={handleAddPoll}></CreatePollForm>
	{/if}
</main>

<Footer></Footer>

<style>
	main{
		max-width: 960px;
		margin: 40px;
	}
</style>