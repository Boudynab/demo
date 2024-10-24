import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(0.0);
  const [calculationHistory, setCalculationHistory] = useState([]);
  const appendToExpression = (value) => {
    if (value === 'π') value = Math.PI.toString();
    if (value === 'e') value = Math.E.toString();
    setExpression(expression + value);
  };
  const clearEntry = () => {
    setExpression(expression.slice(0, -1));
  };
  const clearAll = () => {
    setExpression('');
    setResult(0);
  };
  const evaluateExp = () => {
    fetch('http://localhost:8080/eval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expression),
    })
      .then((response) => response.text())
      .then((data) => {
        let calcResult = data;
        if (calcResult === 'Infinity') calcResult = 'Cannot divide by zero';
        if (calcResult === 'NaN') calcResult = 'No square root for negative value';
        setResult(calcResult);
        setCalculationHistory([...calculationHistory, `${expression} = ${calcResult}`]);
        setExpression(calcResult);
      })
      .catch(() => {
        setResult('Error');
        setExpression('Error');
      });
  };
  return (
<div className="container">
  <div id="calculator">
    <div className="display">{expression || result}</div>
    <div className="buttons">
      <button onClick={() => appendToExpression('%')}>%</button>
      <button className="button1" onClick={clearEntry}>CE</button>
      <button className="button1" onClick={clearAll}>C</button>
      <button className="button1" onClick={clearEntry}>DEL</button>
      <button onClick={() => appendToExpression('^(2)')}>x²</button>
      <button onClick={() => appendToExpression('^(0.5)')}>√x</button>
      <button onClick={() => appendToExpression('^(-1)')}>x⁻¹</button>
      <button onClick={() => appendToExpression('/')} className="oprations">÷</button>
      <button onClick={() => appendToExpression('(')}>(</button>
      <button onClick={() => appendToExpression(')')}>)</button>
      <button onClick={() => appendToExpression('π')}>π</button>
      <button onClick={() => appendToExpression('e')}>e</button>
      <button onClick={() => appendToExpression('1')}>1</button>
      <button onClick={() => appendToExpression('2')}>2</button>
      <button onClick={() => appendToExpression('3')}>3</button>
      <button onClick={() => appendToExpression('+')} className="oprations">+</button>
      <button onClick={() => appendToExpression('4')}>4</button>
      <button onClick={() => appendToExpression('5')}>5</button>
      <button onClick={() => appendToExpression('6')}>6</button>
      <button onClick={() => appendToExpression('-')} className="oprations">-</button>
      <button onClick={() => appendToExpression('7')}>7</button>
      <button onClick={() => appendToExpression('8')}>8</button>
      <button onClick={() => appendToExpression('9')}>9</button>
      <button onClick={() => appendToExpression('*')} className="oprations">x</button>
      <button onClick={() => appendToExpression('0')}>0</button>
      <button onClick={() => appendToExpression('.')}>.</button>
      <button className="button2" onClick={evaluateExp}>=</button>
    </div>
  </div>
  <div className="hist">
    <h2>Calculation History</h2>
    <ul>
      {calculationHistory.map((calc, index) => (
        <li key={index}>{calc}</li>
      ))}
    </ul>
  </div>
</div>
  );
};
export default Calculator;
