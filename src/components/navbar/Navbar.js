import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.assign('/');
  };

  return (
    <Navbar variant="dark" className="navbar__container">
      <Link to="/home" className="navbar__image">
        <Navbar.Brand>HeroCall</Navbar.Brand>
      </Link>
      <Nav className="navbar__menu">
        <Link to="/search" className="navbar__link">
          <div className="nav-link">Buscar Héroes</div>
        </Link>
        <Nav.Link
          className="navbar__link"
          onClick={() => handleLogout()}
          href="#pricing"
        >
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
