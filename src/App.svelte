<script lang="ts">
	import { OrderFilterAPI, ExtendedOrderFilterAPI } from "./filter/api-filters"
	import OrderFilterTemplate from "./OrderFilterTemplate.svelte"
	import { OrderAllowedSelections } from "./filter/allowed-selections"
	import { SHOP_DATA } from "./data"

	let filter = new ExtendedOrderFilterAPI()	// OrderFilterAPI | ExtendedOrderFilterAPI
	let filterAllowedSelections = new OrderAllowedSelections(SHOP_DATA)

	function handleChangeFilter() {
		filter = filter
		filterAllowedSelections.filter(filter)

		console.log(filter.toFetch())
	}
</script>

<main>
	{#key filter}
		<h1>{Object.values(filter.fields).map(e => e.value).join('/')}</h1>
		<OrderFilterTemplate filter={filter} filtersData={filterAllowedSelections} on:change={handleChangeFilter} />
	{/key}
</main>
