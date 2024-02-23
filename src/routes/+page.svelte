<script>
	import Todo from './Todo.svelte';

	export let data;

	$: todos = data.todos;
	$: completed_todos = todos.filter((todo) => todo.completed).length;
</script>

<form method="post" action="?/add">
	<input name="new_todo" /><button>Add todo</button>
</form>
<div>
	Completed: {completed_todos}
</div>
{#each todos as todo}
	<Todo
		on:click={() => {
			todo.completed = !todo.completed;
			todos = todos;
		}}
		{...todo}
	/>
{/each}

<a href="/about">About</a>
