import React, { useState, useEffect }  from 'react'
import '../styles/Login.css'


const Login = ({ setUserData }) => {

    const [name, setName] = useState('');
      
    const handleNameChange = (e) => {
          setName(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the name is provided
        if (name.trim() !== '') {
          // Retrieve user data from localStorage
          const userData = JSON.parse(localStorage.getItem('userData')) || {};
          // Check if user data already exists for the entered name
          if (userData[name]) {
            // If user data exists, update the hit and error counts
            setUserData(userData[name]);
          } else {
            // If user data does not exist, initialize hit and error counts
            const newUser = { name, matchingCount: 0, mistakeCount: 0 };
            setUserData(newUser);
            userData[name] = newUser;
            // Save user data to localStorage
            localStorage.setItem('userData', JSON.stringify(userData));
          }
        }
      };

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        const currentUser = userData[name];
        if (currentUser) {
          setUserData(currentUser);
        }
    }, [name, setUserData]);

  return (
    <div className='Login'>
        <h1 className='title mt-3'>Memory Game</h1>
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                <label htmlFor="name-title" className="form-label">Enter your name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        
    </div>
  );
};

export default Login;