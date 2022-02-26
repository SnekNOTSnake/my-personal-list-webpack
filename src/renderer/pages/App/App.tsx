import React from 'react'
import { Switch, Route } from 'wouter'

import Layout from '../../components/Layout'
import Home from '../Home'
import Explore from '../Explore'

const App: React.FC = () => (
	<Layout>
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/explore' component={Explore} />
		</Switch>
	</Layout>
)

export default App
