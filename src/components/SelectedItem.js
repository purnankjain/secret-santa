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
    let removableButtonClass = "mr-2 badge badge-success mt-2"
    let nonRemovableButtonClass = "mr-2 badge badge-primary mt-2"
    let removeButtonBlockClass = this.props.removeable ? removableButtonClass : nonRemovableButtonClass
    let removeButton = <span onClick={this.removeItem} className="clickable"><sup><span aria-hidden="true" >&times;</span></sup>
    </span>
    let removeButtonBlock = this.props.removeable ? removeButton : ''
    return (
      <span className={removeButtonBlockClass} >
        <span>{this.props.item}</span>
        {removeButtonBlock}
      </span>
    )
  }
}