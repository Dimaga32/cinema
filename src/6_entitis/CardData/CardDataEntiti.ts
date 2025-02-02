export type TypeCardData = {
	id: number
	name: string
	description: string
	image: string
	rating: number
	genre: TypeGenre
	show_days: TypeDays[]
	show_times: TypeTime[]
	cost: number
}
export type TypeGenre =
	| "Fantasy"
	| "Action movie"
	| "Adventures"
	| "Animation"
	| "Comedy"
	| "Drama"
	| "Historical"
	| "Musical"
	| "Horror"
	| "Romance"
	| "none"
export type TypeDays =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
export type TypeTime =
	| "7:00"
	| "9:00"
	| "11:00"
	| "13:00"
	| "15:00"
	| "17:00"
	| "19:00"
	| "21:00"
	| "23:00"

