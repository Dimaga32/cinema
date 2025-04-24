type Typestatus = "inProcess" | "success" | "notValid"
export type TypePurchases = {
	data: string
	id: number
	user_id: number
	status: Typestatus
	filmid: number
}
export type TypePurchasesProps = TypePurchases & {
	image: string
	description: string
	name: string
	cost: number
}
