import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import santa from '../assets/img/santa.png'
import '../assets/css/welcomescreen.css'

export default class WelcomeScreen extends Component {
  render() {
    return (
        <div className="jumbotron text-center row">
            <div className="col-lg-4 col-md cta-img">
              <img src={santa} className="img-fluid santa-img" alt="happy-santa"/>
            </div>
            <div className="col-lg-8 col-md cta-text">
              <h1 className="display-3 mt-4">Spreading the joy</h1>
              <h3 className="display-4" >becomes sweeter than ever</h3>
              <p className="lead mt-4">This holiday season, do away with the chits and draw names online in 3 simple steps.</p>
              <h3 className="row mt-4">
                <span className="text-primary col-lg">1. Add Friends</span>
                <span className="text-warning col-lg">2. Restrictions</span>
                <span className="text-success col-lg">3. Hit Send</span>
              </h3>
              <Link to='/addNames' className="btn btn-lg btn-danger cta shadow mx-4 mt-4" ><h2>Get Started Now</h2></Link>
            </div>
        </div>
    )
  }
}