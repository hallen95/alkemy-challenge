import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <Navbar variant="dark" className="navbar__container" style={{
          backgroundColor: "rgb(36, 36, 36)", justifyContent: "flex-end"}}>
        <Navbar.Brand href="#home" style={{flex:"1", marginLeft: "40px"}}>HeroCall</Navbar.Brand>
        <Nav  style={{marginRight: "40px"}}>
          <Nav.Link className="navbar__link" href="#home">Buscar Heroes</Nav.Link>
          <Nav.Link className="navbar__link"  href="#features">Mi Panel</Nav.Link>
          <Nav.Link className="navbar__link" href="#pricing">Logout</Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default NavBar;