export default function parseResposne(res) {
  // get lines
  const lines = res.data.split('\n')

  // remove info
  lines.shift()

  // get position
  const [x, y] = lines[0].split(' ').map(nr => window.parseInt(nr))

  // get radar info
  const radar = []
  for (let i = 0; i < 36; i++) {
    radar.push({
      rad: i * 10 * Math.PI / 180,
      dist: window.parseFloat(lines[i + 1])
    })
  }

  // get available moves
  const getLink = line => line.replace(/[^ ]* /, '')
  const moveLink = {
    right: getLink(lines[37]),
    left: getLink(lines[38]),
    down: getLink(lines[39]),
    up: getLink(lines[40])
  }

  return {
    moveLink,
    radar,
    position: { x, y }
  }
}
