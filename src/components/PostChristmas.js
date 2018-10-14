import React from 'react'

const PostChristmas = (props) => {
  let { people } = props
  let giftedMessage = " gave a gift to "
  let santasBlock = people.map((person, index) => (<div key={index}>{person.name}{giftedMessage}{person.santee}</div>))
  return (<div>{santasBlock}</div>)
  }
export default PostChristmas