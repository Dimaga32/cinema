import pg from "pg" // Вместо import { Pool } from 'pg';
const { Pool } = pg // Теперь ты можешь использовать Pool
// Создание пула соединений с базой данных
export const pool = new Pool({
	user: "postgres", // Имя пользователя
	host: "localhost", // Адрес сервера базы данных
	database: "postgres", // Имя базы данных
	password: "1111", // Пароль пользователя
	port: 5432, // Порт для подключения к базе данных (по умолчанию 5432)
})
