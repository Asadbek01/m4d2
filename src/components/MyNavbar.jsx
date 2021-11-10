import { Navbar, Nav}  from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
// import Nav  from "react-bootstrap/Nav";
const MyNavbar = () => (
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto justify-content-center">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Reservation</Nav.Link>
      <Nav.Link href="#deets">More deets</Nav.Link>
    </Nav>
     
  </Navbar.Collapse>
</Navbar>
);
 export default MyNavbar;