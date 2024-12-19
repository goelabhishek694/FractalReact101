import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './components/Counter'
// import CounterClass from './components/CounterClass'
import SimpleForm from './components/SimpleForm'
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureInput from './components/TemperatureInput'
import Router from './components/Router'
import Lifecycle from './components/Lifecycle'
import UseEffectvariations from './components/UseEffectvariations'
import UseRef from './components/UseRef'

function App() {
  //state updation will happen only where the state is defined 
  const [temp,setTemp] = useState('');
  const handleTempChange = (newTemp) => {
    setTemp(newTemp);
  }
  return (
    <>
    {/* <Counter></Counter> */}
    {/* <CounterClass></CounterClass> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <TemperatureInput temp = {temp} handleTempChange = {handleTempChange}></TemperatureInput>
    <TemperatureDisplay temp = {temp}></TemperatureDisplay> */}
    {/* <Router></Router> */}
    {/* <Lifecycle/> */}
    {/* <UseEffectvariations/> */}
    <UseRef/>
    </>
  )
}

export default App
