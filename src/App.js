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
        <footer className="App-footer">Coded by Jenni</footer>
      </div>
    </div>
  );
}
