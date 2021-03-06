import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteCandy } from "../../services/candies";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="each-candy">
      <div
        className="candy-onhover-container"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="candy-imgdiv">
          <CandyImgDiv className="candy-each-image1"
            imgURL1={props.imgURL1}>
            {isHovered && (
              <div className="edit-delete-buttons">
                <Link to={`/candies/${props._id}`}>Details</Link>
                <button className="edit-button" onClick={() => {
                  props.setToggleEdit(true)
                  props.setCandyEditId(props._id)
                }}>Edit</button>
                <button className="delete-button" onClick={() => {
                  deleteCandy(props._id)
                  window.location.reload(false);
                  }}>Delete</button>
              </div>
            )}
            </CandyImgDiv>
        </div>
        <div className="candy-each-name">{props.productName}</div>
        <div className="candy-each-price">{`$${props.price}`}</div>
      </div>
    </div>
  );
};

export default Candy;
