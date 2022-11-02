import { SingleField, MultiField } from "../generic/filter/fields"
import Filter from "../generic/filter/Filter"


export class OrderFilter extends Filter {
	// Example of filter

	constructor() {
		super()

		this.fields['dateStart'] = new SingleField()
		this.fields['dateEnd'] = new SingleField()
		this.fields['shopId'] = new SingleField()
		this.fields['directorRegion'] = new SingleField()
		this.fields['sources'] = new MultiField()

		// Add onChange event listener
		this.fields['dateStart'].onChange = () => { console.log('Hello World') }
	}
}


export class ExtendedOrderFilter extends OrderFilter {
	// Demo for showing inheritance

	constructor() {
		super()

		this.fields['prevDateStart'] = new SingleField()
		this.fields['dateStart'].onChange = () => { this.fields['prevDateStart'].value = this.fields['dateStart'].value }
	}
}
