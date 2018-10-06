import React, { Component } from 'react'
import MultiSelection from './MultiSelection'
export default class Restrictions extends Component {
  constructor(){
    super()
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
    let restrictionRow = this.props.data.map(this.formRestrictionRow)
    return (<div>
      <form>
        {restrictionRow}
      </form>
    </div>);
  }
}