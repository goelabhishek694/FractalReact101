import React, { useState, useRef } from 'react'

function StopWatch() {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    // let [timerId,setTimerId] = useState(null);
    const timerRef = useRef(null);

    const handleStart = () => {
      //if timer is started, do not start the timer again 
      if(!isRunning){
        setIsRunning(true);
        timerRef.current = setInterval(()=>{
          setTime(prevTime => prevTime+1);
        },1000);
        // setTimerId(timerId); // re-render would happen 
        // console.log(timerId);
        // console.log(timerRef.current);
        
        
      }
    }

    //format time 4567s -> hh:mm:ss
  const formatTime =(time) => {
    let hr = parseInt(time/3600);
    time = time % 3600; 
    let min = parseInt(time/60);
    let sec = time%60;

    hr = hr <= 9 ? `0${hr}`:hr
    min = min <= 9 ? `0${min}`:min
    sec = sec <= 9 ? `0${sec}`:sec

    return `${hr}:${min}:${sec}`
  }

    const handleStop = () => {
      //stop the setInterval
      // console.log(timerId);
      // console.log(timerRef.current);
      clearInterval(timerRef.current);
      
      //set is running to true
      setIsRunning(false)
    }

    const handleReset = () => {
      clearInterval(timerRef.current); 
      setIsRunning(false); 
      setTime(0);
    }

  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>{formatTime(time)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch