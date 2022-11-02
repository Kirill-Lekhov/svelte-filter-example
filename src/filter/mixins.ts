import type Filter from "../generic/filter/Filter"

type Constructor = new (...args: any[]) => Filter


export function ToFetchMixin<TBase extends Constructor>(Base: TBase) {
	// Add toFetch method to filter class.
	// Allows return set of filter values for example data fetching from backend.

	return class ToFetchMixin extends Base {
		toFetch() {
			let fetchParams = {}

			Object.keys(this.fields).map(e => {
				if (this.fields[e].value) {
					fetchParams[e] = this.fields[e].value
				}
			})

			return fetchParams
		}
	}
}
