import React, { Component } from "react";
import { Link } from "react-router-dom";
import StepFourSection from "./StepFourSection"
import StepFiveSection from "./StepFiveSection"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BigLogo from "./Carusel/BigLogo.png";
import Table from "react-bootstrap/Table";
import AuthNavbar from "./AuthNavBar";

function QuoteItem(props) {
    const { companyId, companyName, quantity, nameComponent, materialName,
    materialCost, machine, machinePrice, subtotal, ivaTotal, total, quoteArray, id} = props.item;
    const { idDetail } = props;
    console.log("QuoteItem | idDetail:", idDetail);
    if ( idDetail == id ){
    return (
        <>
          <Container>
           <Row>
            <Col>
            <img
          src={BigLogo}
          width="250"/>
            </Col>
            <Col>
            <h5>Company</h5>
            <p>{companyName}</p>
            </Col>
            <Col>
              <h5>Quote</h5>
              <p>{id}</p>
            </Col>
            </Row>
            </Container>
            <Container>
            <Row>
            <Col>
            <br />
            <Table striped bordered hover>
            <thead>
              <tr>
                <th> # Quantity </th>
                <th> Component Description </th>
                <th> hrs p-pc </th>
                <th> Price p-pc </th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>{quantity}</td>
              <td>{nameComponent}</td>
              <td></td>
              <td></td>
            </tr>
              <tr>
                <td></td>
                <th>Material</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>{materialName}</td>
                <td></td>
                <td>{materialCost}</td>
              </tr>
              <tr>
                <td></td>
                <th>Machine</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>{machine}</td>
                <td></td>
                <td>{machinePrice}</td>
                </tr>
              <tr>
                <td></td>
                <th>Critic Points</th>
                <td></td>
                <td></td>
              </tr>




              <tr>
                <td></td>
                <th>Precision</th>
                <td></td>
                <td></td>
              </tr>



             <tr>
               <td></td>
               <td></td>
               <td>Subtotal</td>
               <td>{subtotal}</td>
             </tr>
             <tr>
               <td></td>
               <td></td>
               <td>IVA</td>
               <td>{ivaTotal}</td>
            </tr>
            <tr>
               <td></td>
               <td></td>
               <td>total</td>
               <td>{total}</td>
            </tr>

            </tbody>
            </Table>
            <br />
            <br />

            </Col>
          </Row>
    </Container>
        </>
    );
}else {
  return null};
}
function QuoteTable(props) {
const { idDetail } = props;
    function renderRow(item) {
        return <QuoteItem item={item} idDetail={idDetail}/>;
    }

    const { array } = props;
    return (
        <>
          {array.map(renderRow)}
        </>
    );
}function QuoteDetailComponent(props){
  const { quoteArray, id } = props;
    return(
      <>
      <AuthNavbar />
        <br />
        <br />
        <QuoteTable
          array={quoteArray}
          idDetail={id}
        />
        <br />
        <br />

      </>
    );
  }
export default QuoteDetailComponent;
