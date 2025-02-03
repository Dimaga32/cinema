import { Router } from 'express';
import {
	getUserController,
	addUserController,
	checkUserController,
	getPurchasesNumberUserController,
} from "../controllers/user.controller.js";
import { verifyTokensMiddleware } from "../middlewares/verify.middlware.js"

const router = Router();

// Получение пользователя по ID
router.get(
	'/user/:id',
	verifyTokensMiddleware, // Проверяем токены
	getUserController
);

router.post('/user/register', addUserController);
router.post('/user/login', checkUserController);
router.post('/user/verify-tokens', verifyTokensMiddleware, (req, res) => {
	if (req.user) {
		// Возвращаем обновленный токен, если он был сгенерирован
		const newAccessToken = res.getHeader('New-Access-Token');
		res.json({
			userId: req.user.id,
			newAccessToken: newAccessToken || null
		});
	} else {
		res.status(401).json({ message: 'Unauthorized' });
	}
});
router.get('/user/purchases-number/:id', getPurchasesNumberUserController);
export default router;