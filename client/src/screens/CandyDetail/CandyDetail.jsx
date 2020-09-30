import React, { useState, useEffect } from "react";
import "./CandyDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, deleteCandy } from "../../services/candies";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const CandyDetail = (props) => {
  const [candy, setCandy] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCandy = async () => {
      const candy = await getCandy(id);
      setCandy(candy);
      setLoaded(true);
    };
    fetchCandy();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
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
    <Layout handleSearch={props.handleSearch} setQueryResults={props.setQueryResults} >
      <div className="candy-detail-container">
        <div className="nitty-gritty">
              <span>The Nitty Gritty</span>
            </div>
        <div className="candy-detail">
          <div className="candy-detail-img-container">
            <div className="selected-img-container">
              <img
                src={selectedImg === "" ? candy.imgURL1 : selectedImg}
                className="selected-img"
                alt={candy.productName}
              />
            </div>
            <div className="thumbnail-imgs-container">
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
            {/* <img
              className="candy-detail-image"
              src={candy.imgURL1}
              alt={candy.productName}
            />
            <img
              className="candy-detail-image"
              src={candy.imgURL2}
              alt={candy.productName}
            />
            <img
              className="candy-detail-image"
              src={candy.imgURL3}
              alt={candy.productName}
            /> */}
          </div>

          <div className="details-container">
            <div className="name">{candy.productName}</div>
            <div className="price">{`Price: $${candy.price}/lb`}</div>
            <div className="description">{candy.description}</div>
            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/candies/${candy._id}/edit`}>
                  EDIT ITEM
                </Link>
              </button>
              <button
                className="delete-button"
                onClick={() => deleteCandy(candy._id)}
              >
                DELETE ITEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CandyDetail;
