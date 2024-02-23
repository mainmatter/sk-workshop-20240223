import { error, fail, redirect } from '@sveltejs/kit';
import { todos } from '../../db.js';

export function load({ params: { id } }) {
	const todo = todos.find((todo) => todo.id === id);
	if (!todo) {
		error(404);
	}
	return { todo };
}

export const actions = {
	async edit({ request, params: { id } }) {
		const data = await request.formData();
		const content = data.get('content');
		const completed = data.has('completed');
		const todo = todos.find((todo) => todo.id === id);
		if (completed == null)
			return fail(400, {
				message: 'No completed provided'
			});
		if (!content)
			return fail(400, {
				message: 'No content provided'
			});

		if (todo) {
			console.log(completed);
			todo.completed = completed;
			todo.content = content.toString();
			redirect(302, '/');
		}
	}
};
