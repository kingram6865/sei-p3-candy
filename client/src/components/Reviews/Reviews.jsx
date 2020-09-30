import React, {useState} from "react";

const Reviews = (props) => {
//   const [isCreated, setCreated] = useState(false);
//   const review = ([review, setReview] = useState({
//     productName: "",
//     author: "",
//     rating: "",
//     comment: "",
//   }));

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(candy);
//     const created = await createReview(review);
//     setCreated({ created });
//     console.log(isCreated);
//   };

//   if (isCreated) {
//     return <Redirect to={`/candies/:id`} />;
//   }

//   return (
//     <div className="reviews-container">
//       <h3>Reviews</h3>
//       <form className="create-form" onSubmit={handleSubmit}>
//         <input className="profile-icon">icon.png</input>
//         <p className="review-name">{review.author}</p>
//         <rating className="fivestar-icon">{review.rating}</rating>
//         <p>{review.comment}</p>
//         <button className="review-button" onClick={(handleSubmit) => setReview}>Submit</button>
//       </form>
//     </div>
//   )
// }
  return (
    <div className="reviews-container">
      <h3>Reviews</h3>
      <div className="review-card-info">
        <input className="profile-icon">icon</input>
        <p> className="review-name">Holly Monroe</p>
        <rating className="fivestar-icon">fivecon</rating>
        <p>
          I love this candy more than life itself. Yummy, yummy in my tummy.
        </p>
      </div>
      <div className="review-card-info">
        <input className="profile-icon">icon</input>
        <p className="review-name">Candy Warhol</p>
        <rating className="fivestar-icon">fivecon</rating>
        <p>
          Brought this candy to a friend get together and everyone freaked out!
          So delicious. I can’t recommend it enough!
        </p>
      </div>
      <div className="review-card-info">
        <input className="profile-icon">icon</input>
        <p className="review-name">Lady Gaga</p>
        <rating className="fivestar-icon">fivecon</rating>
        <p>
          Ate this candy right before a big performance and it gave me the burst
          of energy I needed. Thanks for the Grammy!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
