import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Summary from "./Summary";
import bigdata from "./bigdata";
import fullstack from "./fullstack";
import datamodeling from "./datamodeling";
import contact from "./contact";
import logo from '/home/reactjs/Reactjs_constreng/constreng/constreng/src/constrenglogo.png';
 
class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
<div className="logo">
          <img src={logo} width="150" height="100" />
        </div> 

         <h1>Constructive Engineering - Constreng</h1>
          <ul className="header">
            <li><NavLink exact to="/">Summary</NavLink></li>
            <li><NavLink to="/bigdata"> Big data analysis</NavLink></li>
            <li><NavLink to="/fullstack">Full stack development</NavLink></li>
	    <li><NavLink to="/datamodeling">Data modeling</NavLink></li>
	    <li><NavLink to="/contact">Contact information</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Summary}/>
            <Route path="/bigdata" component={bigdata}/>
            <Route path="/fullstack" component={fullstack}/>
	    <Route path="/datamodeling" component={datamodeling}/>
            <Route path="/contact" component={contact}/>             
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
