import React,{useState} from "react";

export default function WorkoutForm({onAddWorkout}){
    const [exercise, setExercise] = useState(' ');
    const [reps, setReps] = useState(' ');
    const [weight, setWeight] = useState(' ');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //Добавляем новое упражнение 
        onAddWorkout({exercise, reps, weight })
        //очищаем поля формы 
        setExercise(' ');
        setReps(' ');
        setWeight(' ');
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
              <button type="submit">Добавить упражнение</button>
            </form>
          );
        }
    }

    
