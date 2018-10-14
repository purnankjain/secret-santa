import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MessageComposer from './MessageComposer'
import PreviewBox from './PreviewBox'

export default class SendText extends Component {
  render() {
    return(<div>
      <MessageComposer rules={this.props.rules} handleRuleEdit = {this.props.handleRuleEdit} handleRuleDelete={this.props.handleRuleDelete} handleFooterChange={this.props.handleFooterChange} handleHeaderChange={this.props.handleHeaderChange}/>
      <PreviewBox headerMessage = {this.props.headerMessage} footerMessage = {this.props.footerMessage} rules={this.props.rules}/>
    <Link to="/confirmation"><button type="button" onClick>Send Text</button></Link>
    
    </div>)
  }
}