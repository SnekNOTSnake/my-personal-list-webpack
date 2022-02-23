import path from 'path'

export const rootPath = path.join(__dirname, '../..')

export const srcPath = path.join(rootPath, 'src')
export const srcMainPath = path.join(srcPath, 'main')
export const srcRendererPath = path.join(srcPath, 'renderer')

export const releasePath = path.join(rootPath, 'release')
export const appPath = path.join(releasePath, 'app')

export const distPath = path.join(appPath, 'dist')
export const distMainPath = path.join(distPath, 'main')
export const distRendererPath = path.join(distPath, 'renderer')

export const buildPath = path.join(releasePath, 'build')
