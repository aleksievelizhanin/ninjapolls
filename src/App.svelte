<script>
    import Footer from "./components/Footer.svelte";
	import Header from "./components/Header.svelte";
    import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
    import PollList from "./components/PollList.svelte";

	let items = ['Polls', 'Add new one'];
	let activeItem = 'Polls';
	const changeTab = (e) => {
		activeItem = e.detail;
	}
	const handleAddPoll = (e) => {
		activeItem = 'Polls';
	}
	const handleVote = (e) => {

	}
</script>

<Header></Header>

<main>
	<Tabs {items} {activeItem} on:tabChange={changeTab}></Tabs>
	{#if activeItem === 'Polls'}
		<PollList />
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