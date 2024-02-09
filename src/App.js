import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York"/>
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Volnistaja"
          target="_blank"
          rel="noreferrer"
        >
          Julija Bezdele
        </a>
        , open sourced on{" "}
        <a
          href="https://github.com/Volnistaja/weatherapp-react-homework"
          target="blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://master--enchanting-shortbread-06277a.netlify.app/">
          Netlify
        </a>{" "}
      </p>
    </div>
  );
}

export default App;
