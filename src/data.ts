export interface Shop {
	id: number,
	name: string,
	directorRegion: string,
}

export const SHOP_DATA: Shop[] = [
	{id: 1, name: 'Пятёрочка', directorRegion: 'Иванов'},
	{id: 2, name: 'Караван', directorRegion: 'Петров'},
	{id: 3, name: 'Апельсин', directorRegion: 'Иванов'},
	{id: 4, name: 'Зима', directorRegion: 'Петров'},
	{id: 5, name: 'Океан', directorRegion: 'Иванов'},
	{id: 6, name: 'Магнит', directorRegion: 'Сидоров'},
	{id: 7, name: 'Весна', directorRegion: 'Иванов'},
	{id: 8, name: 'Буратино', directorRegion: 'Стрельцов'},
	{id: 9, name: 'Два гуся', directorRegion: 'Стрельцов'},
	{id: 10, name: 'Высшая лига', directorRegion: 'Стрельцов'},
]


export const SOURCES = ['Соцсети', 'Уличная реклама', 'Телевидение'] as const
