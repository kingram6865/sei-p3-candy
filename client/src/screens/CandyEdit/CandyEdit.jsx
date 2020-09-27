import React, { useState, useEffect } from 'react'
import './CandyEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getCandies, getCandy, updateCandy } from '../../services/candies'

const CandyEdit = (props) => {
  const [candy, setCandy] = useState({
    name: '',
    price: '',
    imageURL1: '',
    imageURL2: '',
    imageURL3: '',
    description: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(()=>{
    const fetchCandy = async () => {
      const thisCandy = await getCandy(id)
      setCandy(thisCandy)
    }
    fetchCandy()
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = props.match.params
    const updated = await updateCandy(id, candy)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/candies/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <div className="candy-edit">
        <div className="image-container">
          <img className="edit-candy-image" src={candy.imageURL1} alt={candy.name} />
          <form onSubmit={handleSubmit}>
            <input 
              className="edit-input-image-link"
              placeholder="Image Link"
              value={candy.imageURL1}
              name="imgURL1"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit>
          <input 
            className="input-name"
            placeholder="Candy Name"
            value={candy.name}
            name="name"
            required
            autofocus
            onChange={handleChange}
          />
          <input 
            className="input-price"
            placeholder="Price"
            value={candy.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input 
            className="input-description"
            placeholder="Description"
            value={candy.description}
            name="description"
            onChange={handleChange}
          />
        </form>
      </div>
    </Layout>
  )
}

export default CandyEdit