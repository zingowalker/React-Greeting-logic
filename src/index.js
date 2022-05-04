//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let greet;

const customStyle = {
  color: ""
};

if (time < 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (time >= 12 && time <= 18) {
  greet = "Good Afternoon";
  customStyle.color = "green";
} else if (time >= 18 && time <= 24) {
  greet = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);
