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
        }
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onlogoChange = this.onlogoChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

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
        const { company, logo, description } = this.state;
        const postData = {
            company: company,
            logo: logo,
            description: description,
        };
        postCreateCompany(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        alert(responseData.message);
        this.props.history.push("/quote");
    }

    onFailureCallbackFunc(responseData) {
        alert(responseData.error);
    }

    render() {
        const { company, logo, description } = this.state;
        return (
            <NewCompanyComponent
                company={company}
                logo={logo}
                description={description}
                onCompanyChange={this.onCompanyChange}
                onlogoChange={this.onlogoChange}
                onDescriptionChange={this.onDescriptionChange}
                onSubmitClick={this.onSubmitClick}
            />
        );
    }
}

export default NewCompanyContainer;
