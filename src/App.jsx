import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkOutForm from "./components/WorkoutForm/WorkoutForm";
import WorkOutList from "./components/WorkoutList/WorkOutList";
import Timer from './components/Timer/Timer';
import Auth from './components/Auth/Auth';
import { AuthProvider } from './components/Auth/AuthContext';
import './App.css';

function App() {
    const [workouts, setWorkouts] = useState([]);
    const addWorkout = (workout) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
    };

    return (
        <div className="container">
            <h1>Фитнес приложение</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Auth onLogin={(token) => console.log(token)} />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/add-workout" element={<WorkOutForm onAddWorkout={addWorkout} />} />
                    <Route path="/workouts" element={<WorkOutList workouts={workouts} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;