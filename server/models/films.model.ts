import { pool } from "../db.js"

// Получение всех фильмов
export async function getAllFilms() {
	const result = await pool.query("SELECT * FROM films")
	return result.rows
}

// Получение фильма по ID
export async function getFilmById(id: number) {
	const result = await pool.query("SELECT * FROM films WHERE id = $1", [id])
	return result.rows[0] // возвращаем первую строку
}
