import React, { Component} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from 'react-masonry-css'
import AuthNavBar from "./AuthNavBar";
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";


function MachineItem(props) {
    const { machine, foto, description, capacities } = props.item;
    const { onHoursChange, onSubmitClick, hours } = props;
    return (
      <>

      <Card>
      <Card.Img variant="top" src={foto} />
          <Card.Body>
            <Card.Title>{machine}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <br />
            <Card.Text>
            Capacities:  {capacities}
            </Card.Text>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox/>
                </InputGroup.Prepend>
                <FormControl type="text"
                              placeholder="hours"
                              onChange={onHoursChange}
                              value={hours}
                              id="hours"
                              name="hours"
                              />
              </InputGroup>


            </Card.Body>
      </Card>

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
              href="/material" >Back
      </Button>

      <Button
              variant="melon"
              type="submit"
              id="add"
              onClick={()=>onSubmitClick( machine, capacities, hours)}>Next
      </Button>
      </ButtonToolbar>

      </Col>
    </Row>




      </>
    );
}

function MachineTable(props) {
const { onSubmitClick, onHoursChange, hours } = props;

    function renderRow(item) {
        return <MachineItem onSubmitClick={onSubmitClick} item={item} hours={hours} onHoursChange={onHoursChange}/>;
    }

    const { array } = props;
    return (
        <>
    {array.map(renderRow)}
        </>
    );
}


function MachineProcessComponent(props) {
    const { onSubmitClick, machineArray, onHoursChange, hours } = props;
    return (
        <>
        <AuthNavBar/>

        <Container>
          <Row>
            <Col>
            < br />
            <Nav justify variant="tabs" defaultActiveKey="/machine">
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
              <h4>Machine</h4>
              <p>Please fill out this form</p>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
              <Row>
                <Col>
                <Masonry
                  breakpointCols={4}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  <MachineTable onSubmitClick={onSubmitClick} array={machineArray} onHoursChange={onHoursChange} hours={hours}/>
                </Masonry>
                </Col>
              </Row>
        </Container>
        <br />
        <br />
        </>
    );
}

export default MachineProcessComponent
