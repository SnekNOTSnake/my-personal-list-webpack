import React from 'react'
import {
	MdOutlineFolder,
	MdOutlineMoreHoriz,
	MdOutlineEdit,
	MdOutlineExpandMore,
} from 'react-icons/md'

import styles from './AnimeDetails.module.css'

type Props = { edit: () => any; data: any }

const AnimeDetails: React.FC<Props> = ({ edit, data }) => (
	<div className={styles.root}>
		<div className={styles.container}>
			<div
				className={styles.poster}
				style={{ backgroundImage: 'url(https://picsum.photos/450/630)' }}
			/>
			<div className={styles.detail}>
				<div className={styles.actions}>
					<button style={{ backgroundColor: '#2f80ed' }} type='button'>
						<MdOutlineFolder />
					</button>
					<button
						onClick={edit}
						style={{ backgroundColor: '#219653' }}
						type='button'
					>
						<MdOutlineEdit />
					</button>
					<button style={{ backgroundColor: '#3b3e42' }} type='button'>
						<MdOutlineMoreHoriz />
					</button>
				</div>

				<h1>{data.title}</h1>
				<div className={styles.watchInfo}>
					<div className={styles.watchedInfo}>
						{data.epsWatched} of {data.epsNum} episodes
					</div>
					<div className={styles.rewatchInfo}>
						Re-watch count: {data.rewatchCount}
					</div>
				</div>
				<div className={styles.tags}>
					<ul>
						{data.tags.map((tag: any) => (
							<li key={tag}>{tag.replace(/-/, ' ')}</li>
						))}
					</ul>
				</div>
				<div className={styles.additionalInfo}>
					<ul>
						<li>Encoder: {data.encoder}</li>
						<li>Source: {data.source}</li>
						<li>Quality: {data.quality}</li>
						<li>Resolution: {data.res}p</li>
						<li>Duration: {data.duration} mins</li>
						<li>Video: {data.video}</li>
						<li>Audio: {data.audio}</li>
						<li>Subtitle: {data.subtitle}</li>
						<li>Container: {data.container}</li>
					</ul>
				</div>
			</div>
		</div>

		<div className={styles.notes}>
			<p>{data.notes}</p>
		</div>

		<div className={styles.related}>
			<div className={styles.showToggler}>
				<MdOutlineExpandMore />
				Related anime
			</div>
			<div className={styles.titles}>
				<ul>
					{data.relatedAnime.map((anime: any) => (
						<li key={anime.id}>
							{anime.type}: {anime.id}
						</li>
					))}
				</ul>
			</div>
		</div>

		<div className={styles.episodes}>
			<div className={styles.filenameToggler}>
				<MdOutlineFolder /> Show filenames
			</div>

			<ul>
				{Array.from(new Array(data.epsNum).keys()).map((el) => (
					<li key={el}>{el + 1}</li>
				))}
			</ul>
		</div>
	</div>
)

export default AnimeDetails
