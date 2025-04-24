import { ReactNode } from "react"
import classes from "./mysearch.module.scss"

interface MySearchProps {
	width?: string
	height?: string
	fontSize?: string
	onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void // Типизация onChange
}

export default function MySearch({
	width = "300px",
	height = "40px",
	fontSize = "16px",
	onchange,
}: MySearchProps): ReactNode {
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
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					if (!onchange) return
					onchange(e)
				}}
				className={classes.input}
				style={{ fontSize, height }}
				placeholder="Поиск..."
			/>
		</div>
	)
}
