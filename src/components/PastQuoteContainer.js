import React, { Component } from "react";
import PastQuoteComponent from "./PastQuoteComponent";
import { getDataCard } from "../API/NewQuoteAPI";


class PastQuoteConteiner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      quoteArray: [],
    }
    this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
    this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
}

  componentDidMount() {
      getDataCard(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

  onSuccessCallbackFunc(responseData) {
      this.setState({
          quoteArray: responseData.results,
      });
  }

  onFailureCallbackFunc(responseData) {
      console.log(responseData);
  }

  render() {
    const { quoteArray } = this.state;
    return(
      <PastQuoteComponent
          quoteArray={quoteArray}/>
    );
  }
}
export default PastQuoteConteiner;
