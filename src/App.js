import "./App.css";
import minkkiface from "./minkkiface.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={minkkiface} className="minkkiface" alt="minkki img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Jenni</footer>
      </div>
    </div>
  );
}
