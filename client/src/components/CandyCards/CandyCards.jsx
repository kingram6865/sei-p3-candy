import React, { Component } from 'react'
import './CandyCards.css'
import CandyCard from '../CandyCard/CandyCard'
import { getCandies } from '../../services/candies'

class CandyCards extends Component {
  constructor() {
    super()
    this.state = {
      candies: []
    }
  }

  async componentDidMount() {
    const candies = await getCandies()
    this.setState({ candies })
  }

  render() {

    const CARDS = this.state.candies.reverse().map((candy, index) =>
      index ? <CandyCard _id={candy._id} name={candy.productName} imgURL={candy.imgURL} key={index} /> : null
    )

    return (
      <div className="candy-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default CandyCards