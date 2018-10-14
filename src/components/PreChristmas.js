import React from 'react'

const PreChristmas = (props) => {
  let { headerMessage, footerMessage, rules, people } = props
  let { name, santee} = people[0]
  let giftMessage = ", you have to give a gift to "
  let rulesBlock = rules.map((rule, index) => (<div key={index}>Rule #{index + 1} {rule.rule}</div>))
   return (<div>
      <div>{name}{giftMessage}{santee}</div>
      <div>{headerMessage}</div>
      <div>{rulesBlock}</div>
      <div>{footerMessage}</div>
    </div>)
  }

  export default PreChristmas