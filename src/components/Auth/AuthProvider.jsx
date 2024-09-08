import React from'react';
import {AuthProvider} from '../AuthContext';
import Auth from './Auth.jsx';
import Workouts from '../WorkoutForm/WorkoutForm.jsx';

export default function App() {
    return(
        <AuthProvider>
            <MainApp/>
        </AuthProvider>
    );
}

function MainApp() {
    return(
        <div>
            <Auth />
            <Workouts/>
        </div>

    );}