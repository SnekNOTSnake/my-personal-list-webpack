import { atom, selector } from 'recoil'
import data from '../../../assets/data.json'

export const seriesState = atom({
	key: 'series',
	default: data.series as Series[],
})

export const seriesFilter = atom({
	key: 'seriesFilter',
	default: {
		query: '',
		order: {
			descending: false,
			by: 'title' as 'title' | 'duration' | 'resolution' | 'epsNum',
		},
		tags: {
			active: [] as string[],
			deactive: [] as string[],
		},
	},
})

export const seriesTags = selector({
	key: 'seriesTags',
	get: ({ get }) => {
		const series = get(seriesState)
		const tagsSet = new Set<string>()
		series.forEach((el) => el.tags.forEach((tag) => tagsSet.add(tag)))

		const tags: { name: string; count: number }[] = []
		tagsSet.forEach((tag) =>
			tags.push({
				name: tag,
				count: series.filter((el) => el.tags.includes(tag)).length,
			}),
		)

		return tags
	},
})

export const filteredSeries = selector({
	key: 'filteredSeries',
	get: ({ get }) => {
		const series = get(seriesState)
		const filter = get(seriesFilter)

		const filtered = series
			.filter((el) =>
				el.title.toLowerCase().startsWith(filter.query.toLocaleLowerCase()),
			)
			.filter((el) =>
				filter.tags.active.length
					? filter.tags.active.every((tag) => el.tags.includes(tag))
					: true,
			)
			.filter((el) =>
				filter.tags.deactive.length
					? filter.tags.deactive.some((tag) => !el.tags.includes(tag))
					: true,
			)

		let ordered = filtered
		switch (filter.order.by) {
			case 'title':
				ordered.sort((a, b) =>
					filter.order.descending
						? b.title.localeCompare(a.title)
						: a.title.localeCompare(b.title),
				)
				break

			case 'duration':
				ordered.sort((a, b) =>
					filter.order.descending
						? b.duration - a.duration
						: a.duration - b.duration,
				)
				break

			case 'epsNum':
				ordered.sort((a, b) =>
					filter.order.descending ? b.epsNum - a.epsNum : a.epsNum - b.epsNum,
				)
				break

			case 'resolution':
				ordered.sort((a, b) =>
					filter.order.descending ? b.res - a.res : a.res - b.res,
				)
				break

			default:
				break
		}

		return ordered
	},
})
