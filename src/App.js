import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Redirect, BrowserRouter } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu'
import Login from './components/Login'
import Counter from './components/Counter'

function App() {

  const [matchingCount, setMatchingCount] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [userData, setUserData] = useState(null);

  if(!userData){
    return <Login setUserData = {setUserData} />;
  }

  return (
    <div className="App">
      <Counter matchingCount={matchingCount} mistakeCount={mistakeCount}/>
      <Menu
        matchingCount={matchingCount}
        setMatchingCount={setMatchingCount}
        mistakeCount={mistakeCount}
        setMistakeCount={setMistakeCount}
        />   
    </div>
  );
}

export default App;
