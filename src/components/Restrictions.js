import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import MultiSelection from './MultiSelection'
import SantaLogic from './SantaLogic'

export default class Restrictions extends Component {
  constructor(props){
    super(props)
    this.formRestrictionRow = this.formRestrictionRow.bind(this)
  }
  filterList(data, comparisonFunction) {
    let index = data.findIndex((p) => { return comparisonFunction(p) });
    return [...data.slice(0, index), ...data.slice(index + 1)]
  }
  
  formRestrictionRow(person) {
    const onlySantee = this.filterList(this.props.data, (p) => { return p.id === person.id})
    const existingSantee = this.filterList(onlySantee, (p) => { return p.exists === false})
    const textStyle = {flex: 3, textAlign:'center'}
    const symbolStyle = {flex: 1, textAlign:'center'}
    const personName = <div style={textStyle}>{person.name}</div>
    const restrictionList = <MultiSelection style={textStyle} data={existingSantee} rejects={person.restrictions} populateRestrictions={(rejectedSantees)=>{ this.props.populateRestrictions(person.id, rejectedSantees) }}/>
    const restrictionSymbol = <div style={symbolStyle}></div>
    return person.exists ? (<div style={{display: "flex"}} className="bg-light shadow-sm restriction-row rounded my-2 py-2" key={person.id}><h4 className="ml-4 col-4">{personName}</h4>{restrictionSymbol}{restrictionList}</div>) : ''
  }
  render() {
    let possibleCount = SantaLogic.countValidCombinations(this.props.data.filter((person) => { return person.exists}))
    let possibleCombinations = <h4 className="text-primary my-4">Possible Combinations : {possibleCount}</h4>
    let restrictionRows = this.props.data.map(this.formRestrictionRow)
    let nextButton = (possibleCount > 0) ? <Link to="/sendText"><div className="btn btn-success mb-4 btn-block">Next</div></Link> : <div className="btn btn-secondary mb-4 btn-block">Next</div>
    return (<div className="container">
      <form>
        {restrictionRows}
        {possibleCombinations}
        {nextButton}
      </form>
    </div>);
  }
}