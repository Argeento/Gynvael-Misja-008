import axios from 'axios'

import draw from './draw'
import state from '../state'
import updateUI from './updateUI'
import showError from './showError'
import parseResposne from './parseResponse'

export default function move(dir) {

	state.canMove = false

	const link = state.moveLink[dir]
	if (link === 'not possible') {
		state.canMove = true
		showError('Ściana!')
		return
	}

	axios.get(link).then(res => {
		return parseResposne(res)
	}).then(data => {
		state.moveLink = data.moveLink
		state.canMove = true
		state.moveCounter += 1
		draw(data)
		updateUI(data)
	}).catch(err => {
		state.canMove = true
		showError('Błąd pobierania danych!')
		console.error(err)

		if (dir === 'start') {
			window.setTimeout(() => {
				move('start')
			}, 1500)
		}
	})
}
