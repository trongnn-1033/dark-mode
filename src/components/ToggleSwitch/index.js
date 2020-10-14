import React from 'react'
import ToggleSwitch from "./ToggleSwitch";

function index(props) {
    return (
        <ToggleSwitch htmlFor="dark-mode" >
            <input id="dark-mode" type="checkbox"  /> 
            <span></span>
        </ToggleSwitch>
    )
}

export default index
