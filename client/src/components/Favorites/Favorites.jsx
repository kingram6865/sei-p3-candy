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
              `linear-gradient(to top, rgba(135, 135, 135, .8), transparent 50%), url("${props.img}")`,
            // backgroundImage: `url("${props.img}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '355px',
            height: '195px'
          }}
          alt={props.name}
        >
          <div className="favorites-name">{props.name}</div>
          <div className="tap-in">Tap In</div>
        </div>
      </Link>
    </div>
  )
}

export default Favorites;