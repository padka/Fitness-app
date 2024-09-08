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
   
//Функуция для создания текущего сообщения 
  const ChangeMessage = ()=>{
    setMessageIndex((prevIndex) =>(prevIndex+1 ) % message.length);
  }

  // что возвращает функция на экран браузера
  return (
    <div>
      <h1>Привет, {userName}, {massage[messageIndex]}!</h1>
      <button onClick ={ChangeMessage}> узнай больше </button>
     
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
