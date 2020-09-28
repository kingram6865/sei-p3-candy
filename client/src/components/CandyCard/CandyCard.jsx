import React from "react";
import "./CandyCard.css";
import { Link } from "react-router-dom";

const CandyCard = (props) => {
  return (
    <div className="candy-card">
      <Link className="card" to={`/candies/${props._id}`}>
        <img className="candy-card-image" src={props.imgURL} alt={props.productName} />
        <div>View</div>
      </Link>
    </div>
  );
};

export default CandyCard;