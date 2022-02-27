import React from 'react'
import {
	MdOutlineFolder,
	MdOutlineMoreHoriz,
	MdOutlineEdit,
	MdOutlineExpandMore,
} from 'react-icons/md'

import styles from './AnimeDetails.module.css'

const AnimeDetails: React.FC = () => (
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
					<button style={{ backgroundColor: '#219653' }} type='button'>
						<MdOutlineEdit />
					</button>
					<button style={{ backgroundColor: '#3b3e42' }} type='button'>
						<MdOutlineMoreHoriz />
					</button>
				</div>
				<h1>Seikon no Qwaser</h1>
				<div className={styles.watchInfo}>
					<div className={styles.watchedInfo}>12 of 12 episodes</div>
					<div className={styles.rewatchInfo}>Re-watch count: 1</div>
				</div>
				<div className={styles.tags}>
					<ul>
						<li>Action</li>
						<li>Ecchi</li>
						<li>Super Power</li>
					</ul>
				</div>
				<div className={styles.additionalInfo}>
					<ul>
						<li>Encoder: dedsec</li>
						<li>Source: AnimeKaizoku</li>
						<li>Quality: BD</li>
						<li>Resolution: 720p</li>
						<li>Duration: 24min</li>
						<li>Video: H.265 HEVC 10-bit</li>
						<li>Audio: AAC Dual 128kbps</li>
						<li>Subtitle: Subsplease</li>
						<li>Container: MKV</li>
					</ul>
				</div>
			</div>
		</div>

		<div className={styles.notes}>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quod,
				placeat magnam impedit dolorem eligendi accusamus aliquid nobis quia
				praesentium, eveniet ipsum ea, eum ad dolore facilis labore ipsam. Rem!
			</p>
		</div>

		<div className={styles.related}>
			<div className={styles.showToggler}>
				<MdOutlineExpandMore />
				Related anime
			</div>
			<div className={styles.titles}>
				<ul>
					<li>Sequel: Seikon no Qwaser Season 2</li>
					<li>Specials: Jotei no Shouzou</li>
				</ul>
			</div>
		</div>

		<div className={styles.episodes}>
			<div className={styles.filenameToggler}>
				<MdOutlineFolder /> Show filenames
			</div>

			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>
				<li>11</li>
				<li>12</li>
			</ul>
		</div>
	</div>
)

export default AnimeDetails
