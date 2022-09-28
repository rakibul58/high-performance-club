import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {img} = props.exercise;
    return (
        <div className='exercise col'>
            <img src={img} className="img-thumbnail" alt="..."/>
        </div>
    );
};

export default Exercise;