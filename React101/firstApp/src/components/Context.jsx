import React, { useState, createContext, useContext } from 'react'
const ContextWrapper = createContext();
let data ={
    msg: "Going to Goa for a week",
    sender: "Manish"
}
function Context() {
    console.log("Context is rendered");
    const [count,setCount] = useState(100);
    const handleCount = (newCount) => {
        setCount(newCount);
    }
    data = {...data, count,handleCount};
  return (
    <ContextWrapper.Provider value={data}>
    <Grandparent></Grandparent>
    {/* <Grandparent count={count} handleCount={handleCount}></Grandparent> */}
    </ContextWrapper.Provider>
  )
}

// function Grandparent({count,handleCount}){
function Grandparent(){
    console.log("Grandparent is rendered");
    
    return <>
    <h3>Grandparent</h3>
    <div>⬇️</div>
    {/* <Parent count={count} handleCount={handleCount}></Parent> */}
    <Parent></Parent>
    </>
}

// function Parent({count,handleCount}){
function Parent(){
    console.log("Parent is rendered");
    return <>
    <h3>Parent</h3>
    <div>⬇️</div>
    {/* <Child count={count} handleCount={handleCount}></Child> */}
    <Child></Child>
    </>
}

// function Child({count,handleCount}){
function Child(){
    console.log("Child is rendered");
    const {msg,sender,count,handleCount} = useContext(ContextWrapper);
    return <>
    <h3>Child</h3>
    <div>⬇️</div>
    <button onClick={()=>handleCount(count+1)}>+</button>
    <p>{count}</p>
    <button>-</button>
    <p>{msg}</p>
    <p>msg from {sender}</p>
    </>
}



export default Context