import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";



function MaterialComponent(props) {
    const {
          material, cost, delivery,

         onMaterialChange,onCostChange, onDeliveryChange, onSubmitClick
     } = props;
    return (
        <>
            <AuthNavBar />
            <h1>Material</h1>
            <p>Please fill out this form</p>
            <br />
            <Container>
            <Row>
              <Col>
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
                          <Form.Control type="text"
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
                    variant="melon"
                    type="submit"
                    id="add"
                    onClick={()=>onSubmitClick(material, cost, delivery)}> Next
            </Button>
            </ButtonToolbar>
            </Col>
          </Row>

  </Container>
        </>
    );
}

export default MaterialComponent
