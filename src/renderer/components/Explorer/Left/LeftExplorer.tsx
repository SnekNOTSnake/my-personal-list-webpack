import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

import styles from './LeftExplorer.module.css'

const initGenres: { name: string; status: 'active' | 'disabled' | null }[] = [
	{ name: 'Action', status: null },
	{ name: 'Adventure', status: 'active' },
	{ name: 'Drama', status: null },
	{ name: 'Romance', status: 'disabled' },
	{ name: 'Slice of life', status: null },
	{ name: 'Supernatural', status: null },
	{ name: 'Untagged', status: null },
]

const LeftExplorer: React.FC = () => {
	const [genres, setGenres] = useState(initGenres)

	const onClearClick = () => {
		const cloneGenres = [...genres]
		const newGenres = cloneGenres.map((genre) => {
			genre.status = null
			return genre
		})

		setGenres(newGenres)
	}

	const onGenreClick = (genre: string) => {
		const newGenres = [...genres]

		const genreObj = newGenres.find((el) => el.name === genre)
		if (!genreObj) return

		genreObj.status =
			genreObj.status === 'active'
				? 'disabled'
				: genreObj.status === 'disabled'
				? null
				: 'active'

		setGenres(newGenres)
	}

	return (
		<div className={styles.left}>
			<div className={styles.clear}>
				<button onClick={onClearClick} type='button'>
					<MdDeleteOutline className={styles.icon} /> Clear
				</button>
			</div>
			<div className={styles.genres}>
				<ul>
					{genres.map((genre) => (
						<li
							key={genre.name}
							className={
								genre.status === 'active'
									? styles.active
									: genre.status === 'disabled'
									? styles.disabled
									: ''
							}
							onClick={() => onGenreClick(genre.name)}
						>
							{genre.name} <div className={styles.grow} /> <span>24</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default LeftExplorer
