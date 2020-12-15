import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Nav from "react-bootstrap/Nav";

function ManufactureComponent (props) {
    const { nameComponent, quantity,

         onNameChange, onQuantityChange, onSubmitClick
     } = props;
    return (
        <>
            <AuthNavBar />
            <Container>
            <Row>
              <Col>
              < br />
              <Nav justify variant="tabs" defaultActiveKey="/component">
              <Nav.Item>
                <Nav.Link href="/component" ><strong>1. Component</strong></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/quote" disabled>2. Company</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/material" disabled >3. Material</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/machineProcess" disabled>4. Machine</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/criticPoints" disabled>5. Critic Points</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/criticPoints" disabled>6. Precision</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/resume" disabled>7. Finalize</Nav.Link>
              </Nav.Item>
            </Nav>
              < br />
              < br />
              <h4>Component</h4>
              <p>Please fill out this form</p>
              <br />
                  <Form>
                      <Form.Group>
                      <Form.Label>Component Name</Form.Label>
                      <Form.Control type="text"
                                    placeholder="Component description"
                                    onChange={onNameChange}
                                    value={nameComponent}
                                    id="name_component"
                                    name="name_component"
                                    />
                      </Form.Group>
                      </Form>
                  </Col>
                </Row>

                    <Row>
                      <Col>
                          <Form>
                              <Form.Group>
                              <Form.Label>Quantity</Form.Label>
                              <Form.Control type="number"
                                            placeholder="Quantity"
                                            onChange={onQuantityChange}
                                            value={quantity}
                                            id="quantity"
                                            name="quantity"
                                            />
                              </Form.Group>
                              </Form>
                          </Col>
                        </Row>

            <br />
            <br /><br />
            <Row>
            <Col >
            <ButtonToolbar
            className="justify-content-between">

            <Button
                    variant="melon"
                    type="submit"
                    id="add"
                    href="/quote" >Back
            </Button>

            <Button
                    variant="melon"
                    type="submit"
                    id="add"
                    onClick={()=>onSubmitClick(nameComponent, quantity)}> Next
            </Button>
            </ButtonToolbar>
            <br />
            <br />
          </Col>
          </Row>

  </Container>
        </>
    );
}

export default ManufactureComponent
