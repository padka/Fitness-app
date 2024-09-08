import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import WorkoutForm from './components/WorkoutForm/WorkoutForm';
import WorkoutList from './components/WorkoutList/WorkoutList';
import Timer from './components/Timer/Timer';
import Auth from './components/Auth/Auth';
import Navigation from './components/Nav/Navigation.jsx';
import { AuthProvider } from './components/Auth/AuthContext';
import './App.css';

// function Navigation() {
//     return (
//         <nav>
//             <ul className="nav-list">
//                 <li><Link to="/">Главная</Link></li>
//                 <li><Link to="/add">Добавить тренировку</Link></li>
//                 <li><Link to="/timer">Таймер</Link></li>
//                 <li><Link to="/auth">Авторизация</Link></li>
//             </ul>
//         </nav>
//     );
// }

function App() {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
    };

    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <h1>Фитнес приложение</h1>
                    <Navigation />
                    <AnimatePresence mode = "wait">
                    <Routes>
                        <Route path="/" element={<WorkoutList workouts={workouts} />} />
                        <Route path="/add" element={<WorkoutForm onAddWorkout={addWorkout} />} />
                        <Route path="/timer" element={<Timer />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </AnimatePresence>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;