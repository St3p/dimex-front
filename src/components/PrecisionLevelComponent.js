import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import Masonry from 'react-masonry-css'
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Nav from "react-bootstrap/Nav";



function PrecisionLevelComponent(props) {
    const { onSubmitClick, h7Hole, h8Hole, h9Hole, h11Hole,
            h6Axis, h7Axis, h9Axis, h11Axis,

            onH7HoleChange, onH8HoleChange, onH9HoleChange, onH11HoleChange,
            onH6AxisChange, onH7AxisChange, onH9AxisChange, onH11AxisChange

          } = props;
    return (
      <>
        <AuthNavbar />
        <Container>
              <Row>
                <Col>
                < br />
                <Nav justify variant="tabs" defaultActiveKey="/presicionLevel">
                <Nav.Item>
                  <Nav.Link href="/component" >1. Component</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/quote" >2. Company</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/material"  >3. Material</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/machineProcess" >4. Machine</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/criticPoints" >5. Critic Points</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/presicionLevel" ><strong>6. Precision</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/resume" disabled>7. Finalize</Nav.Link>
                </Nav.Item>
              </Nav>
                <br />
                < br />
                <h4>Presicion</h4>
                <p>Please fill out this form</p>
                <br />
                <Masonry
                  breakpointCols={4}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">

                  <Card
                        bg="secondary"
                        text="white ">
                   <Card.Header>H7</Card.Header>
                      <Card.Body>
                            <Form>
                              {['checkbox'].map((type) => (
                                <div key={type} className="mb-3">
                                  <Form.Check type={type}
                                              id={`check-api-${type}`}>
                                    <Form.Check.Input
                                              type={type}
                                              value={h7Hole}
                                              onChange={onH7HoleChange}
                                              id="h7Hole"
                                              name="h7Hole"/>
                                    <Form.Check.Label>{`Add`}</Form.Check.Label>
                                  </Form.Check>
                                </div>
                              ))}
                              </Form>
                            </Card.Body>
                         </Card>

                          <Card
                                  bg="secondary"
                                  text="white ">
                             <Card.Header>H8</Card.Header>
                                <Card.Body>
                        <Form>
                          {['checkbox'].map((type) => (
                            <div key={type} className="mb-3">
                              <Form.Check type={type}
                                          id={`check-api-${type}`}>
                              <Form.Check.Input
                                          type={type}
                                          value={h8Hole}
                                          onChange={onH8HoleChange}
                                          id="h8Hole"
                                          name="h8Hole"/>
                              <Form.Check.Label>{`Add`}</Form.Check.Label>
                              </Form.Check>
                            </div>
                           ))}
                        </Form>
                      </Card.Body>
                   </Card>


                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>H9</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               onChange={onH9HoleChange}
                                               value={h9Hole}
                                               id="h9Hole"
                                               name="h9Hole"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>


                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>H11</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               onChange={onH11HoleChange}
                                               value={h11Hole}
                                               id="h11Hole"
                                               name="h11Hole"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>

                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>h6</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               onChange={onH6AxisChange}
                                               value={h6Axis}
                                               id="h6Axis"
                                               name="h6Axis"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>

                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>h7</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               onChange={onH7AxisChange}
                                               value={h7Axis}
                                               id="h7Axis"
                                               name="h7Axis"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>

                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>h9</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               value={h9Axis}
                                               onChange={onH9AxisChange}
                                               id="h9Axis"
                                               name="h9Axis"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>

                   <Card
                           bg="secondary"
                           text="white ">
                      <Card.Header>h11</Card.Header>
                         <Card.Body>
                             <Form>
                               {['checkbox'].map((type) => (
                                 <div key={type} className="mb-3">
                                   <Form.Check type={type}
                                               id={`check-api-${type}`}>
                                     <Form.Check.Input
                                               type={type}
                                               onChange={onH11AxisChange}
                                               value={h11Axis}
                                               id="h11Axis"
                                               name="h11Axis"/>
                                     <Form.Check.Label>{`Add`}</Form.Check.Label>
                                   </Form.Check>
                                 </div>
                               ))}
                             </Form>
                         </Card.Body>
                   </Card>

                </Masonry>
                </Col>
              </Row>
        </Container>
        <Container>

        <Row>
        <Col >
        < br />
        < br />

        <ButtonToolbar
        className="justify-content-between">

        <Button
                variant="melon"
                type="submit"
                id="add"
                href="/criticPoints" >Back
        </Button>

        <Button
                variant="outline-success"
                type="submit"
                id="add"
                onClick={()=>onSubmitClick( h7Hole, h8Hole, h9Hole, h11Hole,
                h6Axis, h7Axis, h9Axis, h11Axis)}> Next
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

  export default PrecisionLevelComponent;
