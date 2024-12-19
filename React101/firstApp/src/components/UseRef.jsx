import React, { useRef, useState } from "react";

// function UseRef() {
//   const inputRef = useRef(null);
//   console.log(inputRef);
  
//   const focusInput = () => {    
//     console.log(inputRef);
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h4>useRef DOM example</h4>
//       <input
//         type="text"
//         ref={inputRef}
//         placeholder="Click the button to focus"
//       />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

function UseRef() {
    const renderCount = useRef(0);
    console.log(renderCount);
    const [count,setCount] = useState(0);
    const [msg,setMsg] = useState("Hi");
    var name  = "Scaler";

    const increment = () => {
        name = "Interviewbit";
        setCount(count+1);
    }
    renderCount.current++;



  
    return (
      <div>
        <h4>useRef variable example</h4>
        <h4>Counter : {count}</h4>
        <button onClick={increment} >Increment</button>
        <p>Component has rendered {renderCount.current} times</p>
        <p>{name}</p>
      </div>
    );
  }

//   renderCount.current persists across renders but does not cause re-render when it is updated. 
// unlike useState useRef's value desnt trigger a component re-render
export default UseRef;
