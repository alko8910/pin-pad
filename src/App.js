import { useState, useEffect } from 'react';
import './App.css';

const correctNumber = 1234;

function App() {
  const [calc, setCalc] = useState('')
  const [display, setDisplay] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [numberOfTry, setNumberOfTry] = useState(1)

useEffect (() => {
  if(numberOfTry % 3){
  const timer = setTimeout(() => setDisabled(true), 3000)
  return clearTimeout(timer);
}})

console.log(calc)
/*
const freeze = () => {
  if(numberOfTry == 3){
    setDisabled(!disabled);
  }
}*/
/*
useEffect(() => {
  if(numberOfTry == 3){
    setTimeout(()=> {
      setDisabled(!disabled);
    }), 3000;
    numberOfTry=0;
  }})
*/


  const updateDigits = value => {
    setCalc(calc + value)
    setDisplay(display + '*')
  }

  const createDigits = () => {
    const digits = []

  
    for (let i = 1; i < 10; i++){
      digits.push(
        <button key={i} disabled={disabled} onClick={() => updateDigits(i.toString())}>{i}</button>
      )
    }
    return digits;
  }

  const checkNumbers = () => {
    

    if(correctNumber == calc){
      setDisplay('OK')
      setNumberOfTry(1)
      
    }else {
      setDisplay('ERROR')
      setNumberOfTry(numberOfTry + 1)
      console.log(numberOfTry)
     
    }
    
  }

  const clear = () => {
    setDisplay('');
    setCalc('');
  }

  return (
    <div className="App">
      <div className='pin-pad'>
          <div className='display'>
            <span>{display}</span>
          </div>
          <div className='numbers'>
          { createDigits() }
          </div>
          <div className='options'>
            <button onClick={clear}>Clear</button>
            <button onClick={() => updateDigits('0')}>0</button>
            <button onClick={checkNumbers}>Enter</button>
          </div>
      </div>
    </div>
  );
}

export default App;
