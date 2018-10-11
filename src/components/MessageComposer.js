import React, { Component } from 'react'
import TextBox from './TextBox'
import RuleBook from './RuleBook'

export default class MessageComposer extends Component {
  render() {
    let headerLabel = "Build Up"
    let footerLabel = "Wrap Up"
    return(<div>
      <TextBox label={headerLabel} handleChange={this.props.handleHeaderChange}/>
      <RuleBook rules={this.props.rules} handleRuleEdit = {this.props.handleRuleEdit} handleDelete={this.props.handleRuleDelete}/>
      <TextBox label={footerLabel} handleChange={this.props.handleFooterChange}/>
    </div>)
  }

}