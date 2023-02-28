// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import Details from "./components/Details";
import Inventory from "./components/Inventory";
import Wish from "./components/Wish";

function App() {
  const [view, setView] = useState("home");
  // const [bannerData, setBannerData] = useState(null);

  // update view to go to the home page
  function goHome() {
    setView("home");
  }

  // update the app to be whatever view is chosen
  // details, inventory, wish (results)
  function updateView(v) {
    setView(v);
  }

  function updateBrowser() {
    switch (view) {
      case "details":
        return <Details goHome={goHome}/>;
      case "inventory":
        return <Inventory goHome={goHome}/>;
      case "wish":
        return <Wish goHome={goHome}/>;
      default:
        return <Home updateView={updateView}/>;
    }
  }

  return <div className="App">{updateBrowser()}</div>;
}

export default App;

// Example of API call

// useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);

/* <p>{!data ? "Loading..." : data}</p> */
