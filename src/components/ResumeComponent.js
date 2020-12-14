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
    <tr>
    <td></td>
    <td>{materialName}</td>
    <td></td>
    <td>{materialCost}</td>
    </tr>
    </>
  );
}

function MachineItem(props) {
  const { machine, id, price } = props.mac;
  const { hoursObj } = props;
  console.log(hoursObj[id]);

  return (
    <>
    <tr>
    <td></td>
    <td>{machine}</td>
    <td></td>
    <td>{price}</td>
    </tr>
    </>
  );
}


function StepThreeSection(props){
  const { hoursObj, machineArray } = props;
  console.log(hoursObj);
    function renderRow(mac) {
      return <MachineItem mac={mac} hoursObj = {hoursObj} />
    }
  return (
    <>
      {machineArray.map(renderRow)}
    </>
  )
}

function StepFourSection(props){
  const { straightness, flatness, perpendicularity,
  circularity, cylindricity, profileLine, parallelism,
  angularity, profileOfSurface, symmetry, concentricity } = props;
  const isPerpendicularityOn = props.perpendicularity;
  const isFlatnessOn = props.flatness;
  const isStraightnessOn = props.straightness;
  const isCircularityOn = props.circularity;
  const isCylindricityOn = props.cylindricity;
  const isProfileLineOn = props.profileLine;
  const isParallelismOn = props.parallelism;
  const isAngularityOn = props.angularity;
  const isProfileOfSurfaceOn = props.profileOfSurface;
  const isSymetryOn = props.symmetry;
  const isConcentricityOn= props.concentricity;
  if (isConcentricityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>concentricity</td>
        <td></td>
        <td>{concentricity}</td>
      </tr>
      </>
    );
  }
  if (isPerpendicularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Perpendicularity</td>
        <td></td>
        <td>{perpendicularity}</td>
      </tr>
      </>
    );
  }
  if (isFlatnessOn){
    return(
      <>
      <tr>
        <td></td>
        <td>flatness</td>
        <td></td>
        <td>{flatness}</td>
      </tr>
      </>
    );
  }
  if (isStraightnessOn){
    return(
      <>
      <tr>
        <td></td>
        <td>straightness</td>
        <td></td>
        <td>{straightness}</td>
      </tr>
      </>
    );
  }
  if (isCircularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Circularity</td>
        <td></td>
        <td>{circularity}</td>
      </tr>
      </>
    );
  }
  if (isCylindricityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>cylindricity</td>
        <td></td>
        <td>{cylindricity}</td>
      </tr>
      </>
    );
  }
  if (isProfileLineOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Profile Line</td>
        <td></td>
        <td>{profileLine}</td>
      </tr>
      </>
    );
  }
  if (isAngularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>angularity</td>
        <td></td>
        <td>{angularity}</td>
      </tr>
      </>
    );
  }
  if (isProfileOfSurfaceOn){
    return(
      <>
      <tr>
        <td></td>
        <td>profileOfSurface</td>
        <td></td>
        <td>{profileOfSurface}</td>
      </tr>
      </>
    );
  }
  if (isSymetryOn){
    return(
      <>
      <tr>
        <td></td>
        <td>symmetry</td>
        <td></td>
        <td>{symmetry}</td>
      </tr>
      </>
    );
  }

}

function StepFiveSection(props) {
  const { h7Hole, h8Hole, h9Hole, h11Hole, h6Axis, h7Axis, h9Axis, h11Axis} = props;
  const ish7HoleOn = props.h7Hole;
  const ish8Hole = props.h8Hole;
  const ish9Hole = props.h9Hole;
  const ish11Hole = props.h11Hole;
  const ish6Axis =props.h6Axis;
  const ish7Axis = props.h7Axis;
  const ish9Axis = props.h9Axis;
  const ish11Axis =props.h11Axis;
  if (ish11Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h11</td>
        <td></td>
        <td>{h11Axis}</td>
      </tr>
      </>
    );
  }
  if (ish9Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h9</td>
        <td></td>
        <td>{h9Axis}</td>
      </tr>
      </>
    );
  }
  if (ish6Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h6</td>
        <td></td>
        <td>{h6Axis}</td>
      </tr>
      </>
    );
  }
  if (ish7Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h7</td>
        <td></td>
        <td>{h7Axis}</td>
      </tr>
      </>
    );
  }

  if (ish11Hole){
    return(
      <>
      <tr>
        <td></td>
        <td>H11</td>
        <td></td>
        <td>{h11Hole}</td>
      </tr>
      </>
    );
  }
  if (ish9Hole){
    return(
      <>
      <tr>
        <td></td>
        <td>H9</td>
        <td></td>
        <td>{h9Hole}</td>
      </tr>
      </>
    );
  }
  if (ish8Hole){
    return(
      <>
      <tr>
        <td></td>
        <td>H8</td>
        <td></td>
        <td>{h8Hole}</td>
      </tr>
      </>
    );
  }
  if (ish7HoleOn){
    return(
      <>
      <tr>
        <td></td>
        <td>H7</td>
        <td></td>
        <td>{h7Hole}</td>
      </tr>
      </>
    );
  }
}

function TableQuote(props){
  return (
    <>

    </>
  );
}

function ResumeComponent(props) {
  const { companyId, companyName, machineArray, hoursObj, machine,
          materialCost, materialName, flatness, straightness,
          circularity, cylindricity, profileLine, parallelism,
          perpendicularity, angularity, profileOfSurface,
          symmetry, concentricity, h7Hole, h8Hole, h9Hole,
          h11Hole, h6Axis, h7Axis, h9Axis, h11Axis, price } = props;
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
              <tr>
                <td> # </td>
                <td> some name (to DO)</td>
                <td></td>
                <td></td>
              </tr>
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
                  price={price}
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
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>IVA</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td></td>
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
