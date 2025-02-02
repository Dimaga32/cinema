import { pool } from "../db.js";

// Получение всех покупок
export async function getAllPurchases() {
	const result = await pool.query('SELECT * FROM purchases');
	return result.rows;
}

// Добавление новой покупки
export async function addPurchase(userId: number, filmId: number, purchaseDate: string, amount: number, status: string) {
	const result = await pool.query(
		'INSERT INTO purchases (userid, filmid, data, cost, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
		[userId, filmId, purchaseDate, amount, status]  // Добавляем статус в запрос
	);
	return result.rows[0];  // Возвращаем добавленную покупку
}


// Удаление покупки по ID
export async function deletePurchase(id: number) {
	const result = await pool.query('DELETE FROM purchases WHERE id = $1 RETURNING *', [id]);
	return result.rows.length > 0; // если покупка была удалена, возвращаем true
}
