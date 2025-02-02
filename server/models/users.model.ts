import { pool } from "../db.js";

// Получение пользователя по ID
export async function getUser(id: number) {
	const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
	return result.rows[0];
}

// Добавление нового пользователя
export async function addUser(name: string, hash_password: string, verified: boolean, email: string) {
	const existingUser = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
	if (existingUser.rows.length > 0) {
		throw new Error('Email уже используется');
	}
	const result = await pool.query(
		`INSERT INTO users (name, hash_password, verified, email) 
     VALUES ($1, $2, $3, $4) 
     RETURNING *`,
		[name, hash_password, verified, email]
	);
	return result.rows[0];

}

// Проверка пользователя
export async function checkUser(name_or_email: string, hash_password: string, id: number) {
	const result = await pool.query(
		'SELECT * FROM users WHERE (name = $1 OR email = $1) AND hash_password = $2 AND id = $3',
		[name_or_email, hash_password, id]
	);
	return result.rows.length > 0;
}