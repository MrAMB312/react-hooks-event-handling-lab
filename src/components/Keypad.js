// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleChange(event) {
        console.log("Entering password...")
    };
    
    return (
        <form>
            <input type="password" onChange={handleChange} />
        </form>
    )
}

export default Keypad;