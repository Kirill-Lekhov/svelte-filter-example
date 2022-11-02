export default class AllowedSelections<T> {
	// Contains filter allowed selections of selectors

	protected _src: T[]
	public filtered: T[]

	constructor(initial: T[] = []) {
		this._src = initial
		this.filtered = initial
	}

	filter(filter: unknown): void {
		this.filtered = this._src
	}

	reset(): void {
		this.filtered = [...this._src]
	}
}
