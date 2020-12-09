import React, { Component} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from 'react-masonry-css'
import AuthNavbar from "./AuthNavBar";


function CompanyItem(props) {
    const { company, logo, description } = props.item;
    return (
      <>

      <Card>
      <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            </Card.Body>
      </Card>
      </>
    );
}

function CompanyTable(props) {

    function renderRow(item) {
        return <CompanyItem item={item} />;
    }

    const { array } = props;
    return (
        <>
            <Container>
              <Row>
                <Col>
                <h2>Companies</h2>
                <br />
                <br />
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


function CompanyComponent(props) {
    const { companyArray } = props;
    return (
        <>
            <AuthNavbar />
            <br />
            <br />
            <CompanyTable array={companyArray} />
            <br />
            <br />
        </>
    );
}

export default CompanyComponent
