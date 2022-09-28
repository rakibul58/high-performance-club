import { useEffect, useState } from 'react';
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
        <div className='container excercises'>
            <h2 className='text-success fw-semibold'><i className="fa-solid fa-dumbbell"></i> High-Performance-Club</h2>
            <h3 className='mt-5 mb-4'>Select today’s exercise</h3>
            <div className='row row-cols-3 gx-4 gy-3'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
            }
            </div>
            
        </div>
    );
};

export default Exercises;