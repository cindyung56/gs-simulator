import React, { useState, useEffect } from "react";
import "./style.css";

export default function Home(props) {
  const { updateView } = props;

  return (
    <div className="main-interface">
      <h1>HOME PAGE</h1>
      <button className="details-btn" onClick={() => updateView("details")}>Details</button>
      <button className="inventory-btn" onClick={() => updateView("inventory")}></button>
      
      <div className="pull-buttons-container">
        <button className="pull-btn" onClick={() => updateView("wish")}>
          Pull 1x
        </button>
        <button className="pull-btn" onClick={() => updateView("wish")}>
          Pull 10x
        </button>
      </div>
    </div>
  );
}
