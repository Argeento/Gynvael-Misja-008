const errorEl = document.querySelector('.error')

export default function showError(msg) {
	errorEl.textContent = msg

	window.setTimeout(() => {
		errorEl.textContent = ''
	}, 1200)
}
