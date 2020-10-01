import React from "react";
import "./ReviewForm.css";

const ReviewForm = ({ author, rating, description, onChange, onSubmit }) => {
  return (
    <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
      <input
        className="review-input-author"
        placeholder="Name"
        value={author}
        name="author"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <input
        className="review-input-rating"
        placeholder="Rating"
        value={rating}
        name="rating"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <input
        className="review-input-description"
        placeholder="Description"
        value={description}
        name="description"
        required
        autoFocus
        onChange={(e) => onChange(e)}
      />
      <textarea
        className="review-description-text"
        rows={5}
        placeholder="Tell Mama what you're thinking..."
        value={description}
        name="description"
        required
        onChange={(e) => onChange(e)}
      />
      <button type='submit' className="review-submit-button">Submit</button>
    </form>
  );
};

export default ReviewForm
