import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

import styles from './Search.module.css'

type InputChange = React.ChangeEvent<HTMLInputElement>
type FormSubmit = React.FormEvent<HTMLFormElement>

const Search: React.FC = () => {
	const [input, setInput] = useState('')

	const onInputChange = (e: InputChange) => setInput(e.currentTarget.value)
	const onSubmit = (e: FormSubmit) => {
		e.preventDefault()
		console.log(input)
	}

	return (
		<div className={styles.root}>
			<form onSubmit={onSubmit}>
				<div className={styles.container}>
					<input onChange={onInputChange} type='search' placeholder='Search' />
					<MdSearch className={styles.searchIcon} />
				</div>
			</form>
		</div>
	)
}

export default Search
