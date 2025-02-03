import { ReactNode, useState, useEffect } from "react";
import Header from "../../4_widgets/Header";
import Footer from "../../4_widgets/Footer";
import Purchases from "../../5_features/Pushases";
import { TypePurchases, TypePurchasesProps } from "../../6_entitis/Purchases/PurchasesEntiti.ts";
import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts";
import { usePurchasesLoader } from "../../7_shared/Hooks/usePurchasesLoader.ts"

export default function PurchasesContent(): ReactNode {
	const [film, setfilm] = useState<TypeCardData[]>([]); // Массив фильмов
	const [purchasesprops, setPurchasesprops] = useState<TypePurchasesProps[]>([]);

	// Загружаем покупки
	let count=0
	const Userpurchases:TypePurchases[] = usePurchasesLoader([count])
	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(`http://localhost:5000/api/Purchases/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});

			if (!response.ok) throw new Error("Ошибка при удалении");
			count++
			Userpurchases.filter(p => p.id !== id)
		} catch (error) {
			console.error("Ошибка удаления:", error);
		}
	};

	// Загружаем фильмы по ID из покупок
	useEffect(() => {
		if (Userpurchases.length) {
			const fetchFilms = async () => {
				const filmData = await Promise.all(
					Userpurchases.map(async (purchase) => {
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
	}, [Userpurchases]);

	// Обновление пропсов покупок с добавлением данных о фильмах
	useEffect(() => {
		if (Userpurchases.length === 0) {
			setPurchasesprops([]); // 👈 Очищаем покупки-пропсы, если нет покупок
			return;
		}

		if (film.length && Userpurchases.length) {
			const updatedPurchasesProps = Userpurchases.map((purchase) => {
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
	}, [film, Userpurchases]);

	return (
		<div>
			<Header cartItemCounter={Userpurchases.length}/>
			<Purchases purchases={purchasesprops} onDelete={handleDelete }/>
			<Footer />
		</div>
	);
}
