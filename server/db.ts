import pg from "pg" // Вместо import { Pool } from 'pg';
const { Pool } = pg // Теперь ты можешь использовать Pool
// Создание пула соединений с базой данных
export const pool = new Pool({
	user: "user", // Имя пользователя
	host: "localhost", // Адрес сервера базы данных
	database: "Cinema", // Имя базы данных
	password: "d16141614", // Пароль пользователя
	port: 5432, // Порт для подключения к базе данных (по умолчанию 5432)
})
