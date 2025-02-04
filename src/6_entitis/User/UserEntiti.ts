export type TypeUser = {
	name: string
	email: string
	hash_password: string
	verified: boolean
}
export class User {
	constructor(
		public name: string,
		public email: string,
		public hash_password: string,
		public verified: boolean = false
	) {}
}
