import { Request, Response } from 'express';
import { getAllFilms, getFilmById } from "../models/films.model.js"

// Контроллер для получения всех фильмов
export async function getFilmsController(req: Request, res: Response) {
	try {
		const films = await getAllFilms();
		res.json(films);
	} catch (err) {
		console.error('Error fetching films', err);
		res.status(500).send('Database error');
	}
}

// Контроллер для получения фильма по ID
export async function getFilmByIdController(req: Request, res: Response) {
	const { id } = req.params; // Получаем параметр id из URL
	try {
		const film = await getFilmById(Number(id)); // Преобразуем id в число
		if (film) {
			res.json(film);
		} else {
			res.status(404).send('Film not found');
		}
	} catch (err) {
		console.error('Error fetching film by ID', err);
		res.status(500).send('Database error');
	}
}