import React, { Component } from 'react'
import FlipCounter from './FlipCounter'
import PropTypes from 'prop-types'

export default class CountDownBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: new Date().getTime()
    }
    this.updateTime = this.updateTime.bind(this)
  }
  componentDidMount() {
    setInterval(this.updateTime, 1000)
  }
  updateTime() {
    let { date, month, year } = this.props
    let today = new Date()
    if (new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() === new Date(year, month - 1, date).getTime()) {
      this.props.onFinish()
      today = new Date(year, month - 1, date).getTime()
    }
    if (new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() > new Date(year, month - 1, date).getTime()) {
      this.props.onExceeded()
      today = new Date(year, month - 1, date).getTime()
    }
    this.setState({
      today: today.getTime()
    })
  }
  render() {
    let { date, month, year } = this.props
    let { today } = this.state
    let event = new Date(year, month - 1, date).getTime()
    let remainingTime = event - today
    let remainingDays = Math.floor(remainingTime / (86400000))
    let remainingHours = Math.floor((remainingTime % 86400000) / 3600000)
    let remainingMinutes = Math.floor((remainingTime % 3600000) / 60000)
    let remainingSeconds = Math.floor((remainingTime % 60000) / 1000)
    return (<div className="countdown-box">
      <div className="row countdown">
        <FlipCounter newNum={remainingDays} unit={'days'} />
        <FlipCounter newNum={remainingHours} unit={'hours'} />
        <FlipCounter newNum={remainingMinutes} unit={'minutes'} />
        <FlipCounter newNum={remainingSeconds} unit={'seconds'} />
      </div>
      <h2 className="mt-4">To {this.props.event}</h2>
    </div>)
  }
}

CountDownBox.defaultProps = { onExceeded: () => { }, onFinish: () => { } }