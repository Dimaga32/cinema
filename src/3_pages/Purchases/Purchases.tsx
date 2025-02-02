import { ReactNode, useState, useEffect } from "react";
import Header from "../../4_widgets/Header";
import Footer from "../../4_widgets/Footer";
import Purchases from "../../5_features/Pushases";
import { TypePurchases, TypePurchasesProps } from "../../6_entitis/Purchases/PurchasesEntiti.ts";
import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts";
import { useDataLoaderTodb } from "../../7_shared/Hooks/useDataLoaderTodb.ts";

export default function PurchasesContent(): ReactNode {
	const [film, setfilm] = useState<TypeCardData[]>([]); // Массив фильмов
	const [purchases, setPurchases] = useState<TypePurchases[]>([]);
	const [purchasesprops, setPurchasesprops] = useState<TypePurchasesProps[]>([]);

	// Загружаем покупки
	useDataLoaderTodb("http://localhost:5000/api/Purchases", setPurchases, []);

	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(`http://localhost:5000/api/Purchases/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) throw new Error("Ошибка при удалении");

			setPurchases(prev => {
				const newPurchases = prev.filter(p => p.id !== id);
				return newPurchases.length > 0 ? newPurchases : []; // ✅ ОБНОВЛЯЕМ ЧИСТО ПУСТОЙ МАССИВ
			});
		} catch (error) {
			console.error("Ошибка удаления:", error);
		}
	};

	// Загружаем фильмы по ID из покупок
	useEffect(() => {
		if (purchases.length) {
			const fetchFilms = async () => {
				const filmData = await Promise.all(
					purchases.map(async (purchase) => {
						const response = await fetch(`http://localhost:5000/api/Film/${purchase.filmid}`);
						if (response.ok) {
							return response.json();
						} else {
							return null;
						}
					})
				);

				// Отфильтровываем неудачные запросы (null) и сохраняем фильмы
				setfilm(filmData.filter((item) => item !== null));
			};

			fetchFilms();
		}
	}, [purchases]);

	// Обновление пропсов покупок с добавлением данных о фильмах
	useEffect(() => {
		if (purchases.length === 0) {
			setPurchasesprops([]); // 👈 Очищаем покупки-пропсы, если нет покупок
			return;
		}

		if (film.length && purchases.length) {
			const updatedPurchasesProps = purchases.map((purchase) => {
				const matchedFilm = film.find(f => Number(f.id) === Number(purchase.filmid));
				if (matchedFilm) {
					return {
						...purchase,
						image: matchedFilm.image,
						description: matchedFilm.description,
						name: matchedFilm.name,
						cost: matchedFilm.cost
					};
				}
				return null;
			}).filter(item => item !== null);

			setPurchasesprops(updatedPurchasesProps as TypePurchasesProps[]);
		}
	}, [film, purchases]);

	return (
		<div>
			<Header cartItemCounter={purchases.length}/>
			<Purchases purchases={purchasesprops} onDelete={handleDelete }/>
			<Footer />
		</div>
	);
}
