import classes from "./Sessions.module.scss"
import {
	TypeCardData,
	TypeTime,
} from "../../6_entitis/CardData/CardDataEntiti.ts"
import { ReactNode } from "react"
import { TicketsToCart } from "./TicketsToCart.ts"

function SessionsContent({
	film,
}: {
	film: TypeCardData
	count: number
	setData: React.Dispatch<React.SetStateAction<number>>
}): ReactNode {
	return (
		<div className={classes.mar}>
			<h2 className={"h1 text-center"}>Sessions</h2>
			<div
				className={classes.myGrid}
				style={{
					gridTemplateColumns: `repeat(${film.show_days.length}, 1fr)`,
				}}
			>
				{film.show_days.map((day, i: number) => {
					return (
						<div key={i} className={classes.dayBlock}>
							<h3 className={`text-center`}>{day}</h3>
							{film.show_times[i]
								.split(`, `)
								.map((el: string, idx: number) => {
									if (!(el as TypeTime)) {
										console.warn(`Invalid time format: ${el}`)
										return null
									}
									return (
										<div key={idx} className={classes.el}>
											<h4 className={`text-center ${classes.marL}`}>
												{el}
											</h4>
											<button
												onClick={() => {
													TicketsToCart(
														day,
														el as TypeTime,
														film.id,
														film.cost
													)
												}}
												className={classes.Mybtn + ` fs-5`}
											>
												Купить
											</button>
										</div>
									)
								})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SessionsContent
