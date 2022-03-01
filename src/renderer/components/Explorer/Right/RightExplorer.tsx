import React, { useMemo, useState } from 'react'
import { MdSearch, MdOutlineExpandMore } from 'react-icons/md'

import styles from './RightExplorer.module.css'

const animeTitles = [
	'Mushi-shi',
	'Sakura-trick',
	'Seikon no Qwaser',
	'Kino no Tabi',
	'Little Witch Academia',
	'Made in Abyss',
	'Princess Connect',
	'Shoujo Shuumatsu Ryokou',
	'Sora no Woto',
	'Urasekai Picnic',
	'Yuru Camp',
]

const RightExplorer: React.FC = () => {
	const [search, setSearch] = useState('')

	const onSearchChange = (e: InputChange) => setSearch(e.currentTarget.value)

	const titles = useMemo(() => {
		return animeTitles.filter((title) => {
			return title.toLowerCase().startsWith(search.toLowerCase())
		})
	}, [search])

	return (
		<div className={styles.root}>
			<div className={styles.search}>
				<input
					type='search'
					placeholder='Search'
					value={search}
					onChange={onSearchChange}
				/>
				<MdSearch className={styles.icon} />
			</div>
			<div className={styles.order}>
				Title
				<MdOutlineExpandMore className={styles.icon} />
			</div>
			<div className={styles.titles}>
				<ul>
					{titles.map((title, i) => (
						<li key={i} className={i === 1 ? styles.active : ''}>
							{title}
						</li>
					))}
				</ul>
			</div>
			<div className={styles.matches}>{titles.length} Items</div>
		</div>
	)
}

export default RightExplorer
