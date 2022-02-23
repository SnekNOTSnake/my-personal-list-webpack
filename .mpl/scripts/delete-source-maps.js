import path from 'path'
import rimraf from 'rimraf'
import { distMainPath, distRendererPath } from '../configs/webpack.paths'

export default function deleteSourceMaps() {
	rimraf.sync(path.join(distMainPath, '*.js.map'))
	rimraf.sync(path.join(distRendererPath, '*.js.map'))
}
