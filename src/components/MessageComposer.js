import React, { Component } from 'react'
import Header from './Header'
import RuleBook from './RuleBook'
import Footer from './Footer'

export default class MessageComposer extends Component {
  
  render() {
    return(<div>
      <Header/>
      <RuleBook rules={this.props.rules} handleRuleEdit = {this.props.handleRuleEdit} handleDelete={this.props.handleRuleDelete}/>
      <Footer/>
    </div>)
  }

}