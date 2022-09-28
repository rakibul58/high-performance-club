import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { name, img, details, age, time } = props.exercise;
  return (
    <div className="exercise col">
      <div className="border pb-3 rounded-3">
        <div className="p-2">
          <img src={img} className="img-thumbnail rounded-4" alt="..." />
        </div>
        <div className="px-3 excercise-details">
          <h5 className="text-success fw-bold">{name}</h5>
          <p className="fw-semibold text-secondary">
            <small>{details.slice(0, 90)}...</small>
          </p>
          <p className="m-0">For Age : <span className="fw-semibold">{age}</span></p>
          <p>Time required : <span className="fw-semibold text-success">{time}s</span></p>
          <button className="btn btn-success w-100 py-2">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
