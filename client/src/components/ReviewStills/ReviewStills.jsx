import React from "react";
import "./ReviewStills.css";

const ReviewStills = () => {
  return (
    <div className="review-area">
      <h1>Reviews</h1>
      <div className="reviews-container">
        <div className="each-review-container">
          <div className="review-content">
            <div className="person-container">
              <img
                src={`${process.env.PUBLIC_URL}/images/ReviewPersonIcon.svg`}
                alt="review-icon"
                className="review-icon"
              />
              <div className="author-name">Holly Monroe</div>
            </div>
            <div className="rating-name-container">
              <div className="rating-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
              </div>
              <div className="candy-name">Happy Mix</div>
            </div>
            <p>
              I love this candy more than life itself. Yummy, yummy in my tummy.
            </p>
          </div>
        </div>
        <div className="each-review-container">
          <div className="review-content">
              <div className="person-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ReviewPersonIcon.svg`}
                  alt="review-icon"
                  className="review-icon"
                />
                <div className="author-name">Candy Warhol</div>
              </div>
              <div className="rating-name-container">
              <div className="rating-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
              </div>
              <div className="candy-name">Happy Mix</div>
            </div>
            <p>
              Brought this candy to a friend get together and everyone freaked
              out! So delicious. I can't recommend it enough.
            </p>
          </div>
        </div>
        <div className="each-review-container">
          <div className="review-content">
              <div className="person-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ReviewPersonIcon.svg`}
                  alt="review-icon"
                  className="review-icon"
                />
                <div className="author-name">Lady Gaga</div>
            </div>
            <div className="rating-name-container">
              <div className="rating-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/FullStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/EmptyStar.svg`}
                  alt="star-rating"
                  className="star-rating"
                />
              </div>
              <div className="candy-name">Happy Mix</div>
            </div>
            <p>
              Ate this candy right before a big performance and it gave me the
              burst of energy I needed. Thanks for the Grammy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStills;
