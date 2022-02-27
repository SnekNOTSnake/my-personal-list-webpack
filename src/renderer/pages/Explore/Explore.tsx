import React from 'react'

import Explorer from '../../components/Explorer'
import AnimeDetails from '../../components/AnimeDetails'
import styles from './Explore.module.css'

const Explore: React.FC = () => (
	<div className={styles.root}>
		<Explorer />
		<AnimeDetails />
	</div>
)

export default Explore
