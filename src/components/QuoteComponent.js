import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rheem from "./img/rheem.png";
import Volkswagen from "./img/volkswagen.png";
import Brose from "./img/brose.jpg";
import Honda from "./img/honda.png";
import Euro from "./img/euro.png";
import Pg from "./img/pg.png";
import Cat from "./img/cat.jpg";
import Nexteer from "./img/nexteer.jpg";
import AuthNavBar from "./AuthNavBar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from 'react-masonry-css'


function CompanyItem(props) {
    const { company, logo, description } = props.item;
    return (
      <>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{company}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
      <Button href="/material" variant="primary">Make a Quote for Rheem</Button>
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

function QuoteComponent (props) {
  const { companyArray } = props;
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
                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Rheem} />
                                      <Card.Body>
                                        <Card.Title>Rheem</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Rheem</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Volkswagen} />
                                      <Card.Body>
                                        <Card.Title>Volkswagen</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Volkswagen</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Brose} />
                                      <Card.Body>
                                        <Card.Title>Brose</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Brose</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Honda} />
                                      <Card.Body>
                                        <Card.Title>Honda</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Honda</Button>
                                        </Card.Body>
                                  </Card>
                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Euro} />
                                      <Card.Body>
                                        <Card.Title>Euro</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Euro</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Pg} />
                                      <Card.Body>
                                        <Card.Title>PG</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for PG</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Cat} />
                                      <Card.Body>
                                        <Card.Title>Cat</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for PG</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={Nexteer} />
                                      <Card.Body>
                                        <Card.Title>Nexteer</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material" variant="primary">Make a Quote for Nexteer</Button>
                                        </Card.Body>
                                  </Card>
                                  <CompanyTable array={companyArray} />


                  </Masonry>
                  </Col>
                </Row>
          </Container>

        </>
      );
  }
export default QuoteComponent;
