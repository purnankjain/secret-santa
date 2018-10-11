import React, { Component } from 'react'
import MessageComposer from './MessageComposer'
import PreviewBox from './PreviewBox'

export default class SendText extends Component {
  render() {
    return(<div>
      <div>Group Id:</div>
      <MessageComposer rules={this.props.rules} handleRuleEdit = {this.props.handleRuleEdit} handleRuleDelete={this.props.handleRuleDelete} handleFooterChange={this.props.handleFooterChange} handleHeaderChange={this.props.handleHeaderChange}/>
      <PreviewBox headerMessage = {this.props.headerMessage} footerMessage = {this.props.footerMessage} rules={this.props.rules}/>
    </div>)
  }
}