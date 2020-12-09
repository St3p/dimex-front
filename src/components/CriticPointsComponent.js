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
import Straightness from "./Tolerances/Straightness.jpg";
import Flatness from "./Tolerances/flatness.jpg";
import Circularity from "./Tolerances/Circularity.jpg";
import Cylindricity from "./Tolerances/cylindricity.jpg";
import ProfileLine from "./Tolerances/ProfileOfaLine.png"
import ProfileOfSurface from "./Tolerances/ProfileOfSurface.jpg"
import Parallelism from "./Tolerances/Parallelism.jpg"
import Perpendicularity from "./Tolerances/Perpendicularity.jpg"
import Angularity from "./Tolerances/Angularity.jpg"
import Position from "./Tolerances/Position.jpg"
import Concentricity from "./Tolerances/concentricity.jpg"
import Symmetry from "./Tolerances/Symmetry.jpg"
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Nav from "react-bootstrap/Nav";


function CriticPointsComponent(props) {
    const { onSubmitClick, addStraightness,
            straightness, flatness, circularity,cylindricity, profileLine, profileOfSurface,
            parallelism, perpendicularity, angularity, position, concentricity, symmetry,

            onStraightnessChange, onFlatnessChange, onCircularityChange, oncylindricityChange,
            onProfileLineChange, onProfileOfSurfaceChange, onParallelismChange, onPerpendicularityChange,
            onAngularityChange, onPositionChange, onConcentricityChange, onSymmetryChange
          } = props;
    return (
        <>
          <AuthNavbar />
          <Container>
                <Row>
                  <Col>
                  < br />
                  <Nav justify variant="tabs" defaultActiveKey="/criticPoints">
                    <Nav.Item>
                      <Nav.Link eventKey="/company">Company</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="/material">Material</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="/machine">Machine</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="/criticPoints">Critic Points</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="/Precision">Precision</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="/resume">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <br />
                  < br />
                  <h4>Critic Points </h4>
                  <p>Please fill out this form</p>
                  <br />
                  <Masonry
                    breakpointCols={4}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">

                    <Card>
                    <Card.Img variant="top" src={Straightness} />
                        <Card.Body>
                          <Card.Title>Straightness</Card.Title>
                              <Form>
                                {['checkbox'].map((type) => (
                                  <div key={type} className="mb-3">
                                    <Form.Check type={type}
                                                id={`check-api-${type}`}>
                                      <Form.Check.Input
                                                variant= "melon"
                                                type={type}
                                                onChange={onStraightnessChange}
                                                value={straightness}
                                                id="straightness"
                                                name="straightness"/>
                                      <Form.Check.Label>{`Add`}</Form.Check.Label>
                                    </Form.Check>
                                  </div>
                                ))}
                              </Form>
                          </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Flatness} />
                        <Card.Body>
                        <Card.Title>Flatness</Card.Title>
                          <Form>
                            {['checkbox'].map((type) => (
                              <div key={type} className="mb-3">
                                <Form.Check type={type}
                                            id={`check-api-${type}`}>
                                <Form.Check.Input
                                            type={type}
                                            value={flatness}
                                            onChange={onFlatnessChange}
                                            id="flatness"
                                            name="flatness"/>
                                <Form.Check.Label>{`Add`}</Form.Check.Label>
                                </Form.Check>
                              </div>
                             ))}
                          </Form>
                        </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Circularity} />
                         <Card.Body>
                           <Card.Title>Circularity</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onCircularityChange}
                                                 value={circularity}
                                                 id="circularity"
                                                 name="circularity"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Cylindricity} />
                         <Card.Body>
                           <Card.Title>Cylindricity</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={oncylindricityChange}
                                                 value={cylindricity}
                                                 id="cylindricity"
                                                 name="cylindricity"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={ProfileLine} />
                         <Card.Body>
                           <Card.Title>Profile of a line</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onProfileLineChange}
                                                 value={profileLine}
                                                 id="profileLine"
                                                 name="profileLine"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={ProfileOfSurface} />
                         <Card.Body>
                           <Card.Title>Profile of Surface</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onProfileOfSurfaceChange}
                                                 value={profileOfSurface}
                                                 id="profileOfSurface"
                                                 name="profileOfSurface"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Parallelism} />
                         <Card.Body>
                           <Card.Title>Parallelism</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onParallelismChange}
                                                 value={parallelism}
                                                 id="parallelism"
                                                 name="parallelism"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Perpendicularity} />
                         <Card.Body>
                           <Card.Title>Perpendicularity</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onPerpendicularityChange}
                                                 value={perpendicularity}
                                                 id="perpendicularity"
                                                 name="perpendicularity"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Angularity} />
                         <Card.Body>
                           <Card.Title>Angularity</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onAngularityChange}
                                                 value={angularity}
                                                 id="angularity"
                                                 name="angularity"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Position} />
                         <Card.Body>
                           <Card.Title>Position</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onPositionChange}
                                                 value={position}
                                                 id="position"
                                                 name="position"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>


                     <Card>
                     <Card.Img variant="top" src={Concentricity} />
                         <Card.Body>
                           <Card.Title>Concentricity</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onConcentricityChange}
                                                 value={concentricity}
                                                 id="concentricity"
                                                 name="concentricity"/>
                                       <Form.Check.Label>{`Add`}</Form.Check.Label>
                                     </Form.Check>
                                   </div>
                                 ))}
                               </Form>
                           </Card.Body>
                     </Card>

                     <Card>
                     <Card.Img variant="top" src={Symmetry} />
                         <Card.Body>
                           <Card.Title>Symmetry</Card.Title>
                               <Form>
                                 {['checkbox'].map((type) => (
                                   <div key={type} className="mb-3">
                                     <Form.Check type={type}
                                                 id={`check-api-${type}`}>
                                       <Form.Check.Input
                                                 type={type}
                                                 onChange={onSymmetryChange}
                                                 value={symmetry}
                                                 id="symmetry"
                                                 name="symmetry"/>
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
                           href="/machineProcess" >Back
                   </Button>

                   <Button
                           variant="melon"
                           type="submit"
                           id="add"
                           onClick={()=>onSubmitClick(straightness, flatness, circularity, cylindricity,
                           profileLine, profileOfSurface, parallelism, perpendicularity, angularity,
                           position, concentricity, symmetry )}> Next
                            </Button>
                   </ButtonToolbar>
                   < br />
                   < br />

                   </Col>
                 </Row>

                    </Container>



          </>
      );
  }
export default CriticPointsComponent;
