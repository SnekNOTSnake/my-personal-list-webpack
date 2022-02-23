import React from 'react'
import { Link, LinkProps, useRoute } from 'wouter'

import styles from './ActiveLink.module.css'

const ActiveLink: React.FC<LinkProps> = (props) => {
	const [isActive] = useRoute(props.to!)

	return (
		<Link {...props} className={isActive ? styles.active : ''}>
			{props.children}
		</Link>
	)
}

export default ActiveLink
