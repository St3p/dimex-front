import React, { Component } from "react";
import QuoteComponent from "./QuoteComponent";
import { getCompany } from "../API/NewCompanyAPI";

class QuoteContainer extends Component {
    render() {
        return (
            <QuoteComponent
            />
        );
    }
}

export default QuoteContainer;
