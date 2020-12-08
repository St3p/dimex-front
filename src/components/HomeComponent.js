import React, { Component } from "react";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavBar from "./AuthNavBar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Masonry from 'react-masonry-css'
import Button from "react-bootstrap/Button";


function HomeComponents(){
  return (
    <>
    <AuthNavBar/>
    <Container>
    <Row>
      <Col> <h1>Home</h1></Col>
    </Row>
    <Row>
      <Col> <br /></Col>
    </Row>

    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>Machines</Card.Header>
          <Card.Body>
          A detailed list of the machines available and its capabilities.
          <br />
          <br />
          <Button href="/machine"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>Companies</Card.Header>
          <Card.Body>
          A detailed list of the customers of the business.
          <br />
          <br />
          <Button href="/companies"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>New Quote </Card.Header>
          <Card.Body>
          Make a new Quote taking into account the specifications of the component
          <br />
          <br />
          <Button href="/quote"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>New Machine </Card.Header>
          <Card.Body>
          Register a machine with its capabilities and a description of it.
          <br />
          <br />
          <Button href="/newMachine"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>New Company </Card.Header>
          <Card.Body>
          Register a new customer with a description.
          <br />
          <br />
          <Button href="/newCompany"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

      <Card
            bg= "secondary"
            text="white">
       <Card.Header>Quotes </Card.Header>
          <Card.Body>
          consult past Quotes.
          <br />
          <br />
          <Button href="/pastQuote"
                  variant="melon"> click me
          </Button>
          </Card.Body>
      </Card>

    </Masonry>
    </Container>
    </>
  )
}


export default HomeComponents;
