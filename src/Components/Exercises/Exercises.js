import { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';

import './Exercises.css';

const Exercises = () => {
    const [exercises , setExercise] = useState([]);
    const [details , setDetails] = useState([]);
   
    useEffect(()=>{
        fetch('exercises.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[]);



    const handleAddDetails = (exercise) =>{
       
        const newDetails = [...details , exercise.time];
        setDetails(newDetails);
        
    }

    return (
        <div className='d-flex flex-column flex-lg-row'>
        <div className='container excercises'>
            <h2 className='text-success fw-semibold'><i className="fa-solid fa-dumbbell"></i> High-Performance-Club</h2>
            <h3 className='mt-5 mb-4'>Select today’s exercise</h3>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gx-4 gy-3'>
            {
                exercises.map(exercise => <Exercise 
                    key={exercise.id} 
                    exercise={exercise}
                    handleAddDetails={handleAddDetails}
                    >
                    </Exercise>)
            }
            </div>
            
        </div>
        <Details details={details}></Details>
        </div>
    );
};

export default Exercises;