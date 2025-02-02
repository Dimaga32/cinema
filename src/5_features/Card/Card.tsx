import { ReactNode } from "react";
import { TypeCardData } from "../../6_entitis/CardData/CardDataEntiti.ts";
import classes from "./Card.module.scss";
import { Image } from "react-bootstrap";

export default function CardContent(
	{
		id,
		name,
		image,
		cost,
	}: TypeCardData): ReactNode {
	return (
		<a href={`http://localhost:3000/Film/${id}`} className={classes.TextDecorNone}>
			<article id={`${id}`} className={classes.Card}>
				<h3 className="fs-3 text-center">{name}</h3>
				<div className={classes.pic}>
					<div className={classes.obr}>
						<Image
							style={{ backgroundImage: `url(${image})` }}
							className={classes.Image}
						/>
					</div>
				</div>
				<h4 className={classes.Cost+` `+`fs-3`}>Cost: {cost}</h4>
			</article>
		</a>
	);
}
