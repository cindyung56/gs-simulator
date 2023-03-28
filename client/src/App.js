// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";

import Main from "./components/Main";

function App() {
  // STATES
  const [bannerL, setBannerL] = useState([]);
  const [loading, setLoading] = useState(true);

  // EFFECTS
  // hook to call banner API data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/banner");
      const newData = await response.json();
      let b = newData;
      for (let i = 0; i < b.length; i++) {
        b[i].backgroundImages = b[i].backgroundImages.split(";");
      }
      setBannerL(b);
      setLoading(false);
    };

    fetchData();
  }, []);


  
  // render
  if (loading) {
    return <div>"loading..."</div>;
  } else {
    return (
      <div className="App">
        <Main bannerList={bannerL} setBannerList={setBannerL} />
      </div>
    );
  }
}

export default App;

// Example of API call

// useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);

/* <p>{!data ? "Loading..." : data}</p> */

/*

  {
    "name": "A Product to Decorate the New Chapter of Your Life ~Stationery Collab~ Gacha",
    "bannerArt": "",
    "backgroundImages": [
      "https://project-imas.wiki/images/f/ff/Suzaku_GS_SSR3%2B.jpg",
      "https://project-imas.wiki/images/a/a5/Soichiro_GS_SSR3%2B.jpg"
    ],
    "sparkCounter": 0
  }

*/
