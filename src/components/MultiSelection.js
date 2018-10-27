import React, { Component } from 'react'
import SelectedItem from './SelectedItem'
import ToggleMutliSelectBox from './ToggleMutliSelectBox'

export default class MultiSelection extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeSelectedItem = this.removeSelectedItem.bind(this)
    this.state = {
      showBox: false
    }
  }
  handleClick(e) {
    this.setState((prevState) => { return { showBox: !prevState.showBox } })
  }
  handleChange(e) {
    let rejectedSantees = [...e.target.options].filter((option) => { return option.selected }).map((rejects) => { return rejects.value })
    this.props.populateRestrictions(rejectedSantees)
  }
  removeSelectedItem(selectedItem) {
    let updatedReject = [...this.props.rejects].filter((reject) => { return reject !== selectedItem })
    this.props.populateRestrictions(updatedReject)
  }
  checkValid() {
    return this.props.rejects.length !== this.props.data.length
  }
  render() {
    let errorMessage = <div className="badge badge-danger mt-2">You can't reject <br className="d-md-none"/> everyone! Duh!</div>
    let restrictedNames = this.props.rejects.map((santee, index) => { return (<SelectedItem key={index} item={santee} removeSelectedItem={this.removeSelectedItem} removeable/>) })
    if (this.props.rejects.length < 1) {
      restrictedNames = <SelectedItem item="No Restrictions" removeSelectedItem={this.removeSelectedItem}/>
    }
    let isValid = this.checkValid()
    let validationError = isValid ? '' : <div className="word-wrap">{errorMessage}</div>
    let selectionBox = this.state.showBox ? <select multiple className='form-control' onChange={this.handleChange}>{this.props.data.map((santee) => { return (<option key={santee.id} value={santee.name}>{santee.name}</option>) })}
    </select> : ''
    return (
      <div>
        <div className="row">
          <div className="col-9">
            <div className="mb-2">
              {restrictedNames}
            </div>
            <div>
              {selectionBox}
            </div>
          </div>
          <div className="col-3"><ToggleMutliSelectBox handleToggle={this.handleClick} isOpen={this.state.showBox}/></div>
        </div>
        <div className="row col-12">{validationError}</div>
      </div>);
  }
}