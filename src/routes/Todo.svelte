<script>
	/**
	 * @type {string}
	 */
	export let id;

	/**
	 * @type {boolean}
	 */
	export let completed;

	/**
	 * @type {string}
	 */
	export let content;
</script>

<button value={id} name="id" class:completed>
	{content}
</button><a href="/todo/{id}">Edit</a>

<style>
	button {
		all: unset;
		display: block;
		color: red;
	}
	button:focus-visible {
		outline: 1px solid red;
	}
	.completed {
		text-decoration: line-through;
	}
</style>
