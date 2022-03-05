import path from 'path'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'
import baseConfig from './webpack.config.base'
import { distRendererPath, srcRendererPath } from './webpack.paths'
import deleteSourceMaps from '../scripts/delete-source-maps'
import TerserPlugin from 'terser-webpack-plugin'

deleteSourceMaps()

const rendererConfigProd: Configuration = {
	mode: 'production',
	target: ['web', 'electron-renderer'],
	entry: [path.join(srcRendererPath, 'index.tsx')],
	devtool: 'source-map',
	output: {
		path: distRendererPath,
		filename: 'renderer.js',
		publicPath: '/',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({ parallel: true }),
			new CssMinimizerWebpackPlugin(),
		],
	},
	module: {
		rules: [
			{
				test: /\.module\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { modules: true, sourceMap: true },
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
		new MiniCssExtractPlugin({ filename: 'style.css' }),
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

export default merge(baseConfig, rendererConfigProd)
