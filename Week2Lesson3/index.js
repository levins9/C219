import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// TODO: Activity 1
// Create a JSX <h2> element containing the text “Activity 1”. Save it in a variable named title.
const title = <h2>Activity 1</h2>
// TODO: Activity 2
// 1. Declare a variable named p1. Set p1 equal to a JSX <p> element containing the text "foo".
// 2. Give the <p> stored in p1 an id attribute of "large".
const p1 = <p id = "large">foo</p>
// TODO: Activity 3
// 1. Declare a new variable named myDiv. Set myDiv equal to a JSX <div> element.
// 2. Wrap the <div></div> in parentheses and use i ndentation and line breaks like in the examples. In between the <div></div> tags, nest an <h1></h1> containing the text “Hello world”.
const myDiv = (
    <div>
      <h1>Hello world</h1>
    </div>
  );
// TODO: Activity 4
// Declare a new constant named myBigDiv. Set myBigDiv equal to a JSX <div> element.
// In between the <div></div> tags, write the text “I AM A BIG DIV”.
// Give your <div> element the following attribute: className="big"
// Underneath your <div> element, call root.render() with myBigDiv as an argument.
const myBigDiv = <div className="big">I AM A BIG DIV</div>;
// TODO: Activity 5
// Declare a new variable named math.
// Set math equal to a JSX element, <h1> 4 + 5 = 4 + 5 </h1>
// Call root.render() to render the value of math in browser.
// As you probably expected, the equation was displayed as a string. Insert a pair of curly braces inside the <h1></h1> tags, so that the browser displays 4 + 5 = 9.
const math = <h1>4 + 5 = {4 + 5}</h1>;
// TODO: Activity 6
// Declare a new variable named myString.
// Set myString equal to “I love React”.
// Set the inner text of a JSX <h1></h1> equal to the value of myString.
// Render the JSX in browser.
const myString = "I love React";
const loveReact = <h1>{myString}</h1>;
// TODO: Activity 7
// Given a variable named panda. Its value is an online image address "https://img.etimg.com/thumb/msid-60988845.jpg"
// Declare a new variable named pandaImg. Set its value equal to a JSX <img /> element.
// Give the <img /> an attribute with a name of src. Set the attribute’s value equal to the variable panda.
// Use root.render() to render the pandaImg.
const panda = "https://img.etimg.com/thumb/msid-60988845.jpg";
const pandaImg = <img src={panda} alt="Cute panda" width="300" />;
// TODO: Activity 8
// Enhance the code from the previous activity, so that an alert “PANDA” should pop up when the user mouse over the panda image.
const pandaHover = (
    <img
      src={panda}
      alt="Cute panda"
      width="300"
      onMouseOver={() => alert("PANDA")}
    />
  );
  root.render(pandaHover);