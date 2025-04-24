import { pool } from "../db.js"

export async function getUserById(userId: number) {
	// Убедитесь, что userId — это целое число
	if (!Number.isInteger(userId)) {
		throw new Error(`Invalid userId: ${userId}`)
	}
	const query = "SELECT * FROM users WHERE id = $1"
	const result = await pool.query(query, [userId])
	return result.rows[0]
}

export async function addUser(
	name: string,
	email: string,
	hash_password: string,
	verified: boolean
) {
	const result = await pool.query(
		"INSERT INTO users (name, email, hash_password, verified) VALUES ($1, $2, $3, $4) RETURNING *",
		[name, email, hash_password, verified]
	)
	return result.rows[0]
}

export async function checkUser(email: string) {
	const result = await pool.query("SELECT * FROM users WHERE email = $1", [
		email,
	])
	return result.rows[0]
}
export async function getPurchasesNumber(userId: number): Promise<number> {
	const result = await pool.query(
		"SELECT * FROM purchases WHERE userid = $1",
		[userId]
	)
	return result.rows.length
}
