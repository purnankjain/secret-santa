import React, { Component } from 'react'

export default class SelectedItem extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
  }
  removeItem() {
    this.props.removeSelectedItem(this.props.item)
  }
  render() {
    return (
      <span  className="mx-2 badge badge-success" >
        <span>{this.props.item}</span>
        <span onClick={this.removeItem} className="clickable"><sup><span aria-hidden="true" >&times;</span></sup>
        </span>
      </span>
    )
  }
}