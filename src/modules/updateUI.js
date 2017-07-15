import state from '../state'

const distanceEl = document.querySelector('.distance')
const positionXEl = document.querySelector('.position-x')
const positionYEl = document.querySelector('.position-y')

export default function updateUI(data) {
	positionYEl.textContent = data.position.y
	positionXEl.textContent = data.position.x
	distanceEl.textContent = state.moveCounter
}
