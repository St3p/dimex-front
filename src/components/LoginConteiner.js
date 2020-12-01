import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import { postLogin } from "../API/LoginAPI"


class LoginConteiner extends Component{
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          error: "",
      }
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
      this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
      this.onClick = this.onClick.bind(this);
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

  onSuccessCallbackFunc(responseData){
    alert("success");
    this.props.history.push("/home");

  }

  onFailureCallbackFunc(responseData){
    alert("wrong");
  }

  onClick(e) {
    const{username, password} = this.state
    const postData = {
      username: username,
      password: password,
    };
    postLogin(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
  }

      render() {
          const{ username, password, error } = this.state;
          return (
            <>
            <LoginComponent
              username={username}
              password={password}
              onUsernameChange={this.onUsernameChange}
              onPasswordChange={this.onPasswordChange}
              onClick={this.onClick}
              error={error}/>
            </>
          );
      }
  }

export default LoginConteiner;
