import React, { useState } from 'react'

function Counter() {
    // const arr = useState(10);
    // const initialVal = arr[0];
    // const func = arr[1];
    // console.log(arr);

    //whenever the state chnages , react component in reloaded/repainted
    const [count, setCount] = useState(1);
    
    const handleIncrement = () => {
        console.log("counter incremented");
        //check to see if cart quanity is exceeding the stock quantity
        setCount(count+1);
    }

    const handleDecrement = () => {
        console.log("counter decremented");
        if(count<=1) return 
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

export default Counter