import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Nav from "react-bootstrap/Nav";



function MaterialComponent(props) {
    const {
          material, cost, delivery,

         onMaterialChange,onCostChange, onDeliveryChange, onSubmitClick
     } = props;
    return (
        <>
            <AuthNavBar />
            <Container>
            <Row>
              <Col>
              < br />
              <Nav justify variant="tabs" defaultActiveKey="/material">
              <Nav.Item>
              <Nav.Link href="/component" >1. Component</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/quote" >2. Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/material"><strong>3. Material</strong></Nav.Link>
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
              <h4>Material</h4>
              <p>Please fill out this form</p>
              <br />
                  <Form>
                      <Form.Group>
                      <Form.Label>Material</Form.Label>
                      <Form.Control type="text"
                                    placeholder="material"
                                    onChange={onMaterialChange}
                                    value={material}
                                    id="material"
                                    name="material"
                                    />
                      </Form.Group>
                      </Form>
                  </Col>
                </Row>

                <Row>
                  <Col>
                      <Form>
                          <Form.Group>
                          <Form.Label>Cost</Form.Label>
                          <Form.Control type="number"
                                        placeholder="Cost"
                                        onChange={onCostChange}
                                        value={cost}
                                        id="cost"
                                        name="cost"
                                        />
                          </Form.Group>
                          </Form>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                          <Form>
                              <Form.Group>
                              <Form.Label>Delivery</Form.Label>
                              <Form.Control type="text"
                                            placeholder="delivery"
                                            onChange={onDeliveryChange}
                                            value={delivery}
                                            id="delivery"
                                            name="delivery"
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
                    variant="outline-success"
                    type="submit"
                    id="add"
                    onClick={()=>onSubmitClick(material, cost, delivery)}> Next
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

export default MaterialComponent
