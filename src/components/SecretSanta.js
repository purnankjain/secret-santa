import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import AddNames from './AddNames'
import Restrictions from './Restrictions';

export default class SecretSanta extends Component {
  constructor(props){
    super(props)
    this.state = {
      people : [{
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
      },
      {
        id: 6,
        name: '',
        exists: false,
        contact: '', 
        restrictions: [
        ]
      }],
      nextId: 2
    }
    this.deletePerson = this.deletePerson.bind(this)
    this.onPersonEdit = this.onPersonEdit.bind(this)
    this.populateRestrictions = this.populateRestrictions.bind(this)
  }
  deletePerson(id){
    let index = this.state.people.findIndex((person) => { return person.id === id });
    let updatedList = [...this.state.people.slice(0, index), ...this.state.people.slice(index + 1)];
    this.setState({ people: updatedList })
  }
  onPersonEdit(id){
    let index = this.state.people.findIndex((person) => { return person.id === id });
    let person = this.state.people[index]
    if(person.name === '' && person.contact === '' && person.exists) {
      let updatedList = [...this.state.people.slice(0, index), ...this.state.people.slice(index + 1)];
    this.setState({ people: updatedList })
    return;
    }
    if((person.name !== "" || person.contact !== "") && !person.exists) {
      person.exists = true
      let newRow = {
        id: this.state.nextId,
        name: '',
        contact:'',
        exists: false
      }
      let updatedList = [...this.state.people, newRow];
      this.setState({ people: updatedList , nextId: this.state.nextId + 1})
      return;
    }
  }
  populateRestrictions(personId, rejectedSantees){
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
    this.setState({people: updatedList})
  }
  render() {
    return (<BrowserRouter>
      <div>
        <Navbar />
    <Route exact path="/" render={() => {return (<div><AddNames data={this.state.people} onPersonEdit={this.onPersonEdit} deletePerson={this.deletePerson}/> <Redirect to="/restrictions" /></div>) }} />
        <Route path="/restrictions" render={() => {return(<Restrictions data={this.state.people} populateRestrictions={this.populateRestrictions} />)}}/>
      </div>
    </BrowserRouter>)
  }

}