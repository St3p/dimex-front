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
                  <Nav.Link eventKey="/company">Company</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/material">Material</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/machineProcess">Machine</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/criticPoints">Critic Points</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/criticPoints">Precision</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/resume">Resume</Nav.Link>
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
                                  <Card>
                                  <Card.Img variant="top" src={Rheem} />
                                      <Card.Body>
                                        <Card.Title>Rheem</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button
                                    variant="melon"
                                    >Make a Quote for Rheem</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Volkswagen} />
                                      <Card.Body>
                                        <Card.Title>Volkswagen</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for Volkswagen</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Brose} />
                                      <Card.Body>
                                        <Card.Title>Brose</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for Brose</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Honda} />
                                      <Card.Body>
                                        <Card.Title>Honda</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for Honda</Button>
                                        </Card.Body>
                                  </Card>
                                  <Card>
                                  <Card.Img variant="top" src={Euro} />
                                      <Card.Body>
                                        <Card.Title>Euro</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for Euro</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Pg} />
                                      <Card.Body>
                                        <Card.Title>PG</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for PG</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Cat} />
                                      <Card.Body>
                                        <Card.Title>Cat</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for PG</Button>
                                        </Card.Body>
                                  </Card>

                                  <Card>
                                  <Card.Img variant="top" src={Nexteer} />
                                      <Card.Body>
                                        <Card.Title>Nexteer</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                  <Button href="/material"
                                          variant="melon">Make a Quote for Nexteer</Button>
                                        </Card.Body>
                                  </Card>
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
