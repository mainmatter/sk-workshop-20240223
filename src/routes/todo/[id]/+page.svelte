<script>
	export let data;
	export let form;
</script>

<form method="post" action="?/edit">
	<input type="text" name="content" value={data.todo.content} />
	<input type="checkbox" name="completed" checked={data.todo.completed} />
	<button>Save</button>
</form>
{#if form && form.message}
	<p>
		Errors: {form?.message}
	</p>
{/if}
