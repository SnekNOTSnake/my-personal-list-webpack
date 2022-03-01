import React from 'react'
import {
	MdOutlineSpaceDashboard,
	MdOutlineExplore,
	MdOutlineAccountCircle,
	MdOutlineEventNote,
} from 'react-icons/md'

import ActiveLink from '../ActiveLink'
import styles from './Navigation.module.css'

const Navigation: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.menu}>
				<ul>
					<li>
						<ActiveLink to='/'>
							<MdOutlineSpaceDashboard className={styles.icon} />
						</ActiveLink>
					</li>
					<li>
						<ActiveLink to='/explore'>
							<MdOutlineExplore className={styles.icon} />
						</ActiveLink>
					</li>
					<li>
						<ActiveLink to='/schedule'>
							<MdOutlineEventNote className={styles.icon} />
						</ActiveLink>
					</li>
				</ul>

				<div className={styles.settings}>
					<a>
						<MdOutlineAccountCircle className={styles.icon} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navigation
