import React from 'react'
import christmas from '../assets/img/christmas.png'
import CountDownBox from './CountDownBox'

const PreChristmas = (props) => {
  let { headerMessage, footerMessage, rules, people } = props
  let { name, santee } = people[0]
  let giftMessage = ", you have to give a gift to "
  let rulesBlock = rules.map((rule, index) => (<div key={index}>Rule #{index + 1} {rule.rule}</div>))
  return (
    <div>
      <div className="row">
        <div className="col-md">
          <div className="text-center display-3">
            {name}{giftMessage}{santee}
          </div>
          <div>
            <img src={christmas} className="img-fluid mt-4" />
          </div>
        </div>
        <div className="col-md">
          <div className="card h-100">
            <div className="card-header bg-lightblue text-white">
              <h4>Message</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">{headerMessage}</h5>
              <div className="card-text">
                {rulesBlock}
              </div>
              <h5 className="card-title">{footerMessage}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <CountDownBox year={2018} month={12} date={25} event="Christmas" />
      </div>
    </div>
  )
}

export default PreChristmas