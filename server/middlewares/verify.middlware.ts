import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const ACCESS_SECRET = '*&v%^ryCTYVBIOJPKJHVTYRUIO';
const REFRESH_SECRET = 'jkui&*g^&fRTCVBUIHIO8976';
declare module 'express-serve-static-core' {
	interface Request {
		user?: { id: number; email: string }; // Укажите ваш тип
	}
}
interface UserPayload {
	userId: number;
	email: string;
}

export function verifyTokensMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
): void {
	const accessToken = req.headers['authorization']?.split(' ')[1];
	const refreshToken = req.headers['refresh-token'] as string;

	// Если токены отсутствуют
	if (!accessToken && !refreshToken) {
		res.status(401).json({ message: 'No tokens provided' });
		return;
	}

	// Проверка access-токена
	if (accessToken) {
		try {
			const decoded = jwt.verify(accessToken, ACCESS_SECRET) as UserPayload;
			req.user = { id: decoded.userId, email: decoded.email };
			return next();
		} catch (accessError) {
			// Обрабатываем только истечение срока действия access-токена
			if (accessError instanceof jwt.TokenExpiredError) {
				console.log('Access token expired');

				if (!refreshToken) {
					res.status(401).json({
						message: 'Access token expired, no refresh token provided'
					});
					return;
				}

				try {
					const refreshDecoded = jwt.verify(refreshToken, REFRESH_SECRET) as UserPayload;

					// Генерируем новый access-токен
					const newAccessToken = jwt.sign(
						{ userId: refreshDecoded.userId, email: refreshDecoded.email },
						ACCESS_SECRET,
						{ expiresIn: '15m' }
					);

					// Устанавливаем заголовки и добавляем пользователя в запрос
					res.setHeader('New-Access-Token', newAccessToken);
					req.user = {
						id: refreshDecoded.userId,
						email: refreshDecoded.email
					};
					return next();
				} catch (refreshError) {
					// Отдельно обрабатываем истечение refresh-токена
					if (refreshError instanceof jwt.TokenExpiredError) {
						console.log('Refresh token expired');
						res.status(401).json({
							message: 'Session expired. Please log in again.'
						});
					} else {
						console.error('Invalid refresh token:', refreshError);
						res.status(401).json({
							message: 'Invalid refresh token'
						});
					}
					return;
				}
			} else {
				// Все другие ошибки access-токена
				console.error('Invalid access token:', accessError);
				res.status(401).json({
					message: 'Invalid access token'
				});
				return;
			}
		}
	}

	// Если есть только refresh-токен
	if (refreshToken) {
		try {
			const refreshDecoded = jwt.verify(refreshToken, REFRESH_SECRET) as UserPayload;

			const newAccessToken = jwt.sign(
				{ userId: refreshDecoded.userId, email: refreshDecoded.email },
				ACCESS_SECRET,
				{ expiresIn: '15m' }
			);

			res.setHeader('New-Access-Token', newAccessToken);
			req.user = {
				id: refreshDecoded.userId,
				email: refreshDecoded.email
			};
			return next();
		} catch (refreshError) {
			if (refreshError instanceof jwt.TokenExpiredError) {
				res.status(401).json({
					message: 'Session expired. Please log in again.'
				});
			} else {
				console.error('Invalid refresh token:', refreshError);
				res.status(401).json({
					message: 'Invalid refresh token'
				});
			}
			return;
		}
	}
}

