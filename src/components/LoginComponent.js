import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function LoginComponent (props){
  const { username, password, error, onUsernameChange, onPasswordChange, onClick} = props;
      return (
          <>
              <h1>Login</h1>
              {error &&
                  <><b>{error}<br /><br /></b></>
              }
              <input name="username"
                     type="text"
                     id="username"
                     onChange={onUsernameChange}
                     value={username}
                     placeholder="username" />
              <input name="password"
                     type="password"
                     id="password"
                     onChange={onPasswordChange}
                     value={password}
                     placeholder="password" />
              <button onClick={onClick}>Submit</button>
              <Link to='/dashboard' id="demo"></Link>
          </>
      );
  }
export default LoginComponent;
