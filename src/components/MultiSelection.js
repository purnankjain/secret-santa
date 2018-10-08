import React, { Component } from 'react'
import SelectedItem from './SelectedItem'
import ToggleMutliSelectBox from './ToggleMutliSelectBox'

export default class MultiSelection extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeSelectedItem = this.removeSelectedItem.bind(this)
    this.state = {
      showBox: false
    }
  }
  handleClick(e) {
    this.setState((prevState) => {return {showBox: !prevState.showBox}})
  }
  handleChange(e){
    let rejectedSantees = [...e.target.options].filter((option)=> {return option.selected}).map((rejects)=> {return rejects.value})
    this.props.populateRestrictions(rejectedSantees)
  }
  removeSelectedItem(selectedItem){
    let updatedReject = [...this.props.rejects].filter((reject) => { return reject !== selectedItem})
    this.props.populateRestrictions(updatedReject)
  }
  checkValid() {
    return this.props.rejects.length !== this.props.data.length
  }
  render() {
    let errorMessage = "You can't reject everyone! Duh!"
    let restrictedNames = this.props.rejects.map((santee, index) => {return (<SelectedItem key={index} item={santee} removeSelectedItem={this.removeSelectedItem}/>)})
    if(this.props.rejects.length < 1) {
      restrictedNames = <span>No Restrictions</span>
    }
    let isValid = this.checkValid()
    let styleClass = isValid ? 'alert alert-success' : "alert alert-danger"
    let validationError = isValid ? '' : <span>{errorMessage}</span>
    let selectionBox = this.state.showBox ? <select multiple className='form-control' onChange={this.handleChange}>{this.props.data.map((santee)=>{return(<option key={santee.id} value={santee.name}>{santee.name}</option>)}) }
    </select> : ''
    return(<div style={this.props.style}>
      <div className={styleClass}>{restrictedNames}{validationError}<ToggleMutliSelectBox handleToggle={this.handleClick}/></div>
      {selectionBox}
    </div>);
  }
}