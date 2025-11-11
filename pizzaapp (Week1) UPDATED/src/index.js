import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <main>
        <Menu />
      </main>
      <Footer isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

function Header({ isOpen }) {
  return (
    <header className="header">
      <h1>Shencord Pizza and Friends.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/Realprosciutto.jpg",
    soldOut: false,
  },
];


  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <p>Delicious handcrafted pizzas, made fresh daily.</p>

      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <li key={pizza.name} className="pizza">
            <img src={pizza.photoName} alt={pizza.name} />
            <div className="pizza-content">
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span className="price">${pizza.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're currently open until {closeHour}:00.</p>
      <button className="btn">Order</button>
    </div>
  );
}


function Footer({ isOpen, openHour, closeHour }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00.</p>
      )}
    </footer>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
