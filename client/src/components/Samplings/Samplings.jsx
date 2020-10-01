import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Samplings.css";

const SamplingImgDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 136px;
  width: 168px;
`;

const Samplings = (props) => {
  return (
    <div className="sampling">
      <Link className="sampling-link" to={`/candies/${props.id}`}>
        <SamplingImgDiv className="sampling-img" img={props.img} />
        {/* <img className="sampling-img" src={props.img} alt={props.name} /> */}
        <div>{props.name}</div>
        <div>{`$${props.price} per pound`}</div>
      </Link>
    </div>
  );
};

export default Samplings;
