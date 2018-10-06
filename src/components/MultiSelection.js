import React, { Component } from 'react'

export default class MultiSelection extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      showBox: false
    }
  }
  handleClick(e) {
    this.setState((prevState) => {return {showBox: !prevState.showBox}})
  }
  handleChange(e){
    let rejectedSantees = [...e.target.options].filter((option)=> { return option.selected}).map((rejects)=> {return rejects.value})
    //TODO : Validation
    this.props.populateRestrictions(rejectedSantees)
  }
  render() {
    let restrictedNames = this.props.rejects.map((santee, index) => {return (<span key={index}>{santee}</span>)} );
    if(this.props.rejects.length < 1) {
      restrictedNames = <span>No Restrictions</span>
    }
    let selectionBox = this.state.showBox ? <select multiple className='form-control' onChange={this.handleChange}>{this.props.data.map((santee)=>{return(<option key={santee.id} value={santee.name}>{santee.name}</option>)}) }
    </select> : ''
    return(<div style={this.props.style}>
      <div onClick={this.handleClick}>{restrictedNames}</div>
      {selectionBox}
    </div>);
  }
}