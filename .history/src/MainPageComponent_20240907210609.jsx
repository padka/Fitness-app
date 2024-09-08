import React from "react"
import './App.css'


 function Greeting() {
  
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
  const [visible, setVisible] = useState(false);
  
     
  //Функуция для создания текущего сообщения 
    const  changeMessage = ()=>{
      setCounter((prevCounter) => prevCounter + 1 );
      setMessageIndex((prevIndex) =>(prevIndex+1 ) % message.length);
      setVisible(true)
  
      
    }
   let specialMessage = ''
   if (counter>=20 ){
    specialMessage = " Ты достиг 20 нажатий";
   }else if (counter>=10){
    specialMessage = 'Ты достиг 10  нажатий'
   }
  
   
    
    //функция для сброса всех значений
      const reset= ()=>{
        setCounter(0)
        setMessageIndex(0)
        setVisible(false)
      }
       
      const animationClass = visible ? 'fade-in' : 'fade-out'
  
    // что возвращает функция на экран браузера
    return (
  
      <div className='container'>
        <h1> {message[messageIndex]}!</h1>
        <p>Кнопка нажата: {counter} раз!</p>
  
        {specialMessage &&(
        <p className={`special-message ${animationClass}`}>{specialMessage}</p>
        )}
        
        <button onClick ={changeMessage} className='button'> узнай больше </button>
        <button onClick ={reset} className='button' > сброс </button>
       
      </div>
    );
  }
  export default Greeting;