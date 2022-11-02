export class Field {
	// Base filter field

	protected _value: unknown
	protected _initial: unknown
	public onChange: (...args: any[]) => void = () => {}

	constructor(initial: unknown = undefined) {
		this.value = initial
		this._initial = initial
	}

	get value() {
		return this._value
	}

	set value(val) {
		this._value = val
		this.onChange()
	}

	reset(): void {
		this.value = this._initial
	}
}


export const SingleField = Field		// Single field (field that contains only one value) is just alias of Field


export class MultiField extends Field {
	// Contains set of filter values
	// For example it useful in checkbox group processing

	protected _value: unknown[]

	constructor(initial: unknown[] = []) {
		super(initial)
		this.value = initial
	}

	get value() {
		return this._value		// Redefining of this getter is required. Without it undefined is returned.
	}

	set value(val: unknown) {
		if (Array.isArray(val)) {
			this._value = val
		} else {
			if (val === undefined) {
				this._value = []
			} else {
				this._value = [val]
			}
		}

		this.onChange()
	}
}
