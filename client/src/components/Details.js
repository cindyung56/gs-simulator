import React, { useState, useEffect } from "react";
import "./style.css";
import DetailOption from "./DetailOption.js";

export default function Details(props) {
  const { goHome } = props;

  const optionsArray = [
    { name: "Information", key: "info" },
    { name: "Probabilities", key: "prob" },
    { name: "Wish History", key: "wish" },
    { name: "Update Log", key: "update" },
  ];

  const [activeOption, setActiveOption] = useState("info");

  function updateActiveOption(a) {
    setActiveOption(a);
  }

  // useEffect(() => {
  //   console.log(activeOption);
  // }, [activeOption]);

  return (
    <div className="details-container">
      <div className="details-options">
        {optionsArray.map((o) => (
          <div
            className={
              o.key === activeOption
                ? "active-option d-option"
                : "d-option"
            }
            onClick={() => updateActiveOption(`${o.key}`)}
          >
            {o.name}
          </div>
        ))}
      </div>
      <DetailOption activeOption={activeOption} />
      <button className="go-home-btn" onClick={goHome}>
        ←
      </button>
    </div>
  );
}
