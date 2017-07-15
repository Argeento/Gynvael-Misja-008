import state from '../state'
import move from './move'

export default function keydownHandler(e) {
	if (!state.canMove) return
	state.canMove = false

	let preventDefault = true
	switch(e.keyCode) {
		case 40:
			move('down')
		break
		case 38:
			move('up')
		break
		case 37:
			move('left')
		break
		case 39:
			move('right')
		break
		default:
			preventDefault = false
	}

	if (preventDefault) {
		e.preventDefault()
	}
}
