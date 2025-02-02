import { Router } from 'express';
import { getUserController, addUserController, checkUserController } from "../controllers/user.controller.js";

const router = Router();

// Получение всех покупок
router.get('/user/:id', getUserController);

// Добавление пользователя
router.post('/user/register', addUserController);

// проверка пользователя
router.delete('/user/login', checkUserController);

export default router;
