import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MultiSelection from './MultiSelection'
import SantaLogic from './SantaLogic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSlash } from '@fortawesome/free-solid-svg-icons'

export default class Restrictions extends Component {
  constructor(props) {
    super(props)
    this.formRestrictionRow = this.formRestrictionRow.bind(this)
  }
  filterList(data, comparisonFunction) {
    let index = data.findIndex((p) => { return comparisonFunction(p) });
    return [...data.slice(0, index), ...data.slice(index + 1)]
  }

  formRestrictionRow(person) {
    const onlySantee = this.filterList(this.props.data, (p) => { return p.id === person.id })
    const existingSantee = this.filterList(onlySantee, (p) => { return p.exists === false })
    const restrictionList = <MultiSelection data={existingSantee} rejects={person.restrictions} populateRestrictions={(rejectedSantees) => { this.props.populateRestrictions(person.id, rejectedSantees) }} />
    const restrictionSymbol = <div className="fa-stack fa-1x">
      <FontAwesomeIcon icon={faGift} className="fa text-warning fa-stack-2x" />
      <FontAwesomeIcon icon={faSlash} className="fa text-danger fa-stack-2x" />
    </div>
    return person.exists ? (
      <div className="row bg-light shadow-sm restriction-row m-0 mb-2" key={person.id}>
        <div className="col-3 h5 pl-4 pt-2">
          {person.name}
        </div>
        <div className="col-2">
          {restrictionSymbol}
        </div>
        <div className="col-7">
          {restrictionList}
        </div>
      </div>)
      : ''
  }
  render() {
    let possibleCount = SantaLogic.countValidCombinations(this.props.data.filter((person) => { return person.exists }))
    let possibleCombinations = <h4 className="text-primary my-4">Possible Combinations : {possibleCount}</h4>
    let restrictionRows = this.props.data.map(this.formRestrictionRow)
    let nextButton = (possibleCount > 0) ? <Link to="/sendText" className="no-link"><div className="btn btn-next mb-4 btn-block">Next</div></Link> : <div className="btn btn-secondary mb-4 btn-block">Next</div>
    return (<div className="container">
      {restrictionRows}
      {possibleCombinations}
      {nextButton}
    </div>);
  }
}