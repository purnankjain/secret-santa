import React, { Component } from 'react'
import * as firebase from 'firebase'
import SantaLogic from './SantaLogic'
import CountDownBox from './CountDownBox'

export default class Confirmation extends Component {
  componentDidMount() {
    const rootRef = firebase.database().ref().child('group')
    let people = this.props.data.people.filter((person) => (person.exists))
    let rule = this.props.data.rules.filter((rule) => (rule.exists))
    let santaSanteeList = SantaLogic.getSantaSanteeChain(people)
    let newGroup = {
      people: [],
      rules: this.formRules(rule),
      headerMessage: this.props.data.headerMessage,
      footerMessage: this.props.data.footerMessage
    }
    // let newGroupRef = rootRef.push(newGroup)
    let updatedPeople = this.formPeople(people, santaSanteeList)
    // let peopleRef = newGroupRef.child('people')
    updatedPeople.map((person) => {
      //  let newPersonRef = peopleRef.push(person)
    })

  }
  extractSantee(santa, santaSanteeList) {
    let index = santaSanteeList.findIndex((elm) => { return elm === santa })
    let santeeIndex = (index + 1) % santaSanteeList.length
    return santaSanteeList[santeeIndex]
  }
  formPeople(people, santaSanteeList) {
    return people.map((person) => {
      let santee = this.extractSantee(person.name, santaSanteeList)
      return { name: person.name, contact: person.contact, santee: santee }
    })
  }
  formRules(rules) {
    return rules.map((rule) => ({ rule: rule.rule }))
  }
  render() {
    return (
      <div className="text-center confirmation-box">
        <div className="display-4">Your message have been sent!!</div>
        <div>
          <CountDownBox year={2018} month={12} date={25} event="Christmas" />
        </div>
      </div>
    )
  }
}