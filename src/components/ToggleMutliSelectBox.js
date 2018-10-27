import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class ToggleMutliSelectBox extends Component {
  render() {
    let icon = this.props.isOpen ? faChevronDown : faChevronRight
    return (
      <div onClick={this.props.handleToggle} className="btn btn-danger float-right shadow">
        <FontAwesomeIcon icon={icon} className="clickable" />
      </div>)
  }
}