import express from 'express';
import cors from 'cors';  // Импортируем cors

import filmsRoutes from "./routes/films.routes.js"
import purchasesRoutes from './routes/purchases.routes.js';
import user from './routes/user.routes.js'

const app = express();
const port = 5000;

app.use(cors({
	origin: 'http://localhost:3000', // URL вашего фронтенда
	exposedHeaders: ['Access-Token', 'Refresh-Token'] // <-- Важно!
}));
app.use(express.json());

app.use('/api', filmsRoutes);
app.use('/api', purchasesRoutes); // добавьте это после маршрутов для films
app.use('/api', user);
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
})