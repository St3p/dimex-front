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
    <Container>
     <Row>
      <Col>
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
    {array.map(renderRow)}
    </Masonry>
    </Col>
   </Row>
 </Container>
    <br />
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
              <Nav justify variant="tabs" defaultActiveKey="/quote">
                <Nav.Item>
                <Nav.Link href="/component" >1. Component</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/quote" ><strong>2. Company</strong></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/material" disabled >3. Material</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/machineProcess" disabled>4. Machine</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/criticPoints" disabled>5. Critic Points</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/criticPoints" disabled>6. Precision</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/resume" disabled>7. Finalize</Nav.Link>
              </Nav.Item>
            </Nav>
              < br />
              < br />

                                  <CompanyTable onClick={onClick} array={companyArray} />

                  <Button
                      variant="melon"
                      type="submit"
                      id="add"
                      href="/component" >Back
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
