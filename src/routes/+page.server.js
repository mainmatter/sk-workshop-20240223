import { todos } from './db.js';

export async function load() {
	return { todos };
}

export const actions = {
	async add({ request }) {
		const data = await request.formData();
		const new_todo_content = data.get('new_todo');
		if (new_todo_content) {
			todos.push({
				id: crypto.randomUUID(),
				content: new_todo_content.toString(),
				completed: false
			});
			return {
				success: true
			};
		}
		return { success: false, reason: 'no todo' };
	},
	async toggle({ request }) {
		const data = await request.formData();
		const id = data.get('id');
		const todo = todos.find((todo) => todo.id === id);
		if (todo) {
			todo.completed = !todo.completed;
		}
	}
};
