import React, {useState} from 'react';
import Star from './star'

export default function Product(props) {
  let [img] = useState(`img/${props.image}`)

  return (
    <div className="col-md-4">
      <div className="horizontal">
        <h3>{ props.name }</h3> <Star id={props.id} />
      </div>
      <p className="description">{ props.description }</p>
      <div className="type">{ props.type }</div>
      <img className="image" src={ img } />
    </div>
  )
}
