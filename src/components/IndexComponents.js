import React, { Component } from "react";
import { BrowserRouter, Link} from "react-router-dom";
import AnonNavBar from "./AnonNavBar"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";
import DimexCarUNO from "./Carusel/DimexCarUNO.png"
import DimexCarDOS from "./Carusel/DimexCarDOS.png"
import DimexCarTRES from "./Carusel/DimexCarTRES.png"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Masonry from 'react-masonry-css'
import Login from "./Carusel/Login.png"
import Register from "./Carusel/Register.png"



function IndexComponents(){
  return (
    <>
    <AnonNavBar/>

    <Container>
    <Row>
      <Col>
          < br />
          < br />
      </Col>
    </Row>

      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      src={DimexCarUNO}
      className="d-block w-100"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={DimexCarDOS}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={DimexCarTRES}
    />
  </Carousel.Item>
</Carousel>

<Row>
  <Col>
      < br />
      < br />
  </Col>
</Row>

<Masonry
breakpointCols={2}
className="my-masonry-grid"
columnClassName="my-masonry-grid_column">
<Card>
  <Card.Body>
    <Card.Img variant="top" src={Login} />
    <Card.Text>
      < br />
      < br />
    </Card.Text>
    <Button variant="primary"
            href="/login">Login
    </Button>
  </Card.Body>
  </Card>

  <Card>
    <Card.Body>
    <Card.Img variant="top" src={Register} />
      <Card.Text>
      < br />
      < br />
      </Card.Text>
      <Button variant="primary"
              href="/register">Register
      </Button>
    </Card.Body>
    </Card>
</Masonry>

    </Container>
    </>
  )
}


export default IndexComponents;
