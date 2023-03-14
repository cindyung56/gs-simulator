import React, {useState} from "react";
import "./style.css";

export default function Details(props) {
  const { goHome } = props;

  // const [activeOption, setActiveOption] = useState("");

  return (
    <div className="details-container">
      {/* <h1>DETAILS PAGE</h1> */}
      <div className="details-options">
      <div className="d-option">Information</div>
      <div className="d-option">Probabilities</div>
      <div className="d-option">Update History</div>
      </div>
      <div className="details"></div>
      <button className="go-home-btn" onClick={goHome}>←</button>
    </div>
  );
}
