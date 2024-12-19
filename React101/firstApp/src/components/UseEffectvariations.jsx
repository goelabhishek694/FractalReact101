import React, { useState, useEffect } from 'react';

function UseEffectvariations() {
    // console.log("constructor is called");
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Hello");

  //component did mount -> empty dependency array -> called only once 
  useEffect(() => {
    console.log("i am useEffect 1");
    console.log("i am called only once.");
  },[])

  //component did update -> w/0 dependency array  
  useEffect(() => {
    console.log("i am useEffect 2");
    console.log("i am called everytime. first render, subsequent re-renders");
  })

  //useEffect to be called when a change happens in a particular state. 
  useEffect(() => {
    console.log("i am useEffect 3");
    console.log("i am called only once, and when count state is changed");
    //make api call only when count state is chnsged , and not when other states are chnaged . 
  },[count])

  useEffect(() => {
    console.log("i am useEffect 3");
    console.log("i am called only once. in msg");
  },[msg])

  //fourth variation -> with dependency array +cleanup
  useEffect(() => {
    //called when comp is rendered for the first time , and then called only when the state present in dependency array is chnaged , plus cleanup
    // cleanup function called when count state is chnaged and then only the setInterval function is setup for the next state chnage 
    console.log("i am useEffect 4");
    let id  = setInterval(()=>{
      console.log("hello",id);
    },2000);

    //cleanup
    return () => {
      clearInterval(id);
      console.log("cleanup before useEffect 4 is called");
    }
  },[count])

  //fifth variations  -> with empty dependency array +cleanup
  useEffect(()=> {
    console.log(" i am useEffect 5");
    // let id  = setInterval(()=>{
    //   console.log("hello",id);
    // },2000);
    //just before next UE is called, cleanup function is called first. this cleanup will be called if component is unmounted. 
    return () => {
      // clearInterval(id);
      console.log("cleanup before component is unmounted");
    }
  },[])


  useEffect(()=> {
    console.log(" i am useEffect 6");
    //just before next UE is called, cleanup function is called first. this cleanup will be called everytime a state is changed. 
    return () => {
      console.log("cleanup because a state is changed");
    }
  })
  console.log("render is called");
  
  return (
    <div>
      <p>You clicked {count} times</p> 
      <button onClick={() => setCount(count + 1)}>
      Change count
      </button>
      <button onClick={() => setMsg("Bye")}>
        Change msg
      </button>
      <p>{msg}</p>
    </div>
  );
}

export default UseEffectvariations