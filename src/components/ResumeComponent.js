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
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Logo from "./Carusel/logo.png";
import BigLogo from "./Carusel/BigLogo.png";
import StepOneSection from "./StepOneSection"
import StepTwoSection from "./StepTwoSection"
import StepThreeSection from "./StepThreeSection"
import StepFourSection from "./StepFourSection"
import StepFiveSection from "./StepFiveSection"
import StepZeroSection from "./StepZeroSection"



function ResumeComponent(props) {
  const { companyId, companyName, companyPrice, machineArray, hoursObj, machine,
          materialCost, materialName, flatness, straightness,
          circularity, cylindricity, profileLine, parallelism,
          perpendicularity, angularity, profileOfSurface,
          symmetry, concentricity, h7Hole, h8Hole, h9Hole,
          h11Hole, h6Axis, h7Axis, h9Axis, h11Axis, price,
          quantity, nameComponent, stepFiveSum, onSubmitClick, subtotal, total, ivaTotal } = props;
  console.log(hoursObj);
  console.log("ResumeComponent | render", companyPrice);


  return (
    <>
    <AuthNavbar />
    <Container>
          <Row>
            <Col>
            < br />
            <Nav justify variant="tabs" defaultActiveKey="/resume">
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
              <Nav.Link href="/presicionLevel" >6. Precision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resume" ><strong>7. Finalize</strong></Nav.Link>
            </Nav.Item>
            </Nav>
            < br />
            < br />
            <h4>Finalize</h4>
            <p>Please check the information</p>
            <br />
            <br />
            </Col>
            </Row>
            </Container>


            <Container>
            <Row>
            <Col>
            <img
          src={BigLogo}
          width="250"/>
            </Col>
            <Col>
            <StepOneSection
              companyId={companyId}
              companyName={companyName}
            />
            </Col>
            <Col>
              <h5>Date</h5>
              <p>fecha</p>
              <h5>Quote</h5>
              <p>00001</p>
            </Col>
            </Row>
            </Container>
            <Container>
            <Row>
            <Col>
            <br />
            <Table striped bordered hover>
            <thead>
              <tr>
                <th> # Quantity </th>
                <th> Component Description </th>
                <th> hrs p-pc </th>
                <th> Price p-pc </th>
              </tr>
            </thead>
            <tbody>
              <StepZeroSection
                quantity={quantity}
                nameComponent={nameComponent}
                />
              <tr>
                <td></td>
                <th>Material</th>
                <td></td>
                <td></td>
              </tr>
              <StepTwoSection
                materialCost={materialCost}
                materialName={materialName}
                />
              <tr>
                <td></td>
                <th>Machine</th>
                <td></td>
                <td></td>
              </tr>
              <StepThreeSection
                  machineArray={machineArray}
                  hoursObj={hoursObj}
                  machine={machine}
                  companyPrice={companyPrice}
                />
              <tr>
                <td></td>
                <th>Critic Points</th>
                <td></td>
                <td></td>
              </tr>
              <StepFourSection
                    flatness={flatness}
                    straightness={straightness}
                    circularity={circularity}
                    cylindricity={cylindricity}
                    profileLine={profileLine}
                    parallelism={parallelism}
                    perpendicularity={perpendicularity}
                    angularity={angularity}
                    profileOfSurface={profileOfSurface}
                    symmetry={symmetry}
                    concentricity={concentricity}
                  />
              <tr>
                <td></td>
                <th>Precision</th>
                <td></td>
                <td></td>
              </tr>
              <StepFiveSection
                        h7Hole={h7Hole}
                        h8Hole={h8Hole}
                        h9Hole={h9Hole}
                        h11Hole={h11Hole}
                        h6Axis={h6Axis}
                        h7Axis={h7Axis}
                        h9Axis={h9Axis}
                        h11Axis={h11Axis}/>

             <tr>
               <td></td>
               <td></td>
               <td>Subtotal</td>
               <td>{subtotal}</td>
             </tr>
             <tr>
               <td></td>
               <td></td>
               <td>IVA</td>
               <td>{ivaTotal}</td>
            </tr>
            <tr>
               <td></td>
               <td></td>
               <td>total</td>
               <td>{total}</td>
            </tr>

            </tbody>
            </Table>
            <br />
            <br />

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
            href="/presicionLevel" >Back
    </Button>

    <Button
            variant="melon"
            type="submit"
            id="add"
            onClick={onSubmitClick}> Submit
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

export default ResumeComponent;
