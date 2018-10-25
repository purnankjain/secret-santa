import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class ToggleMutliSelectBox extends Component {
  render() {
    let icon = this.props.isOpen ? faChevronDown : faChevronRight
    return (<span onClick={this.props.handleToggle}><FontAwesomeIcon icon={icon} className="clickable fa-2x"/> </span>)
  }
}