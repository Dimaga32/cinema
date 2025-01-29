import classes from "./Sessions.module.scss"
import { TypeCardData } from "../../6_entitis/CardData/CardData.ts";
import { ReactNode } from "react"

interface SessionsContentProps {
	film: TypeCardData;
}

function SessionsContent({ film }: SessionsContentProps):ReactNode {
	return (
		<div className={classes.mar}>
			<h2 className={"h1 text-center"}>Sessions</h2>
			<div
				className={classes.myGrid}
				style={{ gridTemplateColumns: `repeat(${film.shows?.datOfWeek.length}, 1fr)` }}
			>
				{film.shows?.datOfWeek.map((day, i: number) => {
					return (
						<div key={i}>
							<h3 className={`text-center`}>{day}</h3>
							{film.shows?.time[i].map((el, idx) => {
								return <h4 className={`text-center`} key={idx}>{el}</h4>;
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SessionsContent;
