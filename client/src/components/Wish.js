import React, {useState} from "react";
import "./style.css";

export default function Results(props) {
  const { goHome, pull } = props;

  const [cardList, setCardList] = useState([]);

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
  function generateCards(rArray) {
    const cards = [];
    
    const RCards = []; // 1- 49
    const SRCards = []; // 50 - 99
    const SSRCards = []; // 99 - 104

    for (let i = 1; i < 105; i++) {
      if (i <= 49) RCards.push(i);
      else if (i <= 99) SRCards.push(i);
      else SSRCards.push(i);
    }

    // TODO: fetch card data from database based on card number
    for (let r of rArray) {
      let cardNumber;
      if (r === "R") {
        cardNumber = RCards[Math.floor(Math.random() * RCards.length)];
      } else if (r === "SR") {
        cardNumber = SRCards[Math.floor(Math.random() * SRCards.length)];
      } else {
        cardNumber =
          SSRCards[Math.floor(Math.random() * SSRCards.length)];
      }

      const cardData = async () => {
        const response = await fetch(`api/card/${cardNumber}`);
        const data = await response.json();
        return data;
      };
      cardData().then((data) => {
        cards.push(data);
      }).catch(error => console.log(error));
      
    }
    console.log(cards)
    setCardList(cards);
  }

  // const displayCards = async(rArray) => {
  //   console.log(rArray[0]);
  //   return rArray.map((r, i) => (
  //     <div key={i} className="card">
  //       <p>{`${r.name}: ${r.idol} (${r.rarity})`}</p>
  //     </div>
  //   ));
  // }

  const pulls =
    pull === 1 ? (generateCards([pullOne()])) : (pullTen());

  return (
    <div>
      <h1>WISH PAGE</h1>
      <div>{pulls}</div>
      <button className="continue-btn" onClick={goHome}>
        →
      </button>
    </div>
  );
}
