import React from 'react'
import tree from '../assets/img/tree.png'

const PostChristmas = (props) => {
  let { people } = props
  let giftedMessage = " gave a gift to "
  let santasBlock = people.map((person, index) => (<div key={index} className="m-0 my-4 h4 text-center">{person.name}{giftedMessage}{person.santee}</div>))
  return (
    <div className="post-christmas">
      <div className="display-3 text-center my-2 text-primary">Had a fun Christmas?</div>
      <div className="h3 text-center my-2">Let's find out who gave a gift to whom</div>
      <div className="santas-block">{santasBlock}</div>
      <div className="d-none d-md-block">
        <img src={tree} className="img-fluid tree-img" />
      </div>
      <div className="d-md-none text-center">
        <img src={tree} className="img-fluid" />
      </div>
    </div>)
}
export default PostChristmas