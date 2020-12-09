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
    const { machine, foto, description, capacities, id } = props.item;
    const { onHoursChange, onSubmitClick, hoursObj } = props;
    console.log();
    const hour = hoursObj [machine.id];
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

              <InputGroup>
                <Form>
                  <Form.Group>
                  <FormControl type="text"
                              placeholder="hours"
                              onChange={ (event)=>onHoursChange(event.target.value, id)}
                              value={hour}
                              id={id}
                              />
                  </Form.Group>
                  </Form>
              </InputGroup>


            </Card.Body>
      </Card>





      </>
    );
}

function MachineTable(props) {
const { onSubmitClick, onHoursChange, hoursObj, machine, capacities } = props;

    function renderRow(item) {
        return <MachineItem onSubmitClick={onSubmitClick} item={item} hoursObj={hoursObj}
        onHoursChange={onHoursChange} capacities={capacities} machine={machine}/>;
    }

    const { array } = props;
    return (
        <>
        <br />
        < br />
        <h4>Machine</h4>
        <p>Please fill out this form</p>
        <br />
  <Container>
        <Row>
          <Col>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
    {array.map(renderRow)}
    </Masonry>
    </Col>
  </Row>
</Container>

        </>
    );
}


function MachineProcessComponent(props) {
    const { onSubmitClick, machineArray, onHoursChange, hoursObj, machine, capacities } = props;
    return (
        <>
        <AuthNavBar/>

        <Container>
          <Row>
            <Col>
            < br />
            <Nav justify variant="tabs" defaultActiveKey="/machineProcess">
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
              <Nav.Link eventKey="/criticPoints" disabled>4. Critic Points</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/criticPoints" disabled>5. Precision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/resume" disabled>6. Finalize</Nav.Link>
            </Nav.Item>
          </Nav>
                  <MachineTable onSubmitClick={onSubmitClick} array={machineArray}
                   onHoursChange={onHoursChange} hoursObj={hoursObj} machine={machine}
                   capacities={capacities}/>
                  </Col>
                </Row>
              </Container>


        <br />
        <br />
        <Container>
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
                onClick={()=>onSubmitClick( machine, capacities, hoursObj)}>Next
        </Button>
        </ButtonToolbar>

        </Col>
      </Row>
     </Container>
      <br />
      <br /><br />
        </>
    );
}

export default MachineProcessComponent
