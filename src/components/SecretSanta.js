import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import AddNames from './AddNames'

export default class SecretSanta extends Component {
  constructor(props){
    super(props)
    this.state = {
      people : [{
        id: 1,
        name: '',
        exists: '',
        contact: ''
      }],
      nextId: 2
    }
    this.deletePerson = this.deletePerson.bind(this);
    this.onPersonEdit = this.onPersonEdit.bind(this);
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
    if((person.name !== "" || person.contact !== "") && !person.exists){
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
  render() {
    return (<BrowserRouter>
      <div>
        <Navbar />
    <Route exact path="/" render={() => {return (<AddNames data={this.state.people} onPersonEdit={this.onPersonEdit} deletePerson={this.deletePerson}/>) }} />
        <Route path="/restrictions" />
      </div>
    </BrowserRouter>)
  }

}