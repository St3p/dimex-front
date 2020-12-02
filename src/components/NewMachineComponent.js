import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";

function NewMachineComponent(props) {
  const {
       machine, foto, description, capacities,

       onMachineChange, onfotoChange, onDescriptionChange, onCapacitiesChange, onSubmitClick
   } = props;
  return (
      <>
          <AuthNavBar />
          <h1>Add New machine</h1>
          <p>Please fill out this form</p>
          <br />
          <Container>
          <Row>
            <Col>
                <Form>
                    <Form.Group>
                    <Form.Label>Machine</Form.Label>
                    <Form.Control type="text"
                                  placeholder="machine"
                                  onChange={onMachineChange}
                                  value={machine}
                                  id="machine"
                                  name="machine"
                                  />
                    </Form.Group>
                    </Form>
                </Col>
              </Row>

              <Row>
                <Col>
                    <Form>
                        <Form.Group>
                        <Form.Label>foto</Form.Label>
                        <Form.Control type="text"
                                      placeholder="foto"
                                      onChange={onfotoChange}
                                      value={foto}
                                      id="foto"
                                      name="foto"
                                      />
                        </Form.Group>
                        </Form>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                        <Form>
                            <Form.Group>
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
                                <Form.Label>capacities</Form.Label>
                                <Form.Control type="text"
                                              placeholder="capacities"
                                              onChange={onCapacitiesChange}
                                              value={capacities}
                                              id="capacities"
                                              name="capacities"
                                              />
                                </Form.Group>
                                </Form>
                            </Col>
                          </Row>

          <br />
          <br /><br />
          <Row>
          <Col>
          <Button
                  variant="primary"
                  type="submit"
                  id="add"
                  onClick={onSubmitClick}> Submit
          </Button>

          <br />
          <Link to="/home">Back</Link>
          </Col>
        </Row>

</Container>
      </>
  );
}

export default NewMachineComponent
