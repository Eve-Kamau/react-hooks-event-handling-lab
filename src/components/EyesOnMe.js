import React from 'react';

function EyesOnMe() {
    function handleClick(event) {
    console.log("Good!");
    }

    function handleBlur(event) {
    console.log("Hey! Eyes on me!");
    }

   return (
    <div>
    <button 
    onFocus={handleClick} 
    onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;

// Code EyesOnMe Component Here
