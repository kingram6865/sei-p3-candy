import React, { useState, useEffect } from "react";
import "./CandyEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, updateCandy } from "../../services/candies";

const CandyEdit = (props) => {
  const [candy, setCandy] = useState({
    productName: "",
    price: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchCandy = async () => {
      const thisCandy = await getCandy(id);
      setCandy(thisCandy);
    };
    fetchCandy();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandy({
      ...candy,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateCandy(id, candy);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/candies/${props.match.params.id}`} />;
  }

  return (
    <Layout>
      <div className="candy-edit">
        <div className="image-container">
          <img
            className="edit-candy-image"
            src={candy.imgURL1}
            alt={candy.productName}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              type="text"
              value={candy.imgURL1}
              name="imgURL1"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Candy Name"
            value={candy.productName}
            name="productName"
            required
            autoFocus
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
          <textarea
            className="textarea-description"
            placeholder="Description"
            value={candy.description}
            name="description"
            onChange={handleChange}
          />
          <input
            className="input-imageURL2"
            placeholder="Additional Image 2"
            value={candy.imgURL2}
            name="imageURL2"
            onChange={handleChange}
          />
          <input
            className="input-imageURL3"
            placeholder="Additional Image 3"
            value={candy.imgURL3}
            name="imageURL3"
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CandyEdit;
