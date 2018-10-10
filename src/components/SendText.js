import React, { Component } from 'react'
import MessageComposer from './MessageComposer'
import PreviewBox from './PreviewBox'

export default class SendText extends Component {
  render() {
    return(<div>
      <div>Group Id:</div>
      <MessageComposer rules={this.props.rules} handleRuleEdit = {this.props.handleRuleEdit} handleRuleDelete={this.props.handleRuleDelete}/>
      <PreviewBox/>
    </div>)
  }
}