import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu'
import Login from './components/Login'
import Counter from './components/Counter'

function App() {

  const [matchingCount, setMatchingCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');

  return (
    <div className="App">
      {!userData && (
        <Login setUserData = {setUserData} matchingCount={matchingCount} mistakeCount={mistakeCount} setName={setName} />
      )};
      {userData && (
        <><Counter matchingCount={matchingCount} mistakeCount={mistakeCount}/>
        <Menu
          matchingCount={matchingCount}
          setMatchingCount={setMatchingCount}
          mistakeCount={mistakeCount}
          setMistakeCount={setMistakeCount}
          name={name}/></> 
      )};       
    </div>
  );
}

export default App;
