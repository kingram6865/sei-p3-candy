import React, { useState, useEffect } from 'react'
import './Candies.css'
import Candy from '../../components/Candy/Candy'
import CandyCreate from '../../screens/CandyCreate/CandyCreate'
import CandyEdit from '../../screens/CandyEdit/CandyEdit'
import { getCandies } from '../../services/candies'

const Candies = (props) => {
  const [queriedCandies, setQueriedCandies] = useState([])
  const [toggleEdit, setToggleEdit] = useState(false)
  const [candyEditId, setCandyEditId] = useState('')

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies()
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
      setToggleEdit={setToggleEdit}
      setCandyEditId={setCandyEditId}
    />
  )

  const candy = queriedCandies.find((item, i) => { return candyEditId === item._id })

  const editJSX = candy && <CandyEdit _id={candy._id} productName={candy.productName} price={candy.price} imgURL1={candy.imgURL1} imgURL2={candy.imgURL2} imgURL3={candy.imgURL3} description={candy.description} />

  return (
    <div className="candies-screen-container">
      <div className="candies-container-left">
        <div className="candies-text">Your Products</div>
        <div className="candy-link-modal">
          Click picture to edit item
        </div>
        <div className="candy-each-container">
          { productsJSX }
        </div>
      </div>
      <div className="edit-add-container">
        <div className="edit-add-text">{toggleEdit && candy ? editJSX : <CandyCreate />} </div>
      </div>
    </div>
  )
}

export default Candies