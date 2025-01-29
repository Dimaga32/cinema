import { ReactNode } from "react"
import classes from "./mysearch.module.scss"

export default function MySearchContent({
	width = "300px",
	height = "40px",
	fontSize = "16px",
	onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e) return
	},
}): ReactNode {
	return (
		<div className={classes.searchWrapper} style={{ width, height }}>
			<span
				className={classes.icon}
				style={{
					width: `${parseInt(fontSize) * 1.5}px`,
					height: `${parseInt(fontSize) * 1.5}px`,
				}}
			/>
			<input
				onChange={onchange}
				className={classes.input}
				style={{ fontSize, height }}
				placeholder="Поиск..."
			/>
		</div>
	)
}
