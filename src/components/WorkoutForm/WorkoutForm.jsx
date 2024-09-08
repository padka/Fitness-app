import React, {useState, useContext}  from "react";
import {AuthContext} from "../Auth/AuthContext.jsx";
import './WorkoutForm.css'

export default function WorkoutForm({onAddWorkout}){
    // Достаем токен и функцию logout из контекста с правильным useContext
    const {token, logout} = useContext(AuthContext);
    const [exercise, setExercise] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState('');

    // Проверка на авторизацию
    if(!token){
        return <p>Вы не авторизованы</p>;
    }

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!exercise ||!reps || !weight ) {
            setError('Вы не заполнили все поля');
            return;
        }
        // Добавляем новое упражнение
        onAddWorkout({ exercise, reps, weight });
        // Очищаем поля формы
        setExercise('');
        setReps('');
        setWeight('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Упражнение:</label>
                <input
                    type="text"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Повторения:</label>
                <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required

                />
            </div>
            <div>
                <label>Вес (кг):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}

                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Добавить упражнение</button>
            <p>Ваши тренировки:</p>
            <button type="button" onClick={logout}>Выйти</button>
        </form>
    );
}
