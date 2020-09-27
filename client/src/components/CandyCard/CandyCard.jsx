import React from 'react';
import './CandyCard.css';
import { Link } from 'react-router-dom';

const CandyCard = (props) => {
  return (
    <div className='candy-card'>
      <Link className='card' to={`/products/${props.productName}`}>
        <img className='candy-card-image' src={props.imgURL1} alt={props.productName} />
        <img className='candy-card-image' src={props.imgURL2} alt={props.productName} />
        <img className='candy-card-image' src={props.imgURL3} alt={props.productName} />
        <div className='card-candy-title'>{props.productName}</div>
        <div className='candy-card-price'>{props.price}</div>
        <div className='candy-card-description'>{props.description}</div>
      </Link>
    </div>
  )
}


export default CandyCard;