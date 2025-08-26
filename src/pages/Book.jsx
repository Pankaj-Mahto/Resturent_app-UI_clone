import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="page-container">
      <div className="form-box">
        <h1 className="form-title">Book a Table</h1>

        <form className="form-content">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="number" placeholder="Guests" min="1" required />
          <input type="date" required />
          <input type="time" required />

          <button type="submit" className="custom__button">
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
