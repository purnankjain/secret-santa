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
    const restrictionSymbol = <div style={symbolStyle}>X</div>
    return person.exists ? (<div style={{display: "flex"}} key={person.id}>{personName}{restrictionSymbol}{restrictionList}</div>) : ''
  }
  render() {
    let possibleCount = SantaLogic.countValidCombinations(this.props.data.filter((person) => { return person.exists}))
    let possibleCombinations = <div>Possible Combinations : {possibleCount}</div>
    let restrictionRows = this.props.data.map(this.formRestrictionRow)
    let nextButton = (possibleCount > 0) ? <Link to="/sendText"><div>Next</div></Link> : <div>Next</div>
    return (<div>
      <form>
        {restrictionRows}
        {possibleCombinations}
        {nextButton}
      </form>
    </div>);
  }
}