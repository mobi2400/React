import React from "react";
import ReactDOM from "react-dom";

const name = "Mobasshir";
const lname = "khan"
// js expression can be used in {} but not statement
ReactDOM.render(<div>
    <h1>Hello {name + " " + lname}</h1>
    <p>your lucky number is {Math.floor(Math.random()*10)}</p>
    </div>,
    document.getElementById("root"));


