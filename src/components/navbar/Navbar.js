import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <Navbar variant="dark" className="navbar__container">
        <Link to="/" className="navbar__image"><Navbar.Brand>HeroCall</Navbar.Brand></Link>
        <Nav className="navbar__menu">
          <Link to="/search"  className="navbar__link">
            <Nav.Link href="#searching">Buscar Heroes</Nav.Link>
          </Link>
          <Nav.Link className="navbar__link"  href="#features">Mi Panel</Nav.Link>
          <Nav.Link className="navbar__link" href="#pricing">Logout</Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default NavBar;