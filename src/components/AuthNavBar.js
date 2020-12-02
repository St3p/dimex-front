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
      <Navbar.Brand href="/home">DIMEX Quote</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login">Logout</Nav.Link>
          <Nav.Link href="/quote">Start Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</>
)
}


export default AnonNavBar;
