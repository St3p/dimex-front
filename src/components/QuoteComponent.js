import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthNavBar from "./AuthNavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from 'react-masonry-css'
import Nav from "react-bootstrap/Nav";


function CompanyItem(props) {
    const { company, logo, description, id } = props.item;
    const { onClick } = props;
    return (
      <>

      <Card>
      <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
      <Button
          variant="melon"
          onClick={()=>onClick(id, company)}>Make a Quote for {company}</Button>
            </Card.Body>
      </Card>
      </>
    );
}


function CompanyTable(props) {
const { onClick } = props;

    function renderRow(item) {
        return <CompanyItem onClick = {onClick} item={item} />;
    }

    const { array } = props;
    return (
        <>
    {array.map(renderRow)}
        </>
    );
}

function QuoteComponent (props) {
  const { companyArray, onClick } = props;
      return (
          <>
          <AuthNavBar/>

          <Container>
            <Row>
              <Col>
              < br />
              <Nav justify variant="tabs" defaultActiveKey="/company">
                <Nav.Item>
                  <Nav.Link eventKey="/company" >1. Company</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/material" disabled>2. Material</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/machineProcess" disabled>3. Machine</Nav.Link>
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
              < br />
              < br />
                <h4>Chose a company</h4>
              < br />
              < br />
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
                                  <CompanyTable onClick={onClick} array={companyArray} />
                  </Masonry>
                  <br />
                  <Button
                      variant="melon"
                      type="submit"
                      id="add"
                      href="/home" >Back
                  </Button>
                  <br />
                  <br />
                  <br />
                  </Col>
                </Row>
          </Container>

        </>
      );
  }
export default QuoteComponent;
