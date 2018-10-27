import React, { Component } from 'react'
import '../assets/css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="wizard">
        <div className="wizard-bar"></div>
        <ul className="nav justify-content-center my-4">
          <li className="step-item">
            <div className="step-num">1</div>
            <div className="step-name">Add Names</div>
          </li>
          <li className="step-item">
            <div className="step-num">2</div>
            <div className="step-name">Restrictions</div>
          </li>
          <li className="step-item">
            <div className="step-num">3</div>
            <div className="step-name">Send Text</div>
          </li>
        </ul>
      </div>
    )
  }
}