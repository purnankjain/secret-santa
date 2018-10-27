import React, { Component } from 'react'
import '../assets/css/secretsanta.css'
import bootstrap from '../assets/img/bootstrap.png'
import react from '../assets/img/react.png'


export default class Navbar extends Component {
  render() {
    return (
      <footer className="footer bg-primary">
        <div className="footer-content">
          <div className="text-center">
          Powered by
          <img src={react} className="img-fluid footer-logo" />
            and &nbsp;
            <img src={bootstrap} className="img-fluid footer-logo" />
          </div>
        </div>
      </footer>)
  }
}