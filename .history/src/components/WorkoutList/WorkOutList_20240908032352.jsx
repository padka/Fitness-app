import React, { useState } from "react";
import './WorkoutList.css';

export default function WorkOutList({ workouts, setWorkouts }) {
  const [editIndex, setEditIndex] = useState(null); // Индекс редактируемого упражнения
  const [editedWorkout, setEditedWorkout] = useState({ exercise: '', reps: '', weight: '' }); // Состояние для редактируемого упражнения

  // Функция для удаления упражнения
  const removeWorkout = (index) => {
    const newWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(newWorkouts);
  };

  // Функция для начала редактирования
  const startEditing = (index) => {
    setEditIndex(index);
    setEditedWorkout(workouts[index]); // Загружаем данные текущего упражнения в форму редактирования
  };

  // Функция для завершения редактирования
  const saveEdit = () => {
    const updatedWorkouts = workouts.map((workout, index) => {
      if (index === editIndex) {
        return editedWorkout;
      }
      return workout;
    });
    setWorkouts(updatedWorkouts);
    setEditIndex(null); // Завершаем режим редактирования
  };

  // Обработка изменения данных упражнения
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedWorkout({ ...editedWorkout, [name]: value });
  };

  return (
    <>
      <h2>Список упражнений</h2>
      {workouts.length === 0 ? (
        <p>Нет добавленных упражнений</p>
      ) : (
        <ul>
          {workouts.map((workout, index) => (
            <li key={index} className="workout-item">
              {editIndex === index ? (
                // Если редактируем, показываем форму редактирования
                <div>
                  <input
                    type="text"
                    name="exercise"
                    value={editedWorkout.exercise}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="reps"
                    value={editedWorkout.reps}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="weight"
                    value={editedWorkout.weight}
                    onChange={handleChange}
                  />
                  <button onClick={saveEdit}>Сохранить</button>
                </div>
              ) : (
                <div>
                  <strong>{workout.exercise}</strong>: {workout.reps} повторений, {workout.weight} кг
                  <button onClick={() => startEditing(index)}>Редактировать</button>
                  <button onClick={() => removeWorkout(index)}>Удалить</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}