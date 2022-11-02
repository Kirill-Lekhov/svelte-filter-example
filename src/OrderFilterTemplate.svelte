<!--
	Example of filter UI as a svelte component.
-->
<script lang="ts">
	export let filter: OrderFilter
	export let filtersData: OrderAllowedSelections

	import { OrderFilter } from "./filter/filters"
	import { OrderAllowedSelections } from "./filter/allowed-selections"
	import { SOURCES } from "./data"

	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()
	const emptySelection = '----'
</script>

<style>
	.filter-block {
		background-color: #65656589;
		border-radius: 10px;
		padding: 10px;
		max-width: 300px;
	}

	.reset-button {
		margin-top: 10px;
		width: 100%;
		color: white;
		background-color: #333333;
		border: none;
	}

	.filter-input {
		width: 100%;
	}

	select.filter-input {
		background-color: white;
	}

	.filter-field__label {
		margin-top: 10px;
		margin-bottom: 5px;
	}

	.filter-field__label:first-child {
		margin-top: 0;
	}
</style>

<div class="filter-block">
	<div class="filter-field">
		<label class="filter-field__label" for="date-start">Дата начала</label>
		<input id="date-start" class="filter-input" bind:value={filter.fields['dateStart'].value} type="date" on:change>
	</div>

	<div class="filter-field">
		<label class="filter-field__label" for="date-end">Дата окончания</label>
		<input id="date-end" class="filter-input" bind:value={filter.fields['dateEnd'].value} type="date" on:change>
	</div>

	<div class="filter-field">
		<label class="filter-field__label" for="shop-id">Магазин</label>
		<select id="shop-id" class="filter-input" bind:value={filter.fields['shopId'].value} on:change>
			{#each filtersData.shops as shop}
				<option value={shop?.id}>
					{#if shop === undefined}
						{emptySelection}
					{:else}
						{shop.id} - {shop.name}
					{/if}
				</option>
			{/each}
		</select>
	</div>

	<div class="filter-field">
		<label class="filter-field__label" for="director-region">Региональный директор</label>
		<select id="director-region" class="filter-input" bind:value={filter.fields['directorRegion'].value} on:change>
			{#each filtersData.directorsRegion as directorRegion}
				<option value={directorRegion}>
					{#if directorRegion === undefined}
						{emptySelection}
					{:else}
						{directorRegion}
					{/if}
				</option>
			{/each}
		</select>
	</div>

	<div class="filter-field">
		<p class="filter-field__label">Источник</p>
		{#each SOURCES as source}
			<label>
				<input type=checkbox bind:group={filter.fields['sources'].value} value={source} on:change>
				{source}
			</label>
		{/each}
	</div>

	<button class="reset-button" on:click={() => {filter.reset(); dispatch('change')}}>Сбросить всё</button>
</div>
