import React, { Component } from "react";
import { BrowserRouter, Link} from "react-router-dom";


function IndexComponents(){
  return (
    <>
    <h1>Welcome</h1>
    <p>please login to see your You tube videos <Link to="/login">login here</Link></p>
    </>
  )
}


export default IndexComponents;
