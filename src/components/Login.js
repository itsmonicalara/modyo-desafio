import React, { useState, useEffect }  from 'react'
import '../styles/Login.css'

const Login = ({ setUserData, matchingCount, mistakeCount, setName }) => {

    const [nameInput, setNameInput] = useState('');
      
    const handleNameChange = (e) => {
        setNameInput(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (nameInput.trim() !== '') {
          setName(nameInput);
          const userData = JSON.parse(localStorage.getItem('userData')) || {};
          if (userData[nameInput]) {
            const currentUserData = userData[nameInput];
            currentUserData.matchingCount += matchingCount;
            currentUserData.mistakeCount += mistakeCount;
            setUserData(currentUserData);
          } else {
            const newUser = { 
                name: nameInput, 
                matchingCount : matchingCount, 
                mistakeCount : mistakeCount,
            };
            setUserData(newUser);
            userData[nameInput] = newUser;
          }
          localStorage.setItem('userData', JSON.stringify(userData));
        }
      };

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        const currentUser = userData[nameInput];
        if (currentUser) {
          setUserData(currentUser);
        }
    }, [nameInput, setUserData]);

  return (
    <div className='Login'>
        <h1 className='title mt-3'>Memory Game</h1>
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                <label htmlFor="name-title" className="form-label">Enter your name</label>
                <input type="text" className="form-control" id="name" value={nameInput} onChange={handleNameChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        
    </div>
  );
};

export default Login;