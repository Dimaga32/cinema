import { ReactNode } from "react"
import {
	Nav,
	Navbar,
	Container,
	Image,
	Dropdown,
	NavDropdown,
	Badge,
} from "react-bootstrap"
import classes from "./Header.module.scss"
import { FaShoppingCart } from 'react-icons/fa'


export default function HeaderContent({ cartItemCounter = 0 }: { cartItemCounter?: number }): ReactNode {

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
					<Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.toggleWhite} />
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
									href="/Register"
								>
									Register
								</Dropdown.Item>
								<Dropdown.Item
									className={classes.black + " px-5 fs-4"}
									href="/Login"
								>
									Login
								</Dropdown.Item>
								<Dropdown.Item
									className={classes.black + " px-5 fs-4"}
									href="/Account"
								>
									Account
								</Dropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Nav.Link href="/Purchases">
						<FaShoppingCart size={30} className={classes.white} style={{marginLeft:`2.5vw`}} />
						{cartItemCounter >= 0 && (
							<Badge pill className="ml-2">
								{cartItemCounter}
							</Badge>
						)}
					</Nav.Link>

				</Container>
			</Navbar>
		</header>
	)
}
