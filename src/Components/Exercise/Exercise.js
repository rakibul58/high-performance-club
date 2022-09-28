import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { name, img, details, age, time } = props.exercise;
  return (
    <div className="exercise col">
      <div className="border pb-3 rounded-3">
        <div className="p-2">
          <img src={img} className="img-thumbnail" alt="..." />
        </div>
        <div className="px-3 excercise-details">
          <h5>{name}</h5>
          <p>
            <small>{details.slice(0, 90)}...</small>
          </p>
          <p>For Age : {age}</p>
          <p>Time required : {time}s</p>
          <button className="btn btn-success w-100">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
