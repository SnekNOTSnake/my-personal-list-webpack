import rimraf from 'rimraf'
import { buildPath, distPath } from '../configs/webpack.paths'

const args = process.argv.slice(2)
const commandMap = {
	dist: distPath,
	build: buildPath,
}

if (args.length > 0) {
	args.forEach((arg) => {
		const pathToRemove = commandMap[arg]
		if (pathToRemove) rimraf.sync(pathToRemove)
	})
} else {
	Object.values(commandMap).forEach((val) => rimraf.sync(val))
}
