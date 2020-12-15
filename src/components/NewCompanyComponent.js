import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function NewCompanyComponent(props) {
    const {
         company, logo, description, price,

         onCompanyChange,onlogoChange, onDescriptionChange, onSubmitClick, onPriceChange
     } = props;
    return (
        <>
            <AuthNavBar />
            <Container>
            <Row>
              <Col>
              <h1>Add New Company</h1>
              <p>Please fill out this form</p>
              <br />

                  <Form>
                      <Form.Group controlId="formBasicEmail">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text"
                                    placeholder="company"
                                    onChange={onCompanyChange}
                                    value={company}
                                    id="company"
                                    name="company"
                                    />
                      </Form.Group>
                      </Form>
                  </Col>
                </Row>

                <Row>
                  <Col>
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Logo</Form.Label>
                          <Form.Control type="text"
                                        placeholder="logo"
                                        onChange={onlogoChange}
                                        value={logo}
                                        id="logo"
                                        name="logo"
                                        />
                          </Form.Group>
                          </Form>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                          <Form>
                              <Form.Group controlId="formBasicEmail">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text"
                                            placeholder="description"
                                            onChange={onDescriptionChange}
                                            value={description}
                                            id="description"
                                            name="description"
                                            />
                              </Form.Group>
                              </Form>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                              <Form>
                                  <Form.Group>
                                  <Form.Label>Price per hour</Form.Label>
                                  <Form.Control type="text"
                                                placeholder="price"
                                                onChange={onPriceChange}
                                                value={price}
                                                id="price"
                                                name="price"
                                                />
                                  </Form.Group>
                                  </Form>
                              </Col>
                            </Row>

            <br />
            <br /><br />
            <Row>
            <Col>
            <ButtonToolbar
            className="justify-content-between">

            <Button
                    variant="melon"
                    type="submit"
                    id="add"
                    href="/home" >Back
            </Button>

            <Button
                    variant="outline-success"
                    type="submit"
                    id="add"
                    onClick={onSubmitClick}> Next
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

export default NewCompanyComponent
