import React, { useState } from "react";
import "./CandyCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createCandy } from "../../services/candies";

const CandyCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [candy, setCandy] = useState({
    productName: "",
    price: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandy({
      ...candy,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(candy);
    const created = await createCandy(candy);
    setCreated({ created });
    console.log(isCreated);
  };

  if (isCreated) {
    return <Redirect to={`/candies`} />;
  }

  return (
    <Layout>
      <div className="create-candy-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            name="productName"
            placeholder="Product Name"
            value={candy.productName}
            required
            onChange={handleChange}
          />
          <input
            className="input-price"
            name="price"
            placeholder="Price"
            value={candy.price}
            required
            onChange={handleChange}
          />
          <input
            className="input-image1"
            name="imgURL1"
            placeholder="Main Image"
            value={candy.imgURL1}
            required
            onChange={handleChange}
          />
          <input
            className="input-image2"
            name="imgURL2"
            placeholder="Additional Image 1"
            value={candy.imgURL2}
            required
            onChange={handleChange}
          />
          <input
            className="input-image3"
            name="imgURL3"
            placeholder="Additional Image 2"
            value={candy.imgURL3}
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            name="description"
            placeholder="Description"
            value={candy.description}
            rows={10}
            cols={78}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CandyCreate;
