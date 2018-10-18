import React, { Component } from 'react'
export default class TextBox extends Component {
  render() {
    return(<div className="mb-3">
      <label className="text-primary h5">{this.props.label}</label>
      <textarea className="form-control" rows="2" onChange={(e) => { this.props.handleChange(e.target.value) }}></textarea>
    </div>)
  }
}