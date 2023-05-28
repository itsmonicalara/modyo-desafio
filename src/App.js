import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import Counter from './components/Counter'
import Card from './components/Card'

function App() {

  const [matchingCount, setMatchingCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  return (
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      <Counter matchingCount={matchingCount} mistakeCount={mistakeCount}></Counter>
      <Menu></Menu>
    </div>
  );
}

export default App;
