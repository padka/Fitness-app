import React, { useState } from 'react';



function Greeting() {
  const userName = 'MISHA'
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

  
  return (
    <div>
      <h1>Привет, {userName}, {massage[messageIndex]}!</h1>
      <button onClick ={ChangeMessage}> узнай больше </button>
     
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
