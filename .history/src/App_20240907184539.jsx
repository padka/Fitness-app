import React from 'react';

function Greeting() {
  const userName = 'Михаил';
  
  return (
    <div>
      <h1>Привет, {userName}!</h1>
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
