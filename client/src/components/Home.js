import React, { useState, useEffect } from "react";
import "./style.css";

export default function Home(props) {

  const { bannerList, activeBanner, updateView, changeActiveBanner } = props;

  return (
    <div className="main-interface">
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
        <button className="pull-btn" onClick={() => updateView("wish")}>
          Pull 1x
          <p className="currency-cost">250</p>
        </button>
        <button className="pull-btn" onClick={() => updateView("wish")}>
          Pull 10x
          <p className="currency-cost">2500</p>
        </button>
      </div>

      <div className="banner-carousel">
        {/* map each banner in carousel */}
        {bannerList.slice(0).reverse().map((b) => (
          <div
            key={b.id}
            className={b.id === activeBanner ? "active-banner" : ""}
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
