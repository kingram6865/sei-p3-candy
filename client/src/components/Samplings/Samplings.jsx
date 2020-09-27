import React from "react";
import styled from "styled-components";
import "./Samplings.css";

const Samplings = (props) => {
  const SamplingImgDiv = styled.div`
    background-image: url(${props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 136px;
    width: 168px;
  `

  return (
    <div className="sampling">
      <SamplingImgDiv className="sampling-img" background-image={props.img} />
      {/* <img className="sampling-img" src={props.img} alt={props.name} /> */}
      <div>{props.name}</div>
      <div>{`$${props.price} per pound`}</div>
    </div>
  );
};

export default Samplings;
