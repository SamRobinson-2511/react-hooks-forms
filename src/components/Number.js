import React, { useState } from "react";

function Number(){
    const [number, setNumber] = useState(0);

    function handleNumberChange(event){
        const newNumber = parseInt(event.target.value);
        if(newNumber >= 0 && newNumber <=5){
            setNumber(newNumber)
        }
    }
    return(
        <form>
            <input 
                type="number"
                value={number}
                onChange={handleNumberChange}
            />
        </form>
    )
}

export default Number;