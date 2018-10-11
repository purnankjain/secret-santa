import React, { Component } from 'react'
export default class TextBox extends Component {
  render() {
    return(<div>
      <label>{this.props.label}</label>
      <textarea className="form-control" rows="3" onChange={(e) => { this.props.handleChange(e.target.value) }}></textarea>
    </div>)
  }
}