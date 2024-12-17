import React, { useState } from 'react'

function TemperatureInput({temp, handleTempChange}) {
    
  return (
    <div>
        <label>Enter Temperature 
            <input type="text" value = {temp} onChange={(e) => handleTempChange(e.target.value)}/>
        </label>
    </div>
  )
}

export default TemperatureInput