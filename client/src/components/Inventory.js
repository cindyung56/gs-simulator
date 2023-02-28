import React from "react";
import './style.css';

export default function Inventory(props){
    const {goHome} = props;
    return(
        <div>
        <h1>INVENTORY PAGE</h1>
        <button onClick={goHome}>Back</button>
    </div>
    )
};