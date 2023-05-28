import React from 'react'

function Counter(props) {

    const { matchingCount, mistakeCount } = props;

  return (
    <div>
        <h2>Hits: {matchingCount}</h2>
        <h2>Errors: {mistakeCount}</h2>
    </div>
  )
}

export default Counter