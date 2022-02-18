 import { Nav, Navbar, NavDropdown } from "react-bootstrap";
 import Container from "react-bootstrap/Container";

const MyFooter = () => (
  <Navbar bg="dark" variant="dark" className="fixed-bottom mt-5" >
    <Container>
      <Navbar.Brand href="#home">Learn more </Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="#copyright">©Copyright</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyFooter