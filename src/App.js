import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import Login from './components/Login'
import Counter from './components/Counter'

function App() {

  const [matchingCount, setMatchingCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  return (
    <div className="App">
      <h1 className='title mt-3'>Memory Game</h1>
      {/* <Counter matchingCount={matchingCount} mistakeCount={mistakeCount}></Counter> */}
      <Login/>
      {/* <Menu
        matchingCount={matchingCount}
        setMatchingCount={setMatchingCount}
        mistakeCount={mistakeCount}
        setMistakeCount={setMistakeCount}
      /> */}
    </div>
  );
}

export default App;
