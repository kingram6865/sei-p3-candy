import React, { useState } from 'react'
import './CandyCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createCandy } from '../../services/candies'

const CandyCreate = (props) => {
  const [isCreated, setCreated] = useState(false)
  const [candy, setCandy] = useState({
    productName: '',
    price: '',
    imageURL1: '',
    imageURL2: '',
    imageURL3: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setCandy({
      ...candy,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createCandy(candy)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/candies/${isCreated._id}`} />
  }

  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input 
          className="input-name"
          name="productName"
          placeholder='Product Name'
          value={candy.productName}
          required
          onChange={handleChange}
        />
        <input 
          className="input-price"
          name="price"
          placeholder='Price'
          value={candy.price}
          required
          onChange={handleChange}
        />
        <input 
          className="input-image1"
          name="imageURL1"
          placeholder='Main Image'
          value={candy.imageURL1}
          required
          onChange={handleChange}
        />
        <input 
          className="input-image2"
          name="imageURL2"
          placeholder='Additional Image 1'
          value={candy.imageURL2}
          required
          onChange={handleChange}
        />
        <input 
          className="input-image3"
          name="imageURL3"
          placeholder='Additional Image 2'
          value={candy.imageURL3}
          required
          onChange={handleChange}
        />
        <input 
          className="input-description"
          name="description"
          placeholder="Description"
          value={candy.description}
          required
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

export default CandyCreate