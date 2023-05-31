import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div className='Login'>
        <div className='container'>
            <h3 className='name-title'>Enter your name</h3>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                <button className="btn btn-secondary" type="button" id="button-addon2">Send</button>
            </div>
        </div>
        
    </div>
  )
}

export default Login