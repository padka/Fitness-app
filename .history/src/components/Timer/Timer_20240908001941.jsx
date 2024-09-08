import React, {useState, useEffect} from "react";


function Timer(){
    const[seconds, setSeconds] = useState(0);
    const[isActive, setIsActive] = useState(false);
    const[message, setMessage] = useEffect(' ')


    useEffect(() =>{
        if (seconds >= 300){
            setMessage('Прошло 5 минут, сделай перерыв 1 минуту');
        } else{
            setMessage('');
        }
    }, [seconds]);

    useEffect(() =>{
        let interval = null;
        // Если таймер активен, запускаем интервал 
        if(isActive){
            interval = setInterval(() =>{
                setSeconds((prevseconds) => prevseconds + 1);
            }, 1000);
            }else if (!isActive && seconds !==0){
                // Если таймер неактивен и счетчик равен нулю, очищаем интервал 
                clearInterval(interval);
            }
            // Возвращаем функцию очистки для сброса интервала при изменении состояний
            return () => clearInterval(interval);
        }, [isActive,seconds]); // Хук будет перезапускаться при изменении этих зависимостей 
        const reset = () =>{
            setSeconds(0);
            setIsActive(false);
        };
        const formatTime = (totalSeconds) =>{
            const minutes = Math.floor(totalSeconds / 60); // Количество минут 
            const seconds = totalSeconds % 60; // Оставшиеся секунды
            return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;  // Форматируем время //Форматируем время 
        }
        return(
            <div>
                <h3>Таймер:{formatTime(seconds)} секунд </h3>
                <button onClick={()=> setIsActive(!isActive)}>
                    {!isActive ? "Пауза" : " Старт"}
                </button>
                <button onClick={reset}> Сброс </button>
                {message} && <p>{message}</p>
            </div>
        );
    }
export default Timer;
