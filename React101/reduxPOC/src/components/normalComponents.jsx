import React, { useState } from 'react'

function normalComponents() {
    const [count, setCount] = useState(1);
    
    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }
  return (
    <>
        <div>Cart</div>
        <div style={{"display":"flex", "gap":"1rem"}}>
            <button onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>

    </>
  )
}

export default normalComponents