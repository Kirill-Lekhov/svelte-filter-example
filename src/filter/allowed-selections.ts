import AllowedSelections from "../generic/filter/allowed-selections"
import type { OrderFilter } from "./filters"
import type { Shop } from "../data"


export class OrderAllowedSelections extends AllowedSelections<Shop>{
	// Example of allowed selections class
	// Stores data about possible selections in selectors

	filter(filter: OrderFilter) {
		this.reset()

		if (filter.fields['directorRegion'].value) {
			this.filtered = this.filtered.filter(e => e.directorRegion == filter.fields['directorRegion'].value)
		}

		if (filter.fields['shopId'].value) {
			this.filtered = this.filtered.filter(e => e.id == filter.fields['shopId'].value)
		}
	}

	get directorsRegion(): Array<string | undefined> {
		return [undefined, ...new Set(this.filtered.map(e => e.directorRegion))]
	}

	get shops(): Array<Shop | undefined> {
		return [undefined, ...this.filtered]
	}
}
