import path from 'path'
import { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.config.base'
import { srcMainPath, distMainPath } from './webpack.paths'
import deleteSourceMaps from '../scripts/delete-source-maps'

deleteSourceMaps()

const mainConfig: Configuration = {
	mode: 'production',
	target: 'electron-main',
	devtool: 'source-map',
	entry: {
		main: path.join(srcMainPath, 'main.ts'),
		preload: path.join(srcMainPath, 'preload.ts'),
	},
	output: {
		path: distMainPath,
		filename: '[name].js',
	},
	optimization: {
		minimizer: [new TerserPlugin({ parallel: true })],
	},
}

export default merge(baseConfig, mainConfig)
