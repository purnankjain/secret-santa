import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
      <ul class="nav justify-content-center my-4">
        <li class="nav-item">
          <span class="nav-link badge badge-primary">Add Names</span>
        </li>
        <li class="nav-item">
          <span class="nav-link badge badge-primary">Restrictions</span>
        </li>
        <li class="nav-item"><span class="nav-link badge badge-primary">Send Text</span>
        </li>
      </ul>
    )
  }
}