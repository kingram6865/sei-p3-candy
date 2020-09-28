import React from 'react'
import './Candy.css'
import { Link } from 'react-router-dom'

const Candy = (props) => {
  return (
    <>
      <Link className="candy" to={`candies/${props._id}`}>
        <img className="candy-image1" src={props.imgURL1} alt={props.productName}/>
        {/* <img className="candy-image2" src={props.imgURL2} alt={props.productName}/>
        <img className="candy-image3" src={props.imgURL3} alt={props.productName}/> */}
        <div className="candy-name">{props.productName}</div>
        <div className="price">{`$${props.price}`}</div>
        <div className="description">{props.description}</div>
      </Link>
    </>
  )
}

export default Candy