import React from "react";
import './style.css';

export default function Results(props){
    const {goHome, pull, setPull} = props;

    function pullOne(){
        console.log(1);
    }

    function pullTen(){
        console.log(10);
    }

    return(
        <div>
            <h1>WISH PAGE</h1>
            {pull === 1 ? pullOne() : pullTen()}
            <button className="continue-btn" onClick={goHome}>→</button>
        </div>
    )
};