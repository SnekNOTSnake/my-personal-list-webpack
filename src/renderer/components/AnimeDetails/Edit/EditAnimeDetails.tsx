import React, { useState } from 'react'
import { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { seriesState } from 'renderer/recoil-states/series'

import styles from './EditAnimeDetails.module.css'

type Props = { closeEdit: () => any; data: Series }

const EditAnimeDetails: React.FC<Props> = ({ closeEdit, data }) => {
	const defaultInputs = {
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
		notes: data.notes,
		tags: data.tags,
		related: data.related,
	}

	const [series, setSeries] = useRecoilState(seriesState)
	const [input, setInput] = useState(defaultInputs)

	const [tagInput, setTagInput] = useState('')
	const onTagChange = (e: InputChange) => setTagInput(e.target.value)

	const [relatedInput, setRelatedInput] = useState('')
	const onRelatedChange = (e: InputChange) => setRelatedInput(e.target.value)

	const [relatedType, setRelatedType] = useState('sequel')
	const onRelTypeChange = (e: SelectChange) => setRelatedType(e.target.value)

	const localFilteredSeries = useMemo(() => {
		const filtered = series.filter((el) => {
			if (el.id === data.id) return false
			if (input.related.some((relatedAnime) => relatedAnime.id === el.id))
				return false
			return el.title.toLowerCase().startsWith(relatedInput.toLowerCase())
		})

		filtered.sort((a, b) => a.title.localeCompare(b.title))
		filtered.slice(0, 10)

		return filtered
	}, [series, relatedInput, input.related])

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

		setSeries((prevVal) => {
			const index = prevVal.findIndex((el) => el.id === data.id)
			const newSeriesArr = [...prevVal]
			newSeriesArr.splice(index, 1, { ...prevVal[index], ...input })
			return newSeriesArr
		})

		closeEdit()
	}

	const onResetForm = () => setInput(defaultInputs)

	const onTagSubmit = (e: InputKeyPress) => {
		if (e.key === 'Enter') {
			e.preventDefault()

			const newTag = e.currentTarget.value
			setInput((prevVal) => {
				if (prevVal.tags.includes(newTag)) return prevVal
				return { ...prevVal, tags: [...prevVal.tags, newTag] }
			})

			setTagInput('')
		}
	}

	const onTagRemove = (tag: string) => {
		setInput((prevVal) => {
			const index = prevVal.tags.findIndex((el) => el === tag)
			if (index < 0) return prevVal

			const newTags = [...prevVal.tags]
			newTags.splice(index, 1)

			return { ...prevVal, tags: newTags }
		})
	}

	const onAddRelation = (id: string) => {
		setInput((prevVal) => ({
			...prevVal,
			related: [...prevVal.related, { id, type: relatedType as any }],
		}))

		window.blur()
	}

	const onRemoveRelation = (id: string) =>
		setInput((prevVal) => {
			const index = prevVal.related.findIndex((el) => el.id === id)
			if (index < 0) return prevVal

			const newRelations = [...prevVal.related]
			newRelations.splice(index, 1)
			return { ...prevVal, related: newRelations }
		})

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
					<input
						type='text'
						onKeyPress={onTagSubmit}
						value={tagInput}
						onChange={onTagChange}
					/>
					<ul>
						{input.tags.map((tag) => (
							<li key={tag} onClick={() => onTagRemove(tag)}>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<div>
					<textarea name='notes' value={input.notes} onChange={onInputChange} />
				</div>

				<div className={[styles.labeledInput, styles.relations].join(' ')}>
					<div className={styles.label}>Add relations</div>
					<div className={styles.relationInput}>
						<input
							value={relatedInput}
							onChange={onRelatedChange}
							type='text'
						/>
						<div className={styles.relationType}>
							<select onChange={onRelTypeChange}>
								<option value='sequel'>Sequel</option>
								<option value='prequel'>Prequel</option>
								<option value='side-story'>Side Story</option>
								<option value='spin-off'>Spin Off</option>
								<option value='parent'>Parent</option>
								<option value='summary'>Summary</option>
								<option value='alternative-version'>Alternative Version</option>
							</select>
						</div>
						<div
							tabIndex={0 /* Allow div focus */}
							className={styles.seriesPopover}
						>
							<ul>
								{localFilteredSeries.map((el) => (
									<li onClick={() => onAddRelation(el.id)} key={el.id}>
										{el.title}
									</li>
								))}
							</ul>
						</div>
					</div>
					<ul className={styles.titles}>
						{input.related.map((series) => (
							<li key={series.id}>
								<div onClick={() => onRemoveRelation(series.id)}>
									<div className={styles.relatedType}>{series.type}</div>
									<div className={styles.relatedName}>{series.id}</div>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div>
					<button className={styles.save} type='submit'>
						Save
					</button>
					<button type='button' onClick={onResetForm}>
						Reset
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
