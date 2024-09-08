import React from "react";

export default function WorkOutList({workouts}){
    return(
        <div>
            <h2>Список упражнений</h2>
            {workouts.length === 0 ?(
                <p>Нет добавленный упражнений </p>
            ) : (
                <ul>
                    {workouts.map((workouts, index) => (
                        <li key={index}>
                            <strong>{workouts.exercise}</strong> :{ workouts.reps} повторений , {workouts.weight} кг
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}