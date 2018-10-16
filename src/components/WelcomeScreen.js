import React, { Component } from 'react'
import gift from '../assets/img/gift.png'
import reindeer from '../assets/img/reindeer.png'
import mistletoe from '../assets/img/mistletoe.png'
import '../assets/css/welcomescreen.css'

export default class WelcomeScreen extends Component {
  render() {
    return (<div className="container-fluid">
      <div className="logo row">
        <div className="col-2">
          <img src={mistletoe} className="mh-100"/>
        </div>
        <div className="logo-text text-left col">
          Secret Santa
        </div>
      </div>
      <div className="hero">
        <div className="cta">
          It's that time of the year, when you feel gracious enough to buy your friends gifts
        </div>
        <div>
          <button className="btn btn-danger btn-lg">
            Click here to start
          </button>
        </div>
        <div>
          <img src={gift} />
        </div>
      </div>

      <div>
        Credits: Made by Sonali <img src={reindeer} />
      </div>
    </div>)
  }
}