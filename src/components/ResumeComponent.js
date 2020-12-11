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

function StepOneSection(props){
  const { companyId, companyName } = props;
  return (
    <>
    <h5>Company</h5>
    <p>{companyId}</p>
    <p>{companyName}</p>
    </>
  );
}

function StepTwoSection(props){
  const { materialCost, materialName } = props;
  return (
    <>
    <h5>Material</h5>
    <p>{materialCost}</p>
    <p>{materialName}</p>
    </>
  );
}
function MachineItem(props) {
  var item = props.mac.machine + " ";
  var item2 = props.mac.capacities + " ";

  return (
    <>
          <td>{item}</td>
          <td>{item2}</td>
    </>
  );
}
function MachineItem2(props) {
  var item = props.hrs.hoursObj + " ";
  console.log(item);
  return (
    <>
          <td>{item}</td>
    </>
  );
}
function StepThreeSection(props){
  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr>
      <th> Machine </th>
      <th> Hours </th>
      <th> Cost </th>
      </tr>
    </thead>
    <tbody>
      <tr>
      {props.machineArray.map( mac => {
        return  <MachineItem mac={mac} />
      })}
      </tr>
      <tr>
      {props.hoursObj.map( hrs => {
        return  <MachineItem2 hrs={hrs} />
      })}
      </tr>
    </tbody>
    </Table>
    </>
  )
}

function StepFourSection(props){
  const { flatness, straightness,
  circularity, cylindricity, profileLine, parallelism,
  perpendicularity, angularity, profileOfSurface,
  symmetry, concentricity } = props;
  return (
    <>
    <h5>Critic Points</h5>
    <p>{flatness}</p>
    <p>{straightness}</p>
    <p>{circularity}</p>
    <p>{cylindricity}</p>
    <p>{profileLine}</p>
    <p>{parallelism}</p>
    <p>{perpendicularity}</p>
    <p>{angularity}</p>
    <p>{profileOfSurface}</p>
    <p>{symmetry}</p>
    <p>{concentricity}</p>

    </>
  );
}

function StepFiveSection(props){
  const { h7Hole, h8Hole, h9Hole, h11Hole, h6Axis, h7Axis, h9Axis, h11Axis} = props;
  return (
    <>
    <h5>Precision</h5>

    <p>{h7Hole}</p>
    <p>{h8Hole}</p>
    <p>{h9Hole}</p>
    <p>{h11Hole}</p>
    <p>{h6Axis}</p>
    <p>{h7Axis}</p>
    <p>{h9Axis}</p>
    <p>{h11Axis}</p>


    </>
  );
}

function ResumeComponent(props) {
  const { companyId, companyName, machineArray, hoursObj, machine,
          materialCost, materialName, flatness, straightness,
          circularity, cylindricity, profileLine, parallelism,
          perpendicularity, angularity, profileOfSurface,
          symmetry, concentricity, h7Hole, h8Hole, h9Hole,
          h11Hole, h6Axis, h7Axis, h9Axis, h11Axis } = props;
  console.log(machineArray)
  console.log(hoursObj);

  return (
    <>
    <AuthNavbar />
    <Container>
          <Row>
            <Col>
            < br />
            <Nav justify variant="tabs" defaultActiveKey="/resume">
            <Nav.Item>
              <Nav.Link href="/quote" >1. Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/material" >2. Material</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/machineProcess" >3. Machine</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/criticPoints" >4. Critic Points</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/presicionLevel" >5. Precision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/resume" >6. Finalize</Nav.Link>
            </Nav.Item>
          </Nav>
            < br />
            < br />
            <h4>Finalize</h4>
            <p>Please check the information</p>
            <br />
            <StepOneSection
              companyId={companyId}
              companyName={companyName}
            />
            <br />
            <StepTwoSection
              materialCost={materialCost}
              materialName={materialName}
              />
            <br />
            <StepThreeSection
              machineArray={machineArray}
              hoursObj={hoursObj}
              machine={machine}
            />
            <br />
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
            <br />
            <StepFiveSection
              h7Hole={h7Hole}
              h8Hole={h8Hole}
              h9Hole={h9Hole}
              h11Hole={h11Hole}
              h6Axis={h6Axis}
              h7Axis={h7Axis}
              h9Axis={h9Axis}
              h11Axis={h11Axis}/>
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
            onClick={null}> Submit
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
