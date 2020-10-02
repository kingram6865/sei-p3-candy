import React, { useState, useEffect } from "react";
import "./CandyDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getCandy, deleteCandy} from "../../services/candies";
import { useParams, Link, useHistory } from "react-router-dom";
import ReviewStills from '../../components/ReviewStills/ReviewStills'

const CandyDetail = (props) => {
  const [candy, setCandy] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  const history = useHistory();

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

  const handleDelete = () => {
    if (deleted) {
      history.push('/candies')
    }
  }

  return (
    <Layout handleSearch={props.handleSearch} setQueryResults={props.setQueryResults} >
      <div className="candy-detail-container">
        <div className="nitty-gritty">
              <span>The Nitty Gritty</span>
            </div>
        <div className="candy-detail">
          <div className="candy-detail-img-container">
            <div className="selected-img-container">
              <div
                style={{
                  backgroundImage: `url("${selectedImg === "" ? candy.imgURL1 : selectedImg}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '256px',
                  width: '352px',
                }}
                className="selected-img"
                alt={candy.productName}
              ></div>
            <div className="thumbnail-imgs-container">
              <div
                className="candy-detail-image"
                style={{
                  backgroundImage: `url("${candy.imgURL1})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '80px',
                  width: '80px',
                  cursor: 'pointer'
                }}
                alt={candy.productName}
                onClick={(e) => setSelectedImg(candy.imgURL1)}
              ></div>
              <div
                className="candy-detail-image"
                style={{
                  backgroundImage: `url("${candy.imgURL2})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '80px',
                  width: '80px',
                  cursor: 'pointer'
                }}
                alt={candy.productName}
                onClick={(e) => setSelectedImg(candy.imgURL2)}
              ></div>
              <div
                className="candy-detail-image"
                style={{
                  backgroundImage: `url("${candy.imgURL3})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '80px',
                  width: '80px',
                  cursor: 'pointer'
                }}
                alt={candy.productName}
                onClick={(e) => setSelectedImg(candy.imgURL3)}
              ></div>
            </div>
          </div>
          <div className="details-container">
            <div className="name">{candy.productName}</div>
            <div className="price">{`Price: $${candy.price}/lb`}</div>
            <div className="description">{candy.description}</div>
            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/candies`}>
                  EDIT ITEM
                </Link>
              </button>
              <button
                className="delete-button"
                  onClick={() => {
                    deleteCandy(candy._id)
                    setDeleted(true)
                    handleDelete()
                  }}
              >
                DELETE ITEM
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper">
        <ReviewStills />
        {/* post mvp - reviews in db render here */}
      </div>
    </Layout>
  );
};

export default CandyDetail;
