import React from 'react'
import {useSelector} from "react-redux"
function ReduxComponent() {
    const {count} = useSelector((store)=>{return store.counterState})
    const handleIncrement = () => {
        console.log("increment will happen");
        
    }

    const handleDecrement = () => {
        console.log("decrement will happen");
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

export default ReduxComponent