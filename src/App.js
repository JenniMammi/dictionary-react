import "./App.css";
import roundedlogo from "./roundedlogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={roundedlogo} className="roundedlogo" alt="dog img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/JenniMammi/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , created by Jenni
        </footer>
      </div>
    </div>
  );
}
