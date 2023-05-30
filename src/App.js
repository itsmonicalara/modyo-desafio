import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Login from './components/Login'

function App() {

  return (
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      {/* <Login/> */}
      <Menu/>
    </div>
  );
}

export default App;
