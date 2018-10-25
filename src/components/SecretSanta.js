import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import AddNames from './AddNames'
import Restrictions from './Restrictions'
import SendText from './SendText'
import Confirmation from './Confirmation'
import ChristmasGroup from './ChristmasGroup'
import WelcomeScreen from './WelcomeScreen'
import Header from './Header';
import Footer from './Footer';

export default class SecretSanta extends Component {
  constructor(props) {
    super(props)
    let emptyPerson = { id: 1, name: '', contact: '', exists: false, restrictions: [] }
    let emptyRule = { ruleNo: 1, rule: '', exists: false }
    this.state = {
      people: [{
        id: 1,
        name: 'Akbar',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 2,
        name: 'Jodha',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 3,
        name: 'Birbal',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 4,
        name: 'Sujamal',
        exists: true,
        contact: '12434',
        restrictions: [
        ]
      },
      {
        id: 5,
        name: 'Ram',
        exists: true,
        contact: '36',
        restrictions: [
        ]
      }, {
        id: 6,
        name: 'Akbari',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 7,
        name: 'Jodh',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 8,
        name: 'Birbali',
        exists: true,
        contact: '1234',
        restrictions: [
        ]
      },
      {
        id: 9,
        name: 'Sujamala',
        exists: true,
        contact: '12434',
        restrictions: [
        ]
      },
      {
        id: 10,
        name: 'Ramaya',
        exists: true,
        contact: '36',
        restrictions: [
        ]
      },
      {
        id: 11,
        name: '',
        exists: false,
        contact: '',
        restrictions: [
        ]
      }],
      nextId: 12,
      rules: [{
        ruleNo: 1,
        rule: 'ABRACADABRA',
        exists: true
      },
      {
        ruleNo: 2,
        rule: '',
        exists: false
      }],
      nextRuleId: 3,
      headerMessage: 'This is a rulebook',
      footerMessage: 'okay, Bye!'
    }
    this.deletePerson = this.deletePerson.bind(this)
    this.onPersonEdit = this.onPersonEdit.bind(this)
    this.handleRuleEdit = this.handleRuleEdit.bind(this)
    this.handleRuleDelete = this.handleRuleDelete.bind(this)
    this.populateRestrictions = this.populateRestrictions.bind(this)
    this.handleHeaderChange = this.handleHeaderChange.bind(this)
    this.handleFooterChange = this.handleFooterChange.bind(this)
  }
  deletePerson(id) {
    let index = this.state.people.findIndex((person) => { return person.id === id });
    let updatedList = [...this.state.people.slice(0, index), ...this.state.people.slice(index + 1)];
    this.setState({ people: updatedList })
  }
  onPersonEdit(id) {
    let index = this.state.people.findIndex((person) => { return person.id === id });
    let person = this.state.people[index]
    if (person.name === '' && person.contact === '' && person.exists) {
      let updatedList = [...this.state.people.slice(0, index), ...this.state.people.slice(index + 1)];
      this.setState({ people: updatedList })
      return;
    }
    if ((person.name !== "" || person.contact !== "") && !person.exists) {
      person.exists = true
      let newRow = {
        id: this.state.nextId,
        name: '',
        contact: '',
        exists: false,
        restrictions: []
      }
      let updatedList = [...this.state.people, newRow];
      this.setState({ people: updatedList, nextId: this.state.nextId + 1 })
      return;
    }
  }
  handleHeaderChange(message) {
    this.setState({ headerMessage: message });
  }
  handleFooterChange(message) {
    this.setState({ footerMessage: message });
  }
  populateRestrictions(personId, rejectedSantees) {
    let index = this.state.people.findIndex((person) => { return person.id === personId })
    let person = this.state.people[index]
    let newPerson = {
      id: person.id,
      name: person.name,
      contact: person.contact,
      exists: person.exists,
      restrictions: rejectedSantees
    }
    let updatedList = [...this.state.people.slice(0, index), newPerson, ...this.state.people.slice(index + 1)]
    this.setState({ people: updatedList })
  }
  handleRuleEdit(row, oldValue) {
    let index = this.state.rules.findIndex((rule) => { return rule.ruleNo === row.ruleNo })
    if (oldValue === '' && row.rule !== '') {
      let newRow = {
        ruleNo: this.state.nextRuleId,
        rule: '',
        exists: false
      }
      let thisRow = {
        ruleNo: row.ruleNo,
        rule: row.rule,
        exists: true
      }
      this.setState({
        nextRuleId: this.state.nextRuleId + 1,
        rules: [...this.state.rules.slice(0, index), thisRow, newRow]
      })
      return
    }
    if (oldValue !== '' && row.rule === '') {
      this.setState((state) => ({ rules: [...this.state.rules.slice(0, index), ...this.state.rules.slice(index + 1)] })
      )
    }
  }
  handleRuleDelete(row) {
    let index = this.state.rules.findIndex((rule) => { return rule.ruleNo === row.ruleNo })
    let updatedList = [...this.state.rules.slice(0, index), ...this.state.rules.slice(index + 1)]
    this.setState({ rules: updatedList })
  }
  render() {

    return (<BrowserRouter>
    <div>
    <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/christmasGroup">
            <Switch>
              <Route exact path="/christmasGroup/:groupId/:userId" render={({ match }) => (<ChristmasGroup groupId={match.params.groupId} userId={match.params.userId} />)} />
              <Route>
                <div>Invalid</div>
              </Route>
            </Switch>
          </Route>
          <Route path="/confirmation" >
            <Confirmation data={this.state} />
          </Route>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route path="/">
            <div>
              <Navbar />
              <Route path="/addNames" render={() => { return (<div><AddNames data={this.state.people} onPersonEdit={this.onPersonEdit} deletePerson={this.deletePerson} /> </div>) }} />
              <Route path="/restrictions" render={() => { return (<div><Restrictions data={this.state.people} populateRestrictions={this.populateRestrictions} /> </div>) }} />
              <Route path="/sendText" render={() => { return (<SendText rules={this.state.rules} handleRuleEdit={this.handleRuleEdit} handleRuleDelete={this.handleRuleDelete} handleFooterChange={this.handleFooterChange} handleHeaderChange={this.handleHeaderChange} headerMessage={this.state.headerMessage} footerMessage={this.state.footerMessage} />) }} />
            </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </BrowserRouter>)
  }

}