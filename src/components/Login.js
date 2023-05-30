import React from 'react'

function Login() {
  return (
    <div className='Login'>
        <h1>Concentration Card Game</h1>
        <h2>Enter your name</h2>
        <div className='container'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
            </div>
        </div>
        
    </div>
  )
}

export default Login