import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MessageComposer from './MessageComposer'
import PreviewBox from './PreviewBox'

export default class SendText extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-group mb-4">
          <div className="col-md" >
            <MessageComposer rules={this.props.rules} handleRuleEdit={this.props.handleRuleEdit} handleRuleDelete={this.props.handleRuleDelete} handleFooterChange={this.props.handleFooterChange} handleHeaderChange={this.props.handleHeaderChange} />
          </div>
          <div className="col-md" >
            <PreviewBox headerMessage={this.props.headerMessage} footerMessage={this.props.footerMessage} rules={this.props.rules} />
          </div>
        </div>
        <Link to="/confirmation"><button type="button" className="btn btn-success mb-4 btn-block">Send Text</button></Link>

      </div>)
  }
}