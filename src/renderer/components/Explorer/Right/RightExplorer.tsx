import React from 'react'
import { MdSearch, MdOutlineExpandMore } from 'react-icons/md'

import styles from './RightExplorer.module.css'

const RightExplorer: React.FC = () => (
	<div className={styles.root}>
		<div className={styles.search}>
			<input type='search' placeholder='Search' />
			<MdSearch className={styles.icon} />
		</div>
		<div className={styles.order}>
			Title
			<MdOutlineExpandMore className={styles.icon} />
		</div>
		<div className={styles.titles}>
			<ul>
				<li>Mushi-shi</li>
				<li className={styles.active}>Sakura Trick</li>
				<li>Seikon no Qwaser</li>
				<li>Goblin Slayer</li>
				<li>Kino no Tabi</li>
				<li>Little Witch Academia</li>
				<li>Made in Abyss</li>
				<li>Princess Connect!</li>
				<li>Shoujo Shuumatsu Ryokou</li>
				<li>Sora no Woto</li>
				<li>Urasekai Picnic</li>
				<li>Yuru Camp</li>
				<li>Mushi-shi</li>
				<li>Sakura Trick</li>
				<li>Seikon no Qwaser</li>
				<li>Goblin Slayer</li>
				<li>Kino no Tabi</li>
				<li>Little Witch Academia</li>
				<li>Made in Abyss</li>
				<li>Princess Connect!</li>
				<li>Shoujo Shuumatsu Ryokou</li>
				<li>Sora no Woto</li>
				<li>Urasekai Picnic</li>
				<li>Yuru Camp</li>
				<li>Mushi-shi</li>
				<li>Sakura Trick</li>
				<li>Seikon no Qwaser</li>
				<li>Goblin Slayer</li>
				<li>Kino no Tabi</li>
				<li>Little Witch Academia</li>
				<li>Made in Abyss</li>
				<li>Princess Connect!</li>
				<li>Shoujo Shuumatsu Ryokou</li>
				<li>Sora no Woto</li>
				<li>Urasekai Picnic</li>
				<li>Yuru Camp</li>
				<li>Mushi-shi</li>
				<li>Sakura Trick</li>
				<li>Seikon no Qwaser</li>
				<li>Goblin Slayer</li>
				<li>Kino no Tabi</li>
				<li>Little Witch Academia</li>
				<li>Made in Abyss</li>
				<li>Princess Connect!</li>
				<li>Shoujo Shuumatsu Ryokou</li>
				<li>Sora no Woto</li>
				<li>Urasekai Picnic</li>
				<li>Yuru Camp</li>
			</ul>
		</div>
		<div className={styles.matches}>87 Items</div>
	</div>
)

export default RightExplorer
