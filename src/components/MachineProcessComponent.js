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
            <Form>
                <Form.Group>
                <Form.Label>Hours</Form.Label>
                <Form.Control type="text"
                              placeholder="hours"
                              onChange={onHoursChange}
                              value={hours}
                              id="hours"
                              name="hours"
                              />
                </Form.Group>
                </Form>
                <Button
                      variant="primary"
                      type="submit"
                      id="add"
                      onClick={()=>onSubmitClick( machine, capacities, hours)}>Make a Quote for {machine}</Button>
            </Card.Body>
      </Card>
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
              <h1>Quotation Process</h1>
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
        </>
    );
}

export default MachineProcessComponent
