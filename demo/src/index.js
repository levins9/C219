import React from "react";
import ReactDOM from "react-dom/client";
 
function App() {
  return (
  <>
    <h1>Hello World</h1>
    <MyComponent></MyComponent>
    <BackButton></BackButton>
  </>
  );
}

function MyComponent(){
    return <h2>Hello, this is my component</h2>;
};


function BackButton() {
    return (
        <div>
            <button>Back to home</button>
        </div>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
