import React, { useState, useEffect } from "react";
// import "./App.css";

import Home from "./Home";
import Details from "./Details";
import Inventory from "./Inventory";
import Wish from "./Wish";

function Main(props) {
  // STATES
  const { bannerList, setBannerList } = props;
  const [activeBanner, setActiveBanner] = useState(
    bannerList[bannerList.length - 1]
  );
  const [view, setView] = useState("home");
  const [counter, setCounter] = useState(0);
  const [pull, setPull] = useState(1);
  const [bgIndex, setBgIndex] = useState(0);

  // EFFECT HOOKS
  // change main container background image when active banner or bgIndex has been changed
  useEffect(() => {
    changeBgImage();
  }, [activeBanner, bgIndex]);

  // display bg image of active banner after coming back to home page
  useEffect(() => {
    if (view === "home") {
      changeBgImage();
    }
  }, [view]);

  // FUNCTIONS
  // prop that updates view to go to the home page
  function goHome() {
    setView("home");
  }

  // prop that changes the returned page view
  function updateView(v) {
    setView(v);
  }

  // prop that changes which banner has been chosen by the user
  function changeActiveBanner(b) {
    setActiveBanner(b);
    setBgIndex(0);
  }

  // function to update background image
  function changeBgImage() {
    // console.log(bannerList);
    const bgUrlArray = activeBanner.backgroundImages[bgIndex];
    const mainInterface = document.querySelector(".main-interface");
    mainInterface.setAttribute(
      "style",
      `background-image: url('${bgUrlArray}')`
    );
  }

  // function that updates website based on view state
  function updateBrowser() {
    switch (view) {
      case "details":
        return <Details goHome={goHome} />;
      case "inventory":
        return <Inventory goHome={goHome} />;
      case "wish":
        return <Wish goHome={goHome} pull={pull} />;
      default:
        return (
          <Home
            bannerList={bannerList}
            activeBanner={activeBanner}
            updateView={updateView}
            changeActiveBanner={changeActiveBanner}
            counter={counter}
            bgIndex={bgIndex}
            setCounter={setCounter}
            setPull={setPull}
            setBgIndex={setBgIndex}
          />
        );
    }
  }

  // render
  return <div className="main-app">{updateBrowser()}</div>;
}

export default Main;
