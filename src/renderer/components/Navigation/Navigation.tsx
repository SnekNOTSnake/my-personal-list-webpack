import React from 'react'
import {
	MdOutlineSpaceDashboard,
	MdOutlineExplore,
	MdOutlineSettings,
} from 'react-icons/md'

import Search from '../Search/Search'
import ActiveLink from '../ActiveLink'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
	return (
		<div className={styles.root}>
			<h2>My Personal List</h2>

			<ul>
				<li>
					<ActiveLink to='/'>
						<MdOutlineSpaceDashboard className={styles.icon} /> Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink to='/explore'>
						<MdOutlineExplore className={styles.icon} /> Explore
					</ActiveLink>
				</li>
			</ul>

			<Search />

			<div className={styles.settings}>
				<ActiveLink to='/settings'>
					<MdOutlineSettings className={styles.icon} /> Settings
				</ActiveLink>
			</div>
		</div>
	)
}

export default Navigation
