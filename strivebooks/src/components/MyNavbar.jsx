import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = (props) => {
  
  const location = useLocation();
 /*  console.log(location); */

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.storeName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div
                className={`nav-link ${
                  location.pathname === "/" && "active"
                }`}
              >
                Home
              </div>
            </Link>
            <Link to="/reservations">
              <div
                className={`nav-link ${
                  location.pathname === "/reservations" && "active"
                }`}
              >
                Reservations
              </div>
            </Link>
            <div className="nav-link">Browse</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
