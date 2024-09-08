import React, {useState, useEffect} from "react";


function Timer(){
    const[seconds, setSeconds] = useState(0);
    const[isActive, setIsActive] = useState(false);

    useEffect(() =>{
        let interval = null;
        if(isActive){
            interval = setInterval(() =>{
                setSeconds((seconds) => seconds + 1);
            }, 1000);
            }else if (!isActive && seconds !==0){
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [isActive,seconds]);
        const reset = () =>{
            setSeconds(0);
            setIsActive(false);
        };
        return(
            <div>
                <h3>Таймер:{seconds} секунд </h3>
                <button onClick={()=> setIsActive(!isActive)}>
                    {!isActive ? "Пауза" : " Старт"}
                </button>
                <button onClick={reset}> Сброс </button>
            </div>
        );
    }
export default Timer;
