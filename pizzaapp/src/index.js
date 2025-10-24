import React from "react";
import ReactDOM from "react-dom/client";
//  ghmgg
function App() {
  return (
  <>
    <Header></Header>
    <Pizza></Pizza>
  </>
  );
}

function Header(){
    return <h2>Andy's Pizza Co.</h2>;
};


function Pizza() {
    return (
        <div>
            <img src = "pizzas\focaccia.jpg" />
            <h2>Focaccia</h2>
            <p>Bread</p>
            <img src = "pizzas\salamino.jpg" />
            <h2>Salamino</h2>
            <p>Tomato, Mozarella, Salami</p>
        </div>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
