import React, { useState } from 'react';



function Greeting() {
  // имя пользователя 
  const userName = 'MISHA'
  // массив мотивационных сообщений 
    const message =[
      'Ты всё сможешь!',
    'Вперёд, к новым достижениям!',
    'Никогда не сдавайся!',
    'Достигай новых высот!',
    ];
    
   
    //Состояние для отслеживания текущего сообщения. 
const [messageIndex, setMessageIndex] = useState( 0 );
const [counter, setCounter] = useState(0);

   
//Функуция для создания текущего сообщения 
  const  changeMessage = ()=>{
    setCounter((prevCounter) => prevCounter + 1 );
    setMessageIndex((prevIndex) =>(prevIndex+1 ) % message.length);
    
  }
 let specialMessage = ''
 if (counter>=20 ){
  specialMessage = " Ты достиг 10 нажатий";
 }else if (counter>=10){
  specialMessage2 = 'Ты достиг 20  нажатий'
 }

  const specialMessage = counter >= 10 ?  " Ты достиг 10 нажатий" : '';  
  const specialMessage2 = counter >= 20 ?  " Ты достиг 20  нажатий" : '';  
  
  //функция для сброса всех значений
    const reset= ()=>{
      setCounter(0)
      setMessageIndex(0)
    }
     

    

  

  // что возвращает функция на экран браузера
  return (
    <div>
      <h1>Привет, {userName}, {message[messageIndex]}!</h1>
      <p>Кнопка нажата: {counter} раз!</p>
      {specialMessage && <p>{specialMessage}</p>}
      {specialMessage2 && <p>{specialMessage2}</p>}
      <button onClick ={changeMessage}> узнай больше </button>
      <button onClick ={reset}> сброс </button>

     
    </div>
  );
}

// основной компонент, где мы отображаем структуру страницы. 
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
