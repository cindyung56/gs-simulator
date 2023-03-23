import React from "react";
import "./style.css";

export default function Results(props) {
  const { goHome, pull } = props;

  function pullOne() {
    const r = Math.floor(Math.random() * 100);
    return r;
  }

  function pullTen() {
    const rArray = [];
    for (let i = 0; i < 10; i++) {
      const r = Math.floor(Math.random() * 100);
      rArray.push(r);
    }
    return rArray;
  }

  const pulls = pull === 1 ? pullOne() : pullTen();

  return (
    <div>
      <h1>WISH PAGE</h1>
      <p>{pulls}</p>
      <button className="continue-btn" onClick={goHome}>
        →
      </button>
    </div>
  );
}
