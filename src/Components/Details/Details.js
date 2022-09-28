import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details px-4 mt-5 mt-md-0">
      <div>
        <div className="my-4 d-flex gap-2">
          <h1>
            <i className="fa-solid fa-user"></i>
          </h1>
          <div>
            <h5 className="m-0 text-success fw-bold">Rakibul Hasan</h5>
            <p className="m-0">
              <i className="fa-solid fa-location-dot"></i> Chittagong ,
              Bangladesh
            </p>
          </div>
        </div>
        <div className="description d-flex justify-content-around p-3 rounded-4">
          <div>
            <h5 className="m-0">
              65<small>kg</small>
            </h5>
            <h6 className="m-0">Weight</h6>
          </div>
          <div>
            <h5 className="m-0">6.5</h5>
            <h6 className="m-0">Height</h6>
          </div>
          <div>
            <h5 className="m-0">
              23<small>yrs</small>
            </h5>
            <h6 className="m-0">Age</h6>
          </div>
        </div>
        <h5 className="my-5 ms-1">Add A Break</h5>
        <div className="description d-flex justify-content-around p-3 rounded-4">
          <button className="rounded-circle p-2 btn btn-outline-success fw-bold">
            10s
          </button>
          <button className="rounded-circle p-2 btn btn-outline-success fw-bold">
            20s
          </button>
          <button className="rounded-circle p-2 btn btn-outline-success fw-bold">
            30s
          </button>
          <button className="rounded-circle p-2 btn btn-outline-success fw-bold">
            40s
          </button>
          <button className="rounded-circle p-2 btn btn-outline-success fw-bold">
            50s
          </button>
        </div>
        <h5 className="my-5 ms-1">Exercise Details</h5>
        <div className="description d-flex justify-content-between align-items-center p-3 rounded-4 mb-3">
          <h6>Exercise time</h6>
          <p>Seconds</p>
        </div>
        <div className="description d-flex justify-content-between align-items-center p-3 rounded-4 mb-5">
          <h6>Break time</h6>
          <p>Seconds</p>
        </div>
        <button className="btn btn-success w-100 py-3 fw-semibold">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Details;
