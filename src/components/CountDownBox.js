import React, { Component } from 'react'

export default class CountDownBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      today: new Date().getTime()
    }
    this.updateTime = this.updateTime.bind(this)
  }
  componentDidMount() {
    setInterval(this.updateTime, 100)
  }
  updateTime() {
    let today = new Date().getTime()
    this.setState((prevState) => ({ today: today }))
  }
  render() {
    let { date, month, year } = this.props
    let event = new Date(year, month - 1, date).getTime()
    let { today } = this.state
    let remainingTime = event - today  
    let remainingDays = Math.floor(remainingTime/(86400000))
    let remainingHours =  Math.floor((remainingTime%86400000)/3600000)
    let remainingMinutes =  Math.floor((remainingTime%3600000)/60000)
    let remainingSeconds =  Math.floor((remainingTime%60000)/1000)
    return(<div>
      {remainingDays} days {remainingHours} hours {remainingMinutes} minutes {remainingSeconds} seconds to go 
    </div>)
  }
}