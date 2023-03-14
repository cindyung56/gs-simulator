import React, {useState, useEffect} from "react";
import "./style.css";
import DetailOption from './DetailOption.js';

export default function Details(props) {
  const { goHome } = props;

  const [activeOption, setActiveOption] = useState("info");

  function updateActiveOption(a){
    setActiveOption(a);
  }

  useEffect(() => {
    console.log(activeOption);
  }, [activeOption]);

  return (
    <div className="details-container">
      {/* <h1>DETAILS PAGE</h1> */}
      <div className="details-options">
        
      <div className="d-option" onClick={() => updateActiveOption("info")}>Information</div>
      <div className="d-option" onClick={() => updateActiveOption("prob")}>Probabilities</div>
      <div className="d-option" onClick={() => updateActiveOption("wish")}>Wish History</div>
      <div className="d-option" onClick={() => updateActiveOption("update")}>Update Log</div>
      </div>
      <DetailOption activeOption={activeOption} />
      <button className="go-home-btn" onClick={goHome}>←</button>
    </div>
  );
}
