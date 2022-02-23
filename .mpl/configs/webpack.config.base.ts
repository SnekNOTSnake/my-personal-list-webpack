import { Configuration } from 'webpack'
import { srcPath } from './webpack.paths'

const baseConfig: Configuration = {
	stats: 'errors-only',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		modules: [srcPath, 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
					// Remove this line to enable type checking in webpack builds
					options: { transpileOnly: true },
				},
			},
		],
	},
}

export default baseConfig
