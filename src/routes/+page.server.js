const todos = [
	{
		content: 'Learn HTML',
		completed: true
	},
	{
		content: 'Learn CSS',
		completed: false
	},
	{
		content: 'Learn JS',
		completed: false
	}
];

export async function load() {
	return { todos };
}

export const actions = {
	async add({ request }) {
		const data = await request.formData();
		const new_todo_content = data.get('new_todo');
		if (new_todo_content) {
			todos.push({
				content: new_todo_content.toString(),
				completed: false
			});
		}
	}
};
