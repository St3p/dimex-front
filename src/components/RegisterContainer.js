import React, { Component } from "react";
import RegisterComponent from "./RegisterComponent";
import { postRegister } from "../API/RegisterAPI"

class RegisterContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: "",
      password: "",
      error: "",
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);

  }

  onUsernameChange(event) {
      this.setState({
          username: event.target.value,
      });
  }



  onPasswordChange(event) {
      this.setState({
          password: event.target.value,
      });
  }

  onSuccess(responseData){
    alert(responseData.message);
    this.props.history.push("/");

  }

  onFailure(responseData){
    alert(responseData.message);
  }

  onClick(e){
    const {username, password} = this.state
    const postData = {
      username:username,
      password: password,
    };
    postRegister(postData, this.onSuccess, this.onFailure)
    this.props.history.push("/");
}


render() {
      const { username, password, error } = this.state;
      return (
        <>
        <RegisterComponent
          username={username}
          password={password}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
          onClick={this.onClick}
          error={error}/>
        </>
    );
}}

export default RegisterContainer;
