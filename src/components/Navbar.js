import React, { Component } from 'react'
export default class Navbar extends Component{
  render(){
    var divStyle = {border:"1px solid black", padding: "3px", margin: "5px"};
    return(<div style={{display: "flex"}}>
      <div style={divStyle}>Add Names</div>
      <div style={divStyle}>Restrictions</div>
      <div style={divStyle}>Send Text</div>
    </div>)
  }
}