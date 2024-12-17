import React, { useState } from 'react'

function TemperatureDisplay({temp}) {
    const farenheit = (temp * (9/5)) + 32 ;
  return (
    <div>
        <h1>TemperatureDisplay</h1>
        <p>Temperature in Celsius: {temp} °C</p>
        <p>Temperature in Farenheit: {farenheit} °F</p>
    </div>
  )
}

export default TemperatureDisplay