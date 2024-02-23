import { error } from '@sveltejs/kit';
import { todos } from '../../db.js';

export function load({ params: { id } }) {
	const todo = todos.find((todo) => todo.id === id);
	if (!todo) {
		error(404);
	}
	return { todo };
}
