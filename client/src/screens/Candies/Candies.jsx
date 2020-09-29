import React, { useState, useEffect } from 'react'
import './Candies.css'
import Candy from '../../components/Candy/Candy'
// import Layout from '../../components/shared/Layout/Layout'
import { getCandies } from '../../services/candies'

const Candies = (props) => {
  // const [allCandies, setAllCandies] = useState([])
  const [queriedCandies, setQueriedCandies] = useState([])

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies()
      // setAllCandies(candies)
      setQueriedCandies(candies)
    }
    fetchCandies()
  }, [])

  const productsJSX = queriedCandies.map((candy, index) => 
    <Candy
      _id={candy._id}
      productName={candy.productName}
      price={candy.price}
      imgURL1={candy.imgURL1}
      imgURL2={candy.imgURL2}
      imgURL3={candy.imgURL3}
      description={candy.description}
      key={index}
    />
  )

  return (
    <div className="candies-screen-container">
      <div className="candies-container-left">
        <div className="candies-text">Your Products</div>
        <div className="candy-each-container">
          { productsJSX }
        </div>
      </div>
      <div className="edit-add-container">
        <h2>Placeholder ADD/EDIT</h2>
      </div>
    </div>
  )
}

export default Candies