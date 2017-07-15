import './style.css'
import axios from 'axios'

import move from './modules/move'
import onkeydown from './modules/onkeydown'

axios.defaults.baseURL = 'http://gynvael.coldwind.pl/misja008_drone_io/scans/'
axios.defaults.timeout = 1000

window.addEventListener('keydown', onkeydown)

move('start')
