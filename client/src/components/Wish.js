import React from "react";
import "./style.css";

export default function Results(props) {
  const { goHome, pull } = props;

  function convertToCardResult(result) {
    if (result < 4) return "SRR";
    else if (result < 20) return "SR";
    else return "R";
  }

  // pull one result with normal rates
  function pullOne() {
    const r = Math.floor(Math.random() * 100);
    return convertToCardResult(r);
  }

  // function to generate 10 random results
  // pull 9 cards first and check if there was at least 1 SR or above, change SRAbove to be true if so
  // for the 10th card, we check SRAbove; 
  // if true, pull one more card with normal rates; 
  // if false, pull from 0 to 20 to get guaranteed SR or above
  // finally, return the array
  function pullTen() {
    const rArray = [];
    let SRAbove = false;
    for (let i = 0; i < 9; i++) {
      const r = Math.floor(Math.random() * 100);
      if (r < 10) {
        SRAbove = true;
      }
      rArray.push(convertToCardResult(r));
    }
    SRAbove
      ? rArray.push(pullOne())
      : rArray.push(convertToCardResult(Math.floor(Math.random() * 20)));
    return rArray;
  }

  // function to get card pictures/data from database based on card number and rarity
  function generateCards() {}

  function displayCards(rArray) {
    return rArray.map((r, i) => (
      <div key={i} className="card">
        <p>{r}</p>
      </div>
    ));
  }

  const pulls = pull === 1 ? pullOne() : displayCards(pullTen());

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
