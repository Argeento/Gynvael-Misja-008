const mapEl = document.querySelector('.map')
const droneEl = document.querySelector('.drone')
const scale = 4

export default function draw(data) {

	const center = {
		x: data.position.x * scale,
		y: data.position.y * scale
	}

	// drone
	droneEl.style.transform = `translate(${ center.x - 1 }px, ${ center.y - 1 }px)`
	window.setTimeout(() => {
		droneEl.classList.add('drone--transition')
	}, 360)

	// walls
	data.radar.forEach((info, index) => {
		const wall = {
			x: center.x + Math.sin(info.rad) * info.dist * scale,
			y: center.y - Math.cos(info.rad) * info.dist * scale
		}

		const wallEl = document.createElement('div')
		wallEl.classList.add('wall')
		wallEl.style.transform = `translate(${ wall.x }px, ${ wall.y }px)`
		mapEl.appendChild(wallEl)

		// if dist = infinity
		if (!info.dist) wallEl.classList.add('wall--hidden')

		// draw clockwise
		window.setTimeout(() => {
			wallEl.classList.add('wall--visible')
		}, index * 10)

	})
}
