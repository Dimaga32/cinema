import { ReactNode } from "react"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts"
import classes from "./Card.module.scss"

export default function CardContent({
	id,
	name,
	image,
}: TypeCardData): ReactNode {
	return (
		<a href={`http://localhost:3000/Film/${id}`}>
			<article id={`${id}`} className={classes.Card}>
				<h3 className="h4 text-center text-white">{name}</h3>
				<div className={classes.pic}>
					<div className={classes.obr}>
						<image
							style={{ backgroundImage: `url(${image})` }}
							className={classes.Image}
						/>
					</div>
				</div>
			</article>
		</a>
	)
}
