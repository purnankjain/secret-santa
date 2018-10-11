import React, { Component } from 'react'
export default class PreviewBox extends Component {
  render() {
    return(<div>
      <h1>Preview</h1>
      <div>{this.props.headerMessage}</div>
      <div>
          {this.props.rules.filter((rule) => rule.exists).map((rule, index)=>{return <div key={index}>{index+1}# {rule.rule}</div>})}
      </div>
      <div>{this.props.footerMessage}</div>
    </div>)
  }
}