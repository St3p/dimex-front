import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rheem from "./img/rheem.png";
import Volkswagen from "./img/volkswagen.png";
import Brose from "./img/brose.jpg";
import Honda from "./img/honda.png";
import Euro from "./img/euro.png";
import Pg from "./img/pg.png";
import Cat from "./img/cat.jpg";



class QuoteComponent extends Component {
  render(){
      return (
          <>
              <h1>Quotation Process</h1>

              <h2>Company:</h2>
              <table>
                <tr>
                  <td>  <Link to="/Rheem"><img src={Rheem} alt='alternatetext' width={100} height={100}/></Link>  </td>
                  <td>  <Link to="/Volkswagen"><img src={Volkswagen} alt='alternatetext' width={100} height={100}/></Link>  </td>
                  <td>  <Link to="/Brose"><img src={Brose} alt='alternatetext' width={100} /></Link>  </td>
                  <td>  <Link to="/Honda"><img src={Honda} alt='alternatetext' width={100} /></Link>  </td>
                  <td>  <Link to="/Euro"><img src={Euro} alt='alternatetext' width={100} /></Link>  </td>
                  <td>  <Link to="/PG"><img src={Pg} alt='alternatetext' width={100} /></Link>  </td>
                  <td>  <Link to="/Cat"><img src={Cat} alt='alternatetext' width={100} /></Link>  </td>
                </tr>
                </table>


          </>
      );
  }
}
export default QuoteComponent;
