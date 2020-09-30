import React, { useState, useEffect } from "react";
import "./CandyEdit.css";
import { useParams, Redirect } from "react-router-dom";
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

  return (
    <div className="candy-edit-container">
      <div className="edit-container-left">
        <div className="image-container">
          <div
            className="edit-selected-img"
            style={{
              backgroundImage: `url("${selectedImg === "" ? candy.imgURL1 : selectedImg}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '136px',
              width: '168px',
              cursor: 'pointer'
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
        <div
          className="candy-detail-image"
          style={{
            backgroundImage: `url("${candy.imgURL1}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            cursor: 'pointer'
          }}
          alt={candy.productName}
          onClick={(e) => setSelectedImg(candy.imgURL1)}
        ></div>
        <div
          className="candy-detail-image"
          style={{
            backgroundImage: `url("${candy.imgURL2}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            cursor: 'pointer'
          }}
          alt={candy.productName}
          onClick={(e) => setSelectedImg(candy.imgURL2)}
        ></div>
        <div
          className="candy-detail-image"
          style={{
            backgroundImage: `url("${candy.imgURL3}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80px',
            width: '80px',
            cursor: 'pointer'
          }}
          alt={candy.productName}
          onClick={(e) => setSelectedImg(candy.imgURL3)}
        ></div>
      </div>
    </div>
  );
};

export default CandyEdit;
