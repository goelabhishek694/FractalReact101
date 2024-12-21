import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StopWatch/>
    </>
  )
}

export default App
