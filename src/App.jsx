import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {AuthProvider} from './components/Auth/AuthContext.jsx'


// Routes api
import HomeScreen from './components/Screens/HomeScreen.jsx'
import WorkoutScreen from './components/Screens/WorkoutScreen.jsx'
import TimerScreen from './components/Screens/TimerScreen.jsx'
import Navigation from './components/Nav/Navigation.jsx'


function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <h1>Фитнес приложение</h1>
                    <Navigation />
                    <AnimatePresence mode = "wait">
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/Timer" element={<TimerScreen/>} />
                            <Route path="/workout" element={<WorkoutScreen />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Router>
        </AuthProvider>
    );


}
export default App;