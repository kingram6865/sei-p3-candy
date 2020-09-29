import React, { useState, useEffect } from "react";
import "./CandyDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, deleteCandy } from "../../services/candies";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const CandyDetail = (props) => {
  const [candy, setCandy] = useState(null);
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
  console.log(candy.imgURL1)

  const CandyImgDiv1 = styled.div`
    background-image: url(${!candy.imgURL1 ? "Loading..." : candy.imgURL1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 80px;
  `;

  // const CandyImgDiv2 = styled.div`
  //   background-image: url(${candy.imgURL2});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  //   height: 80px;
  //   width: 80px;
  // `;

  // const CandyImgDiv3 = styled.div`
  //   background-image: url(${candy.imgURL3});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  //   height: 80px;
  //   width: 80px;
  // `;

  return (
    <Layout>
      <div className="candy-detail-container">
        <div className="nitty-gritty">
          <span>The Nitty Gritty</span>
        </div>
        <div className="candy-detail">
          <div className="candy-detail-img-container">
            <CandyImgDiv1
              className="candy-detail-image"
              imgURL1={candy.imgURL1}
              alt={candy.productName}
            />
            {/* <CandyImgDiv2
              className="candy-detail-image"
              imgURL2={candy.imgURL2}
            />
            <CandyImgDiv3
              className="candy-detail-image"
              imgURL3={candy.imgURL3}
            /> */}
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
            <div className="price">{`${candy.price}`}</div>
            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/candies/${candy._id}/edit`}>
                  Edit Item
                </Link>
              </button>
              <button
                className="delete-button"
                onClick={() => deleteCandy(candy._id)}
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CandyDetail;
