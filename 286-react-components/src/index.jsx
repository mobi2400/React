import React from "react";
import ReactDOM from "react-dom";

// function name shiuld start with capital letter

function Heading(){
  return <h1> My Favourite food</h1>
}
ReactDOM.render(
  <div>
   <Heading/> // same as <Heading></Heading>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
