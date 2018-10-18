import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/img/icon.png'

export default class Navbar extends Component{
  render(){
    return(
    <nav class="navbar navbar-light bg-primary shadow">
        <Link to='/' className="navbar-brand">
        <img src={icon} width="30" height="30" class="d-inline-block align-top" alt="" />
        <span className="text-white h3 ml-3">Secret Santa</span>
        </Link>
    </nav>)
  }
}