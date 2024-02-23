<script>
	import { enhance } from '$app/forms';
	import Todo from './Todo.svelte';

	export let data;

	$: todos = data.todos;
	$: completed_todos = todos.filter((todo) => todo.completed).length;
</script>

<form
	use:enhance={({ formData, cancel }) => {
		const new_todo = formData.get('new_todo');
		if (!new_todo) {
			alert('You need to submit something!');
			cancel();
		}
	}}
	method="post"
	action="?/add"
>
	<input name="new_todo" /><button>Add todo</button>
</form>
<div>
	Completed: {completed_todos}
</div>
<form use:enhance method="post" action="?/toggle">
	{#each todos as todo}
		<Todo {...todo} />
	{/each}
</form>

<marquee>I'm the best tag ever</marquee>
