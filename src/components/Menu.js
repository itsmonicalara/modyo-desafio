import React from 'react'
import '../styles/Menu.css'
import Card from './Card'

function Menu({ matchingCount, setMatchingCount, mistakeCount, setMistakeCount, name }) {

  return (
    <div className='menu'>
        <div className='container bg-black p-4 bg-opacity-50 rounded'>
          <Card
            matchingCount={matchingCount}
            setMatchingCount={setMatchingCount}
            mistakeCount={mistakeCount}
            setMistakeCount={setMistakeCount}
            name={name}
          />            
      </div> 
    </div>
      
  )
}

export default Menu