import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Candy.css";

const CandyImgDiv = styled.div`
  background-image: url(${(props) => props.imgURL1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 136px;
  width: 168px;
`;

const Candy = (props) => {
  return (
    // <div className="candy-each-container">
      <div className="each-candy">
        <Link className="candy-each-link" to={`/candies/${props._id}`}>
          <CandyImgDiv className="candy-each-image1" imgURL1={props.imgURL1} />
          <div className="candy-each-name">{props.productName}</div>
          <div className="candy-each-price">{`$${props.price}`}</div>
          {/* <div className="description">{props.description}</div> */}
        </Link>
      </div>
    // </div>
  );
};

export default Candy;
