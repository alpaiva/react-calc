import React from "react";
import './Display.css'

const Display = props => {


    return (

        <div>

            <input className='inputNumber' readOnly value={props.value} />
        </div>
    )
}

export default Display
