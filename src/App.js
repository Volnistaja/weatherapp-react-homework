import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Volnistaja"
          target="_blank"
          rel="noreferrer"
        >
          Julija Bezdele
        </a>
      </p>
    </div>
  );
}

export default App;
