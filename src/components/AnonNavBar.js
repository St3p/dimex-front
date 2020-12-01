import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";


function AnonNavBar(){
  return (
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">DIMEX Quote</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</>
)
}


export default AnonNavBar;
