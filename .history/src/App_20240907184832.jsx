import React from 'react';



function Greeting() {
  const userName = 'Михаил';
  const Motivatemessage = 'Ты все сможешь'

  
  return (
    <div>
      <h1>Привет, {userName}, {Motivatemessage}!</h1>
      <p>Добро пожаловать в твоё фитнес-приложение.</p>
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
