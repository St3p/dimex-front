import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Logo from "./Carusel/logo.png"


function AnonNavBar(){
  return (
    <>
    <Navbar bg="White" expand="lg">
      <Navbar.Brand href="/home">
      <img
    src={Logo}
    width="50"
    className="d-inline-block align-top"
    alt="React Bootstrap logo"
    />&nbsp;
     Dimex
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
          <Nav.Link href="/quote">Start Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</>
)
}


export default AnonNavBar;
