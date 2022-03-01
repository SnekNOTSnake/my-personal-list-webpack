import React from 'react'

import AnimeDetails from './Details'
import EditAnimeDetails from './Edit'
import styles from './Container.module.css'

const data = {
	title: 'Seikon no Qwaser',
	tags: ['action', 'ecchi', 'super-power'],
	epsNum: 12,
	epsWatched: 12,
	rewatchCount: 1,
	suspended: false,
	encoder: 'dedsec',
	source: 'AnimeKaizoku',
	quality: 'bd',
	res: 720,
	video: 'H.265 HEVC 10-bit',
	audio: 'AAC Dual 128kbps',
	subtitle: 'Subsplease',
	container: 'mkv',
	duration: 24,
	notes:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod, placeat magnam impedit dolorem eligendi accusamus aliquid nobis quia praesentium, eveniet ipsum ea, eum ad dolore facilis labore ipsam. Rem!',
	relatedAnime: [
		{
			id: 'seikon-no-qwaser-season-2',
			type: 'sequel',
		},
		{
			id: 'jotei-no-shouzou',
			type: 'specials',
		},
	],
}

const Container: React.FC = () => {
	const [isEditing, setIsEditing] = React.useState(false)

	const edit = () => setIsEditing(true)
	const closeEdit = () => setIsEditing(false)

	return (
		<div className={styles.root}>
			{isEditing ? (
				<EditAnimeDetails closeEdit={closeEdit} data={data} />
			) : (
				<AnimeDetails edit={edit} data={data} />
			)}
		</div>
	)
}

export default Container
