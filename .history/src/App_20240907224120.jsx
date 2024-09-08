import WorkOutForm from "./components/WorkoutForm/WorkoutForm";
import WorkOutList from "./components/WorkoutList/WorkOutList";

import React, {useState} from "react";


function App() {
 const [workouts, setWorkouts] = useState([ ]);
    const addWorkout = (workouts) =>{
      setWorkouts((prevWorkouts) => [...prevWorkouts, workouts]);
    };


  return (
<div className='container'>
  <h1>Фитнес приложение </h1>
  <WorkOutForm onAddWorkout = {addWorkout}/>
  <WorkOutList workouts={workouts}/>
</div>
  );
}


export default App;
