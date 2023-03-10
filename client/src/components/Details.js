import React from "react";
import "./style.css";

export default function Details(props) {
  const { goHome } = props;

  return (
    <div className="details-container">
      <h1>DETAILS PAGE</h1>
      <button onClick={goHome}>Back</button>
    </div>
  );
}
