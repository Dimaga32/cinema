import { Router } from "express"
import {
	getPurchasesController,
	addPurchaseController,
	deletePurchaseController,
} from "../controllers/purchases.controller.js"

const router = Router()

// Получение всех покупок
router.get("/Purchases/:id", getPurchasesController)

// Добавление новой покупки
router.post("/Purchases", addPurchaseController)

// Удаление покупки по ID
router.delete("/Purchases/:id", deletePurchaseController)

export default router
