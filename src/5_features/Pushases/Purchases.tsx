import classes from "./Purchases.module.scss"
import { TypePurchasesProps } from "../../6_entitis/Purchases/PurchasesEntiti.ts"
import { ReactNode } from "react"
import React from "react"

export default function PurchasesContent({
	purchases,
	onDelete,
}: {
	purchases: TypePurchasesProps[]
	onDelete: (id: number) => void
}) {
	if (!purchases || !purchases.length) return null
	const sortedPurchases = [...purchases].sort((a, b) => {
		const order = { inProcess: 1, success: 2, notValid: 3 }
		return order[a.status] - order[b.status]
	})

	// Индекс последнего элемента со статусом "inProcess"
	const lastInProcessIndex = sortedPurchases
		.map((purchase) => purchase.status)
		.lastIndexOf("inProcess")

	const totalCost: number = purchases.reduce(
		(a: number, b: TypePurchasesProps) => {
			if (b.status == "inProcess") return a + b.cost
			else return a
		},
		0
	)

	function dataToStringer(data: string) {
		const date = new Date(data)

		// Добавляем 3 часа для московского времени (UTC+3)
		date.setHours(date.getHours() + 3)

		// Форматируем дату в нужный формат
		const year: number = date.getUTCFullYear()
		const month: string = String(date.getUTCMonth() + 1).padStart(2, "0") // Месяцы начинаются с 0
		const day: string = String(date.getUTCDate()).padStart(2, "0")
		const hours: string = String(date.getUTCHours()).padStart(2, "0")
		const minutes: string = String(date.getUTCMinutes()).padStart(2, "0")
		const seconds: string = String(date.getUTCSeconds()).padStart(2, "0")

		const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
		return formattedDate
	}

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Purchases</h2>
			<ul className={classes.list}>
				{sortedPurchases.map(
					(purchase: TypePurchasesProps, index: number): ReactNode => {
						if (purchase.status == "notValid") return
						if (purchase.status == "inProcess")
							return (
								<React.Fragment key={purchase.id}>
									<li
										className={
											classes.item + ` ` + classes[purchase.status]
										}
									>
										<button
											className={classes.deleteButton}
											onClick={() => {
												onDelete(purchase.id)
											}}
											aria-label={`Удалить ${purchase.name}`}
										>
											×
										</button>
										<img
											src={purchase.image}
											alt={purchase.name}
											className={classes.image}
										/>
										<div className={classes.info}>
											<h3 className={classes.name}>
												{purchase.name}
											</h3>
											<p className={classes.description}>
												{purchase.description}
											</p>
											<p className={classes.date}>
												{dataToStringer(purchase.data)}
											</p>
											<p className={classes.date}>
												Cost: {purchase.cost}
											</p>
										</div>
									</li>
									{index === lastInProcessIndex && (
										<div
											className={classes.totalCost + ` text-center`}
										>
											<h3>Total Cost: {totalCost}</h3>
											<button className={classes.Mybtn}>
												Оплатить
											</button>
										</div>
									)}
								</React.Fragment>
							)
						else
							return (
								<React.Fragment key={purchase.id}>
									<li
										className={
											classes.item + ` ` + classes[purchase.status]
										}
									>
										<button
											className={classes.deleteButton}
											onClick={() => onDelete(purchase.id)}
											aria-label={`Удалить ${purchase.name}`}
										>
											×
										</button>
										<img
											src={purchase.image}
											alt={purchase.name}
											className={classes.image}
										/>
										<div className={classes.info}>
											<h3 className={classes.name}>
												{purchase.name}
											</h3>
											<p className={classes.description}>
												{purchase.description}
											</p>
											<p className={classes.date}>
												{dataToStringer(purchase.data)}
											</p>
											<p className={classes.date}>
												Cost: {purchase.cost}
											</p>
										</div>
									</li>
									{index === lastInProcessIndex && (
										<div
											className={classes.totalCost + ` text-center`}
										>
											<h3>Total Cost: {totalCost}</h3>
											<button className={classes.Mybtn}>
												Оплатить
											</button>
										</div>
									)}
								</React.Fragment>
							)
					}
				)}
			</ul>
		</div>
	)
}
