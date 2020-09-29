import React, { useState, useEffect } from "react";
import "./CandyDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, deleteCandy } from "../../services/candies";
import { useParams, Link } from "react-router-dom";

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

  return (
    <Layout>
      <div className="candy-detail-container">
        <div className="candy-detail">
          <div className="candy-detail-img-container">
            <img
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
            />
          </div>

          <div className="detail">
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
