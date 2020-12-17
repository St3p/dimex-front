import React, { Component } from "react";
import QuoteDetailComponent from "./QuoteDetailComponent";
import { getDataCard } from "../API/NewQuoteAPI";

class QuoteDetailContainer extends Component {
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
    const { id } = this.props.match.params;
    console.log("QuoteDetailContainer | render | id", id);

    return(
      <QuoteDetailComponent
          quoteArray={quoteArray}
          id={id}/>
    );
  }
}

export default QuoteDetailContainer;
