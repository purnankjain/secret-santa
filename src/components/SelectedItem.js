import React, {Component} from 'react'

export default class  SelectedItem extends Component{
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
  }
  removeItem(){
    this.props.removeSelectedItem(this.props.item)
  }
  render(){
    return (<span style={{padding: '10px'}}><span>{this.props.item}</span><span onClick={this.removeItem} style={{padding: '10px'}}><sup>X</sup></span></span>
    )
  }
}