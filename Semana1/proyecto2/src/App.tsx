

import { useState } from 'react';
import './App.css'

const App = () => {
  const [num1, setNum1] = useState<string | null>(null);
  const [num2, setNum2] = useState<string | null>(null);
  const [ans, setAns] = useState<string | null>('0')
  const [operator, setOperator] = useState<string | null>(null);
 
  const handleNumber = (num: string | null) => {
    if (operator == null)
      setNum1(prev =>
        prev === null ? num : prev + num
      );  
    else
      setNum2(prev =>
        prev === null ? num : prev + num
      );  
    update(num1,num2,operator)
  };

  const update = (num1: string|null, num2: string|null, operator: string|null) => {
    if (num1 != null && operator != null && num2 != null)
      setAns(num1 + operator + num2 + '=')
    if (num1 != null && operator != null)
      setAns(num1 + operator)
    else (num1 != null)
      setAns(num1)
  }
  const handleOperator = (op: string) => {
    setOperator(op);
    update(num1,num2,operator)
  };
  const deleteNum = () => {
    setAns('0')
    setNum1('0')
    setNum2('0')
    setOperator(null)
  }
  const handleEqual = () => {
    if (num1 === null || operator === null || num2 === null) return;

    let result = 0;

    switch (operator) {
      case "+": result = Number(num1) + Number(num2); break;
      case "-": result = Number(num1) - Number(num2); break;
      case "*": result = Number(num1) * Number(num2); break;
      case "/": result = Number(num1) / Number(num2); break;
    }
    
    setAns(String(num1 + operator + num2 + ' = ' + String(result)));
    setNum1(null);
    setOperator('');
  };
  /**
    El css dentro de tsx es diferente
    gridColumn es tsc
    grid-column en css
  */
  return(
  <div>
    <h1>Increible Pagina</h1>
    <div className='result'>{ans}</div>
    <div className='container'>
      <div className='calc'>
        <div className='numbers'>
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button onClick={() => handleNumber(ans)}>ans</button>
          <button style={{gridColumn: 2}} onClick={() => handleNumber('0')}>0</button>
          <button onClick={() => deleteNum()}>C</button>

        </div>
        <div className='symbols'>
          <button onClick={() => handleOperator('+')}>+</button>
          <button onClick={() => handleOperator('-')}>-</button>
          <button onClick={() => handleOperator('*')}>*</button>
          <button onClick={() => handleOperator('/')}>/</button>
          <button onClick={() => handleEqual()}>=</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default App
