import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexContainer from "./IndexContainer"
import LoginConteiner from "./LoginConteiner"
import QuoteConteiner from "./QuoteConteiner"
import RegisterContainer from "./RegisterContainer"
import NewCompanyContainer from "./NewCompanyContainer"
import HomeContainer from "./HomeContainer"
import NewMachineContainer from "./NewMachineContainer"
import MachineContainer from "./MachineContainer"
import CompanyContainer from "./CompanyContainer"
import PastQuoteContainer from "./PastQuoteContainer"
import MaterialContainer from "./MaterialContainer"
import MachineProcessContainer from "./MachineProcessContainer"
import CriticPointsContainer from "./CriticPointsContainer"
import PrecisionLevelContainer from "./PrecisionLevelContainer"
import ResumeContainer from "./ResumeContainer"
import ManufactureContainer from "./ManufactureContainer"
import QuoteDetailContainer from "./QuoteDetailContainer";


class AppContainer extends Component {
    render() {
        return (
          <>
              <Router>
                  <Route path="/" exact component={IndexContainer} />
                  <Route path="/login" exact component={LoginConteiner} />
                  <Route path="/quote" exact component={QuoteConteiner} />
                  <Route path="/material" exact component={MaterialContainer} />
                  <Route path="/newCompany" exact component={NewCompanyContainer} />
                  <Route path="/register" exact component={RegisterContainer} />
                  <Route path="/home" exact component={HomeContainer} />
                  <Route path="/newMachine" exact component={NewMachineContainer} />
                  <Route path="/machine" exact component={MachineContainer} />
                  <Route path="/companies" exact component={CompanyContainer} />
                  <Route path="/pastQuote" exact component={PastQuoteContainer} />
                  <Route path="/machineProcess" exact component={MachineProcessContainer} />
                  <Route path="/criticPoints" exact component={CriticPointsContainer} />
                  <Route path="/presicionLevel" exact component={PrecisionLevelContainer} />
                  <Route path="/resume" exact component={ResumeContainer} />
                  <Route path="/component" exact component={ManufactureContainer} />
                  <Route path="/quote/:id"exact component={QuoteDetailContainer} />


              </Router>
          </>
        );
    }
}

export default AppContainer;
