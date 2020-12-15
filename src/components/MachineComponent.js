import React, { Component} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from 'react-masonry-css'
import AuthNavbar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";



function MachineItem(props) {
    const { machine, foto, description, capacities } = props.item;
    return (
      <>

      <Card>
      <Card.Img variant="top" src={foto} />
          <Card.Body>
            <Card.Title>{machine}</Card.Title>
            <Card.Text>
            {description}
            {capacities}
            </Card.Text>
            </Card.Body>
      </Card>
      </>
    );
}

function MachineTable(props) {

    function renderRow(item) {
        return <MachineItem item={item} />;
    }

    const { array } = props;
    return (
        <>
            <Container>
              <Row>
                <Col>
                <h1>Machines Available</h1>
                <br />
                <br />
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                <ButtonToolbar
                className="justify-content-between">
                <Button
                        variant="melon"
                        type="submit"
                        id="add"
                        href="/newMachine" >+
                </Button>
                </ButtonToolbar>
                <br />
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
                      {array.map(renderRow)}
                </Masonry>
                <br />
                <Button
                    variant="melon"
                    type="submit"
                    id="add"
                    href="/home" >Back
                </Button>
                </Col>
              </Row>
            </Container>
        </>
    );
}


function MachineComponent(props) {
    const { machineArray } = props;
    return (
        <>
            <AuthNavbar />
            <br />
            <br />
            <MachineTable array={machineArray} />
            <br />
            <br />
        </>
    );
}

export default MachineComponent
