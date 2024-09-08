import React, { useState } from 'react';
import './App.css';
import Greeting from './component/MainPageComponent';


// основной компонент, где мы отображаем структуру страницы. 
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

export default App;
