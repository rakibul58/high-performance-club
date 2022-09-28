import { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises , setExercise] = useState([]);
    useEffect(()=>{
        fetch('exercises.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])
    return (
        <div className='d-flex flex-column flex-md-row'>
        <div className='container excercises'>
            <h2 className='text-success fw-semibold'><i className="fa-solid fa-dumbbell"></i> High-Performance-Club</h2>
            <h3 className='mt-5 mb-4'>Select today’s exercise</h3>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4 gy-3'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
            }
            </div>
            
        </div>
        <Details></Details>
        </div>
    );
};

export default Exercises;