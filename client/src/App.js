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
      bgImages: ["https://project-imas.wiki/images/2/26/Daigo_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E6%A5%BD%E3%81%97%E3%81%84%E7%B7%A0%E3%82%81%E3%81%8F%E3%81%8F%E3%82%8A%E3%82%92%E4%B8%80%E7%B7%92%E3%81%AB%20%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%80%E3%82%A6%E3%83%B3LIVE%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=804515e06b418ea7352b1d8d0d360c2c&t=20221220163024",
    },
    {
      id: 2,
      bgImages: ["https://project-imas.wiki/images/a/a0/Hokuto_GS_SSR2.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8CGROWING%20FES%20-%E7%AA%AE%E6%9C%88%E3%81%AE%E3%82%B0%E3%83%AD%E3%83%AA%E3%82%A2%E3%82%B9%E3%83%8A%E3%82%A4%E3%83%88-%E3%80%8D/::ref/banner.png.webp?rev=6670d5978896f055f320e4b030720dc0&t=20221228202057",
    },
    {
      id: 3,
      bgImages: ["https://project-imas.wiki/images/4/4a/Makio_GS_SSR2%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E4%BB%8A%E5%B9%B4%E3%82%82%E8%89%AF%E3%81%841%E5%B9%B4%E3%81%AB%EF%BC%81%E5%BF%83%E3%82%92%E8%BE%BC%E3%82%81%E3%81%9F%E5%B9%B4%E8%B3%80%E7%8A%B6%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=943e172894cd4de5807c55750ced19f4&t=20230103013705",
    },
    {
      id: 4,
      bgImages: ["https://project-imas.wiki/images/7/7f/Kazuki_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E5%86%AC%E3%81%AE%E9%A3%9F%E5%8D%93%E3%81%AB%E3%82%AA%E3%82%B9%E3%82%B9%E3%83%A1%EF%BC%81%E3%81%BD%E3%81%8B%E3%81%BD%E3%81%8BHappy%20Milk%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=8cbf9e0757bc2242bd66ac9fa2f5cef0&t=20230111152131",
    },
    {
      id: 5,
      bgImages: ["https://project-imas.wiki/images/e/ed/Michio_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E3%81%BF%E3%82%93%E3%81%AA%E3%81%A7%E6%A5%BD%E3%81%97%E3%81%8F%E5%AD%A6%E3%81%BC%E3%81%86%EF%BC%81%E3%82%AD%E3%83%83%E3%82%BA%E3%83%90%E3%83%A9%E3%82%A8%E3%83%86%E3%82%A3%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=e1518fc08c38ae303cb49acd48b156c8&t=20230120165128",
    },
    {
      id: 6,
      bgImages: ["https://project-imas.wiki/images/e/ec/Takeru_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E7%94%98%E9%85%B8%E3%81%A3%E3%81%B1%E3%81%84%E6%83%B3%E3%81%84%E3%82%92%E5%8C%85%E3%82%93%E3%81%A7%20Chocolate%C3%97Fruits%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=173b1b8fb154003ea73da8b79ac545b2&t=20230131154956",
    },
    {
      id: 7,
      bgImages: ["https://project-imas.wiki/images/f/fa/Tsubasa_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8CChocolate%20Night%20%EF%BD%9E%E9%AD%85%E6%83%91%E3%81%AE%E3%83%90%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%B3%E3%83%8A%E3%82%A4%E3%83%88%EF%BD%9E%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=d7f0b7321f13f342f8bdce87439f2b0a&t=20230211152844",
    },
    {
      id: 8,
      bgImages: ["https://project-imas.wiki/images/e/e7/Kuro_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF%E3%82%92%E6%B1%BA%E3%82%81%E3%82%8D%EF%BC%81Street%20Skateboard%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=d0017b06060ef57564b2c1bdb09af2ae&t=20230217160205",
    },
    {
      id: 9,
      bgImages: ["https://project-imas.wiki/images/a/a5/Shu_GS_SSR3%2B.jpg"],
      bannerArt:
        "https://cdn.wikiwiki.jp/to/w/sidem-gstars/%E3%80%90%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%91%E3%80%8C%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%84%E6%83%B3%E3%81%84%E3%82%92%E9%81%8B%E3%82%93%E3%81%A7%20Teddy%20bear%EF%BC%86Letter%E3%82%AC%E3%82%B7%E3%83%A3%E3%80%8D/::ref/banner.png.webp?rev=82626f6864527620623af2c16697c3a5&t=20230228163829",
    },
  ];

  // useEffect(() => {
  //   fetch("/banners")
  //     .then((res) => res.json())
  //     .then((data) => setBannerList(data));
  // }, []);
  // const [bannerList, setBannerList] = useState(null);


  // STATES
  const [view, setView] = useState("home");
  const [activeBanner, setActiveBanner] = useState(
    bannerList[bannerList.length - 1]
  );


  // EFFECTS
  // change main container background image when active banner has been changed
  useEffect(() => {
    changeBgImage();
  }, [activeBanner])

  // display bg image of active banner after coming back to home page
  useEffect(() => {
    if(view === "home"){
      changeBgImage();
    };
  }, [view])


  // FUNCTIONS
  // prop that updates view to go to the home page
  function goHome() {
    setView("home");
    console.log(activeBanner);
  }

  // prop that changes the returned page view
  function updateView(v) {
    setView(v);
  }

  // prop that changes which banner has been chosen by the user
  function changeActiveBanner(b) {
    setActiveBanner(b);
  }

  // function to update background image
  function changeBgImage(){
    const bgUrlArray = activeBanner.bgImages[0];
    const mainInterface = document.querySelector('.main-interface');
    mainInterface.setAttribute("style", `background-image: url('${bgUrlArray}')`);
  }

  // function that updates website based on view state
  function updateBrowser() {
    switch (view) {
      case "details":
        return <Details goHome={goHome} />;
      case "inventory":
        return <Inventory goHome={goHome} />;
      case "wish":
        return <Wish goHome={goHome} />;
      default:
        return (
          <Home
            bannerList={bannerList}
            activeBanner={activeBanner}
            updateView={updateView}
            changeActiveBanner={changeActiveBanner}
          />
        );
    }
  }

  // render
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
