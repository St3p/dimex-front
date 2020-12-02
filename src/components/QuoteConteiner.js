import React, { Component } from "react";
import QuoteComponent from "./QuoteComponent";
import { getDataCard } from "../API/NewCompanyAPI";

class QuoteContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          companyArray: [],
      }
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
  }

  componentDidMount() {
      getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onSuccessCallbackFunc(responseData) {
      this.setState({
          companyArray: responseData.results,
      });
  }

  onFailureCallbackFunc(responseData) {
      console.log(responseData);
  }
    render() {
        const { companyArray } = this.state;
        return (
            <QuoteComponent
            companyArray={companyArray}
            />
        );
    }
}

export default QuoteContainer;
