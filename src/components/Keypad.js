import React from 'react';

function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
    }
  return (
    <div>
    <input type="password" 
    name="keypad" 
    placeholder="Pls Enter Password" 
    onChange={handleChange} />
    </div>
  )
}

export default Keypad;


//Code Keypad Component Here