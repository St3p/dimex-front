import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexContainer from "./IndexContainer"
import LoginConteiner from "./LoginConteiner"
import QuoteComponent from "./QuoteComponent"
import Rheem from "./Rheem"



class AppContainer extends Component {
    render() {
        return (
          <>
              <Router>
                  <Route path="/" exact component={IndexContainer} />
                  <Route path="/login" exact component={LoginConteiner} />
                  <Route path="/quote" exact component={QuoteComponent} />
                  <Route path="/Rheem" exact component={Rheem} />
              </Router>
          </>
        );
    }
}

export default AppContainer;
