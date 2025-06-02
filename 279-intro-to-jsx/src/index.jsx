// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<div>
    <h1>Hello world</h1>
    <p>this is a paragraph</p>
    </div>,
    document.getElementById("root"),
);

/* instead of this one in vanila JS it will be written as
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
*/