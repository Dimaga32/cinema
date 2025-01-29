export type TypeCardData = {
	id: number
	name: string
	description: string
	image: string
	rating: number
	genre: TypeGenre
	shows?:TypeShows
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
type TypeDays="Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"
type TypeTime="7:00"|"9:00"|"11:00"|"13:00"|"15:00"|"17:00"|"19:00"|"21:00"|"23:00"
type  TypeShows={
	datOfWeek: TypeDays[]
	time: [TypeTime[]]
}