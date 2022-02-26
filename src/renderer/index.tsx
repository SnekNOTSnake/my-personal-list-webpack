import React from 'react'
import ReactDOM from 'react-dom'

import App from './pages/App'
import { initializeSettings } from './util/settings'
import '@fontsource/roboto'
import './index.css'

initializeSettings()

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root'),
)
