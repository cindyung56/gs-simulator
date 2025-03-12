import React, { useState, useEffect } from "react";
import "./style.css";

export default function Results(props) {
  const { goHome, pull } = props;

  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);

  // pull one result with normal rates
  const pullOne = () => {
    const r = Math.floor(Math.random() * 100);
    return convertToCardResult(r);
  };

  // pull 10 result, guaranteed 1 SR
  const pullTen = () => {
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
  };

  function convertToCardResult(result) {
    if (result < 4) return "SRR";
    else if (result < 20) return "SR";
    else return "R";
  }

  useEffect(() => {
    const pulls = pull === 1 ? [pullOne()] : pullTen();

    const generateCards = async (rArray) => {
      const RCards = [...Array(49).keys()].map((i) => i + 1);
      const SRCards = [...Array(50).keys()].map((i) => i + 50);
      const SSRCards = [...Array(6).keys()].map((i) => i + 99);

      const fetchCard = async (rarity) => {
        let cardNumber;
        if (rarity === "R") {
          cardNumber = RCards[Math.floor(Math.random() * RCards.length)];
        } else if (rarity === "SR") {
          cardNumber = SRCards[Math.floor(Math.random() * SRCards.length)];
        } else {
          cardNumber = SSRCards[Math.floor(Math.random() * SSRCards.length)];
        }
        const response = await fetch(`api/card/${cardNumber}`);
        return response.json();
      };

      try {
        const cards = await Promise.all(rArray.map(fetchCard));
        setCardList(cards);
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };

    generateCards(pulls);
  }, [pull]);

  if (loading) {
    return <div>"loading..."</div>;
  } else {
    return (
      <div>
        <h1>WISH PAGE</h1>
        {cardList.map((card) => (
          <div>
            <p key={card.id}>{`${card.name}: ${card.idol} (${card.rarity})`}</p>
            {/* <img src={card.unawakened} alt="card art"/> */}
          </div>
        ))}
        <button className="continue-btn" onClick={goHome}>
          →
        </button>
      </div>
    );
  }
}
