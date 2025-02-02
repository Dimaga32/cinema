import { ReactNode } from "react"
import { FaStar, FaStarHalfAlt } from "react-icons/fa" // Импортируем звёзды из react-icons
import classes from "./stars.module.scss"

interface StarRatingProps {
	rating: number
	width?: string
	starSize?: string // Размер звёздочки (ширина и высота)
	starHeight?: string // Высота звёздочки (если нужно отдельно управлять высотой)
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function StarsContent({
	rating,
	width = "300px",
	starSize = "24px", // Размер по умолчанию
	onClick = () => {},
}: StarRatingProps): ReactNode {
	const roundedRating = Math.round(rating * 10) / 10
	const fullStars = Math.floor(roundedRating)
	const hasHalfStar = roundedRating - fullStars >= 0.5
	const stars = []

	// Добавляем полные звёзды
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<div
				key={`full-${i}`}
				data-rating={i + 1}
				className={`${classes.star} ${classes.fullStar}`}
				style={{ width, fontSize: starSize }}
			>
				<FaStar />
			</div>
		)
	}

	// Добавляем половину звезды, если нужно
	if (hasHalfStar) {
		stars.push(
			<div
				key="half"
				data-rating={fullStars + 0.5}
				className={`${classes.star} ${classes.halfStar}`}
				style={{ width, fontSize: starSize }}
			>
				<FaStarHalfAlt />
			</div>
		)
	}

	// Добавляем пустые звёзды
	const totalStars = 10
	const remainingStars: number = totalStars - fullStars - (hasHalfStar ? 1 : 0)
	for (let i: number = 0; i < remainingStars; i++) {
		stars.push(
			<div
				key={`empty-${i}`}
				data-rating={fullStars + (hasHalfStar ? 0.5 : 0) + i + 1}
				className={`${classes.star} ${classes.emptyStar}`}
				style={{ width, fontSize: starSize }}
			>
				<FaStar />
			</div>
		)
	}

	return (
		<div className={classes.starRating} style={{ width }} onClick={onClick}>
			{stars}
		</div>
	)
}
