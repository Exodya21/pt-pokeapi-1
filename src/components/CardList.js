import logo from '../assets/logo.svg';
import '../styles/cardList.css';
import Card from "./Card"

export default function CardList() {
  return (
    <div className="App App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="">
        <h1>Pokimon</h1>
        <Card />
      </main>
    </div>
  );
}


