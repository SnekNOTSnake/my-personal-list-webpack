import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './pages/App'
import { initializeSettings } from './util/settings'
import '@fontsource/roboto'
import './index.css'

initializeSettings()

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.querySelector('#root'),
)
