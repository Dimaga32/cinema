import { ReactNode } from "react"
import {
	Nav,
	Navbar,
	Container,
	Image,
	Dropdown,
	NavDropdown,
} from "react-bootstrap"
import classes from "./Header.module.scss"

export default function HeaderContent(): ReactNode {
	return (
		<header>
			<Navbar expand="lg" className={classes.BlueDark}>
				<Container className="d-flex justify-content-center text-center">
					<Navbar.Brand href="/" className={classes.white + " me-4 fs-2"}>
						<Image
							src="/logo.png"
							width="auto"
							height="40px"
							className={classes.logo + " d-inline-block align-top"}
							alt="Логотип"
						/>{" "}
						Cinema
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className={classes.Collapse}
					>
						<Nav className="text-center">
							<Nav.Link
								className={classes.white + " px-5 fs-3"}
								href="/"
							>
								Main
							</Nav.Link>
							<Nav.Link
								className={classes.white + " px-5 fs-3"}
								href="/Films"
							>
								Films
							</Nav.Link>
							<NavDropdown
								className={"text-light px-5 fs-3"}
								title={<span className={classes.whiter}>User</span>}
							>
								<Dropdown.Item
									className={classes.black + " px-5 fs-4"}
									href="#action1"
								>
									Register
								</Dropdown.Item>
								<Dropdown.Item
									className={classes.black + " px-5 fs-4"}
									href="#action2"
								>
									Login
								</Dropdown.Item>
								<Dropdown.Item
									className={classes.black + " px-5 fs-4"}
									href="#action3"
								>
									Account
								</Dropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
