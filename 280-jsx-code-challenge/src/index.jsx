//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <div>
        <h1>list item</h1>
        <ul>
            <li>cake</li>
            <li>patties</li>
            <li>burger</li>
        </ul>
    </div>,
    document.getElementById("root"),
)