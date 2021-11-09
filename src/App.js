import { useState } from 'react';
import './App.css';

const correctNumber = 1234;

function App() {
  const [calc, setCalc] = useState('');
  const [display, setDisplay] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [numberOfTry, setNumberOfTry] = useState(1);
  const [disableClear, setDisableClear] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const createDigits = () => {
    const digits = []

  
    for (let i = 1; i < 10; i++){
      digits.push(
        <button key={i} disabled={disabled} onClick={() => updateDigits(i.toString())}>{i}</button>
      )
    }
    return digits;
  }



  const updateDigits = value => {
    
    if(calc.length == 3){
      console.log(calc.length)
      setDisableSubmit(false);
      setDisabled(true)
      
    }
    setCalc(calc + value)
    setDisplay(display + '*')
  }



  const checkNumbers = () => {
    

    if(correctNumber == calc){
      setDisplay('OK')
      setNumberOfTry(1)
      
    }else {
      setDisabled(true);
      setDisplay('ERROR');
      setNumberOfTry(numberOfTry + 1);
      
     
    }
    if(numberOfTry == 3 && correctNumber != calc){
      setDisabled(true)
      setDisableClear(true);
      setDisplay("LOCKED")
      setTimeout(() => setDisabled(false), 30000);
      setTimeout(() => setDisableClear(false), 30000);
      setTimeout(() => setDisplay(''), 30000);
      setCalc('');
      return  setNumberOfTry(1);
    }
  

  }

  const clear = () => {
    setDisplay('');
    setCalc('');
    setDisabled(false);
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
            <button disabled={disableClear} onClick={clear}>Clear</button>
            <button disabled={disabled} onClick={() => updateDigits('0') }>0</button>
            <button disabled={disableSubmit} onClick={checkNumbers}>Enter</button>
          </div>
      </div>
    </div>
  );
}

export default App;
