import { Router } from 'express';
import { getFilmsController, getFilmByIdController } from "../controllers/films.controller.js"

const router = Router();

// Получение всех фильмов
router.get('/Films', getFilmsController);

// Получение фильма по ID
router.get('/Film/:id', getFilmByIdController);

export default router;