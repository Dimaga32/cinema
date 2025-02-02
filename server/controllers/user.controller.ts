import { Request, Response } from 'express';
import { getUser, addUser, checkUser } from "../models/users.model.js";
import crypto from  'crypto'

function hashPassword(password: string):string {
	return crypto.createHash('sha256').update(password).digest('hex');
}
// Контроллер для получения пользователя
export async function getUserController(req: Request, res: Response) {
	const { id } = req.params;
	const userId = Number(id);

	if (isNaN(userId)) {
		return res.status(400).json({ error: "Invalid user ID" });
	}

	try {
		const user = await getUser(userId);
		res.json(user);
	} catch (err) {
		console.error('Error fetching user', err);
		res.status(500).send('Database error');
	}
}

// Контроллер для добавления нового пользователя
export async function addUserController(req: Request, res: Response) {
	try {
		const { name, password, verified, email } = req.body;
		const hash_password:string=await hashPassword(password)
		await addUser(name, hash_password, verified, email);
		const accessToken:string=''
		const refreshToken:string=''
		res.status(201).send(JSON.stringify({accessToken, refreshToken }));
	} catch (err) {
		console.error('Error adding user', err);
		res.status(500).send('Database error');
	}
}

// Контроллер для проверки пользователя по ID
export async function checkUserController(req: Request, res: Response) {
	const { userData } = req.body;
	const { id } = req.params;
	const userId = Number(id);

	if (isNaN(userId)) {
		return res.status(400).json({ error: "Invalid user ID" });
	}

	try {
		const { name_or_email, hash_password } = userData;
		const checked = await checkUser(name_or_email, hash_password, userId);

		if (checked) {
			res.status(200).send('User checked');
		} else {
			res.status(404).send('User not found');
		}
	} catch (err) {
		console.error('Error checking user', err);
		res.status(500).send('Database error');
	}
}
