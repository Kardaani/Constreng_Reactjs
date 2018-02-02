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
import logoheader from "./logoheader";

 
class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>


<h1>Constructive Engineering - Constreng 
</h1>
	

          <ul className="header">
            <li><NavLink exact to="/">Summary</NavLink></li>
            <li><NavLink to="/bigdata"> Big data analysis</NavLink></li>
            <li><NavLink to="/fullstack">Full stack development</NavLink></li>
	    <li><NavLink to="/datamodeling">Data modeling</NavLink></li>
	    <li><NavLink to="/contact">Contact information</NavLink></li>
	    <li><NavLink to="/logoheader">Constreng logo</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Summary}/>
            <Route path="/bigdata" component={bigdata}/>
            <Route path="/fullstack" component={fullstack}/>
	    <Route path="/datamodeling" component={datamodeling}/>
            <Route path="/contact" component={contact}/>
	    <Route path="/logoheader" component={logoheader}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
