import React, { useState, useEffect } from "react";
import "./CandyEdit.css";
import { useParams, Redirect } from "react-router-dom";
import styled from "styled-components";
import { getCandy, updateCandy } from "../../services/candies";

const CandyEdit = (props) => {
  const [selectedImg, setSelectedImg] = useState("");
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

  const CandyImgDiv1 = styled.div`
    background-image: url(${!candy.imgURL1 ? "Loading..." : candy.imgURL1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 80px;
    cursor: pointer;
  `;

  const CandyImgDiv2 = styled.div`
    background-image: url(${candy.imgURL2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 80px;
    cursor: pointer;
  `;

  const CandyImgDiv3 = styled.div`
    background-image: url(${candy.imgURL3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 80px;
    cursor: pointer;
  `;

  return (

      <div className="candy-edit-container">
        <div className="edit-container-left">
          <div className="image-container">
            <img
              className="edit-candy-image"
              src={candy.imgURL1}
              alt={candy.productName}
            />
          </div>
          <form className="edit-form" onSubmit={handleSubmit}>
            <div className="candy-price">
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
            </div>

            <textarea
              className="textarea-description"
              placeholder="Description"
              value={candy.description}
              name="description"
              onChange={handleChange}
            />
            <input
              className="input-img"
              placeholder="Image Link"
              type="text"
              value={candy.imgURL1}
              name="imgURL1"
              required
              onChange={handleChange}
            />
            <input
              className="input-img"
              placeholder="Additional Image 2"
              value={candy.imgURL2}
              name="imageURL2"
              onChange={handleChange}
            />
            <input
              className="input-img"
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
        <div className="edit-img-thumbnails-container">
          <CandyImgDiv1
            className="candy-detail-image"
            imgURL1={candy.imgURL1}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL1)}
          />
          <CandyImgDiv2
            className="candy-detail-image"
            imgURL2={candy.imgURL2}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL2)}
          />
          <CandyImgDiv3
            className="candy-detail-image"
            imgURL3={candy.imgURL3}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL3)}
          />
        </div>
      </div>

  );
};

export default CandyEdit;
