import React from 'react'
import { Link, LinkProps, useRoute } from 'wouter'

import styles from './ActiveLink.module.css'

const ActiveLink: React.FC<LinkProps> = (props) => {
	const [isActive] = useRoute(props.to!)

	return (
		<Link {...props}>
			<a className={isActive ? styles.active : ''}>{props.children}</a>
		</Link>
	)
}

export default ActiveLink
