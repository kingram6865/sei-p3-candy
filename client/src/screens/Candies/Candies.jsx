import React, { useState, useEffect } from 'react'
import './Candies.css'
import Candy from '../../components/Candy/Candy'
import Layout from '../../components/shared/Layout/Layout'
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
    <Layout>
      <div className="candies">
        { productsJSX }
      </div>
    </Layout>
  )
}

export default Candies