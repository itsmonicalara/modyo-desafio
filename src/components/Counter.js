import React from 'react'
import '../styles/Counter.css'

function Counter({ matchingCount, mistakeCount }) {
  return (
    <div className='container'>
        <h2 className='hit-text p-3'>Hits: {matchingCount}</h2>
        <h2 className='error-text p-3'>Errors: {mistakeCount}</h2>
    </div>
  )
}

export default Counter