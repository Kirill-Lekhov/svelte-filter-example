import type { Field } from "./fields"


export default class Filter {
	public fields: { [index: string]: Field } = {}

	reset(): void {
		Object.keys(this.fields).map(e => this.fields[e].reset())
	}
}
