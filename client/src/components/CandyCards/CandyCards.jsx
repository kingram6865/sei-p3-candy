import React, { Component } from 'react';
import './CandyCards.css';
import CandyCard from '../CandyCard/CandyCard';
import { getCandies } from '../../servies/candies';

class CandyCards extends Component{
  constructor(){
    super()
    this.state = {
      candies:[]
    }
  }
  async componentDidMount(){
    const candies = await getCandies()
    this.setState({ candies })
  }
  render(){
    const CARDS = this.state.candies.map((candies, index) =>
      index ? <CandyCard imgURL={candies.imgURL1} name={candies.productName} price={candies.price} />
    )


    return (
      <div className='candy-cards'>
        <div className='cards'>
          {CARDS}
        </div>
      </div>
    )
  }
}

import 'CandyCards.css';