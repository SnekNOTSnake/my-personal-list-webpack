import React, { useState } from 'react'

import styles from './EditAnimeDetails.module.css'

type Props = { closeEdit: () => any; data: any }

const EditAnimeDetails: React.FC<Props> = ({ closeEdit, data }) => {
	const [input, setInput] = useState({
		title: data.title,
		epsNum: data.epsNum,
		epsWatched: data.epsWatched,
		rewatchCount: data.rewatchCount,
		encoder: data.encoder,
		source: data.source,
		quality: data.quality,
		res: data.res,
		duration: data.duration,
		video: data.video,
		audio: data.audio,
		subtitle: data.subtitle,
		container: data.container,
		notes: data.notes,
		tags: data.tags,
	})

	const onInputChange = (e: InputChange | TextAreaChange) => {
		setInput((initVal) => {
			return {
				...initVal,
				[e.target.name]: e.target.value,
			}
		})
	}

	const onSubmit = (e: FormSubmit) => {
		e.preventDefault()
		console.log(input)
	}

	return (
		<div className={styles.root}>
			<h2>Edit Details</h2>

			<form onSubmit={onSubmit}>
				<div className={styles.labeledInput}>
					<div className={styles.label}>Title</div>
					<input
						className={styles.title}
						type='text'
						name='title'
						onChange={onInputChange}
						value={input.title}
					/>
				</div>
				<div className={styles.numberInputs}>
					<div className={styles.labeledInput}>
						<div className={styles.label}>Number of Episodes</div>
						<input
							type='number'
							name='epsNum'
							onChange={onInputChange}
							value={input.epsNum}
						/>
					</div>
					<div className={styles.labeledInput}>
						<div className={styles.label}>Watched episodes</div>
						<input
							type='number'
							name='epsWatched'
							onChange={onInputChange}
							value={input.epsWatched}
						/>
					</div>
					<div className={styles.labeledInput}>
						<div className={styles.label}>Rewatch count</div>
						<input
							type='number'
							name='rewatchCount'
							onChange={onInputChange}
							value={input.rewatchCount}
						/>
					</div>
				</div>

				<table>
					<tbody>
						<tr>
							<th>Encoder</th>
							<td>
								<input
									type='text'
									name='encoder'
									onChange={onInputChange}
									value={input.encoder}
								/>
							</td>
							<th>Source</th>
							<td>
								<input
									type='text'
									name='source'
									onChange={onInputChange}
									value={input.source}
								/>
							</td>
						</tr>
						<tr>
							<th>Quality</th>
							<td>
								<input
									type='text'
									name='quality'
									onChange={onInputChange}
									value={input.quality}
								/>
							</td>
							<th>Resolution</th>
							<td>
								<input
									type='number'
									name='res'
									onChange={onInputChange}
									value={input.res}
								/>
							</td>
						</tr>
						<tr>
							<th>Video</th>
							<td>
								<input
									type='text'
									name='video'
									onChange={onInputChange}
									value={input.video}
								/>
							</td>
							<th>Audio</th>
							<td>
								<input
									type='text'
									name='audio'
									onChange={onInputChange}
									value={input.audio}
								/>
							</td>
						</tr>
						<tr>
							<th>Duration</th>
							<td>
								<input
									type='number'
									name='duration'
									onChange={onInputChange}
									value={input.duration}
								/>
							</td>
							<th>Subtitle</th>
							<td>
								<input
									type='text'
									name='subtitle'
									onChange={onInputChange}
									value={input.subtitle}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				<div className={[styles.labeledInput, styles.tags].join(' ')}>
					<div className={styles.label}>Add tags</div>
					<input type='text' />
					<ul>
						{input.tags.map((tag: any) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</div>

				<div>
					<textarea name='notes' value={input.notes} onChange={onInputChange} />
				</div>

				<div className={[styles.labeledInput, styles.relations].join(' ')}>
					<div className={styles.label}>Add relations</div>
					<div className={styles.relationInput}>
						<input type='text' />
						<div className={styles.relationType}>Sequel</div>
					</div>
					<ul>
						{data.relatedAnime.map((anime: any) => (
							<li key={anime.id}>
								<div>
									<div className={styles.relatedType}>{anime.type}</div>
									<div className={styles.relatedName}>{anime.id}</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div>
					<button className={styles.save} type='submit'>
						Save
					</button>
					<button type='button' onClick={closeEdit}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditAnimeDetails
