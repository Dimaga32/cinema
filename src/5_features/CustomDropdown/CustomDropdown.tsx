import { ReactNode, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { TypeGenre } from "../../6_entitis/CardData/CardData.ts"
import classes from "./CustomDropdown.module.scss"

interface GenreDropdownProps {
	value: TypeGenre
	onChange: (genre: TypeGenre) => void
	width?: string
	height?: string
	fontSize?: string
	buttonColor?: string
}

const genres: TypeGenre[] = [
	"Fantasy",
	"Action movie",
	"Adventures",
	"Animation",
	"Comedy",
	"Drama",
	"Historical",
	"Musical",
	"Horror",
	"Romance",
	"none",
]

export default function GenreDropdownContent({
	value,
	onChange,
	width = "200px",
	height = "40px",
	fontSize = "16px",
	buttonColor = "#1e2a47",
}: GenreDropdownProps): ReactNode {
	const [selectedGenre, setSelectedGenre] = useState<TypeGenre>(value)

	const handleSelect = (genre: string | null): void => {
		if (genre && genres.includes(genre as TypeGenre)) {
			const selected = genre as TypeGenre
			setSelectedGenre(selected)
			onChange(selected)
		}
	}

	return (
		<Dropdown onSelect={handleSelect}>
			<Dropdown.Toggle
				className={classes.dropdownButton}
				style={{
					width,
					height,
					fontSize,
					backgroundColor: buttonColor,
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{selectedGenre !== "none" ? selectedGenre : "No matter"}
			</Dropdown.Toggle>

			<Dropdown.Menu
				className={classes.dropdownMenu}
				style={{ minWidth: "100%" }}
			>
				{genres.map((genre) => (
					<Dropdown.Item
						key={genre}
						eventKey={genre}
						className={classes.dropdownItem}
						style={{ fontSize }}
					>
						{genre !== "none" ? genre : "No matter"}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}
