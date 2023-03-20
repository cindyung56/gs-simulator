import React from "react";
import "./style.css";

export default function Details(props) {
  const { activeOption } = props;

  function changeContent(activeOption) {
    switch (activeOption) {
      case "prob":
        return (
          <>
            <h1>PROBABILITIES</h1>
            <p>
              Each card is randomly selected. Some cards will be on rate up, and
              will have a higher chance of being pulled.
              <br /> Each card pulled will be chosen with the following rates:
            </p>
            <ul className="prob-rates">
              <li>
                <b>SSR</b>: 4%
              </li>
              <li>
                <b>SR</b>: 16%
              </li>
              <li>
                <b>R</b>: 80%
              </li>
            </ul>
            <p>
              Each x10 roll is guaranteed at least one SR or above. If pulling
              10 cards, and all previous cards were all R rarity, the tenth card
              will be a guaranteed SR or above with the following rates:
            </p>
            <ul className="prob-rates">
              <li>
                <b>SSR</b>: 20%
              </li>
              <li>
                <b>SR</b>: 80%
              </li>
            </ul>
            <p>
              Pressing the "Pull x1" button 10 times will <b>NOT</b> guarantee
              an SR or above. All single pulls using the "Pull x1" button will
              be subject to regular rates. The Pull x10 button must be chosen
              for the guarantee.
            </p>
          </>
        );
      case "wish":
        return (
          <>
            <h1>WISH HISTORY</h1>
          </>
        );
      case "update":
        return <h1>UPDATE LOG</h1>;
      default:
        return (
          <>
            <h1>INFORMATION</h1>
            <p>
              This is a website simulation of a gacha feature in the Japanese
              mobile game The IDOLM@STER SideM: Growing Stars (also known as
              Saisuta for short). Inspired by other wish simulators on the web
              such as Genshin Impact Wish Sim, I created this website with the
              purpose of having a simulator for a series I have long been
              invested in. This was also a great opportunity for me to create a
              full-stack application using React.js and MySQL.
            </p>

            <p>
              <u>Credits:</u>
              <ul>
                <li>
                  Full SSR Art:{" "}
                  <a href="https://project-imas.wiki/THE_iDOLM@STER_SideM_GROWING_STARS">
                    project-imas wiki
                  </a>
                </li>
                <li>
                  Card Art:{" "}
                  <a href="https://gamerch.com/sidem-gs/">
                    Growing Stars Gamerch (gamerch.jp)
                  </a>
                </li>
                <li>
                  Banner Art:{" "}
                  <a href="https://wikiwiki.jp/sidem-gstars/">
                    GROWING STARS Wiki (wikiwiki.jp)
                  </a>
                </li>
                <li>
                  Card & Banner Translations:{" "}
                  <a href="https://twitter.com/SideM_Eng">SideM ENG Twitter</a>
                </li>
              </ul>
            </p>

            <p>
              <b>
                This application is in no way affliated with THE iDOLM@STER
                series or Bandai Namco.{" "}
              </b>{" "}
              This website can be used for free with no monetary transactions
              involved. It is purely for fun. If any associated parties would
              like this taken down, please email me{" "}
              <a href="mailto:cindyung56@gmail.com">here</a>.
            </p>

            <p>
              Check out the{" "}
              <a href="https://github.com/cindyung56/gs-simulator">
                GitHub repository!
              </a>
            </p>
          </>
        );
    }
  }

  return <div className="details">{changeContent(activeOption)}</div>;
}
