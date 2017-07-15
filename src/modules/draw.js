const canvas = document.querySelector('.map')
const ctx = canvas.getContext('2d')

const scale = 6
const previousMove = {}

export default function draw(data) {

	const center = {
		x: data.position.x * scale,
		y: data.position.y * scale
	}

	// walls
	data.radar.forEach((info, index) => {
		const wall = {
			x: center.x + Math.sin(info.rad) * info.dist * scale,
			y: center.y - Math.cos(info.rad) * info.dist * scale
		}

		// draw clockwise
		window.setTimeout(() => {

			// if dist != infinity
			if (info.dist) {
				ctx.fillStyle = 'rgb(72, 218, 13)'
				ctx.fillRect(wall.x, wall.y, 1, 1)
			}

		}, index * 10)

	})

	// drone
	ctx.fillStyle = 'rgb(255, 99, 71)';
	ctx.fillRect(center.x + 2, center.y + 2, 4, 4)

	if (previousMove) {
		ctx.fillStyle = 'rgb(34, 34, 34)';
		ctx.fillRect(previousMove.x + 2, previousMove.y + 2, 4, 4)
	}

	previousMove.x = center.x
	previousMove.y = center.y
}
