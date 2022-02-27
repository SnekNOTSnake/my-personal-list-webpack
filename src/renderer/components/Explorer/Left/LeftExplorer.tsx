import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'

import styles from './LeftExplorer.module.css'

const genres = [
	'Action',
	'Adventure',
	'Drama',
	'Romance',
	'Slice of life',
	'Supernatural',
	'Untagged',
]

const LeftExplorer: React.FC = () => (
	<div className={styles.left}>
		<div className={styles.clear}>
			<button type='button'>
				<MdDeleteOutline className={styles.icon} /> Clear
			</button>
		</div>
		<div className={styles.genres}>
			<ul>
				{genres.map((genre, i) => (
					<li
						key={i}
						className={i === 1 ? styles.active : i === 3 ? styles.disabled : ''}
					>
						{genre} <div className={styles.grow} /> <span>24</span>
					</li>
				))}
			</ul>
		</div>
	</div>
)

export default LeftExplorer
