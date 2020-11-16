import React, { Component } from "react";
import LoginComponent from "./LoginComponent";



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



  onClick(e) {
      const { username, password } = this.state;
      if (username === "Hello" && password === "world") {
        this.props.history.push("/quote");
      } else {
          this.setState({
        error: "Incorrect password or username",
        });
      }
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
