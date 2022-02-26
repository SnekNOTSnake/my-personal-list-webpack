declare module '*.module.css'

type InputChange = React.ChangeEvent<HTMLInputElement>
type FormSubmit = React.FormEvent<HTMLFormElement>

interface Settings {
	episodeTreshold: number
	dataDir: string | null
}
