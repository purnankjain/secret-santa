import React, { Component } from 'react'
export default class PreviewBox extends Component {
  render() {
    return (
      <div className="card h-100 shadow">
        <div className="card-header bg-primary text-white">
          <h4>Preview</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.headerMessage}</h5>
          <div className="card-text">
            {this.props.rules.filter((rule) => rule.exists).map((rule, index) => { return <div key={index}>{index + 1}# {rule.rule}</div> })}
          </div>
          <h5 className="card-title">{this.props.footerMessage}</h5>
        </div>
      </div>)
  }
}