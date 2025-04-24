import pg from "pg"
const { Pool } = pg

// Создание пула соединений с базой данных
export const pool = new Pool({
	connectionString:
		process.env.DATABASE_URL || "postgres://postgres:1111@db:5432/postgres",
})
