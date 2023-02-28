import React from "react";
import './style.css';

export default function Results(props){
    const {goHome} = props;
    return(
        <div>
            <h1>WISH PAGE</h1>
            <button onClick={goHome}>Back</button>
        </div>
    )
};