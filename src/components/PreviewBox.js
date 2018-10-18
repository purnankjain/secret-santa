import React, { Component } from 'react'
export default class PreviewBox extends Component {
  render() {
    return (
      <div class="card h-100">
        <div class="card-header bg-primary text-white">
          <h4>Preview</h4>
        </div>
        <div class="card-body">
          <h5 class="card-title">{this.props.headerMessage}</h5>
          <p class="card-text">
            {this.props.rules.filter((rule) => rule.exists).map((rule, index) => { return <div key={index}>{index + 1}# {rule.rule}</div> })}
          </p>
          <h5 class="card-title">{this.props.footerMessage}</h5>
        </div>
      </div>)
  }
}