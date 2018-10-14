import React, { Component } from 'react'
import PreChristmas from './PreChristmas'
import PostChristmas from './PostChristmas'
import * as firebase from 'firebase'

export default class ChristmasGroup extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [],
      rules: [],
      headerMessage: '',
      footerMessage: '',
      exists: true,
      loaded: false
    }
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child("group")
    const headerRef = rootRef.child(this.props.groupId).child('headerMessage')
    const footerRef = rootRef.child(this.props.groupId).child('footerMessage')
    const rulesRef = rootRef.child(this.props.groupId).child('rules')
    headerRef.once('value', (snap) => {
      let header = snap.val()
      this.setState({headerMessage: header})
    })
    footerRef.once('value', (snap) => {
      let footer = snap.val()
      this.setState({footerMessage: footer})
    })
    rulesRef.once('value', (snap) => {
      let rules = snap.val()
      this.setState({rules: rules})
    })
    if( new Date() < new Date(2018, 11, 25)) {
      const personRef = rootRef.child(this.props.groupId).child('people').child(this.props.userId)
      personRef.once("value", (snap) => {
        let santa = snap.val()
        if(santa !== null) {
          let people = [{ name: santa.name, santee: santa.santee }]
          this.setState({ people: people, loaded: true })
        }
        else {
          this.setState({ loaded: true, exists: false })
        }
      })
      return
    }
    const peopleRef = rootRef.child(this.props.groupId).child('people').orderByValue()
    peopleRef.once("value", (snap) => {
      let peopleData = snap.val()
      if(peopleData == null) {
        this.setState({ loaded: true })
        return
      }
      var peopleArray = Object.values(peopleData)
      let people = peopleArray.map((person) => ({name: person.name, santee: person.santee}))
      this.setState({ people: people, exists: true, loaded: true })
    })
  }
  render() {
    let { loaded, exists } = this.state
    let christmasHappened = new Date() > new Date(2018, 11, 25)
    let christmasBlock = christmasHappened ? <PostChristmas {...this.state} /> : <PreChristmas {...this.state} />
    let invalidBlock = <div>Invalid Link, Please check the link provided to you</div>
    let validBlock = loaded ? christmasBlock : 'Fetching data...'
    let notice = exists ? validBlock : invalidBlock
    return( <div>{notice}</div> )
  }
}
