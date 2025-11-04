import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer /> 
      </div>
    </>
  );
}

function Header() {
  return (
    <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>
      Andy's Pizza Co.
    </h1>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h2>Focaccia</h2>
      <p>Bread</p>

      <img src="pizzas/margherita.jpg" alt="Margherita" />
      <h2>Margherita</h2>
      <p>Bread, Tomato, Basil</p>

      <img src="pizzas/salamino.jpg" alt="Salamino" />
      <h2>Salamino</h2>
      <p>Bread, Tomato, Cheese, Salami</p>

      <img src="pizzas/funghi.jpg" alt="Funghi" />
      <h2>Funghi</h2>
      <p>Bread, Tomato, Cheese, Onion, Mushrooms</p>

      <img src="pizzas/spinaci.jpg" alt="Spinaci" />
      <h2>Spinaci</h2>
      <p>Bread, Tomato, Cheese, Spinach</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10; 
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? "We are currently open" : "Sorry, we are closed"}
    </footer>
  );
}

function ProfileCard(props) {
  return(
  <>
  <h1>{props.name}</h1>
  <h2>{props.age}</h2>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);