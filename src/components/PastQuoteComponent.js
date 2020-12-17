import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthNavBar from "./AuthNavBar";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Masonry from 'react-masonry-css'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function QuoteItem (props) {
    const { id, nameComponent } = props.item;
    return (
      <>

      <Card>
      <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Quote {id}</Card.Title>
            <Card.Text>
              {nameComponent}
              <Link to={`/quote/${id}`}>View</Link>
            </Card.Text>
            </Card.Body>
      </Card>
      </>
    );
}

function QuoteTable(props) {

    function renderRow(item) {
        return <QuoteItem item={item} />;
    }

    const { array } = props;
    return (
        <>
            <Container>
              <Row>
                <Col>
                <h1>Quotes</h1>
                <p>List of Quotes done using this app</p>
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
function PastQuoteComponent(props){
  const { quoteArray } = props;
    return(
      <>
      <AuthNavBar />
        <br />
        <br />
        <QuoteTable array={quoteArray}/>
        <br />
        <br />

      </>
    );
  }
export default PastQuoteComponent;
