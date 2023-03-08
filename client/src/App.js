// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import Details from "./components/Details";
import Inventory from "./components/Inventory";
import Wish from "./components/Wish";

function App() {
  const bannerList = [
    {
      id: 1,
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%84%E6%83%B3%E3%81%84%E3%82%92%E9%81%8B%E3%82%93%E3%81%A7%20Teddy%20bear%EF%BC%86Letter%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=82626f6864527620623af2c16697c3a5&t=20230228163829",
    },
    {
      id: 2,
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF%E3%82%92%E6%B1%BA%E3%82%81%E3%82%8D%EF%BC%81Street%20Skateboard%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=d0017b06060ef57564b2c1bdb09af2ae&t=20230217160205",
    },
  ];

  const [view, setView] = useState("home");
  // const [bannerData, setBannerData] = useState(null);
  const [activeBanner, setActiveBanner] = useState(bannerList[0].id);

  // update view to go to the home page
  function goHome() {
    setView("home");
  }

  // update the app to be whatever view is chosen
  // details, inventory, wish (results)
  function updateView(v) {
    setView(v);
  }

  function changeActiveBanner(b) {
    setActiveBanner(b.id);
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
        return <Home bannerList={bannerList} activeBanner={activeBanner} updateView={updateView} changeActiveBanner={changeActiveBanner} />;
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
