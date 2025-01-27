import { ReactNode } from "react"
import { Col, Row  } from "react-bootstrap"
import classes from "./footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function FooterContent(): ReactNode{

	return (
		<footer className={classes.footer}>
				<Row>
					<Col md={4} className={classes.sector+" mb-4"}>
						<h5 className="h4"> Кинотеатр</h5>
						<div className={classes.footerLinks}>
							<a className="fs-6" href="/">Главная</a>
							<a className="fs-6" href="/movies">Фильмы</a>
							<a className="fs-6" href="/schedule">Расписание</a>
							<a className="fs-6" href="/contacts">Контакты</a>
						</div>
					</Col>
					<Col md={4} className={classes.sector+" mb-4"}>
						<h5 className="h4">Социальные сети</h5>
						<div className={classes.socialIcons}>
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
								<FontAwesomeIcon icon={faFacebook} size="3x" />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faTwitter} size="3x" />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faInstagram} size="3x" />
							</a>
						</div>
					</Col>
					<Col md={4} className={classes.sector+" mb-4"}>
						<h5 className="h4">Контактная информация</h5>
						<div className={classes.contactInfo}>
							<p className="fs-6">Адрес: ул. Кинотеатральная, 123</p>
							<p className="fs-6">Email: info@cinema.com</p>
							<p className="fs-6">Телефон: +7 (123) 456-78-90</p>
						</div>
					</Col>
				</Row>
			<Row className="justify-content-center fs-6">
			© Все права защищены 2025
		</Row>
		</footer>
	)
}