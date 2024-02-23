import { writable } from 'svelte/store';

export const my_store = my_writable(1);

my_store.subscribe((value) => {
	console.log(value);
});

my_store.set(19);

function my_writable(iv) {
	const subscribers = new Set();
	let value = iv;
	return {
		subscribe(runner) {
			subscribers.add(runner);
			runner(value);
			return () => {
				subscribers.delete(runner);
			};
		},
		set(new_value) {
			subscribers.forEach((runner) => {
				runner(new_value);
				value = new_value;
			});
		},
		plus_plus() {
			value++;
			subscribers.forEach((runner) => {
				runner(value);
			});
		}
	};
}
