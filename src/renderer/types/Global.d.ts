declare module '*.module.css'

type InputChange = React.ChangeEvent<HTMLInputElement>
type TextAreaChange = React.ChangeEvent<HTMLTextAreaElement>
type SelectChange = React.ChangeEvent<HTMLSelectElement>
type FormSubmit = React.FormEvent<HTMLFormElement>

interface Settings {
	episodeTreshold: number
	dataDir: string | null
}

interface Series {
	id: string
	title: string
	tags: string[]
	epsNum: number
	epsWatched: number
	rewatchCount: number
	suspended: boolean
	encoder: string
	source: string
	quality: 'bd' | 'dvd' | 'web'
	res: number
	video: string
	audio: string
	subtitle: string
	duration: number
	notes: string
	related: Relation[]
}

interface Relation {
	id: string
	type:
		| 'sequel'
		| 'prequel'
		| 'side-story'
		| 'spin-off'
		| 'parent'
		| 'summary'
		| 'alternative-version'
}
