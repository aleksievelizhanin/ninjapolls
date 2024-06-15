import { writable } from "svelte/store";

const pollStore = writable([
    { id: 1, question: 'Java or Scala', answerA: 'Java', answerB: 'Scala', votesA: 3, votesB: 7}
]);

export default pollStore;