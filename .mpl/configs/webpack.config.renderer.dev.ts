import path from 'path'
import { spawn } from 'child_process'
import { Configuration } from 'webpack'
import _ from 'webpack-dev-server'
import { merge } from 'webpack-merge'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import baseConfig from './webpack.config.base'
import { distRendererPath, srcRendererPath } from './webpack.paths'

const PORT = process.env.PORT || 8000

const rendererConfigDev: Configuration = {
	mode: 'development',
	devtool: 'inline-source-map',
	target: ['web', 'electron-renderer'],
	entry: [path.join(srcRendererPath, 'index.tsx')],
	output: {
		path: distRendererPath,
		filename: 'renderer.dev.js',
		publicPath: '/',
	},
	devServer: {
		port: PORT,
		hot: true,
		historyApiFallback: true,
		onBeforeSetupMiddleware: () => {
			console.log('Starting main process ...')
			spawn('yarn', ['run', 'start:main'], {
				shell: true,
				env: process.env,
				stdio: 'inherit',
			})
				.on('close', (code) => process.exit(code))
				.on('error', (error) => console.error(error))
		},
	},
	module: {
		rules: [
			{
				test: /\.module\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules: true, sourceMap: true },
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /\.module\.css$/,
			},
			// Images
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(srcRendererPath, 'index.ejs'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
			},
		}),
	],
}

export default merge(baseConfig, rendererConfigDev)
