import React, { useState } from 'react';



function Greeting() {
  const userName = 'Михаил';
  const [motivateMessage, setMotivateMessage] = useState('ты все сможешь')

  const ChangeMessage = ()=>{
    setMotivateMessage('Вперед, к новым достижениям')
  }

  
  return (
    <div>
      <h1>Привет, {userName}, {motivateMessage}!</h1>
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
