<script>
	/**
	 * @type {boolean}
	 */
	export let completed;

	/**
	 * @type {string}
	 */
	export let content;
</script>

<button on:click class:completed>
	{content}
</button>

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
