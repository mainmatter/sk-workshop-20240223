/**
 *
 * @param {HTMLElement} element
 * @param {string} param
 */
export function test(element, param) {
	let to_log = param;
	const listener = () => {
		console.log('submitting', to_log);
	};
	element.addEventListener('submit', listener);
	return {
		/**
		 *
		 * @param {string} new_val
		 */
		update(new_val) {
			to_log = new_val;
		},
		destroy() {
			element.removeEventListener('submit', listener);
		}
	};
}
