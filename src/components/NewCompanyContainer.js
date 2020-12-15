import React, { Component } from "react";
import NewCompanyComponent from "./NewCompanyComponent";
import { postCreateCompany } from "../API/NewCompanyAPI";


class NewCompanyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            logo: "",
            description: "",
            price: "",
        }
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onlogoChange = this.onlogoChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }
    onPriceChange(e){
      this.setState({
          price: e.target.value,
      });
    };

    onCompanyChange(e) {
        this.setState({
            company: e.target.value,
        });
    };

    onlogoChange(e) {
        this.setState({
            logo: e.target.value,
        });
    };

    onDescriptionChange(e) {
        this.setState({
            description: e.target.value,
        });
    };


    onSubmitClick(e) {
        const { company, logo, description, price } = this.state;
        const postData = {
            company: company,
            logo: logo,
            description: description,
            price: price,
        };
        postCreateCompany(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        alert(responseData.message);
        this.props.history.push("/companies");
    }

    onFailureCallbackFunc(responseData) {
        alert(responseData.error);
    }

    render() {
        const { company, logo, description, price } = this.state;
        return (
            <NewCompanyComponent
                price={price}
                company={company}
                logo={logo}
                description={description}
                onPriceChange={this.onPriceChange}
                onCompanyChange={this.onCompanyChange}
                onlogoChange={this.onlogoChange}
                onDescriptionChange={this.onDescriptionChange}
                onSubmitClick={this.onSubmitClick}
            />
        );
    }
}

export default NewCompanyContainer;
