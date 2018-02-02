import React, { Component } from "react";
//import BackgroundImage from 'react-background-image-loader';
import bigdatapicture from '/home/reactjs/Reactjs_constreng/constreng/constreng/src/big-data2.jpg';



//var sectionStyle = {
//  width: "100%",
//  height: "400px",
//backgroundImage: "url(" + { Background } + ")",

//};


//class Section extends Component {
//  render() {
//    return (
//      <section style={ sectionStyle }>
//      </section>
//    );
//  }
//}
 
class bigdata extends Component {
  render() {
    return (
    <div>
  <div className="bigdatapicture">
          <img src={bigdatapicture} width="600" height="400" />
        </div>

        <h2>BIG DATA SERVICES</h2>

	<p>
Constreng offers big data analysis services.
</p>
        <p>

</p>
        <p>

        </p>
      </div>
    );
  }
}
 
export default bigdata;
