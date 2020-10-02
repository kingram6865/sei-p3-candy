import React, { useState } from "react";
import "./CandyCreate.css";
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
    window.location.reload(false);
    // return <Redirect to={`/candies`} />;
  }

  return (
    <div className="create-candy-container">
      <div className="candy-create-title">Add New Product</div>
      <div className="create-form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="create-edit-price">
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
          </div>
          <input
            className="create-input-img"
            name="imgURL1"
            placeholder="Main Image"
            value={candy.imgURL1}
            required
            onChange={handleChange}
          />
          <input
            className="create-input-img"
            name="imgURL2"
            placeholder="Additional Image 1"
            value={candy.imgURL2}
            required
            onChange={handleChange}
          />
          <input
            className="create-input-img"
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
          <div className="create-submit-container">
            <button type="submit" className="submit-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandyCreate;
