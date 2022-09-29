import React, { useState } from "react";
import { addToDb, getFromDB } from "../Utilities/FakeDB";
import "./Details.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = ({ details }) => {
  let time = 0;
  const [breaks, setBreak] = useState();

  const handleClick = (value) => {
    addToDb(value);
    const newBreak = getFromDB();
    setBreak(newBreak);
  };
  time = details.reduce((total, item) => total + item, 0);

  const handleToast = () => {
    toast.success("Congratulation on Completing Your Activity!");
  };

  return (
    <div className="details px-4">
      <div>
        <div className="my-4 d-flex align-items-center gap-2">
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
        <div className="description d-flex justify-content-around p-3 rounded-4 gap-2">
          <button
            onClick={() => handleClick(10)}
            className="rounded-circle p-2 btn btn-outline-success fw-bold"
          >
            10s
          </button>
          <button
            onClick={() => handleClick(20)}
            className="rounded-circle p-2 btn btn-outline-success fw-bold"
          >
            20s
          </button>
          <button
            onClick={() => handleClick(30)}
            className="rounded-circle p-2 btn btn-outline-success fw-bold"
          >
            30s
          </button>
          <button
            onClick={() => handleClick(40)}
            className="rounded-circle p-2 btn btn-outline-success fw-bold"
          >
            40s
          </button>
          <button
            onClick={() => handleClick(50)}
            className="rounded-circle p-2 btn btn-outline-success fw-bold"
          >
            50s
          </button>
        </div>
        <h5 className="my-5 ms-1">Exercise Details</h5>
        <div className="description d-flex justify-content-between align-items-center p-3 rounded-4 mb-3">
          <h6>Exercise time</h6>
          <p>{time} Seconds</p>
        </div>
        <div className="description d-flex justify-content-between align-items-center p-3 rounded-4 mb-5">
          <h6>Break time</h6>
          <p>{breaks ? breaks : getFromDB()} Seconds</p>
        </div>
        <button
          onClick={handleToast}
          className="btn btn-success w-100 py-3 fw-semibold"
        >
          Activity Completed
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Details;
