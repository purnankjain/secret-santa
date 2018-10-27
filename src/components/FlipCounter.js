import React, { Component } from 'react'
export default class FlipCounter extends Component {
  
  render() {
    const { newNum, unit } = this.props
    let prefix = ( newNum < 10 ) ? '0' : ''
    let styleClass = ( newNum === 0 ) ? 'badge flipcounter-box countdown-red' : 'badge flipcounter-box countdown-yellow'
    return (
      <div className="col-3">
        <h1><div className={styleClass}>{prefix}{newNum}</div></h1>
        <div className="h4 unit-text">{unit}</div>
      </div>
    );
  }
}
