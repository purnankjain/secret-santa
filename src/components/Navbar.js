import React, { Component } from 'react'
import '../assets/css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="wizard">
        <div className="wizard-bar"></div>
        <ul className="nav justify-content-center my-4">
          <li className="step-item">
            <span className="step-num">1</span>
            <span className="step-name">Add Names</span>
          </li>
          <li className="step-item">
            <span className="step-num">2</span>
            <span className="step-name">Restrictions</span>
          </li>
          <li className="step-item">
            <span className="step-num">3</span>
            <span className="step-name">Send Text</span>
          </li>
        </ul>
      </div>
    )
  }
}