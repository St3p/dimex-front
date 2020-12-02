import React, { Component } from "react";
import CompanyComponent from "./CompanyComponent";
import { getDataCard } from "../API/NewCompanyAPI";


class CompanyContainer extends Component {
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
            <CompanyComponent
                companyArray={companyArray}
            />
        );
    }
}

export default CompanyContainer;
