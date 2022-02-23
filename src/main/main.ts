import { app, BrowserWindow, shell } from 'electron'
import path from 'path'
import { resolveHtmlPath } from './util'

let win: BrowserWindow | null = null

const createWindow = () => {
	const RESOURCE_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(__dirname, '../../assets')

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCE_PATH, ...paths)
	}

	win = new BrowserWindow({
		show: false,
		width: 1024,
		height: 768,
		icon: getAssetPath('icon.png'),
	})

	win.loadURL(resolveHtmlPath('index.html'))

	win.on('ready-to-show', () => {
		if (!win) throw new Error('"mainWindow" is not defined')

		if (process.env.START_MINIMIZED) win.minimize()
		else win.show()
	})

	win.on('closed', () => (win = null))

	// Open URLs in the user's browser
	win.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url)
		return { action: 'deny' }
	})
}

app.on('window-all-closed', () => {
	// Respect the OSX convention of having the application in memory even
	// after all windows have been closed
	if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
	createWindow()

	app.on('activate', () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (win === null) createWindow()
	})
})
