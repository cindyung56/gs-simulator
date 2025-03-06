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
        b[i].featured = b[i].featured.split(";");

        if (b[i].featured){
          for (let j = 0; j < b[i].featured.length; j++) {
            b[i].featured[j] = parseInt(b[i].featured[j]);
          }
        }
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
