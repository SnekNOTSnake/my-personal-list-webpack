import React from 'react'
import { Switch, Route } from 'wouter'

import Layout from '../../components/Layout'
import Home from '../Home'
import Explore from '../Explore'
import Settings from '../Settings'

const App: React.FC = () => (
	<Layout>
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/explore' component={Explore} />
			<Route path='/settings' component={Settings} />
		</Switch>
	</Layout>
)

export default App
