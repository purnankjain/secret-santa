import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default class ToggleMutliSelectBox extends Component {
  render() {
    return (<span onClick={this.props.handleToggle}><FontAwesomeIcon icon={faPlusCircle} className="clickable fa-2x float-right mr-4"/> </span>)
  }
}