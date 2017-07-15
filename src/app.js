import './style.css'
import axios from 'axios'
import parseResposne from './modules/parseResponse'
import draw from './modules/draw'
import showError from './modules/showError'

axios.defaults.baseURL = 'http://gynvael.coldwind.pl/misja008_drone_io/scans/'
axios.defaults.timeout = 1000

let canMove = false
let currentMoveLink = {
	start: '68eb1a7625837e38d55c54dc99257a17.txt'
}

window.addEventListener('keydown', e => {

	if (!canMove) return
	canMove = false

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
})

function move(dir) {

	const link = currentMoveLink[dir]
	if (link === 'not possible') {
		canMove = true
		showError('Ściana!')
		return
	}

	axios.get(link).then(res => {
		return parseResposne(res)
	}).then(data => {
		currentMoveLink = data.moveLink
		canMove = true
		draw(data)
	}).catch(err => {
		canMove = true
		showError('Błąd pobierania danych!')
		console.error(err)
	})
}

move('start')
