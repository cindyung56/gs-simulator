import React, { useState, useEffect } from "react";
import "./style.css";

export default function Home(props) {
  const {
    bannerList,
    activeBanner,
    updateView,
    changeActiveBanner,
    counter,
    setCounter,
    setPull
  } = props;

  function updateWishView(n) {
    updateView("wish");
    setCounter(counter + n);
    n===250 ? setPull(1) : setPull(10);
  }

  function resetCounter(){
    setCounter(0);
  }

  return (
    <div className="main-interface">
      <div className="spark-reset-container">
        <button className="spark-counter">
          <span>★</span> 0
        </button>
        <button className="reset-counter" onClick={resetCounter}></button>
        <div className="currency-counter">Gems spent: {counter}</div>
      </div>

      <div className="info-buttons-container">
        <button className="details-btn" onClick={() => updateView("details")}>
          i
        </button>
        <button
          className="inventory-btn"
          onClick={() => updateView("inventory")}
        >
          <div className="small-square"></div>
          <div className="small-square"></div>
          <div className="small-square"></div>
          <div className="small-square"></div>
        </button>
      </div>

      <div className="pull-buttons-container">
        <button className="pull-btn" onClick={() => updateWishView(250)}>
          Pull 1x
          <p className="currency-cost">250 gems</p>
        </button>
        <button className="pull-btn" onClick={() => updateWishView(2500)}>
          Pull 10x
          <p className="currency-cost">2500 gems</p>
        </button>
      </div>

      <div className="banner-carousel">
        {/* map each banner in carousel */}
        {bannerList
          .slice(0)
          .reverse()
          .map((b) => (
            <div
              key={b.id}
              className={
                b.id === activeBanner.id ? "active-banner" : "inactive-banner"
              }
              style={{
                position: "relative",
                width: "100%",
                marginTop: "1vh",
              }}
              onClick={() => changeActiveBanner(b)}
            >
              <img
                src={b.bannerArt}
                alt="banner"
                style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
