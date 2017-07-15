import state from '../state'
import move from './move'

export default function keydownHandler(e) {

	e.preventDefault()

	if (!state.canMove) return
	state.canMove = false

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
	}
}
