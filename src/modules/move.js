import axios from 'axios'

import draw from './draw'
import state from '../state'
import showError from './showError'
import parseResposne from './parseResponse'

export default function move(dir) {

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
		draw(data)
	}).catch(err => {
		state.canMove = true
		showError('Błąd pobierania danych!')
		console.error(err)
	})
}
