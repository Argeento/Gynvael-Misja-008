import './style.css'
import axios from 'axios'
import parseResposne from './modules/parseResponse'

axios.defaults.baseURL = 'http://gynvael.coldwind.pl/misja008_drone_io/scans/'

let canMove = false
let currentMoveLink = {
	start: '68eb1a7625837e38d55c54dc99257a17.txt'
}

const dir = 'start'
const link = currentMoveLink[dir]

axios.get(link).then(res => {
	return parseResposne(res)
}).then(data => {
	currentMoveLink = data.moveLink
	canMove = true
	console.log(data)
})
