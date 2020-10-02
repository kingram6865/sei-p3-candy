import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = (props) => {
  return (
    <div className="favorites">
      <Link className="favorites-link" to={`/candies/${props.id}`}>
        <div
          className="fav-img-div"
          style={{
            background:
              `linear-gradient(to top, rgba(181, 181, 181, .5), transparent), url("${props.img}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '355px',
            height: '195px'
          }}
          alt={props.name}
        >
          <div className="favorites-text-container">
            <div className="favorites-name">{props.name}</div>
            <div className="favorites-blurb">{props.blurb}</div>
          </div>
          <div className="tap-in-container">
            <div className="tap-in">Tap In</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Favorites;