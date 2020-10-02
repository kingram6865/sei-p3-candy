import React, { useState } from "react";
import "./CandyEdit.css";
import { updateCandy } from "../../services/candies";

const CandyEdit = (props) => {
  const [selectedImg, setSelectedImg] = useState("");
  const [candy, setCandy] = useState({
    productName: props.productName,
    price: props.price,
    imgURL1: props.imgURL1,
    imgURL2: props.imgURL2,
    imgURL3: props.imgURL3,
    description: props.description,
  });

  const [isUpdated, setUpdated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandy({
      ...candy,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateCandy(props._id, candy);
    setUpdated(updated);
  };

  if (isUpdated) {
    window.location.reload(false);
  }

  return (
    <div className="candy-edit-container">
      <div className="candy-edit-text">Edit Candy</div>
      <div className="edit-form-thumbnails-container">
        <div className="edit-form-container">
          <div className="image-container">
            <div
              className="edit-selected-img"
              style={{
                backgroundImage: `url("${
                  selectedImg === "" ? candy.imgURL1 : selectedImg
                }")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "136px",
                width: "168px",
                cursor: "pointer",
              }}
              alt={candy.productName}
            ></div>
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
              className="edit-input-img"
              placeholder="Image Link"
              type="text"
              value={candy.imgURL1}
              name="imgURL1"
              required
              onChange={handleChange}
            />
            <input
              className="edit-input-img"
              placeholder="Additional Image 2"
              value={candy.imgURL2}
              name="imageURL2"
              onChange={handleChange}
            />
            <input
              className="edit-input-img"
              placeholder="Additional Image 3"
              value={candy.imgURL3}
              name="imageURL3"
              onChange={handleChange}
            />
            <div className="edit-save-button-container">
              <button type="submit" className="edit-save-button">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="edit-img-thumbnails-container">
          <div
            className="candy-detail-image"
            style={{
              backgroundImage: `url("${candy.imgURL1}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80px",
              width: "80px",
              cursor: "pointer",
            }}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL1)}
          ></div>
          <div
            className="candy-detail-image"
            style={{
              backgroundImage: `url("${candy.imgURL2}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80px",
              width: "80px",
              cursor: "pointer",
            }}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL2)}
          ></div>
          <div
            className="candy-detail-image"
            style={{
              backgroundImage: `url("${candy.imgURL3}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80px",
              width: "80px",
              cursor: "pointer",
            }}
            alt={candy.productName}
            onClick={(e) => setSelectedImg(candy.imgURL3)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CandyEdit;
